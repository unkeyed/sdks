# V2WorkspaceUpdateFlagRequestBody

## Example Usage

```typescript
import { V2WorkspaceUpdateFlagRequestBody } from "@unkey/api/models/components";

let value: V2WorkspaceUpdateFlagRequestBody = {
  slug: "<value>",
  enabled: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `slug`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | Lowercase snake_case slug of the flag to update, as returned by `workspace.getFlags`.    |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | Set to true to enable the flag or false to disable it, regardless of the flag's default. |