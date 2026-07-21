# AppsListAppsResponse

## Example Usage

```typescript
import { AppsListAppsResponse } from "@unkey/api/models/operations";

let value: AppsListAppsResponse = {
  result: {
    meta: {
      requestId: "req_123",
    },
    data: [
      {
        id: "app_1234abcd",
        name: "Payments API",
        slug: "payments-api",
        defaultBranch: "main",
        currentDeploymentId: "d_1234abcd",
        isRolledBack: false,
        deleteProtection: false,
        createdAt: 1704067200000,
        updatedAt: 1704153600000,
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.V2AppsListAppsResponseBody](../../models/components/v2appslistappsresponsebody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |