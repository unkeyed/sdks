/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2RatelimitLimitResponseData = {
  /**
   * The maximum number of operations allowed within the time window. This reflects either the default limit specified in the request or an override limit if one exists for this identifier.
   *
   * @remarks
   *
   * This value helps clients understand their total quota for the current window.
   */
  limit: number;
  /**
   * The number of operations remaining in the current window before the rate limit is exceeded. Applications should use this value to:
   *
   * @remarks
   *
   * - Implement client-side throttling before hitting limits
   * - Display usage information to end users
   * - Trigger alerts when approaching limits
   * - Adjust request patterns based on available capacity
   *
   * When this reaches zero, requests will be rejected until the window resets.
   */
  remaining: number;
  /**
   * The Unix timestamp in milliseconds when the rate limit window will reset and 'remaining' will return to 'limit'.
   *
   * @remarks
   *
   * This timestamp enables clients to:
   * - Calculate and display wait times to users
   * - Implement intelligent retry mechanisms
   * - Schedule requests to resume after the reset
   * - Implement exponential backoff when needed
   *
   * The reset time is based on a sliding window from the first request in the current window.
   */
  reset: number;
  /**
   * Whether the request passed the rate limit check. If true, the request is allowed to proceed. If false, the request has exceeded the rate limit and should be blocked or rejected.
   *
   * @remarks
   *
   * You MUST check this field to determine if the request should proceed, as the endpoint always returns `HTTP 200` even when rate limited.
   */
  success: boolean;
  /**
   * If a rate limit override was applied for this identifier, this field contains the ID of the override that was used. Empty when no override is in effect.
   *
   * @remarks
   *
   * This can be useful for:
   * - Debugging which override rule was matched
   * - Tracking the effects of specific overrides
   * - Understanding why limits differ from default values
   */
  overrideId?: string | undefined;
};

/** @internal */
export const V2RatelimitLimitResponseData$inboundSchema: z.ZodType<
  V2RatelimitLimitResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int(),
  remaining: z.number().int(),
  reset: z.number().int(),
  success: z.boolean(),
  overrideId: z.string().optional(),
});

/** @internal */
export type V2RatelimitLimitResponseData$Outbound = {
  limit: number;
  remaining: number;
  reset: number;
  success: boolean;
  overrideId?: string | undefined;
};

/** @internal */
export const V2RatelimitLimitResponseData$outboundSchema: z.ZodType<
  V2RatelimitLimitResponseData$Outbound,
  z.ZodTypeDef,
  V2RatelimitLimitResponseData
> = z.object({
  limit: z.number().int(),
  remaining: z.number().int(),
  reset: z.number().int(),
  success: z.boolean(),
  overrideId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2RatelimitLimitResponseData$ {
  /** @deprecated use `V2RatelimitLimitResponseData$inboundSchema` instead. */
  export const inboundSchema = V2RatelimitLimitResponseData$inboundSchema;
  /** @deprecated use `V2RatelimitLimitResponseData$outboundSchema` instead. */
  export const outboundSchema = V2RatelimitLimitResponseData$outboundSchema;
  /** @deprecated use `V2RatelimitLimitResponseData$Outbound` instead. */
  export type Outbound = V2RatelimitLimitResponseData$Outbound;
}

export function v2RatelimitLimitResponseDataToJSON(
  v2RatelimitLimitResponseData: V2RatelimitLimitResponseData,
): string {
  return JSON.stringify(
    V2RatelimitLimitResponseData$outboundSchema.parse(
      v2RatelimitLimitResponseData,
    ),
  );
}

export function v2RatelimitLimitResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<V2RatelimitLimitResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2RatelimitLimitResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2RatelimitLimitResponseData' from JSON`,
  );
}
