# LogsListApiRequestsResponse

## Example Usage

```typescript
import { LogsListApiRequestsResponse } from "@unkey/api/models/operations";

let value: LogsListApiRequestsResponse = {
  result: {
    meta: {
      requestId: "req_123",
    },
    data: [],
    pagination: {
      cursor: "eyJrZXkiOiJrZXlfMTIzNCIsInRzIjoxNjk5Mzc4ODAwfQ==",
      hasMore: true,
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.V2LogsListApiRequestsResponseBody](../../models/components/v2logslistapirequestsresponsebody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |