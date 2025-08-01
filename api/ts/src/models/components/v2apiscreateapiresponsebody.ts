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
  V2ApisCreateApiResponseData,
  V2ApisCreateApiResponseData$inboundSchema,
  V2ApisCreateApiResponseData$Outbound,
  V2ApisCreateApiResponseData$outboundSchema,
} from "./v2apiscreateapiresponsedata.js";

export type V2ApisCreateApiResponseBody = {
  /**
   * Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team.
   */
  meta: Meta;
  data: V2ApisCreateApiResponseData;
};

/** @internal */
export const V2ApisCreateApiResponseBody$inboundSchema: z.ZodType<
  V2ApisCreateApiResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  meta: Meta$inboundSchema,
  data: V2ApisCreateApiResponseData$inboundSchema,
});

/** @internal */
export type V2ApisCreateApiResponseBody$Outbound = {
  meta: Meta$Outbound;
  data: V2ApisCreateApiResponseData$Outbound;
};

/** @internal */
export const V2ApisCreateApiResponseBody$outboundSchema: z.ZodType<
  V2ApisCreateApiResponseBody$Outbound,
  z.ZodTypeDef,
  V2ApisCreateApiResponseBody
> = z.object({
  meta: Meta$outboundSchema,
  data: V2ApisCreateApiResponseData$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ApisCreateApiResponseBody$ {
  /** @deprecated use `V2ApisCreateApiResponseBody$inboundSchema` instead. */
  export const inboundSchema = V2ApisCreateApiResponseBody$inboundSchema;
  /** @deprecated use `V2ApisCreateApiResponseBody$outboundSchema` instead. */
  export const outboundSchema = V2ApisCreateApiResponseBody$outboundSchema;
  /** @deprecated use `V2ApisCreateApiResponseBody$Outbound` instead. */
  export type Outbound = V2ApisCreateApiResponseBody$Outbound;
}

export function v2ApisCreateApiResponseBodyToJSON(
  v2ApisCreateApiResponseBody: V2ApisCreateApiResponseBody,
): string {
  return JSON.stringify(
    V2ApisCreateApiResponseBody$outboundSchema.parse(
      v2ApisCreateApiResponseBody,
    ),
  );
}

export function v2ApisCreateApiResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V2ApisCreateApiResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2ApisCreateApiResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2ApisCreateApiResponseBody' from JSON`,
  );
}
