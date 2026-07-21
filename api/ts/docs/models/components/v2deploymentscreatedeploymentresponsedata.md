# V2DeploymentsCreateDeploymentResponseData

## Example Usage

```typescript
import { V2DeploymentsCreateDeploymentResponseData } from "@unkey/api/models/components";

let value: V2DeploymentsCreateDeploymentResponseData = {
  deploymentId: "d_abc123xyz",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `deploymentId`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique deployment identifier. Poll deployments.getDeployment with this id to watch status. | d_abc123xyz                                                                                |