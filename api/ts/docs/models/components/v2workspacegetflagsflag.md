# V2WorkspaceGetFlagsFlag

## Example Usage

```typescript
import { V2WorkspaceGetFlagsFlag } from "@unkey/api/models/components";

let value: V2WorkspaceGetFlagsFlag = {
  enabled: true,
  description:
    "yippee highly furthermore straw accidentally gadzooks unexpectedly",
  allowOptIn: true,
  allowOptOut: true,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                   | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | Whether the feature is enabled for this workspace. A workspace-specific value overrides the flag's default. |
| `description`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | What the flag controls.                                                                                     |
| `allowOptIn`                                                                                                | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | Whether this flag can be enabled. Updating it also requires `flags#write` permission.                       |
| `allowOptOut`                                                                                               | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | Whether this flag can be disabled. Updating it also requires `flags#write` permission.                      |