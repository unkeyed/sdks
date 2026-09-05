# V2PortalUpdatePortalResponseBody

## Example Usage

```typescript
import { V2PortalUpdatePortalResponseBody } from "@unkey/api/models/components";

let value: V2PortalUpdatePortalResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    id: "pc_1234abcd",
    slug: "acme-portal",
    displayName: "Acme",
    enabled: true,
    keyspaceId: "ks_1234abcd",
    appId: "app_1234abcd",
    branding: {
      logoUrl: "https://cdn.example.com/logo.svg",
      primaryColor: "#6366f1",
    },
    createdAt: 1719849600000,
    updatedAt: 1719936000000,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                                                                      | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                                                          | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team.                                             |
| `data`                                                                                                                                                                                                                                                                                                      | [components.Portal](../../models/components/portal.md)                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                          | A portal you expose to your end users so they can manage their own keys.<br/><br/>Exactly one of `keyspaceId` or `appId` is present, naming the single resource<br/>the portal serves. Neither is in the required list because which one appears<br/>depends on the portal, so a reader checks for the one it cares about.<br/> |