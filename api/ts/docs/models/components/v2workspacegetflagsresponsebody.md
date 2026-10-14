# V2WorkspaceGetFlagsResponseBody

## Example Usage

```typescript
import { V2WorkspaceGetFlagsResponseBody } from "@unkey/api/models/components";

let value: V2WorkspaceGetFlagsResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    "key": {
      enabled: true,
      description: "discrete aboard mysteriously um",
      allowOptIn: false,
      allowOptOut: false,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | Record<string, [components.V2WorkspaceGetFlagsFlag](../../models/components/v2workspacegetflagsflag.md)>                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                              | Flags keyed by their lowercase snake_case slugs.<br/>Empty when no flags are available.<br/>                                                                                                                                                                    |