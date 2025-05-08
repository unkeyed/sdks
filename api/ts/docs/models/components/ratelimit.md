# Ratelimit

## Example Usage

```typescript
import { Ratelimit } from "@unkey/api/models/components";

let value: Ratelimit = {
  name: "api",
  limit: 55520,
  duration: 628977,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name of this limit. You will need to use this again when verifying a key.  | api                                                                            |
| `limit`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | How many requests may pass within a given window before requests are rejected. |                                                                                |
| `duration`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | The duration for each ratelimit window in milliseconds.                        |                                                                                |