# V2WorkspaceGetUsageRequestBody

## Example Usage

```typescript
import { V2WorkspaceGetUsageRequestBody } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageRequestBody = {
  period: {
    year: 2026,
    month: 9,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `period`                                                                                                                                                                                                                         | [components.V2WorkspaceGetUsageRequestPeriod](../../models/components/v2workspacegetusagerequestperiod.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                               | The calendar month (UTC) to read. Omit it for the current month to date. A<br/>past month returns the full month. It cannot be in the future, and it must<br/>start within the last 90 days, because compute usage is kept for 90 days.<br/> |