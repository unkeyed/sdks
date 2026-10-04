# V2PortalListSessionsResponseBody

## Example Usage

```typescript
import { V2PortalListSessionsResponseBody } from "@unkey/api/models/components";

let value: V2PortalListSessionsResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: [
    {
      externalId: "user_123",
      sessions: [
        {
          id: "ps_1234abcd",
          status: "active",
          createdAt: 1704067200000,
          expiresAt: 1704153600000,
          scopes: [
            "keys:read",
          ],
        },
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
| `data`                                                                                                                                                                                                                                                          | [components.V2PortalListSessionsResponseData](../../models/components/v2portallistsessionsresponsedata.md)[]                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                              | End users with revocable sessions, ordered by `externalId`.                                                                                                                                                                                                     |
| `pagination`                                                                                                                                                                                                                                                    | [components.Pagination](../../models/components/pagination.md)                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                              | Pagination metadata for list endpoints. Provides information necessary to traverse through large result sets efficiently using cursor-based pagination.                                                                                                         |