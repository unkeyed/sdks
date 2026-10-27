# V2WorkspaceUpdateFlagRequestBody


## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `Slug`                                                                                   | `string`                                                                                 | :heavy_check_mark:                                                                       | Lowercase snake_case slug of the flag to update, as returned by `workspace.getFlags`.    |
| `Enabled`                                                                                | `bool`                                                                                   | :heavy_check_mark:                                                                       | Set to true to enable the flag or false to disable it, regardless of the flag's default. |