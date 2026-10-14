# RatelimitListNamespacesResponse

## Example Usage

```typescript
import { RatelimitListNamespacesResponse } from "@unkey/api/models/operations";

let value: RatelimitListNamespacesResponse = {
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [components.V2RatelimitListNamespacesResponseBody](../../models/components/v2ratelimitlistnamespacesresponsebody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |