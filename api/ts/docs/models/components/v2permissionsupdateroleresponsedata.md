# V2PermissionsUpdateRoleResponseData

## Example Usage

```typescript
import { V2PermissionsUpdateRoleResponseData } from "@unkey/api/models/components";

let value: V2PermissionsUpdateRoleResponseData = {
  id: "role_1234567890abcdef",
  name: "support.readonly",
  description: "Read-only access for customer support",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | The ID of the updated role.                                                             | role_1234567890abcdef                                                                   |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | The name of the role after the update.                                                  | support.readonly                                                                        |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | The description of the role after the update. Omitted when the role has no description. | Read-only access for customer support                                                   |