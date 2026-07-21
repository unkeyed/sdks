# V2DeploymentsCreateDeploymentRequestBody2

## Example Usage

```typescript
import { V2DeploymentsCreateDeploymentRequestBody2 } from "@unkey/api/models/components";

let value: V2DeploymentsCreateDeploymentRequestBody2 = {
  project: "proj_1234abcd",
  app: "proj_1234abcd",
  environment: "proj_1234abcd",
  git: {
    branch: "main",
    commitSha: "9f2c1a7",
    repository: "contributor/acme-api",
  },
  image: {
    dockerImage: "ghcr.io/acme/api:v1.2.3",
  },
  deployment: {
    deploymentId: "proj_1234abcd",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `app`                                                                                                                    | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `environment`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `git`                                                                                                                    | [components.DeploymentSourceGit](../../models/components/deploymentsourcegit.md)                                         | :heavy_check_mark:                                                                                                       | Build from the app's connected GitHub repository.                                                                        |                                                                                                                          |
| `image`                                                                                                                  | [components.DeploymentSourceImage](../../models/components/deploymentsourceimage.md)                                     | :heavy_minus_sign:                                                                                                       | Deploy a prebuilt Docker image as-is.                                                                                    |                                                                                                                          |
| `deployment`                                                                                                             | [components.DeploymentSourceDeployment](../../models/components/deploymentsourcedeployment.md)                           | :heavy_minus_sign:                                                                                                       | Re-run an existing deployment.                                                                                           |                                                                                                                          |