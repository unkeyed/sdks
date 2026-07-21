# RatelimitPolicy

Rate limits matching requests.

## Example Usage

```typescript
import { RatelimitPolicy } from "@unkey/api/models/components";

let value: RatelimitPolicy = {
  limit: 100,
  windowMs: 60000,
  identifier: {
    remoteIp: {},
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `limit`                                                                                                                                          | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Maximum number of requests per window.                                                                                                           |                                                                                                                                                  |
| `windowMs`                                                                                                                                       | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Window duration in milliseconds.                                                                                                                 |                                                                                                                                                  |
| `identifier`                                                                                                                                     | [components.RatelimitIdentifier](../../models/components/ratelimitidentifier.md)                                                                 | :heavy_check_mark:                                                                                                                               | How requests are grouped for rate limiting. Exactly one of `remoteIp`,<br/>`header`, `authenticatedSubject`, `path` or `principalField` must be set. | {<br/>"remoteIp": {}<br/>}                                                                                                                       |