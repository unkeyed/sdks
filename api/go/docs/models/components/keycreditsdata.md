# KeyCreditsData

Credit configuration and remaining balance for this key.


## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `Remaining`                                                                 | *int64*                                                                     | :heavy_check_mark:                                                          | Number of credits remaining (null for unlimited).                           | 1000                                                                        |
| `Refill`                                                                    | [*components.KeyCreditsRefill](../../models/components/keycreditsrefill.md) | :heavy_minus_sign:                                                          | Configuration for automatic credit refill behavior.                         |                                                                             |