# V2RatelimitLimitRequestBody


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `namespace`                                             | *str*                                                   | :heavy_check_mark:                                      | The namespace name for the rate limit.                  | sms.sign_up                                             |
| `cost`                                                  | *Optional[int]*                                         | :heavy_minus_sign:                                      | The cost of the request. Defaults to 1 if not provided. |                                                         |
| `duration`                                              | *int*                                                   | :heavy_check_mark:                                      | The duration in milliseconds for the rate limit window. |                                                         |
| `identifier`                                            | *str*                                                   | :heavy_check_mark:                                      | The identifier for the rate limit.                      |                                                         |
| `limit`                                                 | *int*                                                   | :heavy_check_mark:                                      | The maximum number of requests allowed.                 |                                                         |