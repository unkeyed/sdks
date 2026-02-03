# V2DeployGenerateUploadUrlResponseBody

## Example Usage

```typescript
import { V2DeployGenerateUploadUrlResponseBody } from "@unkey/api/models/components";

let value: V2DeployGenerateUploadUrlResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    uploadUrl: "https://s3.amazonaws.com/bucket/path?signature=...",
    context: "proj_123abc/ctx_456def.tar.gz",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.V2DeployGenerateUploadUrlResponseData](../../models/components/v2deploygenerateuploadurlresponsedata.md)                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |