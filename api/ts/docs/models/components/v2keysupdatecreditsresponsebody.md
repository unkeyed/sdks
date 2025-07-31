# V2KeysUpdateCreditsResponseBody

## Example Usage

```typescript
import { V2KeysUpdateCreditsResponseBody } from "@unkey/api/models/components";

let value: V2KeysUpdateCreditsResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    remaining: 1000,
    refill: {
      interval: "daily",
      amount: 1000,
      refillDay: 15,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.KeyCreditsData](../../models/components/keycreditsdata.md)                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                              | Credit configuration and remaining balance for this key.                                                                                                                                                                                                        |