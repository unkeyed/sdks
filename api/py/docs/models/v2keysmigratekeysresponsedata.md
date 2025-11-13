# V2KeysMigrateKeysResponseData


## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `migrated`                                                                         | List[[models.V2KeysMigrateKeysMigration](../models/v2keysmigratekeysmigration.md)] | :heavy_check_mark:                                                                 | Successfully migrated keys with their hash and generated keyId                     |
| `failed`                                                                           | List[*str*]                                                                        | :heavy_check_mark:                                                                 | Hashes that could not be migrated (e.g., already exist in the system)              |