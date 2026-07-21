# V2GatewayListPoliciesResponseBody

## Example Usage

```typescript
import { V2GatewayListPoliciesResponseBody } from "@unkey/api/models/components";

let value: V2GatewayListPoliciesResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: [
    {
      id: "pol_2gJbXhAr4",
      name: "Block internal paths",
      enabled: true,
      match: [
        {
          path: {
            path: {
              prefix: "/internal/",
            },
          },
        },
      ],
      firewall: {
        action: "ACTION_DENY",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.PolicyResponse](../../models/components/policyresponse.md)[]                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                              | The environment's gateway policies in evaluation order.                                                                                                                                                                                                         |