# V2WorkspaceGetUsageCompute

Compute usage in the period.


## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `CPUSeconds`                                     | `float64`                                        | :heavy_check_mark:                               | CPU time used, in seconds.                       | 5400.5                                           |
| `MemoryGiBHours`                                 | `float64`                                        | :heavy_check_mark:                               | Memory used over time, in GiB-hours.             | 96.2                                             |
| `StorageGiBHours`                                | `float64`                                        | :heavy_check_mark:                               | Ephemeral disk reserved over time, in GiB-hours. | 0                                                |
| `EgressGiB`                                      | `float64`                                        | :heavy_check_mark:                               | Public network egress, in GiB.                   | 1.4                                              |