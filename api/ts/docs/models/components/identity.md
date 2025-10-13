# Identity

## Example Usage

```typescript
import { Identity } from "@unkey/api/models/components";

let value: Identity = {
  id: "<id>",
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
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Identity ID                                                                    |
| `externalId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | External identity ID                                                           |
| `meta`                                                                         | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | Identity metadata                                                              |
| `ratelimits`                                                                   | [components.RatelimitResponse](../../models/components/ratelimitresponse.md)[] | :heavy_minus_sign:                                                             | Identity ratelimits                                                            |