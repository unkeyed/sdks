/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Meta,
  Meta$inboundSchema,
  Meta$Outbound,
  Meta$outboundSchema,
} from "./meta.js";
import {
  V2RatelimitSetOverrideResponseData,
  V2RatelimitSetOverrideResponseData$inboundSchema,
  V2RatelimitSetOverrideResponseData$Outbound,
  V2RatelimitSetOverrideResponseData$outboundSchema,
} from "./v2ratelimitsetoverrideresponsedata.js";

export type V2RatelimitSetOverrideResponseBody = {
  /**
   * Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team.
   */
  meta: Meta;
  data: V2RatelimitSetOverrideResponseData;
};

/** @internal */
export const V2RatelimitSetOverrideResponseBody$inboundSchema: z.ZodType<
  V2RatelimitSetOverrideResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  meta: Meta$inboundSchema,
  data: V2RatelimitSetOverrideResponseData$inboundSchema,
});

/** @internal */
export type V2RatelimitSetOverrideResponseBody$Outbound = {
  meta: Meta$Outbound;
  data: V2RatelimitSetOverrideResponseData$Outbound;
};

/** @internal */
export const V2RatelimitSetOverrideResponseBody$outboundSchema: z.ZodType<
  V2RatelimitSetOverrideResponseBody$Outbound,
  z.ZodTypeDef,
  V2RatelimitSetOverrideResponseBody
> = z.object({
  meta: Meta$outboundSchema,
  data: V2RatelimitSetOverrideResponseData$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2RatelimitSetOverrideResponseBody$ {
  /** @deprecated use `V2RatelimitSetOverrideResponseBody$inboundSchema` instead. */
  export const inboundSchema = V2RatelimitSetOverrideResponseBody$inboundSchema;
  /** @deprecated use `V2RatelimitSetOverrideResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    V2RatelimitSetOverrideResponseBody$outboundSchema;
  /** @deprecated use `V2RatelimitSetOverrideResponseBody$Outbound` instead. */
  export type Outbound = V2RatelimitSetOverrideResponseBody$Outbound;
}

export function v2RatelimitSetOverrideResponseBodyToJSON(
  v2RatelimitSetOverrideResponseBody: V2RatelimitSetOverrideResponseBody,
): string {
  return JSON.stringify(
    V2RatelimitSetOverrideResponseBody$outboundSchema.parse(
      v2RatelimitSetOverrideResponseBody,
    ),
  );
}

export function v2RatelimitSetOverrideResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V2RatelimitSetOverrideResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V2RatelimitSetOverrideResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2RatelimitSetOverrideResponseBody' from JSON`,
  );
}
