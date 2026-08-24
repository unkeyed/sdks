# AppGitCreateInput

Connect a GitHub repository to the app on creation. Omit to create the app
without a repository and connect one later with apps.updateApp.


## Example Usage

```typescript
import { AppGitCreateInput } from "@unkey/api/models/components";

let value: AppGitCreateInput = {
  repository: "unkeyed/unkey",
  defaultBranch: "main",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `repository`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The GitHub repository to connect, as "owner/repo". The workspace must have<br/>the Unkey GitHub App installed with access to it.<br/> | unkeyed/unkey                                                                                                                 |
| `defaultBranch`                                                                                                               | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The branch this app's deployments track. Omit to adopt the repository's<br/>default branch on GitHub.<br/>                    | main                                                                                                                          |