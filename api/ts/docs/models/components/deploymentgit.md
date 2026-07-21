# DeploymentGit

## Example Usage

```typescript
import { DeploymentGit } from "@unkey/api/models/components";

let value: DeploymentGit = {
  commitSha: "9f2c1a7d3b",
  branch: "main",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `commitSha`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The git commit SHA this deployment was built from.                   | 9f2c1a7d3b                                                           |
| `branch`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | The git branch this deployment was built from. Omitted when unknown. | main                                                                 |