# HeaderKeyLocation

Extract the key from a custom header.

## Example Usage

```typescript
import { HeaderKeyLocation } from "@unkey/api/models/components";

let value: HeaderKeyLocation = {
  name: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `stripPrefix`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | Optional prefix removed from the header value before verification. |