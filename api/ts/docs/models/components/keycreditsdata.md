# KeyCreditsData

Credit configuration and remaining balance for this key.

## Example Usage

```typescript
import { KeyCreditsData } from "@unkey/api/models/components";

let value: KeyCreditsData = {
  remaining: 1000,
  refill: {
    interval: "daily",
    amount: 1000,
    refillDay: 15,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `remaining`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | Number of credits remaining (null for unlimited).                          | 1000                                                                       |
| `refill`                                                                   | [components.KeyCreditsRefill](../../models/components/keycreditsrefill.md) | :heavy_minus_sign:                                                         | Configuration for automatic credit refill behavior.                        |                                                                            |