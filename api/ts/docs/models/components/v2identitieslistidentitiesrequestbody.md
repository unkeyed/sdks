# V2IdentitiesListIdentitiesRequestBody

## Example Usage

```typescript
import { V2IdentitiesListIdentitiesRequestBody } from "@unkey/api/models/components";

let value: V2IdentitiesListIdentitiesRequestBody = {
  limit: 50,
  cursor: "cursor_eyJrZXkiOiJrZXlfMTIzNCJ9",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `limit`                                                                                                                              | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The maximum number of identities to return in a single request. Use this to control response size and loading performance.           | 50                                                                                                                                   |
| `cursor`                                                                                                                             | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Pagination cursor from a previous response. Use this to fetch subsequent pages of results when the response contains a cursor value. | cursor_eyJrZXkiOiJrZXlfMTIzNCJ9                                                                                                      |