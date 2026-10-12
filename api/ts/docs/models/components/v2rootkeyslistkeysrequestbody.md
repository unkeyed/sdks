# V2RootKeysListKeysRequestBody

## Example Usage

```typescript
import { V2RootKeysListKeysRequestBody } from "@unkey/api/models/components";

let value: V2RootKeysListKeysRequestBody = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `limit`                                                          | *number*                                                         | :heavy_minus_sign:                                               | Maximum number of readable root keys per page.                   |
| `cursor`                                                         | *string*                                                         | :heavy_minus_sign:                                               | Opaque cursor from a previous response. Omit for the first page. |