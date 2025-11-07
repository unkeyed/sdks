# V2AnalyticsGetVerificationsResponseBody

## Example Usage

```typescript
import { V2AnalyticsGetVerificationsResponseBody } from "@unkey/api/models/components";

let value: V2AnalyticsGetVerificationsResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: [
    {
      "outcome": "VALID",
      "count": 1234,
      "time": 1696118400000,
    },
    {
      "outcome": "RATE_LIMITED",
      "count": 56,
      "time": 1696118400000,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |                                                                                                                                                                                                                                                                 |
| `data`                                                                                                                                                                                                                                                          | Record<string, *any*>[]                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                              | Array of verification rows returned by the query. Fields vary based on the SQL SELECT clause.                                                                                                                                                                   | [<br/>{<br/>"outcome": "VALID",<br/>"count": 1234,<br/>"time": 1696118400000<br/>},<br/>{<br/>"outcome": "RATE_LIMITED",<br/>"count": 56,<br/>"time": 1696118400000<br/>}<br/>]                                                                                 |