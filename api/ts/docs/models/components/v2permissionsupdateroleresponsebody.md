# V2PermissionsUpdateRoleResponseBody

## Example Usage

```typescript
import { V2PermissionsUpdateRoleResponseBody } from "@unkey/api/models/components";

let value: V2PermissionsUpdateRoleResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    id: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.V2PermissionsUpdateRoleResponseData](../../models/components/v2permissionsupdateroleresponsedata.md)                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |