# ApiRequestMetricsPoint

The number of requests in one bucket.

## Example Usage

```typescript
import { ApiRequestMetricsPoint } from "@unkey/api/models/components";

let value: ApiRequestMetricsPoint = {
  time: 1792020600000,
  success: 1200,
  clientError: 31,
  serverError: 2,
  total: 1233,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `time`                                                                                                          | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The start of the bucket, in Unix milliseconds.                                                                  | 1792020600000                                                                                                   |
| `success`                                                                                                       | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The number of requests with a 2xx status.                                                                       | 1200                                                                                                            |
| `clientError`                                                                                                   | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The number of requests with a 4xx status.                                                                       | 31                                                                                                              |
| `serverError`                                                                                                   | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The number of requests with a 5xx status.                                                                       | 2                                                                                                               |
| `total`                                                                                                         | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The number of requests with any status. It also counts 1xx and 3xx responses, which have no field of their own. | 1233                                                                                                            |