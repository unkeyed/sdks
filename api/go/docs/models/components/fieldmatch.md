# FieldMatch

Matches a named request field (header or query parameter). Exactly one of
`present` or `value` must be set.


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `Name`                                                                   | `string`                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `Present`                                                                | `*bool`                                                                  | :heavy_minus_sign:                                                       | Matches when the field is present, regardless of value.                  |                                                                          |
| `Value`                                                                  | [*components.StringMatch](../../models/components/stringmatch.md)        | :heavy_minus_sign:                                                       | String matcher. Exactly one of `exact`, `prefix` or `regex` must be set. | {<br/>"prefix": "/api/",<br/>"ignoreCase": true<br/>}                    |