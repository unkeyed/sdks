# V2PortalCreateSessionKeyCreationRatelimit

## Example Usage

```typescript
import { V2PortalCreateSessionKeyCreationRatelimit } from "@unkey/api/models/components";

let value: V2PortalCreateSessionKeyCreationRatelimit = {
  name: "requests",
  limit: 100,
  duration: 60000,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name verifications use to check this rate limit.                           | requests                                                                       |
| `limit`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | The most operations allowed per window.                                        | 100                                                                            |
| `duration`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | The window length, in milliseconds.                                            | 60000                                                                          |
| `autoApply`                                                                    | *boolean*                                                                      | :heavy_minus_sign:                                                             | Whether the rate limit applies to every verification of the key automatically. |                                                                                |