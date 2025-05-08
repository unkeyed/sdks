# V2ApisCreateApiResponseBody

## Example Usage

```typescript
import { V2ApisCreateApiResponseBody } from "@unkey/api/models/components";

let value: V2ApisCreateApiResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    apiId: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `meta`                                                                                       | [components.Meta](../../models/components/meta.md)                                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [components.ApisCreateApiResponseData](../../models/components/apiscreateapiresponsedata.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |