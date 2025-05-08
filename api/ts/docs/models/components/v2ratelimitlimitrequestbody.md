# V2RatelimitLimitRequestBody

## Example Usage

```typescript
import { V2RatelimitLimitRequestBody } from "@unkey/api/models/components";

let value: V2RatelimitLimitRequestBody = {
  namespace: "sms.sign_up",
  duration: 305290,
  identifier: "<value>",
  limit: 99387,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `namespace`                                             | *string*                                                | :heavy_check_mark:                                      | The namespace name for the rate limit.                  | sms.sign_up                                             |
| `cost`                                                  | *number*                                                | :heavy_minus_sign:                                      | The cost of the request. Defaults to 1 if not provided. |                                                         |
| `duration`                                              | *number*                                                | :heavy_check_mark:                                      | The duration in milliseconds for the rate limit window. |                                                         |
| `identifier`                                            | *string*                                                | :heavy_check_mark:                                      | The identifier for the rate limit.                      |                                                         |
| `limit`                                                 | *number*                                                | :heavy_check_mark:                                      | The maximum number of requests allowed.                 |                                                         |