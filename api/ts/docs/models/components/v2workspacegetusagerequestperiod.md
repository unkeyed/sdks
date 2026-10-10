# V2WorkspaceGetUsageRequestPeriod

The calendar month (UTC) to read. Omit it for the current month to date. A
past month returns the full month. It cannot be in the future, and it must
start within the last 90 days, because compute usage is kept for 90 days.


## Example Usage

```typescript
import { V2WorkspaceGetUsageRequestPeriod } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageRequestPeriod = {
  year: 2026,
  month: 9,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `year`                                        | *number*                                      | :heavy_check_mark:                            | The year, for example 2026.                   | 2026                                          |
| `month`                                       | *number*                                      | :heavy_check_mark:                            | The month, from 1 (January) to 12 (December). | 9                                             |