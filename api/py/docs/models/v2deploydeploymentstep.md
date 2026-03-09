# V2DeployDeploymentStep


## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `status`                       | *Optional[str]*                | :heavy_minus_sign:             | Step status                    | completed                      |
| `message`                      | *Optional[str]*                | :heavy_minus_sign:             | Step message                   | Image pulled successfully      |
| `error_message`                | *Optional[str]*                | :heavy_minus_sign:             | Error message if step failed   | Connection timeout             |
| `created_at`                   | *Optional[int]*                | :heavy_minus_sign:             | Unix timestamp in milliseconds | 1704067200000                  |