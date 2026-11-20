# V2PortalListKeysResponseBody

## Example Usage

```typescript
import { V2PortalListKeysResponseBody } from "@unkey/api/models/components";

let value: V2PortalListKeysResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: [],
  pagination: {
    cursor: "eyJrZXkiOiJrZXlfMTIzNCIsInRzIjoxNjk5Mzc4ODAwfQ==",
    hasMore: true,
  },
  keyCreation: {
    maxKeys: 5,
    liveKeyCount: 2,
    ratelimits: [
      {
        name: "requests",
        limit: 100,
        duration: 60000,
      },
    ],
    maxLifetime: 2592000000,
    permissions: {
      required: [
        "documents.read",
      ],
      allowed: [
        "documents.write",
      ],
    },
    roles: {
      required: [
        "documents.read",
      ],
      allowed: [
        "documents.write",
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.KeyResponseData](../../models/components/keyresponsedata.md)[]                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                              | Array of the portal end user's API keys.                                                                                                                                                                                                                        |
| `pagination`                                                                                                                                                                                                                                                    | [components.Pagination](../../models/components/pagination.md)                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                              | Pagination metadata for list endpoints. Provides information necessary to traverse through large result sets efficiently using cursor-based pagination.                                                                                                         |
| `keyCreation`                                                                                                                                                                                                                                                   | [components.V2PortalListKeysKeyCreation](../../models/components/v2portallistkeyskeycreation.md)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                              | What the end user may create through `portal.createKey`. Present only when<br/>the session may create keys.<br/>                                                                                                                                                |