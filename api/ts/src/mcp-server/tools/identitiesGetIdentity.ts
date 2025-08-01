/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { identitiesGetIdentity } from "../../funcs/identitiesGetIdentity.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.V2IdentitiesGetIdentityRequestBody$inboundSchema,
};

export const tool$identitiesGetIdentity: ToolDefinition<typeof args> = {
  name: "identities-get-identity",
  description: `Get Identity

Retrieve an identity by external ID. Returns metadata, rate limits, and other associated data.

Use this to check if an identity exists, view configurations, or build management dashboards.

> **Important**  
> Requires \`identity.*.read_identity\` permission
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await identitiesGetIdentity(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
