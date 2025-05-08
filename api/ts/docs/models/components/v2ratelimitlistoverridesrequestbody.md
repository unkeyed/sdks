# V2RatelimitListOverridesRequestBody

## Example Usage

```typescript
import { V2RatelimitListOverridesRequestBody } from "@unkey/api/models/components";

let value: V2RatelimitListOverridesRequestBody = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `namespaceId`                                    | *string*                                         | :heavy_minus_sign:                               | The id of the namespace to list overrides for.   |
| `namespaceName`                                  | *string*                                         | :heavy_minus_sign:                               | The name of the namespace to list overrides for. |
| `cursor`                                         | *string*                                         | :heavy_minus_sign:                               | Pagination cursor from a previous response       |
| `limit`                                          | *number*                                         | :heavy_minus_sign:                               | Maximum number of results to return              |