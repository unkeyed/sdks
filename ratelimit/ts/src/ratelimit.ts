import { Unkey } from "@unkey/api";
import type { RecordT } from "@unkey/api/models/components";
import { UnkeyError } from "@unkey/api/models/errors/unkeyerror";
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
   *   fallback: { allowed: false, limit: 0, remaining: 0, retryAfter: 0 }
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
         * The important bit is the `allowed` value, choose whether you want to let requests pass or not.
         *
         * @example With a static response
         * ```ts
         * {
         *   // 5 seconds
         *   ms: 5000
         *   fallback: () => ({ allowed: true, limit: 0, remaining: 0, retryAfter: 0 })
         * }
         * ```
         * @example With a dynamic response
         * ```ts
         * {
         *  // 5 seconds
         *  ms: 5000
         *  fallback: (identifier: string) => {
         *  if (someCheck(identifier)) {
         *    return { allowed: false, limit: 0, remaining: 0, retryAfter: 0 }
         *  }
         *  return { allowed: true, limit: 0, remaining: 0, retryAfter: 0 }
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
   *   onError: () => ({ allowed: true, limit: 0, remaining: 0, retryAfter: 0 })
   * ```
   *
   * @example Rejecting the request
   * ```ts
   *   onError: () => ({ allowed: false, limit: 0, remaining: 0, retryAfter: 0 })
   * ```
   *
   * @example Dynamic response
   * ```ts
   *   onError: (error, identifier) => {
   *     if (someCheck(error, identifier)) {
   *       return { allowed: false, limit: 0, remaining: 0, retryAfter: 0 }
   *     }
   *     return { allowed: true, limit: 0, remaining: 0, retryAfter: 0 }
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
   * if (!res.allowed){
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
      return await this._limit(
        identifier,
        opts?.limit?.limit ?? this.config.limit,
        ms(opts?.limit?.duration ?? this.config.duration),
        opts?.cost ?? 1,
        opts?.record,
      );
    } catch (e) {
      if (typeof this.config.onError !== "function") {
        throw e;
      }

      const err =
        e instanceof UnkeyError
          ? new Error(e.message)
          : e instanceof Error
            ? e
            : new Error(String(e));

      return await this.config.onError(err, identifier);
    }
  }

  // _limit just handles the racing and caching. It must not handle errors, those are handled by limit
  private async _limit(
    identifier: string,
    limit: number,
    duration: number,
    cost: number,
    record: RecordT | undefined,
  ): Promise<RatelimitResponse> {
    // retryAfter depends on the cost, so a denial for one cost says nothing about another.
    const cacheKey = `${this.config.namespace}:${identifier}:${limit}:${duration}:${cost}`;
    // ALWAYS must reach Unkey so that the cost is counted even while denied.
    if (record !== "ALWAYS") {
      const naughty = this.cache.get(cacheKey);
      if (naughty) {
        const now = Date.now();
        if (naughty.retryAt > now) {
          const { retryAt, ...response } = naughty;
          return { ...response, retryAfter: retryAt - now };
        }
        this.cache.delete(cacheKey);
      }
    }

    const timeout =
      this.config.timeout === false
        ? null
        : (this.config.timeout ?? {
            ms: 5000,
            fallback: () => ({
              allowed: false,
              limit: 0,
              remaining: 0,
              retryAfter: 0,
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
            record,
          })
          .then((res) => res.data),
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
      if (!res.allowed && res.retryAfter > 0) {
        // A cache can outlive this call, so it stores when the denial ends, not how long it lasts.
        this.cache.set(cacheKey, {
          ...res,
          retryAt: Date.now() + res.retryAfter,
        });
      }

      return res;
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }
}
