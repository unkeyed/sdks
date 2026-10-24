# V2LogsGetApiRequestMetricsFilters

Filters for the metrics. They have the same shape as the filters of `logs.listApiRequests`, without `requestId`. A missing field does not filter. Different fields are combined with AND.


## Example Usage

```typescript
import { V2LogsGetApiRequestMetricsFilters } from "@unkey/api/models/components";

let value: V2LogsGetApiRequestMetricsFilters = {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `time`                                                                                                                                                                                                                                                                | [components.TimeFilter](../../models/components/timefilter.md)                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                    | Filters by the time of the event, in Unix milliseconds. Every bound is combined with AND.<br/>Rows older than the workspace's retention are never returned or counted, whatever the bounds.<br/>                                                                      | {<br/>"gte": 1791936000000,<br/>"lt": 1792022400000<br/>}                                                                                                                                                                                                             |
| `path`                                                                                                                                                                                                                                                                | [components.TextFilter](../../models/components/textfilter.md)                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                    | Filters a text field. Every operator is exact and case-sensitive. `%` and `_` match only themselves.<br/>The positive operators (`is`, `contains`, `startsWith`, `endsWith`) are combined with OR.<br/>The negated operators (`isNot`, `notContains`) are combined with AND.<br/> | {<br/>"startsWith": [<br/>"/v2/keys."<br/>],<br/>"notContains": [<br/>"verifyKey"<br/>]<br/>}                                                                                                                                                                         |
| `method`                                                                                                                                                                                                                                                              | [components.MethodFilter](../../models/components/methodfilter.md)                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                    | Filters by HTTP method.                                                                                                                                                                                                                                               | {<br/>"is": [<br/>"POST",<br/>"PUT"<br/>]<br/>}                                                                                                                                                                                                                       |
| `status`                                                                                                                                                                                                                                                              | [components.IntFilter](../../models/components/intfilter.md)                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                    | Filters an integer field. `is` keeps rows that equal one of its values.<br/>`isNot` and every bound (`gt`, `gte`, `lt`, `lte`) are combined with AND, so `{ "is": [200], "gte": 400 }` matches no rows.<br/>                                                          | {<br/>"gte": 400,<br/>"lt": 600,<br/>"isNot": [<br/>429<br/>]<br/>}                                                                                                                                                                                                   |