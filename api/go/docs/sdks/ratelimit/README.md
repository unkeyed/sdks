# Ratelimit
(*Ratelimit*)

## Overview

### Available Operations

* [Limit](#limit)
* [SetOverride](#setoverride)
* [GetOverride](#getoverride)
* [ListOverrides](#listoverrides)
* [DeleteOverride](#deleteoverride)

## Limit

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

    res, err := s.Ratelimit.Limit(ctx, components.V2RatelimitLimitRequestBody{
        Namespace: "sms.sign_up",
        Duration: 711276,
        Identifier: "<value>",
        Limit: 581877,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitLimitResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                            | [context.Context](https://pkg.go.dev/context#Context)                                            | :heavy_check_mark:                                                                               | The context to use for the request.                                                              |
| `request`                                                                                        | [components.V2RatelimitLimitRequestBody](../../models/components/v2ratelimitlimitrequestbody.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `opts`                                                                                           | [][operations.Option](../../models/operations/option.md)                                         | :heavy_minus_sign:                                                                               | The options for this request.                                                                    |

### Response

**[*operations.RatelimitLimitResponse](../../models/operations/ratelimitlimitresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## SetOverride

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

    res, err := s.Ratelimit.SetOverride(ctx, components.V2RatelimitSetOverrideRequestBody{
        Duration: 920725,
        Identifier: "<value>",
        Limit: 354329,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitSetOverrideResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                        | [context.Context](https://pkg.go.dev/context#Context)                                                        | :heavy_check_mark:                                                                                           | The context to use for the request.                                                                          |
| `request`                                                                                                    | [components.V2RatelimitSetOverrideRequestBody](../../models/components/v2ratelimitsetoverriderequestbody.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `opts`                                                                                                       | [][operations.Option](../../models/operations/option.md)                                                     | :heavy_minus_sign:                                                                                           | The options for this request.                                                                                |

### Response

**[*operations.RatelimitSetOverrideResponse](../../models/operations/ratelimitsetoverrideresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## GetOverride

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

    res, err := s.Ratelimit.GetOverride(ctx, components.V2RatelimitGetOverrideRequestBody{
        Identifier: "<value>",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitGetOverrideResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                        | [context.Context](https://pkg.go.dev/context#Context)                                                        | :heavy_check_mark:                                                                                           | The context to use for the request.                                                                          |
| `request`                                                                                                    | [components.V2RatelimitGetOverrideRequestBody](../../models/components/v2ratelimitgetoverriderequestbody.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `opts`                                                                                                       | [][operations.Option](../../models/operations/option.md)                                                     | :heavy_minus_sign:                                                                                           | The options for this request.                                                                                |

### Response

**[*operations.RatelimitGetOverrideResponse](../../models/operations/ratelimitgetoverrideresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## ListOverrides

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

    res, err := s.Ratelimit.ListOverrides(ctx, components.V2RatelimitListOverridesRequestBody{})
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitListOverridesResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                            | [context.Context](https://pkg.go.dev/context#Context)                                                            | :heavy_check_mark:                                                                                               | The context to use for the request.                                                                              |
| `request`                                                                                                        | [components.V2RatelimitListOverridesRequestBody](../../models/components/v2ratelimitlistoverridesrequestbody.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `opts`                                                                                                           | [][operations.Option](../../models/operations/option.md)                                                         | :heavy_minus_sign:                                                                                               | The options for this request.                                                                                    |

### Response

**[*operations.RatelimitListOverridesResponse](../../models/operations/ratelimitlistoverridesresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## DeleteOverride

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

    res, err := s.Ratelimit.DeleteOverride(ctx, components.V2RatelimitDeleteOverrideRequestBody{
        Identifier: "<value>",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitDeleteOverrideResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                              | [context.Context](https://pkg.go.dev/context#Context)                                                              | :heavy_check_mark:                                                                                                 | The context to use for the request.                                                                                |
| `request`                                                                                                          | [components.V2RatelimitDeleteOverrideRequestBody](../../models/components/v2ratelimitdeleteoverriderequestbody.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `opts`                                                                                                             | [][operations.Option](../../models/operations/option.md)                                                           | :heavy_minus_sign:                                                                                                 | The options for this request.                                                                                      |

### Response

**[*operations.RatelimitDeleteOverrideResponse](../../models/operations/ratelimitdeleteoverrideresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |