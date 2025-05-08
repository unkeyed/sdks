# ValidationError


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `Location`                                                             | *string*                                                               | :heavy_check_mark:                                                     | Where the error occurred, e.g. 'body.items[3].tags' or 'path.thing-id' |
| `Message`                                                              | *string*                                                               | :heavy_check_mark:                                                     | Error message text                                                     |
| `Fix`                                                                  | **string*                                                              | :heavy_minus_sign:                                                     | A human-readable message describing how to fix the error.              |