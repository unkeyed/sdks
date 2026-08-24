# V2DomainsGetDomainResponseBody

## Example Usage

```typescript
import { V2DomainsGetDomainResponseBody } from "@unkey/api/models/components";

let value: V2DomainsGetDomainResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    id: "proj_1234abcd",
    domain: "api.acme.com",
    projectId: "proj_1234abcd",
    appId: "app_1234abcd",
    environmentId: "env_1234abcd",
    status: "verified",
    verificationError: "domain verification timed out after 24 hours",
    dnsRecords: [],
    createdAt: 1704067200000,
    updatedAt: 1704153600000,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.Domain](../../models/components/domain.md)                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |