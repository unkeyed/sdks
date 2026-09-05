# V2DomainsListDomainsResponseBody

## Example Usage

```typescript
import { V2DomainsListDomainsResponseBody } from "@unkey/api/models/components";

let value: V2DomainsListDomainsResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: [
    {
      id: "proj_1234abcd",
      domain: "api.acme.com",
      projectId: "proj_1234abcd",
      appId: "app_1234abcd",
      environmentId: "env_1234abcd",
      status: "verified",
      verificationError: "domain verification timed out after 24 hours",
      dnsRecords: [
        {
          type: "CNAME",
          name: "api.acme.com",
          value: "a1b2c3d4e5f6g7h8.cname.unkey.com",
          ttl: 60,
          verified: false,
          note: "Create as DNS-only if your provider offers the choice.",
        },
      ],
      domainConnect: {
        provider: "Cloudflare",
        url:
          "https://dash.cloudflare.com/domainconnect/v2/domaintemplates/apply?domain=acme.com&host=api",
      },
      createdAt: 1704067200000,
      updatedAt: 1704153600000,
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
| `data`                                                                                                                                                                                                                                                          | [components.Domain](../../models/components/domain.md)[]                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                              | The domains attached to the environment, sorted by their id.<br/>The array is empty when the environment has no domains. This is not an error.<br/>                                                                                                             |
| `pagination`                                                                                                                                                                                                                                                    | [components.Pagination](../../models/components/pagination.md)                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                              | Pagination metadata for list endpoints. Provides information necessary to traverse through large result sets efficiently using cursor-based pagination.                                                                                                         |