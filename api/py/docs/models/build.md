# Build

Build context for building from source.
Provide either `build.context` (build from source) or `image` (prebuilt image), but not both.



## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `context`                                                                   | *str*                                                                       | :heavy_check_mark:                                                          | S3 path to uploaded build context tarball                                   | s3://bucket/path/to/context.tar.gz                                          |
| `dockerfile`                                                                | *Optional[str]*                                                             | :heavy_minus_sign:                                                          | Optional path to Dockerfile within build context (defaults to "Dockerfile") | Dockerfile                                                                  |