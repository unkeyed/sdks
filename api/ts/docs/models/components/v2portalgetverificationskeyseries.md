# V2PortalGetVerificationsKeySeries

## Example Usage

```typescript
import { V2PortalGetVerificationsKeySeries } from "@unkey/api/models/components";

let value: V2PortalGetVerificationsKeySeries = {
  keyId: "key_1234abcd",
  data: [
    {
      time: 1704067200000,
      total: 351986,
      valid: 147966,
      rateLimited: 496549,
      insufficientPermissions: 129163,
      forbidden: 238414,
      disabled: 315531,
      expired: 299725,
      usageExceeded: 687417,
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `keyId`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The key these buckets belong to.                                                                               | key_1234abcd                                                                                                   |
| `data`                                                                                                         | [components.V2PortalGetVerificationsDataPoint](../../models/components/v2portalgetverificationsdatapoint.md)[] | :heavy_check_mark:                                                                                             | Verification timeseries for this key, zero-filled across the requested<br/>window and ordered by time ascending.<br/> |                                                                                                                |