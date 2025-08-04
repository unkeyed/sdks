# V2IdentitiesGetIdentityResponseBody

## Example Usage

```typescript
import { V2IdentitiesGetIdentityResponseBody } from "@unkey/api/models/components";

let value: V2IdentitiesGetIdentityResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.Identity](../../models/components/identity.md)                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |