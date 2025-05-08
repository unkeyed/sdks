# V2RatelimitGetOverrideResponseBody

## Example Usage

```typescript
import { V2RatelimitGetOverrideResponseBody } from "@unkey/api/models/components";

let value: V2RatelimitGetOverrideResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    namespaceId: "<id>",
    overrideId: "<id>",
    duration: 949068,
    identifier: "<value>",
    limit: 641349,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `meta`                                                                       | [components.Meta](../../models/components/meta.md)                           | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [components.RatelimitOverride](../../models/components/ratelimitoverride.md) | :heavy_check_mark:                                                           | N/A                                                                          |