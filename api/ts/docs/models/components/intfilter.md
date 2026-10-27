# IntFilter

Filters an integer field. `is` keeps rows that equal one of its values.
`isNot` and every bound (`gt`, `gte`, `lt`, `lte`) are combined with AND, so `{ "is": [200], "gte": 400 }` matches no rows.


## Example Usage

```typescript
import { IntFilter } from "@unkey/api/models/components";

let value: IntFilter = {
  isNot: [
    429,
  ],
  gte: 400,
  lt: 600,
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is`                                                                                                                                                       | *number*[]                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                         | The values of one filter operator. A row matches `is` when it equals any value in the list.<br/>A row matches `isNot` only when it equals none of the values.<br/> |
| `isNot`                                                                                                                                                    | *number*[]                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                         | The values of one filter operator. A row matches `is` when it equals any value in the list.<br/>A row matches `isNot` only when it equals none of the values.<br/> |
| `gt`                                                                                                                                                       | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | Keep rows where the field is greater than this value.                                                                                                      |
| `gte`                                                                                                                                                      | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | Keep rows where the field is greater than or equal to this value.                                                                                          |
| `lt`                                                                                                                                                       | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | Keep rows where the field is less than this value.                                                                                                         |
| `lte`                                                                                                                                                      | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | Keep rows where the field is less than or equal to this value.                                                                                             |