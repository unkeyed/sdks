# V2PortalCreateKeyRatelimit

## Example Usage

```typescript
import { V2PortalCreateKeyRatelimit } from "@unkey/api/models/components";

let value: V2PortalCreateKeyRatelimit = {
  name: "requests",
  limit: 50,
  duration: 60000,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The name of a rate limit the policy defines.                   | requests                                                       |
| `limit`                                                        | *number*                                                       | :heavy_check_mark:                                             | Operations allowed per window. At most the policy's limit.     | 50                                                             |
| `duration`                                                     | *number*                                                       | :heavy_check_mark:                                             | Window length in milliseconds. At least the policy's duration. | 60000                                                          |