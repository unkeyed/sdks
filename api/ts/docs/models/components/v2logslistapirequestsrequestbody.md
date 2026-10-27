# V2LogsListApiRequestsRequestBody

## Example Usage

```typescript
import { V2LogsListApiRequestsRequestBody } from "@unkey/api/models/components";

let value: V2LogsListApiRequestsRequestBody = {
  cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
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
    requestId: {
      isNot: [
        "api.unkey.dev",
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                                       | *number*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The maximum number of requests to return in one page.                                                                                         |                                                                                                                                               |
| `cursor`                                                                                                                                      | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The `pagination.cursor` of the previous page. Send the same `filters` with every page of one listing.<br/>Omit the cursor to get the first page.<br/> | MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g                                                                                                           |
| `filters`                                                                                                                                     | [components.V2LogsListApiRequestsFilters](../../models/components/v2logslistapirequestsfilters.md)                                            | :heavy_minus_sign:                                                                                                                            | Filters for the listing. A missing field does not filter. Different fields are combined with AND.<br/>                                        |                                                                                                                                               |