# V2RatelimitUpdateNamespaceResponseBody

## Example Usage

```typescript
import { V2RatelimitUpdateNamespaceResponseBody } from "@unkey/api/models/components";

let value: V2RatelimitUpdateNamespaceResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    id: "rlns_1234abcd",
    name: "api.requests",
    createdAt: 1704067200000,
    updatedAt: 1704153600000,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.RatelimitNamespace](../../models/components/ratelimitnamespace.md)                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |