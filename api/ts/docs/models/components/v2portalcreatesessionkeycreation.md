# V2PortalCreateSessionKeyCreation

What the end user may create through the portal. Required with the
`keys:create` scope and rejected without it. The policy is fixed for the
session's lifetime.

Created keys never carry credits, so do not grant `keys:create` if you bill
on credits.

Created keys are recoverable when the keyspace stores encrypted keys, and
not recoverable otherwise. This differs from `keys.createKey`, where
recoverability is opt-in per key.


## Example Usage

```typescript
import { V2PortalCreateSessionKeyCreation } from "@unkey/api/models/components";

let value: V2PortalCreateSessionKeyCreation = {
  maxKeys: 5,
  ratelimits: [
    {
      name: "requests",
      limit: 100,
      duration: 60000,
    },
  ],
  maxLifetime: 2592000000,
  permissions: {
    required: [
      "documents.read",
    ],
    allowed: [
      "documents.write",
    ],
  },
  roles: {
    required: [
      "reader",
    ],
    allowed: [
      "editor",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         | Example                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxKeys`                                                                                                                                                                           | *number*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | The most live keys the end user may hold in the keyspace. Keys you issue<br/>to the end user outside the portal count toward it. Disabled keys count;<br/>expired and deleted keys do not.<br/> | 5                                                                                                                                                                                   |
| `ratelimits`                                                                                                                                                                        | [components.V2PortalCreateSessionKeyCreationRatelimit](../../models/components/v2portalcreatesessionkeycreationratelimit.md)[]                                                      | :heavy_minus_sign:                                                                                                                                                                  | Rate limits every created key receives. Names must be unique within the<br/>policy. The end user may lower a limit or lengthen a duration when<br/>creating a key, never the reverse.<br/> |                                                                                                                                                                                     |
| `maxLifetime`                                                                                                                                                                       | *number*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                  | The longest a created key may live, in milliseconds. At least one hour<br/>and at most ten years. When omitted, the end user may create keys that<br/>never expire.<br/>            | 2592000000                                                                                                                                                                          |
| `permissions`                                                                                                                                                                       | [components.V2PortalCreateSessionKeyCreationPermissions](../../models/components/v2portalcreatesessionkeycreationpermissions.md)                                                    | :heavy_minus_sign:                                                                                                                                                                  | Permissions created keys must or may carry. Every slug must already exist in<br/>the portal's project.<br/>                                                                         |                                                                                                                                                                                     |
| `roles`                                                                                                                                                                             | [components.V2PortalCreateSessionKeyCreationRoles](../../models/components/v2portalcreatesessionkeycreationroles.md)                                                                | :heavy_minus_sign:                                                                                                                                                                  | Roles created keys must or may carry. Every role must already exist in the<br/>portal's project.<br/>                                                                               |                                                                                                                                                                                     |