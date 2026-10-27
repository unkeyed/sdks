# DomainsListDomainsResponse

## Example Usage

```typescript
import { DomainsListDomainsResponse } from "@unkey/api/models/operations";

let value: DomainsListDomainsResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.V2DomainsListDomainsResponseBody](../../models/components/v2domainslistdomainsresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |