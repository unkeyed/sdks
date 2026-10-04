# V2RootKeysDeleteKeyRequestBody

## Example Usage

```typescript
import { V2RootKeysDeleteKeyRequestBody } from "@unkey/api/models/components";

let value: V2RootKeysDeleteKeyRequestBody = {
  keyId: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `keyId`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | Root key identifier returned by rootKeys.createKey or rootKeys.listKeys. |