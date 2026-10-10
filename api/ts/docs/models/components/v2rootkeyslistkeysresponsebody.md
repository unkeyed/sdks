# V2RootKeysListKeysResponseBody

## Example Usage

```typescript
import { V2RootKeysListKeysResponseBody } from "@unkey/api/models/components";

let value: V2RootKeysListKeysResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: [
    {
      keyId: "<id>",
      name: "<value>",
      start: "<value>",
      end: "<value>",
      enabled: true,
      createdAt: 707859,
      lastUsedAt: 56381,
      expires: 708853,
      permissions: [
        "<value 1>",
        "<value 2>",
      ],
    },
  ],
  pagination: {
    cursor: "eyJrZXkiOiJrZXlfMTIzNCIsInRzIjoxNjk5Mzc4ODAwfQ==",
    hasMore: true,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.V2RootKeysListKeysResponseData](../../models/components/v2rootkeyslistkeysresponsedata.md)[]                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |
| `pagination`                                                                                                                                                                                                                                                    | [components.Pagination](../../models/components/pagination.md)                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                              | Pagination metadata for list endpoints. Provides information necessary to traverse through large result sets efficiently using cursor-based pagination.                                                                                                         |