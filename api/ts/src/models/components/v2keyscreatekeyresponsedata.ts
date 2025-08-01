/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2KeysCreateKeyResponseData = {
  /**
   * The unique identifier for this key in Unkey's system. This is NOT the actual API key, but a reference ID used for management operations like updating or deleting the key. Store this ID in your database to reference the key later. This ID is not sensitive and can be logged or displayed in dashboards.
   */
  keyId: string;
  /**
   * The full generated API key that should be securely provided to your user.
   *
   * @remarks
   * SECURITY WARNING: This is the only time you'll receive the complete key - Unkey only stores a securely hashed version. Never log or store this value in your own systems; provide it directly to your end user via secure channels. After this API call completes, this value cannot be retrieved again (unless created with `recoverable=true`).
   */
  key: string;
};

/** @internal */
export const V2KeysCreateKeyResponseData$inboundSchema: z.ZodType<
  V2KeysCreateKeyResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  keyId: z.string(),
  key: z.string(),
});

/** @internal */
export type V2KeysCreateKeyResponseData$Outbound = {
  keyId: string;
  key: string;
};

/** @internal */
export const V2KeysCreateKeyResponseData$outboundSchema: z.ZodType<
  V2KeysCreateKeyResponseData$Outbound,
  z.ZodTypeDef,
  V2KeysCreateKeyResponseData
> = z.object({
  keyId: z.string(),
  key: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2KeysCreateKeyResponseData$ {
  /** @deprecated use `V2KeysCreateKeyResponseData$inboundSchema` instead. */
  export const inboundSchema = V2KeysCreateKeyResponseData$inboundSchema;
  /** @deprecated use `V2KeysCreateKeyResponseData$outboundSchema` instead. */
  export const outboundSchema = V2KeysCreateKeyResponseData$outboundSchema;
  /** @deprecated use `V2KeysCreateKeyResponseData$Outbound` instead. */
  export type Outbound = V2KeysCreateKeyResponseData$Outbound;
}

export function v2KeysCreateKeyResponseDataToJSON(
  v2KeysCreateKeyResponseData: V2KeysCreateKeyResponseData,
): string {
  return JSON.stringify(
    V2KeysCreateKeyResponseData$outboundSchema.parse(
      v2KeysCreateKeyResponseData,
    ),
  );
}

export function v2KeysCreateKeyResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<V2KeysCreateKeyResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2KeysCreateKeyResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2KeysCreateKeyResponseData' from JSON`,
  );
}
