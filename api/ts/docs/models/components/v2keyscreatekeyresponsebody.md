# V2KeysCreateKeyResponseBody

## Example Usage

```typescript
import { V2KeysCreateKeyResponseBody } from "@unkey/api/models/components";

let value: V2KeysCreateKeyResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    key: "prod_2cGKbMxRjIzhCxo1IdjH3arELti7Sdyc8w6XYbvtcyuBowPT",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.V2KeysCreateKeyResponseData](../../models/components/v2keyscreatekeyresponsedata.md)                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |