# V2DeployGenerateUploadURLResponseData


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `UploadURL`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Presigned PUT URL for uploading the build context tar file               | https://s3.amazonaws.com/bucket/path?signature=...                       |
| `Context`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | S3 path to use in the createDeployment request when building from source | proj_123abc/ctx_456def.tar.gz                                            |