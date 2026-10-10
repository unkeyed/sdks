# V2WorkspaceGetUsageEnvironmentResource

An environment. `slug` is omitted when the environment was deleted.


## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *str*                 | :heavy_check_mark:    | The environment id.   | env_1234abcd          |
| `slug`                | *Optional[str]*       | :heavy_minus_sign:    | The environment slug. | production            |