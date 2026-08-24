# V2PermissionsSetRolePermissionsResponseBody

## Example Usage

```typescript
import { V2PermissionsSetRolePermissionsResponseBody } from "@unkey/api/models/components";

let value: V2PermissionsSetRolePermissionsResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: [
    {
      id: "perm_1234567890abcdef",
      name: "users.read",
      slug: "users-read",
      description:
        "Allows reading user profile information and account details",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.Permission](../../models/components/permission.md)[]                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                              | Complete list of permissions now directly assigned to the role.                                                                                                                                                                                                 |