# ExactFilter

Filters a field that matches only as a whole value, such as a host or a request ID.
Matching is exact and case-sensitive.


## Example Usage

```typescript
import { ExactFilter } from "@unkey/api/models/components";

let value: ExactFilter = {
  isNot: [
    "api.unkey.dev",
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `is`                                                                                                                                                                                                                                                   | *string*[]                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                     | The values of one exact filter operator. A row matches `is` when it equals any value in the list.<br/>A row matches `isNot` only when it equals none of the values.<br/>Exact matches take up to 25 values, so one call can look up a page of requests by ID.<br/> |
| `isNot`                                                                                                                                                                                                                                                | *string*[]                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                     | The values of one exact filter operator. A row matches `is` when it equals any value in the list.<br/>A row matches `isNot` only when it equals none of the values.<br/>Exact matches take up to 25 values, so one call can look up a page of requests by ID.<br/> |