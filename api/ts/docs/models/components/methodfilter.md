# MethodFilter

Filters by HTTP method.

## Example Usage

```typescript
import { MethodFilter } from "@unkey/api/models/components";

let value: MethodFilter = {
  is: [
    "POST",
    "PUT",
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `is`                                                             | [components.HttpMethod](../../models/components/httpmethod.md)[] | :heavy_minus_sign:                                               | Keep rows with one of these methods.                             |
| `isNot`                                                          | [components.HttpMethod](../../models/components/httpmethod.md)[] | :heavy_minus_sign:                                               | Remove rows with one of these methods.                           |