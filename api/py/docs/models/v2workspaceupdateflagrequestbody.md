# V2WorkspaceUpdateFlagRequestBody


## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `slug`                                                                                   | *str*                                                                                    | :heavy_check_mark:                                                                       | Lowercase snake_case slug of the flag to update, as returned by `workspace.getFlags`.    |
| `enabled`                                                                                | *bool*                                                                                   | :heavy_check_mark:                                                                       | Set to true to enable the flag or false to disable it, regardless of the flag's default. |