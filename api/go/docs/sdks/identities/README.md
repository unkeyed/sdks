# Identities
(*Identities*)

## Overview

### Available Operations

* [CreateIdentity](#createidentity)
* [DeleteIdentity](#deleteidentity)

## CreateIdentity

### Example Usage

```go
package main

import(
	"context"
	api "github.com/unkeyed/sdks/go/api/v2"
	"github.com/unkeyed/sdks/go/api/v2/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := api.New(
        api.WithSecurity("UNKEY_ROOT_KEY"),
    )

    res, err := s.Identities.CreateIdentity(ctx, components.V2IdentitiesCreateIdentityRequestBody{
        ExternalID: "user_123",
        Ratelimits: []components.Ratelimit{
            components.Ratelimit{
                Name: "api",
                Limit: 944235,
                Duration: 703242,
            },
            components.Ratelimit{
                Name: "api",
                Limit: 17275,
                Duration: 470912,
            },
            components.Ratelimit{
                Name: "api",
                Limit: 919479,
                Duration: 557622,
            },
        },
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
| apierrors.BadRequestErrorResponse     | 400                                   | application/problem+json              |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/problem+json              |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/problem+json              |
| apierrors.ConflictErrorResponse       | 409                                   | application/problem+json              |
| apierrors.InternalServerErrorResponse | 500                                   | application/problem+json              |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## DeleteIdentity

### Example Usage

```go
package main

import(
	"context"
	api "github.com/unkeyed/sdks/go/api/v2"
	"github.com/unkeyed/sdks/go/api/v2/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := api.New(
        api.WithSecurity("UNKEY_ROOT_KEY"),
    )

    res, err := s.Identities.DeleteIdentity(ctx, components.CreateV2IdentitiesDeleteIdentityRequestBodyUnionV2IdentitiesDeleteIdentityRequestBody1(
        components.V2IdentitiesDeleteIdentityRequestBody1{
            ExternalID: "user_123",
            IdentityID: api.String("id_123"),
        },
    ))
    if err != nil {
        log.Fatal(err)
    }
    if res.V2IdentitiesDeleteIdentityResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                                                          | :heavy_check_mark:                                                                                                             | The context to use for the request.                                                                                            |
| `request`                                                                                                                      | [components.V2IdentitiesDeleteIdentityRequestBodyUnion](../../models/components/v2identitiesdeleteidentityrequestbodyunion.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `opts`                                                                                                                         | [][operations.Option](../../models/operations/option.md)                                                                       | :heavy_minus_sign:                                                                                                             | The options for this request.                                                                                                  |

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