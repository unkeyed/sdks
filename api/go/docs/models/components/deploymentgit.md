# DeploymentGit


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `CommitSha`                                                          | `string`                                                             | :heavy_check_mark:                                                   | The git commit SHA this deployment was built from.                   | 9f2c1a7d3b                                                           |
| `Branch`                                                             | `*string`                                                            | :heavy_minus_sign:                                                   | The git branch this deployment was built from. Omitted when unknown. | main                                                                 |