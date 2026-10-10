# V2WorkspaceGetUsageByEnvironmentRow

Compute one environment used in the period.

## Example Usage

```typescript
import { V2WorkspaceGetUsageByEnvironmentRow } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageByEnvironmentRow = {
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
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                                   | [components.V2WorkspaceGetUsageResource](../../models/components/v2workspacegetusageresource.md)                                            | :heavy_check_mark:                                                                                                                          | The project the environment belongs to.                                                                                                     |
| `app`                                                                                                                                       | [components.V2WorkspaceGetUsageResource](../../models/components/v2workspacegetusageresource.md)                                            | :heavy_minus_sign:                                                                                                                          | The app the environment belongs to. Omitted when the usage was recorded<br/>before Unkey stored app ids and the environment was deleted since.<br/> |
| `environment`                                                                                                                               | [components.V2WorkspaceGetUsageEnvironmentResource](../../models/components/v2workspacegetusageenvironmentresource.md)                      | :heavy_check_mark:                                                                                                                          | An environment. `slug` is omitted when the environment was deleted.                                                                         |
| `compute`                                                                                                                                   | [components.V2WorkspaceGetUsageCompute](../../models/components/v2workspacegetusagecompute.md)                                              | :heavy_check_mark:                                                                                                                          | Compute usage in the period.                                                                                                                |