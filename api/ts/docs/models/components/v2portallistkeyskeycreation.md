# V2PortalListKeysKeyCreation

What the end user may create through `portal.createKey`. Present only when
the session may create keys.


## Example Usage

```typescript
import { V2PortalListKeysKeyCreation } from "@unkey/api/models/components";

let value: V2PortalListKeysKeyCreation = {
  maxKeys: 5,
  liveKeyCount: 2,
  ratelimits: [],
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
      "documents.read",
    ],
    allowed: [
      "documents.write",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        | Example                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `maxKeys`                                                                                                                                                          | *number*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The most live keys the end user may hold in the keyspace.                                                                                                          | 5                                                                                                                                                                  |
| `liveKeyCount`                                                                                                                                                     | *number*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | How many live keys the end user holds in the keyspace now. Disabled keys<br/>count; expired and deleted keys do not. Creation is refused once this<br/>reaches `maxKeys`.<br/> | 2                                                                                                                                                                  |
| `ratelimits`                                                                                                                                                       | [components.V2PortalListKeysKeyCreationRatelimit](../../models/components/v2portallistkeyskeycreationratelimit.md)[]                                               | :heavy_check_mark:                                                                                                                                                 | Rate limits every created key receives. A create request may lower a<br/>limit or lengthen a duration, never the reverse.<br/>                                     |                                                                                                                                                                    |
| `maxLifetime`                                                                                                                                                      | *number*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The longest a created key may live, in milliseconds. Omitted, keys may be<br/>created without an expiry.<br/>                                                      | 2592000000                                                                                                                                                         |
| `permissions`                                                                                                                                                      | [components.V2PortalListKeysKeyCreationAllowance](../../models/components/v2portallistkeyskeycreationallowance.md)                                                 | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |                                                                                                                                                                    |
| `roles`                                                                                                                                                            | [components.V2PortalListKeysKeyCreationAllowance](../../models/components/v2portallistkeyskeycreationallowance.md)                                                 | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |                                                                                                                                                                    |