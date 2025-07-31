# RatelimitResponse

## Example Usage

```typescript
import { RatelimitResponse } from "@unkey/api/models/components";

let value: RatelimitResponse = {
  id: "rl_1234567890abcdef",
  name: "api_requests",
  limit: 1000,
  duration: 3600000,
  autoApply: true,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | Unique identifier for this rate limit configuration.                      | rl_1234567890abcdef                                                       |
| `name`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Human-readable name for this rate limit.                                  | api_requests                                                              |
| `limit`                                                                   | *number*                                                                  | :heavy_check_mark:                                                        | Maximum requests allowed within the time window.                          | 1000                                                                      |
| `duration`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | Rate limit window duration in milliseconds.                               | 3600000                                                                   |
| `autoApply`                                                               | *boolean*                                                                 | :heavy_check_mark:                                                        | Whether this rate limit was automatically applied when verifying the key. | true                                                                      |