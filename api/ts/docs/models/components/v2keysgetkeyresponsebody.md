# V2KeysGetKeyResponseBody

## Example Usage

```typescript
import { V2KeysGetKeyResponseBody } from "@unkey/api/models/components";

let value: V2KeysGetKeyResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    keyId: "key_1234567890abcdef",
    start: "sk_test_abc123",
    enabled: true,
    name: "Production API Key",
    meta: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    createdAt: 1701425400000,
    updatedAt: 1701425400000,
    expires: 1735689600000,
    externalId: "user_12345",
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.KeyResponseData](../../models/components/keyresponsedata.md)                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |