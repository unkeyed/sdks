# V2LogsGetApiRequestMetricsResponseBody

## Example Usage

```typescript
import { V2LogsGetApiRequestMetricsResponseBody } from "@unkey/api/models/components";

let value: V2LogsGetApiRequestMetricsResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: [
    {
      time: 1792020600000,
      success: 1200,
      clientError: 31,
      serverError: 2,
      total: 1233,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.ApiRequestMetricsPoint](../../models/components/apirequestmetricspoint.md)[]                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                              | One point per bucket, oldest first, with no gaps. A bucket with no requests has a point with zero counts. The bucket width is the distance between the `time` of two points.                                                                                    |