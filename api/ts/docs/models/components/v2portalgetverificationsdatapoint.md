# V2PortalGetVerificationsDataPoint

## Example Usage

```typescript
import { V2PortalGetVerificationsDataPoint } from "@unkey/api/models/components";

let value: V2PortalGetVerificationsDataPoint = {
  time: 1704067200000,
  total: 4745,
  valid: 940028,
  rateLimited: 40391,
  insufficientPermissions: 960743,
  forbidden: 30916,
  disabled: 174064,
  expired: 643080,
  usageExceeded: 140994,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `time`                                                        | *number*                                                      | :heavy_check_mark:                                            | Bucket start as a unix timestamp in milliseconds.             | 1704067200000                                                 |
| `total`                                                       | *number*                                                      | :heavy_check_mark:                                            | Total verifications in this bucket, across all outcomes.      |                                                               |
| `valid`                                                       | *number*                                                      | :heavy_check_mark:                                            | Verifications with a VALID outcome.                           |                                                               |
| `rateLimited`                                                 | *number*                                                      | :heavy_check_mark:                                            | Verifications rejected because a rate limit was exceeded.     |                                                               |
| `insufficientPermissions`                                     | *number*                                                      | :heavy_check_mark:                                            | Verifications rejected for insufficient permissions.          |                                                               |
| `forbidden`                                                   | *number*                                                      | :heavy_check_mark:                                            | Verifications rejected as forbidden.                          |                                                               |
| `disabled`                                                    | *number*                                                      | :heavy_check_mark:                                            | Verifications rejected because the key was disabled.          |                                                               |
| `expired`                                                     | *number*                                                      | :heavy_check_mark:                                            | Verifications rejected because the key was expired.           |                                                               |
| `usageExceeded`                                               | *number*                                                      | :heavy_check_mark:                                            | Verifications rejected because remaining usage was exhausted. |                                                               |