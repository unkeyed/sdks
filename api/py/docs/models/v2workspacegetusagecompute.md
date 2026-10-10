# V2WorkspaceGetUsageCompute

Compute usage in the period.


## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `cpu_seconds`                                    | *float*                                          | :heavy_check_mark:                               | CPU time used, in seconds.                       | 5400.5                                           |
| `memory_gi_b_hours`                              | *float*                                          | :heavy_check_mark:                               | Memory used over time, in GiB-hours.             | 96.2                                             |
| `storage_gi_b_hours`                             | *float*                                          | :heavy_check_mark:                               | Ephemeral disk reserved over time, in GiB-hours. | 0                                                |
| `egress_gi_b`                                    | *float*                                          | :heavy_check_mark:                               | Public network egress, in GiB.                   | 1.4                                              |