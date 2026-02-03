# DeployCreateDeploymentRequest

Deployment source - either build from source or use prebuilt image


## Supported Types

### `operations.V2DeployBuildSource`

```typescript
const value: operations.V2DeployBuildSource = {
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

### `operations.V2DeployImageSource`

```typescript
const value: operations.V2DeployImageSource = {
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

