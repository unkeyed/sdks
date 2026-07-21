# PortalListKeysResponse

## Example Usage

```typescript
import { PortalListKeysResponse } from "@unkey/api/models/operations";

let value: PortalListKeysResponse = {
  result: {
    meta: {
      requestId: "req_123",
    },
    data: [
      {
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
        lastUsedAt: 1701425400000,
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
      },
    ],
    pagination: {
      cursor: "eyJrZXkiOiJrZXlfMTIzNCIsInRzIjoxNjk5Mzc4ODAwfQ==",
      hasMore: true,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.V2PortalListKeysResponseBody](../../models/components/v2portallistkeysresponsebody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |