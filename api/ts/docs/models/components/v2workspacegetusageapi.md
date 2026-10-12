# V2WorkspaceGetUsageApi

Billable operations through the Unkey API in the period. Key verifications
through the Unkey gateway are not counted here. The gateway bills by active
keys, see `gateway`.


## Example Usage

```typescript
import { V2WorkspaceGetUsageApi } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageApi = {
  verifications: 40000,
  ratelimits: 2000,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `verifications`                 | *number*                        | :heavy_check_mark:              | Billable key verifications.     | 40000                           |
| `ratelimits`                    | *number*                        | :heavy_check_mark:              | Billable rate limit operations. | 2000                            |