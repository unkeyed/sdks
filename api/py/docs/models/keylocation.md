# KeyLocation

Where to look for the API key on incoming requests. Exactly one of
`bearer`, `header` or `queryParam` must be set.


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `bearer`                                                                     | [Optional[models.BearerTokenLocation]](../models/bearertokenlocation.md)     | :heavy_minus_sign:                                                           | Extract the key from the `Authorization Bearer` header.                      |
| `header`                                                                     | [Optional[models.HeaderKeyLocation]](../models/headerkeylocation.md)         | :heavy_minus_sign:                                                           | Extract the key from a custom header.                                        |
| `query_param`                                                                | [Optional[models.QueryParamKeyLocation]](../models/queryparamkeylocation.md) | :heavy_minus_sign:                                                           | Extract the key from a query parameter.                                      |