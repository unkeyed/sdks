# V2PermissionsGetRoleResponseBody

## Example Usage

```typescript
import { V2PermissionsGetRoleResponseBody } from "@unkey/api/models/components";

let value: V2PermissionsGetRoleResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.V2PermissionsGetRoleResponseData](../../models/components/v2permissionsgetroleresponsedata.md)                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                              | Complete role details including assigned permissions.                                                                                                                                                                                                           |