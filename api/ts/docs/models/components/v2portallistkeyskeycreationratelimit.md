# V2PortalListKeysKeyCreationRatelimit

## Example Usage

```typescript
import { V2PortalListKeysKeyCreationRatelimit } from "@unkey/api/models/components";

let value: V2PortalListKeysKeyCreationRatelimit = {
  name: "requests",
  limit: 100,
  duration: 60000,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `name`                                       | *string*                                     | :heavy_check_mark:                           | The rate limit's name.                       | requests                                     |
| `limit`                                      | *number*                                     | :heavy_check_mark:                           | The most operations allowed per window.      | 100                                          |
| `duration`                                   | *number*                                     | :heavy_check_mark:                           | The shortest window length, in milliseconds. | 60000                                        |