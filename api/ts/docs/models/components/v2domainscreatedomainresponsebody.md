# V2DomainsCreateDomainResponseBody

## Example Usage

```typescript
import { V2DomainsCreateDomainResponseBody } from "@unkey/api/models/components";

let value: V2DomainsCreateDomainResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    domainId: "proj_1234abcd",
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.V2DomainsCreateDomainResponseData](../../models/components/v2domainscreatedomainresponsedata.md)                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |