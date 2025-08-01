/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2PermissionsListPermissionsRequestBody = {
  /**
   * Pagination cursor from a previous response to fetch the next page of permissions.
   *
   * @remarks
   * Include this value when you need to retrieve additional permissions beyond the initial response.
   * Each response containing more results than the requested limit includes a cursor for subsequent pages.
   *
   * Leave empty or omit this field to start from the beginning of the permission list.
   * Cursors are temporary and may expire - always handle cases where a cursor becomes invalid.
   */
  cursor?: string | undefined;
  /**
   * Maximum number of permissions to return in a single response.
   */
  limit?: number | undefined;
};

/** @internal */
export const V2PermissionsListPermissionsRequestBody$inboundSchema: z.ZodType<
  V2PermissionsListPermissionsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  limit: z.number().int().default(100),
});

/** @internal */
export type V2PermissionsListPermissionsRequestBody$Outbound = {
  cursor?: string | undefined;
  limit: number;
};

/** @internal */
export const V2PermissionsListPermissionsRequestBody$outboundSchema: z.ZodType<
  V2PermissionsListPermissionsRequestBody$Outbound,
  z.ZodTypeDef,
  V2PermissionsListPermissionsRequestBody
> = z.object({
  cursor: z.string().optional(),
  limit: z.number().int().default(100),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2PermissionsListPermissionsRequestBody$ {
  /** @deprecated use `V2PermissionsListPermissionsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    V2PermissionsListPermissionsRequestBody$inboundSchema;
  /** @deprecated use `V2PermissionsListPermissionsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    V2PermissionsListPermissionsRequestBody$outboundSchema;
  /** @deprecated use `V2PermissionsListPermissionsRequestBody$Outbound` instead. */
  export type Outbound = V2PermissionsListPermissionsRequestBody$Outbound;
}

export function v2PermissionsListPermissionsRequestBodyToJSON(
  v2PermissionsListPermissionsRequestBody:
    V2PermissionsListPermissionsRequestBody,
): string {
  return JSON.stringify(
    V2PermissionsListPermissionsRequestBody$outboundSchema.parse(
      v2PermissionsListPermissionsRequestBody,
    ),
  );
}

export function v2PermissionsListPermissionsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  V2PermissionsListPermissionsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      V2PermissionsListPermissionsRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'V2PermissionsListPermissionsRequestBody' from JSON`,
  );
}
