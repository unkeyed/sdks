# V2WorkspaceGetUsageCompute

Compute usage in the period.

## Example Usage

```typescript
import { V2WorkspaceGetUsageCompute } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageCompute = {
  cpuSeconds: 5400.5,
  memoryGiBHours: 96.2,
  storageGiBHours: 0,
  egressGiB: 1.4,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `cpuSeconds`                                     | *number*                                         | :heavy_check_mark:                               | CPU time used, in seconds.                       | 5400.5                                           |
| `memoryGiBHours`                                 | *number*                                         | :heavy_check_mark:                               | Memory used over time, in GiB-hours.             | 96.2                                             |
| `storageGiBHours`                                | *number*                                         | :heavy_check_mark:                               | Ephemeral disk reserved over time, in GiB-hours. | 0                                                |
| `egressGiB`                                      | *number*                                         | :heavy_check_mark:                               | Public network egress, in GiB.                   | 1.4                                              |