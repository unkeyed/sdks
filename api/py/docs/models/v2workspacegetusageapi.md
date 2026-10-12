# V2WorkspaceGetUsageAPI

Billable operations through the Unkey API in the period. Key verifications
through the Unkey gateway are not counted here. The gateway bills by active
keys, see `gateway`.



## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `verifications`                 | *int*                           | :heavy_check_mark:              | Billable key verifications.     | 40000                           |
| `ratelimits`                    | *int*                           | :heavy_check_mark:              | Billable rate limit operations. | 2000                            |