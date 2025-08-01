/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2ApisCreateApiResponseData = {
  /**
   * The unique identifier assigned to the newly created API.
   *
   * @remarks
   * Use this ID for all subsequent operations including key creation, verification, and API management.
   * Always begins with 'api_' followed by a unique alphanumeric sequence.
   *
   * Store this ID securely as it's required when:
   * - Creating API keys within this namespace
   * - Verifying keys associated with this API
   * - Managing API settings and metadata
   * - Listing keys belonging to this API
   *
   * This identifier is permanent and cannot be changed after creation.
   */
  apiId: string;
};

/** @internal */
export const V2ApisCreateApiResponseData$inboundSchema: z.ZodType<
  V2ApisCreateApiResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiId: z.string(),
});

/** @internal */
export type V2ApisCreateApiResponseData$Outbound = {
  apiId: string;
};

/** @internal */
export const V2ApisCreateApiResponseData$outboundSchema: z.ZodType<
  V2ApisCreateApiResponseData$Outbound,
  z.ZodTypeDef,
  V2ApisCreateApiResponseData
> = z.object({
  apiId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ApisCreateApiResponseData$ {
  /** @deprecated use `V2ApisCreateApiResponseData$inboundSchema` instead. */
  export const inboundSchema = V2ApisCreateApiResponseData$inboundSchema;
  /** @deprecated use `V2ApisCreateApiResponseData$outboundSchema` instead. */
  export const outboundSchema = V2ApisCreateApiResponseData$outboundSchema;
  /** @deprecated use `V2ApisCreateApiResponseData$Outbound` instead. */
  export type Outbound = V2ApisCreateApiResponseData$Outbound;
}

export function v2ApisCreateApiResponseDataToJSON(
  v2ApisCreateApiResponseData: V2ApisCreateApiResponseData,
): string {
  return JSON.stringify(
    V2ApisCreateApiResponseData$outboundSchema.parse(
      v2ApisCreateApiResponseData,
    ),
  );
}

export function v2ApisCreateApiResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<V2ApisCreateApiResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2ApisCreateApiResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2ApisCreateApiResponseData' from JSON`,
  );
}
