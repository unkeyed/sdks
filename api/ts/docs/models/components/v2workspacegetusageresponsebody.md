# V2WorkspaceGetUsageResponseBody

## Example Usage

```typescript
import { V2WorkspaceGetUsageResponseBody } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    period: {
      start: 1790812800000,
      end: 1790946000000,
    },
    totals: {
      api: {
        verifications: 40000,
        ratelimits: 2000,
      },
      compute: {
        cpuSeconds: 5400.5,
        memoryGiBHours: 96.2,
        storageGiBHours: 0,
        egressGiB: 1.4,
      },
      gateway: {
        activeKeys: 12,
      },
    },
    breakdowns: {
      byEnvironment: [],
      byApp: [
        {
          project: {
            id: "proj_1234abcd",
            name: "Payments",
          },
          app: {
            id: "proj_1234abcd",
            name: "Payments",
          },
          gateway: {
            activeKeys: 12,
          },
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
| `data`                                                                                                                                                                                                                                                          | [components.V2WorkspaceGetUsageResponseData](../../models/components/v2workspacegetusageresponsedata.md)                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |