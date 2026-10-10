# V2WorkspaceGetLimitsResponseBody

## Example Usage

```typescript
import { V2WorkspaceGetLimitsResponseBody } from "@unkey/api/models/components";

let value: V2WorkspaceGetLimitsResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    apiBillableOperationsCountMaxPerMonth: {
      limit: 5,
      current: 1,
    },
    apiRequestsCountMaxPerMinute: {
      limit: 5,
      current: 1,
    },
    logsRetentionDaysMax: {
      limit: 5,
      current: 1,
    },
    logsAuditRetentionDaysMax: {
      limit: 5,
      current: 1,
    },
    logdrainsMax: {
      limit: 5,
      current: 1,
    },
    cpuCoresMax: {
      limit: 5,
      current: 1,
    },
    cpuCoresMaxPerInstance: {
      limit: 5,
      current: 1,
    },
    memoryMibMax: {
      limit: 5,
      current: 1,
    },
    memoryMibMaxPerInstance: {
      limit: 5,
      current: 1,
    },
    storageMibMax: {
      limit: 5,
      current: 1,
    },
    storageMibMaxPerInstance: {
      limit: 5,
      current: 1,
    },
    buildsConcurrentMax: {
      limit: 5,
      current: 1,
    },
    autoscalingReplicasMax: {
      limit: 5,
      current: 1,
    },
    customDomainsMax: {
      limit: 5,
      current: 1,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.V2WorkspaceGetLimitsResponseData](../../models/components/v2workspacegetlimitsresponsedata.md)                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                              | The workspace limits. The Compute limits are present only when the workspace<br/>has a Compute plan.<br/>                                                                                                                                                       |