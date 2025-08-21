import { Unkey } from "@unkey/api";
import { APIError } from "@unkey/api/models/errors";
import { type Duration, ms } from "./duration";
import type { Ratelimiter } from "./interface";
import type { Cache, Limit, LimitOptions, RatelimitResponse } from "./types";

export type RatelimitConfig = Limit & {
  /**
   * @default https://api.unkey.com
   */
  baseUrl?: string;

  /**
   * The unkey root key. You can create one at https://unkey.dev/app/settings/root-keys
   *
   * Make sure the root key has permissions to use ratelimiting.
   */
  rootKey: string;

  /**
   * Namespaces allow you to separate different areas of your app and have isolated limits.
   *
   * @example tRPC-routes
   */
  namespace: string;

  /**
   * Configure a timeout to prevent network issues from blocking your function for too long.
   *
   * Disable it by setting `timeout: false`
   *
   * @default
   * ```ts
   * {
   *   // 5 seconds
   *   ms: 5000,
   *   fallback: { success: false, limit: 0, remaining: 0, reset: Date.now()}
   * }
   * ```
   */
  timeout?:
    | {
        /**
         * Time in milliseconds until the response is returned
         */
        ms: number | Duration;

        /**
         * A custom response to return when the timeout is reached.
         *
         * The important bit is the `success` value, choose whether you want to let requests pass or not.
         *
         * @example With a static response
         * ```ts
         * {
         *   // 5 seconds
         *   ms: 5000
         *   fallback: () => ({ success: true, limit: 0, remaining: 0, reset: 0 })
         * }
         * ```
         * @example With a dynamic response
         * ```ts
         * {
         *  // 5 seconds
         *  ms: 5000
         *  fallback: (identifier: string) => {
         *  if (someCheck(identifier)) {
         *    return { success: false, limit: 0, remaining: 0, reset: 0 }
         *  }
         *  return { success: true, limit: 0, remaining: 0, reset: 0 }
         *  }
         * }
         * ```
         */
        fallback:
          | RatelimitResponse
          | ((
              identifier: string,
            ) => RatelimitResponse | Promise<RatelimitResponse>);
      }
    | false /**
   * Configure what happens for unforeseen errors
   *
   * @example Letting requests pass
   * ```ts
   *   onError: () => ({ success: true, limit: 0, remaining: 0, reset: 0 })
   * ```
   *
   * @example Rejecting the request
   * ```ts
   *   onError: () => ({ success: true, limit: 0, remaining: 0, reset: 0 })
   * ```
   *
   * @example Dynamic response
   * ```ts
   *   onError: (error, identifier) => {
   *     if (someCheck(error, identifier)) {
   *       return { success: false, limit: 0, remaining: 0, reset: 0 }
   *     }
   *     return { success: true, limit: 0, remaining: 0, reset: 0 }
   *   }
   * ```
   */;
  onError?: (
    err: Error,
    identifier: string,
  ) => RatelimitResponse | Promise<RatelimitResponse> /**
   * Cache abusive identifiers and block them immediately without a network request.
   *
   * ```ts
   * // in global scope
   * const cache = new Map()
   *
   * const unkey = new Ratelimit({
   *   // ...
   *   cache: cache,
   * })
   * ````
   */;
  cache?: Cache;

  /**
   *
   * By default telemetry data is enabled, and sends:
   * runtime (Node.js / Edge)
   * platform (Node.js / Vercel / AWS)
   * SDK version
   */
  disableTelemetry?: boolean;
};

export class Ratelimit implements Ratelimiter {
  private readonly config: RatelimitConfig;
  private readonly unkey: Unkey;
  private readonly cache: Cache;

  constructor(config: RatelimitConfig) {
    this.config = config;
    this.unkey = new Unkey({
      serverURL: config.baseUrl,
      rootKey: config.rootKey,
    });
    this.cache = config.cache ?? new Map();
  }

  /**
   * Limit a specific identifier, you can override a lot of things about this specific request using
   * the 2nd argument.
   *
   * @example
   * ```ts
   * const identifier = getIpAddress() // or userId or anything else
   * const res = await unkey.limit(identifier)
   *
   * if (!res.success){
   *   // reject request
   * }
   * // handle request
   * ```
   */
  public async limit(
    identifier: string,
    opts?: LimitOptions,
  ): Promise<RatelimitResponse> {
    try {
      return this._limit(
        identifier,
        opts?.limit?.limit ?? this.config.limit,
        ms(opts?.limit?.duration ?? this.config.duration),
        opts?.cost ?? 1,
      );
    } catch (e) {
      if (!this.config.onError) {
        throw e;
      }
      const err = e instanceof Error ? e : new Error(String(e));

      return await this.config.onError(err, identifier);
    }
  }

  private async _limit(
    identifier: string,
    limit: number,
    duration: number,
    cost: number,
  ): Promise<RatelimitResponse> {
    const cacheKey = `${this.config.namespace}:${identifier}:${limit}:${duration}`;
    const naughty = this.cache.get(cacheKey);
    if (naughty) {
      if (naughty.reset > Date.now()) {
        return naughty;
      } else {
        this.cache.delete(cacheKey);
      }
    }

    const timeout =
      this.config.timeout === false
        ? null
        : (this.config.timeout ?? {
            ms: 5000,
            fallback: () => ({
              success: false,
              limit: 0,
              remaining: 0,
              reset: Date.now(),
            }),
          });

    let timeoutId: any = null;
    try {
      const ps: Promise<RatelimitResponse>[] = [
        this.unkey.ratelimit
          .limit({
            namespace: this.config.namespace,
            identifier,
            limit,
            duration,
            cost,
          })
          .then(async (res) => {
            return res.data;
          })
          .catch((err) => {
            if (err instanceof APIError) {
              throw new Error(
                `Ratelimit failed: [${err.statusCode} - ${err.message}]: ${err.body}`,
              );
            }

            throw new Error(`Ratelimit failed: ${err}`);
          }),
      ];
      if (timeout) {
        ps.push(
          new Promise((resolve) => {
            timeoutId = setTimeout(async () => {
              const resolvedValue =
                typeof timeout.fallback === "function"
                  ? await timeout.fallback(identifier)
                  : timeout.fallback;
              resolve(resolvedValue);
            }, ms(timeout.ms));
          }),
        );
      }

      const res = await Promise.race(ps);
      if (!res.success) {
        this.cache.set(cacheKey, res);
      }

      return res;
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }
}
