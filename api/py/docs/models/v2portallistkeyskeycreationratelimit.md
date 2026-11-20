# V2PortalListKeysKeyCreationRatelimit


## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `name`                                       | *str*                                        | :heavy_check_mark:                           | The rate limit's name.                       | requests                                     |
| `limit`                                      | *int*                                        | :heavy_check_mark:                           | The most operations allowed per window.      | 100                                          |
| `duration`                                   | *int*                                        | :heavy_check_mark:                           | The shortest window length, in milliseconds. | 60000                                        |