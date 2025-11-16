# V2KeysMigrateKeysRequestBody

## Example Usage

```typescript
import { V2KeysMigrateKeysRequestBody } from "@unkey/api/models/components";

let value: V2KeysMigrateKeysRequestBody = {
  migrationId: "your_company",
  apiId: "api_123456789",
  keys: [],
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `migrationId`                                                                                                                             | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Identifier of the configured migration provider/strategy to use (e.g., "your_company"). You will receive this from Unkey's support staff. | your_company                                                                                                                              |
| `apiId`                                                                                                                                   | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The ID of the API that the keys should be inserted into                                                                                   | api_123456789                                                                                                                             |
| `keys`                                                                                                                                    | [components.V2KeysMigrateKeyData](../../models/components/v2keysmigratekeydata.md)[]                                                      | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |                                                                                                                                           |