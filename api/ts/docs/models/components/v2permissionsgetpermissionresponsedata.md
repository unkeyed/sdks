# V2PermissionsGetPermissionResponseData

Complete permission details including ID, name, and metadata.

## Example Usage

```typescript
import { V2PermissionsGetPermissionResponseData } from "@unkey/api/models/components";

let value: V2PermissionsGetPermissionResponseData = {
  permission: {
    id: "perm_1234567890abcdef",
    name: "users.read",
    slug: "users-read",
    description: "Allows reading user profile information and account details",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `permission`                                                   | [components.Permission](../../models/components/permission.md) | :heavy_check_mark:                                             | N/A                                                            |