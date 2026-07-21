# EnvironmentRegion

Replica bounds for a single region the environment deploys to.


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `name`                                                  | *str*                                                   | :heavy_check_mark:                                      | Region name, such as us-east-1.                         | us-east-1                                               |
| `replicas`                                              | [models.Replicas](../models/replicas.md)                | :heavy_check_mark:                                      | Min and max replica bounds for autoscaling in a region. |                                                         |