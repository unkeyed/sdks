# DeploymentGitAuthor

## Example Usage

```typescript
import { DeploymentGitAuthor } from "@unkey/api/models/components";

let value: DeploymentGitAuthor = {
  handle: "octocat",
  avatarUrl: "https://avatars.githubusercontent.com/u/583231",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `handle`                                           | *string*                                           | :heavy_check_mark:                                 | The GitHub login, or the handle the client sent.   | octocat                                            |
| `avatarUrl`                                        | *string*                                           | :heavy_minus_sign:                                 | The avatar URL for `handle`. Omitted when unknown. | https://avatars.githubusercontent.com/u/583231     |