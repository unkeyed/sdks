# DeploymentGit


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `commit_sha`                                                         | *str*                                                                | :heavy_check_mark:                                                   | The git commit SHA this deployment was built from.                   | 9f2c1a7d3b                                                           |
| `branch`                                                             | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | The git branch this deployment was built from. Omitted when unknown. | main                                                                 |