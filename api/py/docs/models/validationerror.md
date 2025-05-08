# ValidationError


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `location`                                                             | *str*                                                                  | :heavy_check_mark:                                                     | Where the error occurred, e.g. 'body.items[3].tags' or 'path.thing-id' |
| `message`                                                              | *str*                                                                  | :heavy_check_mark:                                                     | Error message text                                                     |
| `fix`                                                                  | *Optional[str]*                                                        | :heavy_minus_sign:                                                     | A human-readable message describing how to fix the error.              |