# Internal

## Overview

### Available Operations

* [createDeployment](#createdeployment) - Create deployment
* [generateUploadUrl](#generateuploadurl) - Generate upload URL
* [getDeployment](#getdeployment) - Get deployment

## createDeployment

**INTERNAL** - This endpoint is internal and may change without notice.
Not recommended for production use.

Creates a new deployment for a project using either a pre-built Docker image or build context.

**Authentication**: Requires a valid root key with appropriate permissions.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deploy.createDeployment" method="post" path="/v2/deploy.createDeployment" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.internal.createDeployment({
    image: "nginx:latest",
    projectId: "proj_123abc",
    keyspaceId: "key_abc123",
    branch: "main",
    environmentSlug: "production",
    gitCommit: {
      commitSha: "a1b2c3d4e5f6",
      commitMessage: "feat: add new feature",
      authorHandle: "johndoe",
      authorAvatarUrl: "https://avatars.githubusercontent.com/u/123456",
      timestamp: 1704067200000,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { internalCreateDeployment } from "@unkey/api/funcs/internalCreateDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await internalCreateDeployment(unkey, {
    image: "nginx:latest",
    projectId: "proj_123abc",
    keyspaceId: "key_abc123",
    branch: "main",
    environmentSlug: "production",
    gitCommit: {
      commitSha: "a1b2c3d4e5f6",
      commitMessage: "feat: add new feature",
      authorHandle: "johndoe",
      authorAvatarUrl: "https://avatars.githubusercontent.com/u/123456",
      timestamp: 1704067200000,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("internalCreateDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeployCreateDeploymentRequest](../../models/operations/deploycreatedeploymentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DeployCreateDeploymentResponseBody](../../models/components/v2deploycreatedeploymentresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## generateUploadUrl

**INTERNAL** - This endpoint is internal and may change without notice.
Not recommended for production use.

Generates a presigned S3 URL for uploading build context archives.

**Authentication**: Requires a valid root key with appropriate permissions.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deploy.generateUploadUrl" method="post" path="/v2/deploy.generateUploadUrl" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.internal.generateUploadUrl({
    projectId: "proj_123abc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { internalGenerateUploadUrl } from "@unkey/api/funcs/internalGenerateUploadUrl.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await internalGenerateUploadUrl(unkey, {
    projectId: "proj_123abc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("internalGenerateUploadUrl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DeployGenerateUploadUrlRequestBody](../../models/components/v2deploygenerateuploadurlrequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DeployGenerateUploadUrlResponseBody](../../models/components/v2deploygenerateuploadurlresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## getDeployment

**INTERNAL** - This endpoint is internal and may change without notice.
Not recommended for production use.

Retrieves deployment information including status, error messages, and steps.

**Authentication**: Requires a valid root key with appropriate permissions.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deploy.getDeployment" method="post" path="/v2/deploy.getDeployment" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.internal.getDeployment({
    deploymentId: "d_abc123xyz",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { internalGetDeployment } from "@unkey/api/funcs/internalGetDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await internalGetDeployment(unkey, {
    deploymentId: "d_abc123xyz",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("internalGetDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DeployGetDeploymentRequestBody](../../models/components/v2deploygetdeploymentrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DeployGetDeploymentResponseBody](../../models/components/v2deploygetdeploymentresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |