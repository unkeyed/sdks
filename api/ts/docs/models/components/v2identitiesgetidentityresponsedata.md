# V2IdentitiesGetIdentityResponseData

## Example Usage

```typescript
import { V2IdentitiesGetIdentityResponseData } from "@unkey/api/models/components";

let value: V2IdentitiesGetIdentityResponseData = {
  externalId: "user_abc123",
  meta: {
    "name": "Alice Smith",
    "email": "alice@example.com",
    "plan": "premium",
  },
  ratelimits: [
    {
      id: "rl_1234567890abcdef",
      name: "api_requests",
      limit: 1000,
      duration: 3600000,
      autoApply: true,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         | Example                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `externalId`                                                                                                                                                                        | *string*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | The external identifier for this identity in your system. This is the ID you provided during identity creation.                                                                     | user_abc123                                                                                                                                                                         |
| `meta`                                                                                                                                                                              | Record<string, *any*>                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                  | Custom metadata associated with this identity. This can include any JSON-serializable data you stored with the identity during creation or updates.                                 | {<br/>"name": "Alice Smith",<br/>"email": "alice@example.com",<br/>"plan": "premium"<br/>}                                                                                          |
| `ratelimits`                                                                                                                                                                        | [components.RatelimitResponse](../../models/components/ratelimitresponse.md)[]                                                                                                      | :heavy_minus_sign:                                                                                                                                                                  | Rate limits associated with this identity. These limits are shared across all API keys linked to this identity, providing consistent rate limiting regardless of which key is used. |                                                                                                                                                                                     |