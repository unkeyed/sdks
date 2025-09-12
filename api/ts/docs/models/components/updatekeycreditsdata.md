# UpdateKeyCreditsData

Credit configuration and remaining balance for this key.

## Example Usage

```typescript
import { UpdateKeyCreditsData } from "@unkey/api/models/components";

let value: UpdateKeyCreditsData = {
  remaining: 1000,
  refill: {
    interval: "daily",
    amount: 1000,
    refillDay: 15,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `remaining`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | Number of credits remaining (null for unlimited). This also clears the refilling schedule. | 1000                                                                                       |
| `refill`                                                                                   | [components.UpdateKeyCreditsRefill](../../models/components/updatekeycreditsrefill.md)     | :heavy_minus_sign:                                                                         | Configuration for automatic credit refill behavior.                                        |                                                                                            |