# V2RootKeysRerollKeyRequestBody

## Example Usage

```typescript
import { V2RootKeysRerollKeyRequestBody } from "@unkey/api/models/components";

let value: V2RootKeysRerollKeyRequestBody = {
  keyId: "<id>",
  expiration: 771978,
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `keyId`                                                                                                                                                                                     | *string*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                          | Root key identifier returned by rootKeys.createKey or rootKeys.listKeys.                                                                                                                    |
| `expiration`                                                                                                                                                                                | *number*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                          | Milliseconds until the original root key expires. Use 0 to revoke it immediately.<br/>Use null to keep the original key's current expiration. This value never extends<br/>an existing expiration.<br/> |