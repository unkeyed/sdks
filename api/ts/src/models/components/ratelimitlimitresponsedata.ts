/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RatelimitLimitResponseData = {
  /**
   * The maximum number of requests allowed.
   */
  limit: number;
  /**
   * The number of requests remaining in the current window.
   */
  remaining: number;
  /**
   * The time in milliseconds when the rate limit will reset.
   */
  reset: number;
  /**
   * Whether the request passed the ratelimit. If false, the request must be blocked.
   */
  success: boolean;
  /**
   * The override that was used. May be empty
   */
  overrideId?: string | undefined;
};

/** @internal */
export const RatelimitLimitResponseData$inboundSchema: z.ZodType<
  RatelimitLimitResponseData,
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
export type RatelimitLimitResponseData$Outbound = {
  limit: number;
  remaining: number;
  reset: number;
  success: boolean;
  overrideId?: string | undefined;
};

/** @internal */
export const RatelimitLimitResponseData$outboundSchema: z.ZodType<
  RatelimitLimitResponseData$Outbound,
  z.ZodTypeDef,
  RatelimitLimitResponseData
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
export namespace RatelimitLimitResponseData$ {
  /** @deprecated use `RatelimitLimitResponseData$inboundSchema` instead. */
  export const inboundSchema = RatelimitLimitResponseData$inboundSchema;
  /** @deprecated use `RatelimitLimitResponseData$outboundSchema` instead. */
  export const outboundSchema = RatelimitLimitResponseData$outboundSchema;
  /** @deprecated use `RatelimitLimitResponseData$Outbound` instead. */
  export type Outbound = RatelimitLimitResponseData$Outbound;
}

export function ratelimitLimitResponseDataToJSON(
  ratelimitLimitResponseData: RatelimitLimitResponseData,
): string {
  return JSON.stringify(
    RatelimitLimitResponseData$outboundSchema.parse(ratelimitLimitResponseData),
  );
}

export function ratelimitLimitResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<RatelimitLimitResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RatelimitLimitResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RatelimitLimitResponseData' from JSON`,
  );
}
