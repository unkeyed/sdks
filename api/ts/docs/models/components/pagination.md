# Pagination

## Example Usage

```typescript
import { Pagination } from "@unkey/api/models/components";

let value: Pagination = {
  cursor: "cursor_xyz123",
  hasMore: true,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `cursor`                                            | *string*                                            | :heavy_minus_sign:                                  | Opaque token for retrieving the next set of results | cursor_xyz123                                       |
| `hasMore`                                           | *boolean*                                           | :heavy_minus_sign:                                  | Indicates if more results exist beyond this page    | true                                                |