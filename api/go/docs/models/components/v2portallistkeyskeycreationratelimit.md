# V2PortalListKeysKeyCreationRatelimit


## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `Name`                                       | `string`                                     | :heavy_check_mark:                           | The rate limit's name.                       | requests                                     |
| `Limit`                                      | `int64`                                      | :heavy_check_mark:                           | The most operations allowed per window.      | 100                                          |
| `Duration`                                   | `int64`                                      | :heavy_check_mark:                           | The shortest window length, in milliseconds. | 60000                                        |