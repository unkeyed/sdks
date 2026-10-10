# V2WorkspaceGetUsageBreakdowns

The totals split by environment and by app.

## Example Usage

```typescript
import { V2WorkspaceGetUsageBreakdowns } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageBreakdowns = {
  byEnvironment: [
    {
      project: {
        id: "proj_1234abcd",
        name: "Payments",
      },
      app: {
        id: "proj_1234abcd",
        name: "Payments",
      },
      environment: {
        id: "env_1234abcd",
        slug: "production",
      },
      compute: {
        cpuSeconds: 5400.5,
        memoryGiBHours: 96.2,
        storageGiBHours: 0,
        egressGiB: 1.4,
      },
    },
  ],
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
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `byEnvironment`                                                                                                                                                                                        | [components.V2WorkspaceGetUsageByEnvironmentRow](../../models/components/v2workspacegetusagebyenvironmentrow.md)[]                                                                                     | :heavy_check_mark:                                                                                                                                                                                     | One row per environment with compute usage in the period, most<br/>`compute.cpuSeconds` first, then by project id and environment id.<br/>Empty when nothing ran.<br/>                                 |
| `byApp`                                                                                                                                                                                                | [components.V2WorkspaceGetUsageByAppRow](../../models/components/v2workspacegetusagebyapprow.md)[]                                                                                                     | :heavy_check_mark:                                                                                                                                                                                     | One row per app whose gateway verified keys in the period, and one row<br/>without `app` for keys that have no app id. Most `gateway.activeKeys`<br/>first, then by app id. Empty when no keys were verified.<br/> |