# V2DeployCreateDeploymentRequestBody

Create a deployment from a pre-built Docker image

## Example Usage

```typescript
import { V2DeployCreateDeploymentRequestBody } from "@unkey/api/models/components";

let value: V2DeployCreateDeploymentRequestBody = {
  project: "my-project",
  app: "default",
  keyspaceId: "key_abc123",
  branch: "main",
  environmentSlug: "production",
  dockerImage: "ghcr.io/user/app:v1.0.0",
  gitCommit: {
    commitSha: "a1b2c3d4e5f6",
    commitMessage: "feat: add new feature",
    authorHandle: "johndoe",
    authorAvatarUrl: "https://avatars.githubusercontent.com/u/123456",
    timestamp: 1704067200000,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Project slug                                                                 | my-project                                                                   |
| `app`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | App slug within the project                                                  | default                                                                      |
| `keyspaceId`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | Optional keyspace ID for authentication context                              | key_abc123                                                                   |
| `branch`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | Git branch name                                                              | main                                                                         |
| `environmentSlug`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | Environment slug (e.g., "production", "staging")                             | production                                                                   |
| `dockerImage`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | Docker image reference to deploy                                             | ghcr.io/user/app:v1.0.0                                                      |
| `gitCommit`                                                                  | [components.V2DeployGitCommit](../../models/components/v2deploygitcommit.md) | :heavy_minus_sign:                                                           | Optional git commit information                                              |                                                                              |