import type { RecordT } from "@unkey/api/models/components";
import type { Duration } from "./duration";

/**
 * Holds denied responses. `retryAt` is the unix timestamp in milliseconds when the denial ends.
 */
export type Cache = Map<string, RatelimitResponse & { retryAt: number }>;

export type Limit = {
  /**
   * How many requests may pass in the given duration
   */
  limit: number;

  /**
   * Either a type string literal or milliseconds.
   *
   * Must be at least 10 seconds and at most 24 hours.
   */
  duration: Duration | number;
};

export type RatelimitResponse = {
  /**
   * Whether the request may pass (true) or exceeded the limit (false).
   */
  allowed: boolean;
  /**
   * The limit that applied: the configured limit, or the limit of a matching override.
   */
  limit: number;
  /**
   * The cost that still fits now. Usage decays continuously, so this grows again over time
   * without a fixed reset.
   */
  remaining: number;
  /**
   * How many milliseconds to wait until the same cost fits, if nothing else is counted.
   * 0 when the request is allowed.
   */
  retryAfter: number;

  /**
   * The override id for the request that was used to override the limit.
   */
  overrideId?: string;
};

export type LimitOptions = {
  /**
   * Expensive requests may use up more resources. Set a cost and the request counts this much
   * against the limit. If the cost does not fit in the remaining limit, the request is denied.
   *
   * A cost greater than the limit never fits.
   *
   * @example
   * ```ts
   * const res = await rl.limit("identifier", { cost: 4 })
   * ```
   *
   * @default 1
   */
  cost?: number;

  /**
   * Configure when this request counts its cost.
   *
   * - `IF_ALLOWED`: count the cost only if it fits.
   * - `ALWAYS`: count the cost even if it does not fit, such as for usage that already happened.
   *   These requests always go to Unkey and never use the local cache of denied identifiers.
   * - `NEVER`: count nothing and only report whether the cost fits.
   *
   * @default "IF_ALLOWED"
   */
  record?: RecordT;

  /**
   * Override the default limit.
   *
   * This takes precedence over the limit defined in the constructor as well as any limits defined
   * for this identifier in Unkey.
   */
  limit?: Limit;

  /**
   * Do not wait for a response from the origin. Faster but less accurate.
   */
  // async?: boolean;

  /**
   * Record arbitrary data about this request. This does not affect the limit itself but can help
   * you debug later.
   */
  // meta?: Record<string, string | number | boolean | null>;

  /**
   * Specify which resources this request would access and we'll create a papertrail for you.
   *
   * @see https://unkey.dev/app/audit
   */
  // resources?: {
  //   type: string;
  //   id: string;
  //   name?: string;
  //   meta?: Record<string, string | number | boolean | null>;
  // }[];
};
