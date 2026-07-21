# V2DeploymentsListDeploymentsRequestBody

Filter deployments within a workspace. All filters are optional; with none
set, every deployment in the workspace is returned, newest first.


## Example Usage

```typescript
import { V2DeploymentsListDeploymentsRequestBody } from "@unkey/api/models/components";

let value: V2DeploymentsListDeploymentsRequestBody = {
  project: "proj_1234abcd",
  app: "proj_1234abcd",
  environment: "proj_1234abcd",
  status: [
    "ready",
    "failed",
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                              |
| `app`                                                                                                                      | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                              |
| `environment`                                                                                                              | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                              |
| `status`                                                                                                                   | [components.DeploymentStatus](../../models/components/deploymentstatus.md)[]                                               | :heavy_minus_sign:                                                                                                         | Restrict results to deployments in any of the given lifecycle statuses.<br/>Omit to return deployments in every status.<br/> | [<br/>"ready",<br/>"failed"<br/>]                                                                                          |
| `limit`                                                                                                                    | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Maximum number of deployments to return per request.<br/>Balance between response size and number of pagination calls needed.<br/> |                                                                                                                            |
| `cursor`                                                                                                                   | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Pagination cursor from a previous response to fetch the next page.<br/>Use when `hasMore: true` in the previous response.<br/> |                                                                                                                            |