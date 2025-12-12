# Identities

## Overview

Identity management operations

### Available Operations

* [CreateIdentity](#createidentity) - Create Identity
* [DeleteIdentity](#deleteidentity) - Delete Identity
* [GetIdentity](#getidentity) - Get Identity
* [ListIdentities](#listidentities) - List Identities
* [UpdateIdentity](#updateidentity) - Update Identity

## CreateIdentity

Create an identity to group multiple API keys under a single entity. Identities enable shared rate limits and metadata across all associated keys.

Perfect for users with multiple devices, organizations with multiple API keys, or when you need unified rate limiting across different services.

**Important**
Requires `identity.*.create_identity` permission


### Example Usage

<!-- UsageSnippet language="go" operationID="identities.createIdentity" method="post" path="/v2/identities.createIdentity" -->
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

    res, err := s.Identities.CreateIdentity(ctx, components.V2IdentitiesCreateIdentityRequestBody{
        ExternalID: "user_123",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2IdentitiesCreateIdentityResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                | [context.Context](https://pkg.go.dev/context#Context)                                                                | :heavy_check_mark:                                                                                                   | The context to use for the request.                                                                                  |
| `request`                                                                                                            | [components.V2IdentitiesCreateIdentityRequestBody](../../models/components/v2identitiescreateidentityrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `opts`                                                                                                               | [][operations.Option](../../models/operations/option.md)                                                             | :heavy_minus_sign:                                                                                                   | The options for this request.                                                                                        |

### Response

**[*operations.IdentitiesCreateIdentityResponse](../../models/operations/identitiescreateidentityresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.ConflictErrorResponse       | 409                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## DeleteIdentity

Permanently delete an identity. This operation cannot be undone.

Use this for data cleanup, compliance requirements, or when removing entities from your system.

> **Important**  
> Requires `identity.*.delete_identity` permission  
> Associated API keys remain functional but lose shared resources  
> External ID becomes available for reuse immediately


### Example Usage

<!-- UsageSnippet language="go" operationID="v2.identities.deleteIdentity" method="post" path="/v2/identities.deleteIdentity" -->
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

    res, err := s.Identities.DeleteIdentity(ctx, components.V2IdentitiesDeleteIdentityRequestBody{
        Identity: "user_123",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2IdentitiesDeleteIdentityResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                | [context.Context](https://pkg.go.dev/context#Context)                                                                | :heavy_check_mark:                                                                                                   | The context to use for the request.                                                                                  |
| `request`                                                                                                            | [components.V2IdentitiesDeleteIdentityRequestBody](../../models/components/v2identitiesdeleteidentityrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `opts`                                                                                                               | [][operations.Option](../../models/operations/option.md)                                                             | :heavy_minus_sign:                                                                                                   | The options for this request.                                                                                        |

### Response

**[*operations.V2IdentitiesDeleteIdentityResponse](../../models/operations/v2identitiesdeleteidentityresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/problem+json              |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/problem+json              |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/problem+json              |
| apierrors.NotFoundErrorResponse       | 404                                   | application/problem+json              |
| apierrors.InternalServerErrorResponse | 500                                   | application/problem+json              |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## GetIdentity

Retrieve an identity by external ID. Returns metadata, rate limits, and other associated data.

Use this to check if an identity exists, view configurations, or build management dashboards.

> **Important**  
> Requires `identity.*.read_identity` permission


### Example Usage

<!-- UsageSnippet language="go" operationID="identities.getIdentity" method="post" path="/v2/identities.getIdentity" -->
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

    res, err := s.Identities.GetIdentity(ctx, components.V2IdentitiesGetIdentityRequestBody{
        Identity: "user_123",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2IdentitiesGetIdentityResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                                          | :heavy_check_mark:                                                                                             | The context to use for the request.                                                                            |
| `request`                                                                                                      | [components.V2IdentitiesGetIdentityRequestBody](../../models/components/v2identitiesgetidentityrequestbody.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `opts`                                                                                                         | [][operations.Option](../../models/operations/option.md)                                                       | :heavy_minus_sign:                                                                                             | The options for this request.                                                                                  |

### Response

**[*operations.IdentitiesGetIdentityResponse](../../models/operations/identitiesgetidentityresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## ListIdentities

Get a paginated list of all identities in your workspace. Returns metadata and rate limit configurations.

Perfect for building management dashboards, auditing configurations, or browsing your identities.

> **Important**  
> Requires `identity.*.read_identity` permission


### Example Usage

<!-- UsageSnippet language="go" operationID="identities.listIdentities" method="post" path="/v2/identities.listIdentities" -->
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

    res, err := s.Identities.ListIdentities(ctx, components.V2IdentitiesListIdentitiesRequestBody{
        Limit: unkey.Pointer[int64](50),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2IdentitiesListIdentitiesResponseBody != nil {
        for {
            // handle items

            res, err = res.Next()

            if err != nil {
                // handle error
            }

            if res == nil {
                break
            }
        }
    }
}
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                | [context.Context](https://pkg.go.dev/context#Context)                                                                | :heavy_check_mark:                                                                                                   | The context to use for the request.                                                                                  |
| `request`                                                                                                            | [components.V2IdentitiesListIdentitiesRequestBody](../../models/components/v2identitieslistidentitiesrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `opts`                                                                                                               | [][operations.Option](../../models/operations/option.md)                                                             | :heavy_minus_sign:                                                                                                   | The options for this request.                                                                                        |

### Response

**[*operations.IdentitiesListIdentitiesResponse](../../models/operations/identitieslistidentitiesresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## UpdateIdentity

Update an identity's metadata and rate limits. Only specified fields are modified - others remain unchanged.

Perfect for subscription changes, plan upgrades, or updating user information. Changes take effect immediately.

> **Important**
> Requires `identity.*.update_identity` permission
> Rate limit changes propagate within 30 seconds


### Example Usage

<!-- UsageSnippet language="go" operationID="v2.identities.updateIdentity" method="post" path="/v2/identities.updateIdentity" -->
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

    res, err := s.Identities.UpdateIdentity(ctx, components.V2IdentitiesUpdateIdentityRequestBody{
        Identity: "user_123",
        Meta: map[string]any{
            "email": "alice@example.com",
            "name": "Alice Smith",
            "plan": "premium",
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2IdentitiesUpdateIdentityResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                | [context.Context](https://pkg.go.dev/context#Context)                                                                | :heavy_check_mark:                                                                                                   | The context to use for the request.                                                                                  |
| `request`                                                                                                            | [components.V2IdentitiesUpdateIdentityRequestBody](../../models/components/v2identitiesupdateidentityrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `opts`                                                                                                               | [][operations.Option](../../models/operations/option.md)                                                             | :heavy_minus_sign:                                                                                                   | The options for this request.                                                                                        |

### Response

**[*operations.V2IdentitiesUpdateIdentityResponse](../../models/operations/v2identitiesupdateidentityresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |