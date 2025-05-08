# V2RatelimitSetOverrideResponseBody

## Example Usage

```typescript
import { V2RatelimitSetOverrideResponseBody } from "@unkey/api/models/components";

let value: V2RatelimitSetOverrideResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    overrideId: "<id>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                     | [components.Meta](../../models/components/meta.md)                                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.RatelimitSetOverrideResponseData](../../models/components/ratelimitsetoverrideresponsedata.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |