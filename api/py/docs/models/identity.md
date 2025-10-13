# Identity


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *str*                                                            | :heavy_check_mark:                                               | Identity ID                                                      |
| `external_id`                                                    | *str*                                                            | :heavy_check_mark:                                               | External identity ID                                             |
| `meta`                                                           | Dict[str, *Any*]                                                 | :heavy_minus_sign:                                               | Identity metadata                                                |
| `ratelimits`                                                     | List[[models.RatelimitResponse](../models/ratelimitresponse.md)] | :heavy_minus_sign:                                               | Identity ratelimits                                              |