# KeyRatelimit

A rate limit applied during key verification. `limit` and `duration`
must be set together or both omitted; a partial pair is rejected.

## Example Usage

```typescript
import { KeyRatelimit } from "@unkey/api/models/components";

let value: KeyRatelimit = {
  name: "requests",
  limit: 100,
  duration: 60000,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                            | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | Name of a rate limit configured on the key or its identity, or the name<br/>of the inline override defined by `limit` and `duration`. |
| `limit`                                                                                                                           | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | Inline override: maximum number of operations per window. Must be set<br/>together with `duration`.                               |
| `duration`                                                                                                                        | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | Inline override: window duration in milliseconds. Must be set together<br/>with `limit`.                                          |
| `cost`                                                                                                                            | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | Cost charged against the limit per request. Defaults to 1.                                                                        |