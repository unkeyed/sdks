# PortalExchangeCodeResponse

## Example Usage

```typescript
import { PortalExchangeCodeResponse } from "@unkey/api/models/operations";

let value: PortalExchangeCodeResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    meta: {
      requestId: "req_123",
    },
    data: {
      accessToken: "pat_xyz789abc123",
      expiresAt: 1711386400000,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `result`                                                                                                   | [components.V2PortalExchangeCodeResponseBody](../../models/components/v2portalexchangecoderesponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |