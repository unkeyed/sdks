# V2RootKeysListKeysResponseData

## Example Usage

```typescript
import { V2RootKeysListKeysResponseData } from "@unkey/api/models/components";

let value: V2RootKeysListKeysResponseData = {
  keyId: "<id>",
  name: "<value>",
  start: "<value>",
  end: "<value>",
  enabled: true,
  createdAt: 666196,
  lastUsedAt: 555115,
  expires: 504549,
  permissions: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `keyId`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | Stable root key identifier.                                                             |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | User-supplied name, or null when absent.                                                |
| `start`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | Stored display fragment, including the prefix when present.                             |
| `end`                                                                                   | *string*                                                                                | :heavy_check_mark:                                                                      | Stored trailing display fragment. Empty for keys without a recorded suffix.             |
| `enabled`                                                                               | *boolean*                                                                               | :heavy_check_mark:                                                                      | Whether the key is administratively enabled. An enabled key can still be expired.       |
| `createdAt`                                                                             | *number*                                                                                | :heavy_check_mark:                                                                      | Creation time in Unix milliseconds.                                                     |
| `lastUsedAt`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | Last verification time in Unix milliseconds. Zero means the root key has not been used. |
| `expires`                                                                               | *number*                                                                                | :heavy_check_mark:                                                                      | Expiration time in Unix milliseconds, or null for no expiration.                        |
| `permissions`                                                                           | *string*[]                                                                              | :heavy_check_mark:                                                                      | All permissions assigned to the root key.                                               |