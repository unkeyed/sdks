# V2ApisCreateApiRequestBody

## Example Usage

```typescript
import { V2ApisCreateApiRequestBody } from "@unkey/api/models/components";

let value: V2ApisCreateApiRequestBody = {
  name: "payment-service-production",
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                            | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | Unique identifier for this API namespace within your workspace.<br/>Use descriptive names like 'payment-service-prod' or 'user-api-dev' to clearly identify purpose and environment.<br/> | payment-service-production                                                                                                                                                        |