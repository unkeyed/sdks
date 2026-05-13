# PortalExchangeSessionResponse

## Example Usage

```typescript
import { PortalExchangeSessionResponse } from "@unkey/api/models/operations";

let value: PortalExchangeSessionResponse = {
  headers: {
    "key": [],
  },
  result: {
    meta: {
      requestId: "req_123",
    },
    data: {
      token: "ps_xyz789abc123",
      expiresAt: 1711386400000,
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                        | Record<string, *string*[]>                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `result`                                                                                                         | [components.V2PortalExchangeSessionResponseBody](../../models/components/v2portalexchangesessionresponsebody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |