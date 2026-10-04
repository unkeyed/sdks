# V2RootKeysRerollKeyResponseData

## Example Usage

```typescript
import { V2RootKeysRerollKeyResponseData } from "@unkey/api/models/components";

let value: V2RootKeysRerollKeyResponseData = {
  keyId: "<id>",
  key: "<key>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `keyId`                                                     | *string*                                                    | :heavy_check_mark:                                          | Identifier of the new root key.                             |
| `key`                                                       | *string*                                                    | :heavy_check_mark:                                          | New root key secret, returned only once. Store it securely. |