import * as _unkey_api_lib_sdks_js from '@unkey/api/lib/sdks.js';
import * as _unkey_api_models_components from '@unkey/api/models/components';

type Unit = "ms" | "s" | "m" | "h" | "d";
type Duration = `${number} ${Unit}` | `${number}${Unit}`;

type Limit = {
    /**
     * How many requests may pass in the given duration
     */
    limit: number;
    /**
     * Either a type string literal or milliseconds
     */
    duration: Duration | number;
};
type RatelimitResponse = {
    /**
     * Whether the request may pass(true) or exceeded the limit(false)
     */
    success: boolean;
    /**
     * Maximum number of requests allowed within a window.
     */
    limit: number;
    /**
     * How many requests the user has left within the current window.
     */
    remaining: number;
    /**
     * Unix timestamp in milliseconds when the limits are reset.
     */
    reset: number;
    /**
     * The override id for the request that was used to override the limit.
     */
    overrideId?: string;
};
type LimitOptions = {
    /**
     * Expensive requests may use up more resources. You can specify a cost to the request and
     * we'll deduct this many tokens in the current window. If there are not enough tokens left,
     * the request is denied.
     *
     * @example
     *
     * 1. You have a limit of 10 requests per second you already used 4 of them in the current
     * window.
     *
     * 2. Now a new request comes in with a higher cost:
     * ```ts
     * const res = await rl.limit("identifier", { cost: 4 })
     * ```
     *
     * 3. The request passes and the current limit is now at `8`
     *
     * 4. The same request happens again, but would not be rejected, because it would exceed the
     * limit in the current window: `8 + 4 > 10`
     *
     *
     * @default 1
     */
    cost?: number;
    /**
     * Override the default limit.
     *
     * This takes precedence over the limit defined in the constructor as well as any limits defined
     * for this identifier in Unkey.
     */
    limit?: Limit;
};

interface Ratelimiter {
    limit: (identifier: string, opts?: LimitOptions) => Promise<RatelimitResponse>;
}

declare class NoopRatelimit implements Ratelimiter {
    limit(_identifier: string, _opts?: LimitOptions): Promise<RatelimitResponse>;
}

type RatelimitConfig = Limit & {
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
    timeout?: {
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
        fallback: RatelimitResponse | ((identifier: string) => RatelimitResponse | Promise<RatelimitResponse>);
    } | false;
    /**
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
     */
    onError?: (err: Error, identifier: string) => RatelimitResponse | Promise<RatelimitResponse>;
    /**
     * Do not wait for a response from the origin. Faster but less accurate.
     */
    async?: boolean;
    /**
     *
     * By default telemetry data is enabled, and sends:
     * runtime (Node.js / Edge)
     * platform (Node.js / Vercel / AWS)
     * SDK version
     */
    disableTelemetry?: boolean;
};
declare class Ratelimit implements Ratelimiter {
    private readonly config;
    private readonly unkey;
    constructor(config: RatelimitConfig);
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
    limit(identifier: string, opts?: LimitOptions): Promise<RatelimitResponse>;
    private _limit;
}

type OverrideConfig = {
    /**
     * @default https://api.unkey.com
     */
    baseUrl?: string;
    /**
     * The unkey root key. You can create one at https://app.unkey.com/settings/root-keys
     *
     * Make sure the root key has permissions to use overrides.
     */
    rootKey: string;
};
declare class Overrides {
    private readonly unkey;
    constructor(config: OverrideConfig);
    get getOverride(): (request: _unkey_api_models_components.V2RatelimitGetOverrideRequestBody, options?: _unkey_api_lib_sdks_js.RequestOptions) => Promise<_unkey_api_models_components.V2RatelimitGetOverrideResponseBody>;
    get setOverride(): (request: _unkey_api_models_components.V2RatelimitSetOverrideRequestBody, options?: _unkey_api_lib_sdks_js.RequestOptions) => Promise<_unkey_api_models_components.V2RatelimitSetOverrideResponseBody>;
    get deleteOverride(): (request: _unkey_api_models_components.V2RatelimitDeleteOverrideRequestBody, options?: _unkey_api_lib_sdks_js.RequestOptions) => Promise<_unkey_api_models_components.V2RatelimitDeleteOverrideResponseBody>;
    get listOverrides(): (request: _unkey_api_models_components.V2RatelimitListOverridesRequestBody, options?: _unkey_api_lib_sdks_js.RequestOptions) => Promise<_unkey_api_models_components.V2RatelimitListOverridesResponseBody>;
}

export { type Duration, type Limit, type LimitOptions, NoopRatelimit, type OverrideConfig, Overrides, Ratelimit, type RatelimitConfig, type RatelimitResponse, type Ratelimiter };
