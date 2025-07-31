# IdentitiesListIdentitiesResponse

## Example Usage

```typescript
import { IdentitiesListIdentitiesResponse } from "@unkey/api/models/operations";

let value: IdentitiesListIdentitiesResponse = {
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                               | [components.V2IdentitiesListIdentitiesResponseBody](../../models/components/v2identitieslistidentitiesresponsebody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |