# V2DeployCompleteUploadRequestBody


## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `DeploymentID`                                     | *string*                                           | :heavy_check_mark:                                 | Deployment identifier returned by createDeployment | d_abc123                                           |
| `BuildContextPath`                                 | *string*                                           | :heavy_check_mark:                                 | S3 path to the uploaded build context              | proj_123/build_abc.tar.gz                          |
| `DockerfilePath`                                   | *string*                                           | :heavy_check_mark:                                 | Dockerfile path within the build context           | Dockerfile                                         |