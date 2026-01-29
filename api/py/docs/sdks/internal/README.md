# Internal

## Overview

### Available Operations

* [create_deployment](#create_deployment) - Create deployment
* [generate_upload_url](#generate_upload_url) - Generate upload URL
* [get_deployment](#get_deployment) - Get deployment

## create_deployment

**INTERNAL** - This endpoint is internal and may change without notice.
Not recommended for production use.

Creates a new deployment for a project using either a pre-built Docker image or build context.

**Authentication**: Requires a valid root key with appropriate permissions.


### Example Usage

<!-- UsageSnippet language="python" operationID="deploy.createDeployment" method="post" path="/v2/deploy.createDeployment" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.internal.create_deployment(request={
        "image": "nginx:latest",
        "project_id": "proj_123abc",
        "keyspace_id": "key_abc123",
        "branch": "main",
        "environment_slug": "production",
        "git_commit": {
            "commit_sha": "a1b2c3d4e5f6",
            "commit_message": "feat: add new feature",
            "author_handle": "johndoe",
            "author_avatar_url": "https://avatars.githubusercontent.com/u/123456",
            "timestamp": 1704067200000,
        },
    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                             | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `request`                                                                             | [models.DeployCreateDeploymentRequest](../../models/deploycreatedeploymentrequest.md) | :heavy_check_mark:                                                                    | The request object to use for the request.                                            |
| `retries`                                                                             | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                      | :heavy_minus_sign:                                                                    | Configuration to override the default retry behavior of the client.                   |

### Response

**[models.V2DeployCreateDeploymentResponseBody](../../models/v2deploycreatedeploymentresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## generate_upload_url

**INTERNAL** - This endpoint is internal and may change without notice.
Not recommended for production use.

Generates a presigned S3 URL for uploading build context archives.

**Authentication**: Requires a valid root key with appropriate permissions.


### Example Usage

<!-- UsageSnippet language="python" operationID="deploy.generateUploadUrl" method="post" path="/v2/deploy.generateUploadUrl" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.internal.generate_upload_url(project_id="proj_123abc")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `project_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | Unkey project ID for which to generate the upload URL               | proj_123abc                                                         |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |

### Response

**[models.V2DeployGenerateUploadURLResponseBody](../../models/v2deploygenerateuploadurlresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## get_deployment

**INTERNAL** - This endpoint is internal and may change without notice.
Not recommended for production use.

Retrieves deployment information including status, error messages, and steps.

**Authentication**: Requires a valid root key with appropriate permissions.


### Example Usage

<!-- UsageSnippet language="python" operationID="deploy.getDeployment" method="post" path="/v2/deploy.getDeployment" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.internal.get_deployment(deployment_id="d_abc123xyz")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `deployment_id`                                                     | *str*                                                               | :heavy_check_mark:                                                  | Unique deployment identifier to retrieve                            | d_abc123xyz                                                         |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |

### Response

**[models.V2DeployGetDeploymentResponseBody](../../models/v2deploygetdeploymentresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |