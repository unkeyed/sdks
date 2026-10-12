# V2WorkspaceGetUsageGateway

Unkey gateway usage in the period.

## Example Usage

```typescript
import { V2WorkspaceGetUsageGateway } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageGateway = {
  activeKeys: 12,
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `activeKeys`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Distinct keys verified through the Unkey gateway. A key verified through<br/>several apps counts once, for the app that verified it most.<br/> | 12                                                                                                                                     |