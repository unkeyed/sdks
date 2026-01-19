# V2DeployGitCommit

Optional git commit information

## Example Usage

```typescript
import { V2DeployGitCommit } from "@unkey/api/models/components";

let value: V2DeployGitCommit = {
  commitSha: "a1b2c3d4e5f6",
  commitMessage: "feat: add new feature",
  authorHandle: "johndoe",
  authorAvatarUrl: "https://avatars.githubusercontent.com/u/123456",
  timestamp: 1704067200000,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `commitSha`                                    | *string*                                       | :heavy_minus_sign:                             | Git commit SHA                                 | a1b2c3d4e5f6                                   |
| `commitMessage`                                | *string*                                       | :heavy_minus_sign:                             | Git commit message                             | feat: add new feature                          |
| `authorHandle`                                 | *string*                                       | :heavy_minus_sign:                             | Git author handle/username                     | johndoe                                        |
| `authorAvatarUrl`                              | *string*                                       | :heavy_minus_sign:                             | Git author avatar URL                          | https://avatars.githubusercontent.com/u/123456 |
| `timestamp`                                    | *number*                                       | :heavy_minus_sign:                             | Commit timestamp in milliseconds               | 1704067200000                                  |