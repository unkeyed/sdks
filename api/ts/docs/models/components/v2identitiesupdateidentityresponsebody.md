# V2IdentitiesUpdateIdentityResponseBody

## Example Usage

```typescript
import { V2IdentitiesUpdateIdentityResponseBody } from "@unkey/api/models/components";

let value: V2IdentitiesUpdateIdentityResponseBody = {
  data: {
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
  meta: {
    requestId: "req_123",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                                                          | [components.Identity](../../models/components/identity.md)                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |