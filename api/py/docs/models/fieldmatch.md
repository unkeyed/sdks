# FieldMatch

Matches a named request field (header or query parameter). Exactly one of
`present` or `value` must be set.


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *str*                                                                    | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `present`                                                                | *Optional[Literal[True]]*                                                | :heavy_minus_sign:                                                       | Matches when the field is present, regardless of value.                  |                                                                          |
| `value`                                                                  | [Optional[models.StringMatch]](../models/stringmatch.md)                 | :heavy_minus_sign:                                                       | String matcher. Exactly one of `exact`, `prefix` or `regex` must be set. | {<br/>"prefix": "/api/",<br/>"ignoreCase": true<br/>}                    |