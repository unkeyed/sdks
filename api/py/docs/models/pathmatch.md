# PathMatch

Matches on the request path.


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `path`                                                                   | [models.StringMatch](../models/stringmatch.md)                           | :heavy_check_mark:                                                       | String matcher. Exactly one of `exact`, `prefix` or `regex` must be set. | {<br/>"prefix": "/api/",<br/>"ignoreCase": true<br/>}                    |