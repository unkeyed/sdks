# V2DeployGenerateUploadUrlResponseData

## Example Usage

```typescript
import { V2DeployGenerateUploadUrlResponseData } from "@unkey/api/models/components";

let value: V2DeployGenerateUploadUrlResponseData = {
  uploadUrl: "https://s3.amazonaws.com/bucket/path?signature=...",
  context: "proj_123abc/ctx_456def.tar.gz",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uploadUrl`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Presigned PUT URL for uploading the build context tar file               | https://s3.amazonaws.com/bucket/path?signature=...                       |
| `context`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | S3 path to use in the createDeployment request when building from source | proj_123abc/ctx_456def.tar.gz                                            |