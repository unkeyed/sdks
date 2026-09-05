# DeploymentSourceOCI

Deploy a prebuilt OCI image without a build.


## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `Image`                                                                             | `string`                                                                            | :heavy_check_mark:                                                                  | OCI image to deploy. Mutable tags are resolved to immutable digests before rollout. | ghcr.io/acme/api:v1.2.3                                                             |