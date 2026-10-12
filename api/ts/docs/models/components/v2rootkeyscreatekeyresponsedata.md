# V2RootKeysCreateKeyResponseData

## Example Usage

```typescript
import { V2RootKeysCreateKeyResponseData } from "@unkey/api/models/components";

let value: V2RootKeysCreateKeyResponseData = {
  keyId: "<id>",
  key: "<key>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `keyId`                                                 | *string*                                                | :heavy_check_mark:                                      | Identifier used to manage the root key.                 |
| `key`                                                   | *string*                                                | :heavy_check_mark:                                      | Root key secret, returned only once. Store it securely. |