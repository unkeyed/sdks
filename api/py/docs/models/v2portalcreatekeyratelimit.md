# V2PortalCreateKeyRatelimit


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *str*                                                          | :heavy_check_mark:                                             | The name of a rate limit the policy defines.                   | requests                                                       |
| `limit`                                                        | *int*                                                          | :heavy_check_mark:                                             | Operations allowed per window. At most the policy's limit.     | 50                                                             |
| `duration`                                                     | *int*                                                          | :heavy_check_mark:                                             | Window length in milliseconds. At least the policy's duration. | 60000                                                          |