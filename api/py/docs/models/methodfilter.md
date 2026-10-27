# MethodFilter

Filters by HTTP method.


## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `is_`                                              | List[[models.HTTPMethod](../models/httpmethod.md)] | :heavy_minus_sign:                                 | Keep rows with one of these methods.               |
| `is_not`                                           | List[[models.HTTPMethod](../models/httpmethod.md)] | :heavy_minus_sign:                                 | Remove rows with one of these methods.             |