/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  RatelimitRequest,
  RatelimitRequest$inboundSchema,
  RatelimitRequest$Outbound,
  RatelimitRequest$outboundSchema,
} from "./ratelimitrequest.js";

export type V2IdentitiesCreateIdentityRequestBody = {
  /**
   * Creates an identity using your system's unique identifier for a user, organization, or entity.
   *
   * @remarks
   * Must be stable and unique across your workspace - duplicate externalIds return CONFLICT errors.
   * This identifier links Unkey identities to your authentication system, database records, or tenant structure.
   *
   * Avoid changing externalIds after creation as this breaks the link between your systems.
   * Use consistent identifier patterns across your application for easier management and debugging.
   * Accepts letters, numbers, underscores, dots, and hyphens for flexible identifier formats.
   * Essential for implementing proper multi-tenant isolation and user-specific rate limiting.
   */
  externalId: string;
  /**
   * Stores arbitrary JSON metadata returned during key verification for contextual information.
   *
   * @remarks
   * Eliminates additional database lookups during verification, improving performance for stateless services.
   * Avoid storing sensitive data here as it's returned in verification responses.
   *
   * Large metadata objects increase verification latency and should stay under 10KB total size.
   * Use this for subscription details, feature flags, user preferences, and organization information.
   * Metadata is returned as-is whenever keys associated with this identity are verified.
   */
  meta?: { [k: string]: any } | undefined;
  /**
   * Defines shared rate limits that apply to all keys belonging to this identity.
   *
   * @remarks
   * Prevents abuse by users with multiple keys by enforcing consistent limits across their entire key portfolio.
   * Essential for implementing fair usage policies and tiered access levels in multi-tenant applications.
   *
   * Rate limit counters are shared across all keys with this identity, regardless of how many keys the user creates.
   * During verification, specify which named limits to check for enforcement.
   * Identity rate limits supplement any key-specific rate limits that may also be configured.
   * - Each named limit can have different thresholds and windows
   *
   * When verifying keys, you can specify which limits you want to use and all keys attached to this identity will share the limits, regardless of which specific key is used.
   */
  ratelimits?: Array<RatelimitRequest> | undefined;
};

/** @internal */
export const V2IdentitiesCreateIdentityRequestBody$inboundSchema: z.ZodType<
  V2IdentitiesCreateIdentityRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  externalId: z.string(),
  meta: z.record(z.any()).optional(),
  ratelimits: z.array(RatelimitRequest$inboundSchema).optional(),
});

/** @internal */
export type V2IdentitiesCreateIdentityRequestBody$Outbound = {
  externalId: string;
  meta?: { [k: string]: any } | undefined;
  ratelimits?: Array<RatelimitRequest$Outbound> | undefined;
};

/** @internal */
export const V2IdentitiesCreateIdentityRequestBody$outboundSchema: z.ZodType<
  V2IdentitiesCreateIdentityRequestBody$Outbound,
  z.ZodTypeDef,
  V2IdentitiesCreateIdentityRequestBody
> = z.object({
  externalId: z.string(),
  meta: z.record(z.any()).optional(),
  ratelimits: z.array(RatelimitRequest$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2IdentitiesCreateIdentityRequestBody$ {
  /** @deprecated use `V2IdentitiesCreateIdentityRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    V2IdentitiesCreateIdentityRequestBody$inboundSchema;
  /** @deprecated use `V2IdentitiesCreateIdentityRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    V2IdentitiesCreateIdentityRequestBody$outboundSchema;
  /** @deprecated use `V2IdentitiesCreateIdentityRequestBody$Outbound` instead. */
  export type Outbound = V2IdentitiesCreateIdentityRequestBody$Outbound;
}

export function v2IdentitiesCreateIdentityRequestBodyToJSON(
  v2IdentitiesCreateIdentityRequestBody: V2IdentitiesCreateIdentityRequestBody,
): string {
  return JSON.stringify(
    V2IdentitiesCreateIdentityRequestBody$outboundSchema.parse(
      v2IdentitiesCreateIdentityRequestBody,
    ),
  );
}

export function v2IdentitiesCreateIdentityRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V2IdentitiesCreateIdentityRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V2IdentitiesCreateIdentityRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2IdentitiesCreateIdentityRequestBody' from JSON`,
  );
}
