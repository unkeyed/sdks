# V2KeysVerifyKeyResponseBody

## Example Usage

```typescript
import { V2KeysVerifyKeyResponseBody } from "@unkey/api/models/components";

let value: V2KeysVerifyKeyResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    valid: true,
    code: "RATE_LIMITED",
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
    ratelimits: [
      {
        exceeded: false,
        id: "rl_1234567890abcdef",
        name: "api_requests",
        limit: 1000,
        duration: 3600000,
        reset: 3600000,
        remaining: 999,
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
| `data`                                                                                                                                                                                                                                                          | [components.V2KeysVerifyKeyResponseData](../../models/components/v2keysverifykeyresponsedata.md)                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |