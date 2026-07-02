# V2AppsUpdateAppResponseBody

## Example Usage

```typescript
import { V2AppsUpdateAppResponseBody } from "@unkey/api/models/components";

let value: V2AppsUpdateAppResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    id: "app_1234abcd",
    name: "Payments API",
    slug: "payments-api",
    projectId: "proj_1234abcd",
    defaultBranch: "main",
    currentDeploymentId: "dep_1234abcd",
    isRolledBack: false,
    deleteProtection: false,
    createdAt: 1704067200000,
    updatedAt: 1704153600000,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.App](../../models/components/app.md)                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |