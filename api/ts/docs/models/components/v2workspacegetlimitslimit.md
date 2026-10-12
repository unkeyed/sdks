# V2WorkspaceGetLimitsLimit

A workspace limit and, when the limit has one, the current value against it.

## Example Usage

```typescript
import { V2WorkspaceGetLimitsLimit } from "@unkey/api/models/components";

let value: V2WorkspaceGetLimitsLimit = {
  limit: 5,
  current: 1,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                             | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The maximum the workspace can have. `null` means unlimited.                                                                         | 5                                                                                                                                   |
| `current`                                                                                                                           | *number*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | The current value against `limit`. Omitted when the limit has no current<br/>value, such as a retention period or a per-instance size.<br/> | 1                                                                                                                                   |