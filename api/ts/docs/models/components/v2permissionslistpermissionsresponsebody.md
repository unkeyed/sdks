# V2PermissionsListPermissionsResponseBody

## Example Usage

```typescript
import { V2PermissionsListPermissionsResponseBody } from "@unkey/api/models/components";

let value: V2PermissionsListPermissionsResponseBody = {
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
  pagination: {
    cursor: "eyJrZXkiOiJrZXlfMTIzNCIsInRzIjoxNjk5Mzc4ODAwfQ==",
    hasMore: true,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.Permission](../../models/components/permission.md)[]                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                              | Array of permission objects with complete configuration details.                                                                                                                                                                                                |
| `pagination`                                                                                                                                                                                                                                                    | [components.Pagination](../../models/components/pagination.md)                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                              | Pagination metadata for list endpoints. Provides information necessary to traverse through large result sets efficiently using cursor-based pagination.                                                                                                         |