/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { identitiesDeleteIdentity } from "../../funcs/identitiesDeleteIdentity.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.V2IdentitiesDeleteIdentityRequestBodyUnion$inboundSchema,
};

export const tool$identitiesDeleteIdentity: ToolDefinition<typeof args> = {
  name: "identities-delete-identity",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await identitiesDeleteIdentity(
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
