# FirewallPolicy

Blocks matching requests.

## Example Usage

```typescript
import { FirewallPolicy } from "@unkey/api/models/components";

let value: FirewallPolicy = {
  action: "ACTION_DENY",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `action`                                               | [components.Action](../../models/components/action.md) | :heavy_check_mark:                                     | What to do with matching requests.                     |