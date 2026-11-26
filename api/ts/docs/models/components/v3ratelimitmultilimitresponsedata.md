# V3RatelimitMultiLimitResponseData

Container for multi-limit rate limit check results

## Example Usage

```typescript
import { V3RatelimitMultiLimitResponseData } from "@unkey/api/models/components";

let value: V3RatelimitMultiLimitResponseData = {
  allowed: false,
  retryAfter: 402847,
  limits: [
    {
      namespace: "<value>",
      identifier: "<value>",
      limit: 385613,
      remaining: 575993,
      retryAfter: 613329,
      allowed: true,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `allowed`                                                                                                                                                                                                                      | *boolean*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                             | True if every check fits. Then the cost of every check was counted, except for checks with `record` set to `NEVER`. False if any check does not fit. Then only the costs of checks with `record` set to `ALWAYS` were counted. |
| `retryAfter`                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | How many milliseconds to wait until every check fits, if nothing else is counted. It is the largest `retryAfter` of the checks, and 0 when `allowed` is true.                                                                  |
| `limits`                                                                                                                                                                                                                       | [components.V3RatelimitMultiLimitCheck](../../models/components/v3ratelimitmultilimitcheck.md)[]                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                             | Array of individual rate limit check results, one for each rate limit check in the request, in the same order.                                                                                                                 |