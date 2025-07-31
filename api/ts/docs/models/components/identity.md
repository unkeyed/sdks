# Identity

## Example Usage

```typescript
import { Identity } from "@unkey/api/models/components";

let value: Identity = {
  externalId: "<id>",
  ratelimits: [
    {
      id: "rl_1234567890abcdef",
      name: "api_requests",
      limit: 1000,
      duration: 3600000,
      autoApply: true,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `externalId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | External identity ID                                                           |
| `meta`                                                                         | [components.IdentityMeta](../../models/components/identitymeta.md)             | :heavy_minus_sign:                                                             | Identity metadata                                                              |
| `ratelimits`                                                                   | [components.RatelimitResponse](../../models/components/ratelimitresponse.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *any*                                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |