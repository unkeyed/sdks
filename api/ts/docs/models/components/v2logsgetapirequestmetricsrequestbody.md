# V2LogsGetApiRequestMetricsRequestBody

## Example Usage

```typescript
import { V2LogsGetApiRequestMetricsRequestBody } from "@unkey/api/models/components";

let value: V2LogsGetApiRequestMetricsRequestBody = {
  filters: {
    time: {
      gte: 1791936000000,
      lt: 1792022400000,
    },
    path: {
      notContains: [
        "verifyKey",
      ],
      startsWith: [
        "/v2/keys.",
      ],
    },
    method: {
      is: [
        "POST",
        "PUT",
      ],
    },
    status: {
      isNot: [
        429,
      ],
      gte: 400,
      lt: 600,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `filters`                                                                                                                                                                                  | [components.V2LogsGetApiRequestMetricsFilters](../../models/components/v2logsgetapirequestmetricsfilters.md)                                                                               | :heavy_minus_sign:                                                                                                                                                                         | Filters for the metrics. They have the same shape as the filters of `logs.listApiRequests`, without `requestId`. A missing field does not filter. Different fields are combined with AND.<br/> |