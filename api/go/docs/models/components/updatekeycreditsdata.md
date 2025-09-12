# UpdateKeyCreditsData

Credit configuration and remaining balance for this key.


## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `Remaining`                                                                                | **int64*                                                                                   | :heavy_minus_sign:                                                                         | Number of credits remaining (null for unlimited). This also clears the refilling schedule. | 1000                                                                                       |
| `Refill`                                                                                   | [*components.UpdateKeyCreditsRefill](../../models/components/updatekeycreditsrefill.md)    | :heavy_minus_sign:                                                                         | Configuration for automatic credit refill behavior.                                        |                                                                                            |