# V2RatelimitMultiLimitResponseBody

## Example Usage

```typescript
import { V2RatelimitMultiLimitResponseBody } from "@unkey/api/models/components";

let value: V2RatelimitMultiLimitResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    passed: true,
    limits: [],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.V2RatelimitMultiLimitResponseData](../../models/components/v2ratelimitmultilimitresponsedata.md)                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                              | Container for multi-limit rate limit check results                                                                                                                                                                                                              |