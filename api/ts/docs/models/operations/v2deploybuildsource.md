# V2DeployBuildSource

Build from source configuration

## Example Usage

```typescript
import { V2DeployBuildSource } from "@unkey/api/models/operations";

let value: V2DeployBuildSource = {
  build: {
    context: "s3://bucket/path/to/context.tar.gz",
  },
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

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `build`                                                                                                                                | [operations.Build](../../models/operations/build.md)                                                                                   | :heavy_check_mark:                                                                                                                     | Build context for building from source.<br/>Provide either `build.context` (build from source) or `image` (prebuilt image), but not both.<br/> |                                                                                                                                        |
| `projectId`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Unkey project ID                                                                                                                       | proj_123abc                                                                                                                            |
| `keyspaceId`                                                                                                                           | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Optional keyspace ID for authentication context                                                                                        | key_abc123                                                                                                                             |
| `branch`                                                                                                                               | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Git branch name                                                                                                                        | main                                                                                                                                   |
| `environmentSlug`                                                                                                                      | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Environment slug (e.g., "production", "staging")                                                                                       | production                                                                                                                             |
| `gitCommit`                                                                                                                            | [components.V2DeployGitCommit](../../models/components/v2deploygitcommit.md)                                                           | :heavy_minus_sign:                                                                                                                     | Optional git commit information                                                                                                        |                                                                                                                                        |