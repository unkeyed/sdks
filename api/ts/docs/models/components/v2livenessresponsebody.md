# V2LivenessResponseBody

## Example Usage

```typescript
import { V2LivenessResponseBody } from "@unkey/api/models/components";

let value: V2LivenessResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    message: "OK",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `meta`                                                                             | [components.Meta](../../models/components/meta.md)                                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [components.LivenessResponseData](../../models/components/livenessresponsedata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |