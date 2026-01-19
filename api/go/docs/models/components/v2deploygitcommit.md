# V2DeployGitCommit

Optional git commit information


## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `CommitSha`                                    | **string*                                      | :heavy_minus_sign:                             | Git commit SHA                                 | a1b2c3d4e5f6                                   |
| `CommitMessage`                                | **string*                                      | :heavy_minus_sign:                             | Git commit message                             | feat: add new feature                          |
| `AuthorHandle`                                 | **string*                                      | :heavy_minus_sign:                             | Git author handle/username                     | johndoe                                        |
| `AuthorAvatarURL`                              | **string*                                      | :heavy_minus_sign:                             | Git author avatar URL                          | https://avatars.githubusercontent.com/u/123456 |
| `Timestamp`                                    | **int64*                                       | :heavy_minus_sign:                             | Commit timestamp in milliseconds               | 1704067200000                                  |