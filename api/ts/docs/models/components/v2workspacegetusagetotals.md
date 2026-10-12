# V2WorkspaceGetUsageTotals

Workspace totals in the period. `compute` is the sum of
`breakdowns.byEnvironment[].compute`. `gateway.activeKeys` is the sum of
`breakdowns.byApp[].gateway.activeKeys`.


## Example Usage

```typescript
import { V2WorkspaceGetUsageTotals } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageTotals = {
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
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `api`                                                                                                                                                                        | [components.V2WorkspaceGetUsageApi](../../models/components/v2workspacegetusageapi.md)                                                                                       | :heavy_check_mark:                                                                                                                                                           | Billable operations through the Unkey API in the period. Key verifications<br/>through the Unkey gateway are not counted here. The gateway bills by active<br/>keys, see `gateway`.<br/> |
| `compute`                                                                                                                                                                    | [components.V2WorkspaceGetUsageCompute](../../models/components/v2workspacegetusagecompute.md)                                                                               | :heavy_check_mark:                                                                                                                                                           | Compute usage in the period.                                                                                                                                                 |
| `gateway`                                                                                                                                                                    | [components.V2WorkspaceGetUsageGateway](../../models/components/v2workspacegetusagegateway.md)                                                                               | :heavy_check_mark:                                                                                                                                                           | Unkey gateway usage in the period.                                                                                                                                           |