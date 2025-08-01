/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2PermissionsCreatePermissionResponseData = {
  /**
   * The unique identifier assigned to the newly created permission.
   *
   * @remarks
   * Use this ID to reference the permission in role assignments, key operations, and other API calls.
   * Always begins with 'perm_' followed by a unique alphanumeric sequence.
   * Store this ID if you need to manage or reference this permission in future operations.
   */
  permissionId: string;
};

/** @internal */
export const V2PermissionsCreatePermissionResponseData$inboundSchema: z.ZodType<
  V2PermissionsCreatePermissionResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  permissionId: z.string(),
});

/** @internal */
export type V2PermissionsCreatePermissionResponseData$Outbound = {
  permissionId: string;
};

/** @internal */
export const V2PermissionsCreatePermissionResponseData$outboundSchema:
  z.ZodType<
    V2PermissionsCreatePermissionResponseData$Outbound,
    z.ZodTypeDef,
    V2PermissionsCreatePermissionResponseData
  > = z.object({
    permissionId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2PermissionsCreatePermissionResponseData$ {
  /** @deprecated use `V2PermissionsCreatePermissionResponseData$inboundSchema` instead. */
  export const inboundSchema =
    V2PermissionsCreatePermissionResponseData$inboundSchema;
  /** @deprecated use `V2PermissionsCreatePermissionResponseData$outboundSchema` instead. */
  export const outboundSchema =
    V2PermissionsCreatePermissionResponseData$outboundSchema;
  /** @deprecated use `V2PermissionsCreatePermissionResponseData$Outbound` instead. */
  export type Outbound = V2PermissionsCreatePermissionResponseData$Outbound;
}

export function v2PermissionsCreatePermissionResponseDataToJSON(
  v2PermissionsCreatePermissionResponseData:
    V2PermissionsCreatePermissionResponseData,
): string {
  return JSON.stringify(
    V2PermissionsCreatePermissionResponseData$outboundSchema.parse(
      v2PermissionsCreatePermissionResponseData,
    ),
  );
}

export function v2PermissionsCreatePermissionResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<
  V2PermissionsCreatePermissionResponseData,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      V2PermissionsCreatePermissionResponseData$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'V2PermissionsCreatePermissionResponseData' from JSON`,
  );
}
