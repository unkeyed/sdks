# V2DeployDeploymentStep


## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `Status`                       | **string*                      | :heavy_minus_sign:             | Step status                    | completed                      |
| `Message`                      | **string*                      | :heavy_minus_sign:             | Step message                   | Image pulled successfully      |
| `ErrorMessage`                 | **string*                      | :heavy_minus_sign:             | Error message if step failed   | Connection timeout             |
| `CreatedAt`                    | **int64*                       | :heavy_minus_sign:             | Unix timestamp in milliseconds | 1704067200000                  |