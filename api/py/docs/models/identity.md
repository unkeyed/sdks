# Identity


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `external_id`                                                    | *str*                                                            | :heavy_check_mark:                                               | External identity ID                                             |
| `meta`                                                           | [Optional[models.IdentityMeta]](../models/identitymeta.md)       | :heavy_minus_sign:                                               | Identity metadata                                                |
| `ratelimits`                                                     | List[[models.RatelimitResponse](../models/ratelimitresponse.md)] | :heavy_check_mark:                                               | N/A                                                              |
| `description`                                                    | *Optional[Any]*                                                  | :heavy_minus_sign:                                               | N/A                                                              |