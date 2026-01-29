# Build

Build context for building from source.
Provide either `build.context` (build from source) or `image` (prebuilt image), but not both.


## Example Usage

```typescript
import { Build } from "@unkey/api/models/operations";

let value: Build = {
  context: "s3://bucket/path/to/context.tar.gz",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `context`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | S3 path to uploaded build context tarball                                   | s3://bucket/path/to/context.tar.gz                                          |
| `dockerfile`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | Optional path to Dockerfile within build context (defaults to "Dockerfile") | Dockerfile                                                                  |