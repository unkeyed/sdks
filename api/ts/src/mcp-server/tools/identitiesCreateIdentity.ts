/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { identitiesCreateIdentity } from "../../funcs/identitiesCreateIdentity.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.V2IdentitiesCreateIdentityRequestBody$inboundSchema,
};

export const tool$identitiesCreateIdentity: ToolDefinition<typeof args> = {
  name: "identities-create-identity",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await identitiesCreateIdentity(
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
