/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2ApisCreateApiRequestBody = {
  /**
   * Unique identifier for this API namespace within your workspace.
   *
   * @remarks
   * Use descriptive names like 'payment-service-prod' or 'user-api-dev' to clearly identify purpose and environment.
   */
  name: string;
};

/** @internal */
export const V2ApisCreateApiRequestBody$inboundSchema: z.ZodType<
  V2ApisCreateApiRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
});

/** @internal */
export type V2ApisCreateApiRequestBody$Outbound = {
  name: string;
};

/** @internal */
export const V2ApisCreateApiRequestBody$outboundSchema: z.ZodType<
  V2ApisCreateApiRequestBody$Outbound,
  z.ZodTypeDef,
  V2ApisCreateApiRequestBody
> = z.object({
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ApisCreateApiRequestBody$ {
  /** @deprecated use `V2ApisCreateApiRequestBody$inboundSchema` instead. */
  export const inboundSchema = V2ApisCreateApiRequestBody$inboundSchema;
  /** @deprecated use `V2ApisCreateApiRequestBody$outboundSchema` instead. */
  export const outboundSchema = V2ApisCreateApiRequestBody$outboundSchema;
  /** @deprecated use `V2ApisCreateApiRequestBody$Outbound` instead. */
  export type Outbound = V2ApisCreateApiRequestBody$Outbound;
}

export function v2ApisCreateApiRequestBodyToJSON(
  v2ApisCreateApiRequestBody: V2ApisCreateApiRequestBody,
): string {
  return JSON.stringify(
    V2ApisCreateApiRequestBody$outboundSchema.parse(v2ApisCreateApiRequestBody),
  );
}

export function v2ApisCreateApiRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V2ApisCreateApiRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2ApisCreateApiRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2ApisCreateApiRequestBody' from JSON`,
  );
}
