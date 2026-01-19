# Internal

## Overview

### Available Operations

* [CreateDeployment](#createdeployment) - Create deployment
* [GenerateUploadURL](#generateuploadurl) - Generate upload URL
* [GetDeployment](#getdeployment) - Get deployment

## CreateDeployment

**INTERNAL** - This endpoint is internal and may change without notice.
Not recommended for production use.

Creates a new deployment for a project using either a pre-built Docker image or build context.

**Authentication**: Requires a valid root key with appropriate permissions.


### Example Usage

<!-- UsageSnippet language="go" operationID="deploy.createDeployment" method="post" path="/v2/deploy.createDeployment" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"github.com/unkeyed/sdks/api/go/v2/models/operations"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Internal.CreateDeployment(ctx, operations.CreateDeployCreateDeploymentRequestV2DeployImageSource(
        operations.V2DeployImageSource{
            Image: "nginx:latest",
            ProjectID: "proj_123abc",
            KeyspaceID: unkey.Pointer("key_abc123"),
            Branch: "main",
            EnvironmentSlug: "production",
            GitCommit: &components.V2DeployGitCommit{
                CommitSha: unkey.Pointer("a1b2c3d4e5f6"),
                CommitMessage: unkey.Pointer("feat: add new feature"),
                AuthorHandle: unkey.Pointer("johndoe"),
                AuthorAvatarURL: unkey.Pointer("https://avatars.githubusercontent.com/u/123456"),
                Timestamp: unkey.Pointer[int64](1704067200000),
            },
        },
    ))
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeployCreateDeploymentResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                | [context.Context](https://pkg.go.dev/context#Context)                                                | :heavy_check_mark:                                                                                   | The context to use for the request.                                                                  |
| `request`                                                                                            | [operations.DeployCreateDeploymentRequest](../../models/operations/deploycreatedeploymentrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `opts`                                                                                               | [][operations.Option](../../models/operations/option.md)                                             | :heavy_minus_sign:                                                                                   | The options for this request.                                                                        |

### Response

**[*operations.DeployCreateDeploymentResponse](../../models/operations/deploycreatedeploymentresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## GenerateUploadURL

**INTERNAL** - This endpoint is internal and may change without notice.
Not recommended for production use.

Generates a presigned S3 URL for uploading build context archives.

**Authentication**: Requires a valid root key with appropriate permissions.


### Example Usage

<!-- UsageSnippet language="go" operationID="deploy.generateUploadUrl" method="post" path="/v2/deploy.generateUploadUrl" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Internal.GenerateUploadURL(ctx, components.V2DeployGenerateUploadURLRequestBody{
        ProjectID: "proj_123abc",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeployGenerateUploadURLResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                              | [context.Context](https://pkg.go.dev/context#Context)                                                              | :heavy_check_mark:                                                                                                 | The context to use for the request.                                                                                |
| `request`                                                                                                          | [components.V2DeployGenerateUploadURLRequestBody](../../models/components/v2deploygenerateuploadurlrequestbody.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `opts`                                                                                                             | [][operations.Option](../../models/operations/option.md)                                                           | :heavy_minus_sign:                                                                                                 | The options for this request.                                                                                      |

### Response

**[*operations.DeployGenerateUploadURLResponse](../../models/operations/deploygenerateuploadurlresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## GetDeployment

**INTERNAL** - This endpoint is internal and may change without notice.
Not recommended for production use.

Retrieves deployment information including status, error messages, and steps.

**Authentication**: Requires a valid root key with appropriate permissions.


### Example Usage

<!-- UsageSnippet language="go" operationID="deploy.getDeployment" method="post" path="/v2/deploy.getDeployment" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Internal.GetDeployment(ctx, components.V2DeployGetDeploymentRequestBody{
        DeploymentID: "d_abc123xyz",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeployGetDeploymentResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                      | :heavy_check_mark:                                                                                         | The context to use for the request.                                                                        |
| `request`                                                                                                  | [components.V2DeployGetDeploymentRequestBody](../../models/components/v2deploygetdeploymentrequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `opts`                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                   | :heavy_minus_sign:                                                                                         | The options for this request.                                                                              |

### Response

**[*operations.DeployGetDeploymentResponse](../../models/operations/deploygetdeploymentresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |