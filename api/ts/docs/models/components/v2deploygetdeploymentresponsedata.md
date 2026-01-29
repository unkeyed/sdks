# V2DeployGetDeploymentResponseData

## Example Usage

```typescript
import { V2DeployGetDeploymentResponseData } from "@unkey/api/models/components";

let value: V2DeployGetDeploymentResponseData = {
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
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique deployment identifier                                                             | d_abc123xyz                                                                              |
| `status`                                                                                 | [components.Status](../../models/components/status.md)                                   | :heavy_check_mark:                                                                       | Current deployment status                                                                | READY                                                                                    |
| `errorMessage`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | Error message if deployment failed                                                       | Failed to pull image: authentication required                                            |
| `hostnames`                                                                              | *string*[]                                                                               | :heavy_minus_sign:                                                                       | Hostnames associated with this deployment                                                | [<br/>"app.example.com",<br/>"api.example.com"<br/>]                                     |
| `steps`                                                                                  | [components.V2DeployDeploymentStep](../../models/components/v2deploydeploymentstep.md)[] | :heavy_minus_sign:                                                                       | Deployment steps with status and messages                                                |                                                                                          |