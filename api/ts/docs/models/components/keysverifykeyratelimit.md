# KeysVerifyKeyRatelimit

## Example Usage

```typescript
import { KeysVerifyKeyRatelimit } from "@unkey/api/models/components";

let value: KeysVerifyKeyRatelimit = {
  name: "tokens",
  cost: 2,
  limit: 50,
  duration: 600000,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | References an existing ratelimit by its name. Key Ratelimits will take precedence over identifier-based limits. | tokens                                                                                                          |
| `cost`                                                                                                          | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Optionally override how expensive this operation is and how many tokens are deducted from the current limit.    | 2                                                                                                               |
| `limit`                                                                                                         | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Optionally override the maximum number of requests allowed within the specified interval.                       | 50                                                                                                              |
| `duration`                                                                                                      | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Optionally override the duration of the rate limit window duration.                                             | 600000                                                                                                          |