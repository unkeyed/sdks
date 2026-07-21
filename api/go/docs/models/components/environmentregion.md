# EnvironmentRegion

Replica bounds for a single region the environment deploys to.


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `Name`                                                     | `string`                                                   | :heavy_check_mark:                                         | Region name, such as us-east-1.                            | us-east-1                                                  |
| `Replicas`                                                 | [components.Replicas](../../models/components/replicas.md) | :heavy_check_mark:                                         | Min and max replica bounds for autoscaling in a region.    |                                                            |