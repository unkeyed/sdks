# V2DeployGetDeploymentResponseBody

## Example Usage

```typescript
import { V2DeployGetDeploymentResponseBody } from "@unkey/api/models/components";

let value: V2DeployGetDeploymentResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    id: "d_abc123xyz",
    status: "READY",
    errorMessage: "Failed to pull image: authentication required",
    hostnames: [
      "app.example.com",
      "api.example.com",
    ],
    steps: [
      {
        status: "completed",
        message: "Image pulled successfully",
        errorMessage: "Connection timeout",
        createdAt: 1704067200000,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.V2DeployGetDeploymentResponseData](../../models/components/v2deploygetdeploymentresponsedata.md)                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |