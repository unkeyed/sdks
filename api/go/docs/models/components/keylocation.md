# KeyLocation

Where to look for the API key on incoming requests. Exactly one of
`bearer`, `header` or `queryParam` must be set.


## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `Bearer`                                                                              | [*components.BearerTokenLocation](../../models/components/bearertokenlocation.md)     | :heavy_minus_sign:                                                                    | Extract the key from the `Authorization Bearer` header.                               |
| `Header`                                                                              | [*components.HeaderKeyLocation](../../models/components/headerkeylocation.md)         | :heavy_minus_sign:                                                                    | Extract the key from a custom header.                                                 |
| `QueryParam`                                                                          | [*components.QueryParamKeyLocation](../../models/components/queryparamkeylocation.md) | :heavy_minus_sign:                                                                    | Extract the key from a query parameter.                                               |