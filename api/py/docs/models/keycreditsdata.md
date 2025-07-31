# KeyCreditsData

Credit configuration and remaining balance for this key.


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `remaining`                                                        | *Nullable[int]*                                                    | :heavy_check_mark:                                                 | Number of credits remaining (null for unlimited).                  | 1000                                                               |
| `refill`                                                           | [Optional[models.KeyCreditsRefill]](../models/keycreditsrefill.md) | :heavy_minus_sign:                                                 | Configuration for automatic credit refill behavior.                |                                                                    |