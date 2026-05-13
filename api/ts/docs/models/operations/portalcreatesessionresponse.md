# PortalCreateSessionResponse

## Example Usage

```typescript
import { PortalCreateSessionResponse } from "@unkey/api/models/operations";

let value: PortalCreateSessionResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    meta: {
      requestId: "req_123",
    },
    data: {
      sessionId: "pst_abc123def456",
      url: "https://portal.unkey.com/?session=pst_abc123def456",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [components.V2PortalCreateSessionResponseBody](../../models/components/v2portalcreatesessionresponsebody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |