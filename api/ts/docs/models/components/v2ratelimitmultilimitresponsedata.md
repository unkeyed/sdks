# V2RatelimitMultiLimitResponseData

Container for multi-limit rate limit check results

## Example Usage

```typescript
import { V2RatelimitMultiLimitResponseData } from "@unkey/api/models/components";

let value: V2RatelimitMultiLimitResponseData = {
  passed: false,
  limits: [
    {
      namespace: "<value>",
      identifier: "<value>",
      limit: 71714,
      remaining: 543273,
      reset: 749724,
      passed: false,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `passed`                                                                                                                                                                                                                                         | *boolean*                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                               | Overall success indicator for all rate limit checks. This is true if ALL individual rate limit checks passed (all have success: true), and false if ANY check failed.<br/><br/>Use this as a quick indicator to determine if the request should proceed. |
| `limits`                                                                                                                                                                                                                                         | [components.V2RatelimitMultiLimitCheck](../../models/components/v2ratelimitmultilimitcheck.md)[]                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                               | Array of individual rate limit check results, one for each rate limit check in the request                                                                                                                                                       |