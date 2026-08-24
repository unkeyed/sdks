# V2PermissionsSetRolePermissionsRequestBody

## Example Usage

```typescript
import { V2PermissionsSetRolePermissionsRequestBody } from "@unkey/api/models/components";

let value: V2PermissionsSetRolePermissionsRequestBody = {
  roleId: "proj_1234abcd",
  permissions: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         | Example                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `roleId`                                                                                                                                                            | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                    | proj_1234abcd                                                                                                                                                       |
| `permissions`                                                                                                                                                       | *string*[]                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                  | The complete set of permission slugs to assign directly to the role. Missing permissions are created when authorized. An empty array clears all direct permissions. |                                                                                                                                                                     |