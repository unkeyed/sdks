# DeploymentSourceGit

Build from the app's connected GitHub repository.

## Example Usage

```typescript
import { DeploymentSourceGit } from "@unkey/api/models/components";

let value: DeploymentSourceGit = {
  branch: "main",
  commitSha: "9f2c1a7",
  repository: "contributor/acme-api",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `branch`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | Branch to build (its HEAD). Omit branch and commitSha to use the app's default branch.            | main                                                                                              |
| `commitSha`                                                                                       | *string*                                                                                          | :heavy_minus_sign:                                                                                | Commit to build (full or abbreviated SHA). Takes precedence over branch.                          | 9f2c1a7                                                                                           |
| `repository`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | Build from a fork instead of the app's connected repository, as "owner/repo". Requires commitSha. | contributor/acme-api                                                                              |