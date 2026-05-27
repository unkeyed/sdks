# PermissionsListPermissionsResponse

## Example Usage

```typescript
import { PermissionsListPermissionsResponse } from "@unkey/api/models/operations";

let value: PermissionsListPermissionsResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                   | [components.V2PermissionsListPermissionsResponseBody](../../models/components/v2permissionslistpermissionsresponsebody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |