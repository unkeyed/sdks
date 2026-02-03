# V2DeployImageSource

Prebuilt Docker image configuration

## Example Usage

```typescript
import { V2DeployImageSource } from "@unkey/api/models/operations";

let value: V2DeployImageSource = {
  image: "nginx:latest",
  projectId: "proj_123abc",
  keyspaceId: "key_abc123",
  branch: "main",
  environmentSlug: "production",
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
| `image`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | Prebuilt Docker image reference                                              | nginx:latest                                                                 |
| `projectId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Unkey project ID                                                             | proj_123abc                                                                  |
| `keyspaceId`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | Optional keyspace ID for authentication context                              | key_abc123                                                                   |
| `branch`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | Git branch name                                                              | main                                                                         |
| `environmentSlug`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | Environment slug (e.g., "production", "staging")                             | production                                                                   |
| `gitCommit`                                                                  | [components.V2DeployGitCommit](../../models/components/v2deploygitcommit.md) | :heavy_minus_sign:                                                           | Optional git commit information                                              |                                                                              |