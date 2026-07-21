# V2DeploymentsStartDeploymentRequestBody

Start a stopped preview deployment so it serves traffic again.

## Example Usage

```typescript
import { V2DeploymentsStartDeploymentRequestBody } from "@unkey/api/models/components";

let value: V2DeploymentsStartDeploymentRequestBody = {
  deploymentId: "proj_1234abcd",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `deploymentId`                                                                                                           | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |