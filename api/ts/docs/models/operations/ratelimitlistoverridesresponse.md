# RatelimitListOverridesResponse

## Example Usage

```typescript
import { RatelimitListOverridesResponse } from "@unkey/api/models/operations";

let value: RatelimitListOverridesResponse = {
  result: {
    meta: {
      requestId: "req_123",
    },
    data: [],
    pagination: {
      cursor: "eyJrZXkiOiJrZXlfMTIzNCIsInRzIjoxNjk5Mzc4ODAwfQ==",
      hasMore: true,
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                           | [components.V2RatelimitListOverridesResponseBody](../../models/components/v2ratelimitlistoverridesresponsebody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |