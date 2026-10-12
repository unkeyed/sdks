# V2WorkspaceGetUsageAPI

Billable operations through the Unkey API in the period. Key verifications
through the Unkey gateway are not counted here. The gateway bills by active
keys, see `gateway`.



## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `Verifications`                 | `int64`                         | :heavy_check_mark:              | Billable key verifications.     | 40000                           |
| `Ratelimits`                    | `int64`                         | :heavy_check_mark:              | Billable rate limit operations. | 2000                            |