# V2WorkspaceGetUsageByAppRow

Active gateway keys counted for one app in the period.

## Example Usage

```typescript
import { V2WorkspaceGetUsageByAppRow } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageByAppRow = {
  project: {
    id: "proj_1234abcd",
    name: "Payments",
  },
  app: {
    id: "proj_1234abcd",
    name: "Payments",
  },
  gateway: {
    activeKeys: 12,
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                     | [components.V2WorkspaceGetUsageResource](../../models/components/v2workspacegetusageresource.md)                              | :heavy_minus_sign:                                                                                                            | The project the app belongs to. Omitted when the app was deleted or `app` is omitted.                                         |
| `app`                                                                                                                         | [components.V2WorkspaceGetUsageResource](../../models/components/v2workspacegetusageresource.md)                              | :heavy_minus_sign:                                                                                                            | The app whose gateway verified the keys. Omitted for keys whose<br/>verifications were all recorded before Unkey stored app ids.<br/> |
| `gateway`                                                                                                                     | [components.V2WorkspaceGetUsageGateway](../../models/components/v2workspacegetusagegateway.md)                                | :heavy_check_mark:                                                                                                            | Unkey gateway usage in the period.                                                                                            |