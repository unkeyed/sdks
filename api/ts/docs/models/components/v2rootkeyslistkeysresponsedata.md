# V2RootKeysListKeysResponseData

## Example Usage

```typescript
import { V2RootKeysListKeysResponseData } from "@unkey/api/models/components";

let value: V2RootKeysListKeysResponseData = {
  ipAllowlist: [
    "<value 1>",
  ],
  keyId: "<id>",
  name: null,
  start: "<value>",
  end: "<value>",
  enabled: false,
  createdAt: 555115,
  lastUsedAt: 166393,
  expires: 741523,
  permissions: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `ipAllowlist`                                                                           | *string*[]                                                                              | :heavy_check_mark:                                                                      | Allowed IPv4 or IPv6 addresses and CIDR ranges. An empty list allows any IP address.    |
| `keyId`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | Stable root key identifier.                                                             |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | User-supplied name, or null when absent.                                                |
| `start`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | Stored display fragment, including the prefix when present.                             |
| `end`                                                                                   | *string*                                                                                | :heavy_check_mark:                                                                      | Stored trailing display fragment. Empty for keys without a recorded suffix.             |
| `enabled`                                                                               | *boolean*                                                                               | :heavy_check_mark:                                                                      | Whether the key is administratively enabled. An enabled key can still be expired.       |
| `createdAt`                                                                             | *number*                                                                                | :heavy_check_mark:                                                                      | Creation time in Unix milliseconds.                                                     |
| `lastUsedAt`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | Last verification time in Unix milliseconds. Zero means the root key has not been used. |
| `expires`                                                                               | *number*                                                                                | :heavy_check_mark:                                                                      | Expiration time in Unix milliseconds, or null for no expiration.                        |
| `permissions`                                                                           | *string*[]                                                                              | :heavy_check_mark:                                                                      | All permissions assigned to the root key.                                               |