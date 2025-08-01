/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ratelimitListOverrides } from "../../funcs/ratelimitListOverrides.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.V2RatelimitListOverridesRequestBody$inboundSchema,
};

export const tool$ratelimitListOverrides: ToolDefinition<typeof args> = {
  name: "ratelimit-list-overrides",
  description: `List ratelimit overrides

Retrieve a paginated list of all rate limit overrides in a namespace.

Use this to audit rate limiting policies, build admin dashboards, or manage override configurations.

**Important:** Results are paginated. Use the cursor parameter to retrieve additional pages when more results are available.

**Permissions:** Requires \`ratelimit.*.read_override\` or \`ratelimit.<namespace_id>.read_override\`
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await ratelimitListOverrides(
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
