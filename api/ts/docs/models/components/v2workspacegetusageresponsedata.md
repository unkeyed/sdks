# V2WorkspaceGetUsageResponseData

## Example Usage

```typescript
import { V2WorkspaceGetUsageResponseData } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageResponseData = {
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
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `period`                                                                                                                                                                   | [components.V2WorkspaceGetUsagePeriod](../../models/components/v2workspacegetusageperiod.md)                                                                               | :heavy_check_mark:                                                                                                                                                         | The time window the usage covers.                                                                                                                                          |
| `totals`                                                                                                                                                                   | [components.V2WorkspaceGetUsageTotals](../../models/components/v2workspacegetusagetotals.md)                                                                               | :heavy_check_mark:                                                                                                                                                         | Workspace totals in the period. `compute` is the sum of<br/>`breakdowns.byEnvironment[].compute`. `gateway.activeKeys` is the sum of<br/>`breakdowns.byApp[].gateway.activeKeys`.<br/> |
| `breakdowns`                                                                                                                                                               | [components.V2WorkspaceGetUsageBreakdowns](../../models/components/v2workspacegetusagebreakdowns.md)                                                                       | :heavy_check_mark:                                                                                                                                                         | The totals split by environment and by app.                                                                                                                                |