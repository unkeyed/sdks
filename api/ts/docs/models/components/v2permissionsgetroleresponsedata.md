# V2PermissionsGetRoleResponseData

Complete role details including assigned permissions.

## Example Usage

```typescript
import { V2PermissionsGetRoleResponseData } from "@unkey/api/models/components";

let value: V2PermissionsGetRoleResponseData = {
  role: {
    id: "role_1234567890abcdef",
    name: "support.readonly",
    description:
      "Provides read-only access for customer support representatives to view user accounts and support tickets",
    permissions: [
      {
        id: "perm_1234567890abcdef",
        name: "users.read",
        slug: "users-read",
        description:
          "Allows reading user profile information and account details",
      },
    ],
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `role`                                             | [components.Role](../../models/components/role.md) | :heavy_check_mark:                                 | N/A                                                |