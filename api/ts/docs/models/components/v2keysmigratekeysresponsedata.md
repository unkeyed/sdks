# V2KeysMigrateKeysResponseData

## Example Usage

```typescript
import { V2KeysMigrateKeysResponseData } from "@unkey/api/models/components";

let value: V2KeysMigrateKeysResponseData = {
  migrated: [],
  failed: [
    "sha256_ghi789jkl012",
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `migrated`                                                                                       | [components.V2KeysMigrateKeysMigration](../../models/components/v2keysmigratekeysmigration.md)[] | :heavy_check_mark:                                                                               | Successfully migrated keys with their hash and generated keyId                                   |
| `failed`                                                                                         | *string*[]                                                                                       | :heavy_check_mark:                                                                               | Hashes that could not be migrated (e.g., already exist in the system)                            |