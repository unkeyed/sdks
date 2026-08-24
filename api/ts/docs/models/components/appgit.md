# AppGit

## Example Usage

```typescript
import { AppGit } from "@unkey/api/models/components";

let value: AppGit = {
  repository: "unkeyed/unkey",
  defaultBranch: "main",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `repository`                                      | *string*                                          | :heavy_check_mark:                                | The connected GitHub repository, as "owner/repo". | unkeyed/unkey                                     |
| `defaultBranch`                                   | *string*                                          | :heavy_minus_sign:                                | The branch this app's deployments track.          | main                                              |