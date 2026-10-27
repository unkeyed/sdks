# PortalListSessionsResponse

## Example Usage

```typescript
import { PortalListSessionsResponse } from "@unkey/api/models/operations";

let value: PortalListSessionsResponse = {
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.V2PortalListSessionsResponseBody](../../models/components/v2portallistsessionsresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |