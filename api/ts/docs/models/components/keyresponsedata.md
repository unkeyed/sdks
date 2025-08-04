# KeyResponseData

## Example Usage

```typescript
import { KeyResponseData } from "@unkey/api/models/components";

let value: KeyResponseData = {
  keyId: "key_1234567890abcdef",
  start: "sk_test_abc123",
  enabled: true,
  name: "Production API Key",
  meta: {
    "key": "<value>",
    "key1": "<value>",
  },
  createdAt: 1701425400000,
  updatedAt: 1701425400000,
  expires: 1735689600000,
  permissions: [
    "documents.read",
    "documents.write",
  ],
  roles: [
    "editor",
    "viewer",
  ],
  credits: {
    remaining: 1000,
    refill: {
      interval: "daily",
      amount: 1000,
      refillDay: 15,
    },
  },
  identity: {
    id: "<id>",
    externalId: "<id>",
    ratelimits: [
      {
        id: "rl_1234567890abcdef",
        name: "api_requests",
        limit: 1000,
        duration: 3600000,
        autoApply: true,
      },
    ],
  },
  plaintext: "sk_test_abc123def456",
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `keyId`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | Unique identifier for this key.                                                | key_1234567890abcdef                                                           |
| `start`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | First few characters of the key for identification.                            | sk_test_abc123                                                                 |
| `enabled`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | Whether the key is enabled or disabled.                                        | true                                                                           |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Human-readable name for this key.                                              | Production API Key                                                             |
| `meta`                                                                         | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | Custom metadata associated with this key.                                      | <nil>                                                                          |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | Unix timestamp in milliseconds when key was created.                           | 1701425400000                                                                  |
| `updatedAt`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | Unix timestamp in milliseconds when key was last updated.                      | 1701425400000                                                                  |
| `expires`                                                                      | *number*                                                                       | :heavy_minus_sign:                                                             | Unix timestamp in milliseconds when key expires (if set).                      | 1735689600000                                                                  |
| `permissions`                                                                  | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            | [<br/>"documents.read",<br/>"documents.write"<br/>]                            |
| `roles`                                                                        | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            | [<br/>"editor",<br/>"viewer"<br/>]                                             |
| `credits`                                                                      | [components.KeyCreditsData](../../models/components/keycreditsdata.md)         | :heavy_minus_sign:                                                             | Credit configuration and remaining balance for this key.                       |                                                                                |
| `identity`                                                                     | [components.Identity](../../models/components/identity.md)                     | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `plaintext`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Decrypted key value (only when decrypt=true).                                  | sk_test_abc123def456                                                           |
| `ratelimits`                                                                   | [components.RatelimitResponse](../../models/components/ratelimitresponse.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |