# TimeFilter

Filters by the time of the event, in Unix milliseconds. Every bound is combined with AND.
Rows older than the workspace's retention are never returned or counted, whatever the bounds.


## Example Usage

```typescript
import { TimeFilter } from "@unkey/api/models/components";

let value: TimeFilter = {
  gte: 1791936000000,
  lt: 1792022400000,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `gt`                                | *number*                            | :heavy_minus_sign:                  | Keep events after this time.        |
| `gte`                               | *number*                            | :heavy_minus_sign:                  | Keep events at or after this time.  |
| `lt`                                | *number*                            | :heavy_minus_sign:                  | Keep events before this time.       |
| `lte`                               | *number*                            | :heavy_minus_sign:                  | Keep events at or before this time. |