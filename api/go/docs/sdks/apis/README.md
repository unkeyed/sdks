# Apis

## Overview

API management operations

### Available Operations

* [CreateAPI](#createapi) - Create API namespace
* [DeleteAPI](#deleteapi) - Delete API namespace
* [GetAPI](#getapi) - Get API namespace
* [ListKeys](#listkeys) - List API keys

## CreateAPI

Create an API namespace for organizing keys by environment, service, or product.

Use this to separate production from development keys, isolate different services, or manage multiple products. Each API gets a unique identifier and dedicated infrastructure for secure key operations.

**Important**: API names must be unique within your workspace and cannot be changed after creation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.create_api` (to create APIs in any workspace)


### Example Usage

<!-- UsageSnippet language="go" operationID="createApi" method="post" path="/v2/apis.createApi" -->
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

    res, err := s.Apis.CreateAPI(ctx, components.V2ApisCreateAPIRequestBody{
        Name: "payment-service-production",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ApisCreateAPIResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ctx`                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                          | :heavy_check_mark:                                                                             | The context to use for the request.                                                            |
| `request`                                                                                      | [components.V2ApisCreateAPIRequestBody](../../models/components/v2apiscreateapirequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `opts`                                                                                         | [][operations.Option](../../models/operations/option.md)                                       | :heavy_minus_sign:                                                                             | The options for this request.                                                                  |

### Response

**[*operations.CreateAPIResponse](../../models/operations/createapiresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## DeleteAPI

Permanently delete an API namespace and immediately invalidate all associated keys.

Use this for cleaning up development environments, retiring deprecated services, or removing unused resources.
All keys in the namespace are immediately marked as deleted and will fail verification with `code=NOT_FOUND`.

**Important**: This operation is immediate and permanent. Verify you have the correct API ID before deletion.
If delete protection is enabled, disable it first through the dashboard or API configuration.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.delete_api` (to delete any API)
- `api.<api_id>.delete_api` (to delete a specific API)


### Example Usage

<!-- UsageSnippet language="go" operationID="deleteApi" method="post" path="/v2/apis.deleteApi" -->
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

    res, err := s.Apis.DeleteAPI(ctx, components.V2ApisDeleteAPIRequestBody{
        APIID: "api_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ApisDeleteAPIResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ctx`                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                          | :heavy_check_mark:                                                                             | The context to use for the request.                                                            |
| `request`                                                                                      | [components.V2ApisDeleteAPIRequestBody](../../models/components/v2apisdeleteapirequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `opts`                                                                                         | [][operations.Option](../../models/operations/option.md)                                       | :heavy_minus_sign:                                                                             | The options for this request.                                                                  |

### Response

**[*operations.DeleteAPIResponse](../../models/operations/deleteapiresponse.md), error**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| apierrors.BadRequestErrorResponse         | 400                                       | application/json                          |
| apierrors.UnauthorizedErrorResponse       | 401                                       | application/json                          |
| apierrors.ForbiddenErrorResponse          | 403                                       | application/json                          |
| apierrors.NotFoundErrorResponse           | 404                                       | application/json                          |
| apierrors.PreconditionFailedErrorResponse | 412                                       | application/json                          |
| apierrors.InternalServerErrorResponse     | 500                                       | application/json                          |
| apierrors.APIError                        | 4XX, 5XX                                  | \*/\*                                     |

## GetAPI

Retrieve basic information about an API namespace including its ID and name.

Use this to verify an API exists before performing operations, get the human-readable name when you only have the API ID, or confirm access to a specific namespace. For detailed key information, use the `listKeys` endpoint instead.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.read_api` (to read any API)
- `api.<api_id>.read_api` (to read a specific API)


### Example Usage

<!-- UsageSnippet language="go" operationID="getApi" method="post" path="/v2/apis.getApi" -->
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

    res, err := s.Apis.GetAPI(ctx, components.V2ApisGetAPIRequestBody{
        APIID: "api_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ApisGetAPIResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ctx`                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                    | :heavy_check_mark:                                                                       | The context to use for the request.                                                      |
| `request`                                                                                | [components.V2ApisGetAPIRequestBody](../../models/components/v2apisgetapirequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `opts`                                                                                   | [][operations.Option](../../models/operations/option.md)                                 | :heavy_minus_sign:                                                                       | The options for this request.                                                            |

### Response

**[*operations.GetAPIResponse](../../models/operations/getapiresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## ListKeys

Retrieve a paginated list of API keys for dashboard and administrative interfaces.

Use this to build key management dashboards, filter keys by user with `externalId`, or retrieve key details for administrative purposes. Each key includes status, metadata, permissions, and usage limits.

**Important**: Set `decrypt: true` only in secure contexts to retrieve plaintext key values from recoverable keys.

**Required Permissions**

Your root key must have one of the following permissions for basic key listing:
- `api.*.read_key` (to read keys from any API)
- `api.<api_id>.read_key` (to read keys from a specific API)

Additionally, you need read access to the API itself:
- `api.*.read_api` or `api.<api_id>.read_api`

Additional permission required for decrypt functionality:
- `api.*.decrypt_key` or `api.<api_id>.decrypt_key`


### Example Usage

<!-- UsageSnippet language="go" operationID="listKeys" method="post" path="/v2/apis.listKeys" -->
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

    res, err := s.Apis.ListKeys(ctx, components.V2ApisListKeysRequestBody{
        APIID: "api_1234abcd",
        Cursor: unkey.Pointer("key_1234abcd"),
        ExternalID: unkey.Pointer("user_1234abcd"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ApisListKeysResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `ctx`                                                                                        | [context.Context](https://pkg.go.dev/context#Context)                                        | :heavy_check_mark:                                                                           | The context to use for the request.                                                          |
| `request`                                                                                    | [components.V2ApisListKeysRequestBody](../../models/components/v2apislistkeysrequestbody.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `opts`                                                                                       | [][operations.Option](../../models/operations/option.md)                                     | :heavy_minus_sign:                                                                           | The options for this request.                                                                |

### Response

**[*operations.ListKeysResponse](../../models/operations/listkeysresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |