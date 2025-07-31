# V2PermissionsGetPermissionRequestBody

## Example Usage

```typescript
import { V2PermissionsGetPermissionRequestBody } from "@unkey/api/models/components";

let value: V2PermissionsGetPermissionRequestBody = {
  permission: "perm_1234567890abcdef",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `permission`                                                                                                                                   | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The unique identifier of the permission to retrieve. Must be a valid permission ID that begins with 'perm_' and exists within your workspace.<br/> | perm_1234567890abcdef                                                                                                                          |