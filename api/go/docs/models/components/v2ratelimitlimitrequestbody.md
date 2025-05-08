# V2RatelimitLimitRequestBody


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `Namespace`                                             | *string*                                                | :heavy_check_mark:                                      | The namespace name for the rate limit.                  | sms.sign_up                                             |
| `Cost`                                                  | **int64*                                                | :heavy_minus_sign:                                      | The cost of the request. Defaults to 1 if not provided. |                                                         |
| `Duration`                                              | *int64*                                                 | :heavy_check_mark:                                      | The duration in milliseconds for the rate limit window. |                                                         |
| `Identifier`                                            | *string*                                                | :heavy_check_mark:                                      | The identifier for the rate limit.                      |                                                         |
| `Limit`                                                 | *int64*                                                 | :heavy_check_mark:                                      | The maximum number of requests allowed.                 |                                                         |