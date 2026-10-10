# RootKeysListKeysResponse

## Example Usage

```typescript
import { RootKeysListKeysResponse } from "@unkey/api/models/operations";

let value: RootKeysListKeysResponse = {
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [components.V2RootKeysListKeysResponseBody](../../models/components/v2rootkeyslistkeysresponsebody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |