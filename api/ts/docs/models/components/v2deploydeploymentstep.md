# V2DeployDeploymentStep

## Example Usage

```typescript
import { V2DeployDeploymentStep } from "@unkey/api/models/components";

let value: V2DeployDeploymentStep = {
  status: "completed",
  message: "Image pulled successfully",
  errorMessage: "Connection timeout",
  createdAt: 1704067200000,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `status`                       | *string*                       | :heavy_minus_sign:             | Step status                    | completed                      |
| `message`                      | *string*                       | :heavy_minus_sign:             | Step message                   | Image pulled successfully      |
| `errorMessage`                 | *string*                       | :heavy_minus_sign:             | Error message if step failed   | Connection timeout             |
| `createdAt`                    | *number*                       | :heavy_minus_sign:             | Unix timestamp in milliseconds | 1704067200000                  |