# AppGitCreateInput

Configure Git as the app source. Provide `repository` to connect it during
creation, or use an empty object to connect a repository later.


## Example Usage

```typescript
import { AppGitCreateInput } from "@unkey/api/models/components";

let value: AppGitCreateInput = {
  repository: "unkeyed/unkey",
  defaultBranch: "main",
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          | Example                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repository`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                   | The GitHub repository to connect, as "owner/repo". The workspace must have<br/>the Unkey GitHub App installed with access to it. Omit this field to create<br/>the Git app before selecting its repository.<br/> | unkeyed/unkey                                                                                                                                                                                        |
| `defaultBranch`                                                                                                                                                                                      | *string*                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                   | The branch this app's deployments track. This requires `repository`.<br/>Omit it to adopt the repository's default branch on GitHub.<br/>                                                            | main                                                                                                                                                                                                 |