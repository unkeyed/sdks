# V3RatelimitMultiLimitResponseBody

## Example Usage

```typescript
import { V3RatelimitMultiLimitResponseBody } from "@unkey/api/models/components";

let value: V3RatelimitMultiLimitResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    allowed: true,
    retryAfter: 278149,
    limits: [
      {
        namespace: "<value>",
        identifier: "<value>",
        limit: 385613,
        remaining: 575993,
        retryAfter: 613329,
        allowed: true,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.V3RatelimitMultiLimitResponseData](../../models/components/v3ratelimitmultilimitresponsedata.md)                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                              | Container for multi-limit rate limit check results                                                                                                                                                                                                              |