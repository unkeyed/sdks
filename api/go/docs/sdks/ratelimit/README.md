# Ratelimit

## Overview

Rate limiting operations

### Available Operations

* [DeleteOverride](#deleteoverride) - Delete ratelimit override
* [GetOverride](#getoverride) - Get ratelimit override
* [Limit](#limit) - Apply rate limiting
* [ListOverrides](#listoverrides) - List ratelimit overrides
* [MultiLimit](#multilimit) - Apply multiple rate limit checks
* [SetOverride](#setoverride) - Set ratelimit override

## DeleteOverride

Permanently remove a rate limit override. Affected identifiers immediately revert to the namespace default.

Use this to remove temporary overrides, reset identifiers to standard limits, or clean up outdated rules.

**Important:** Deletion is immediate and permanent. The override cannot be recovered and must be recreated if needed again.

**Permissions:** Requires `ratelimit.*.delete_override` or `ratelimit.<namespace_id>.delete_override`


### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="ratelimit.deleteOverride" method="post" path="/v2/ratelimit.deleteOverride" example="missingPermission" -->
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

    res, err := s.Ratelimit.DeleteOverride(ctx, components.V2RatelimitDeleteOverrideRequestBody{
        Namespace: "<value>",
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
### Example Usage: overrideNotFound

<!-- UsageSnippet language="go" operationID="ratelimit.deleteOverride" method="post" path="/v2/ratelimit.deleteOverride" example="overrideNotFound" -->
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

    res, err := s.Ratelimit.DeleteOverride(ctx, components.V2RatelimitDeleteOverrideRequestBody{
        Namespace: "<value>",
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
### Example Usage: specific

<!-- UsageSnippet language="go" operationID="ratelimit.deleteOverride" method="post" path="/v2/ratelimit.deleteOverride" example="specific" -->
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

    res, err := s.Ratelimit.DeleteOverride(ctx, components.V2RatelimitDeleteOverrideRequestBody{
        Namespace: "api.requests",
        Identifier: "premium_user_123",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitDeleteOverrideResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: wildcard

<!-- UsageSnippet language="go" operationID="ratelimit.deleteOverride" method="post" path="/v2/ratelimit.deleteOverride" example="wildcard" -->
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

    res, err := s.Ratelimit.DeleteOverride(ctx, components.V2RatelimitDeleteOverrideRequestBody{
        Namespace: "api.requests",
        Identifier: "premium_*",
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

## GetOverride

Retrieve the configuration of a specific rate limit override by its identifier.

Use this to inspect override configurations, audit rate limiting policies, or debug rate limiting behavior.

**Important:** The identifier must match exactly as specified when creating the override, including wildcard patterns.

**Permissions:** Requires `ratelimit.*.read_override` or `ratelimit.<namespace_id>.read_override`


### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="ratelimit.getOverride" method="post" path="/v2/ratelimit.getOverride" example="missingPermission" -->
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

    res, err := s.Ratelimit.GetOverride(ctx, components.V2RatelimitGetOverrideRequestBody{
        Namespace: "<value>",
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
### Example Usage: overrideNotFound

<!-- UsageSnippet language="go" operationID="ratelimit.getOverride" method="post" path="/v2/ratelimit.getOverride" example="overrideNotFound" -->
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

    res, err := s.Ratelimit.GetOverride(ctx, components.V2RatelimitGetOverrideRequestBody{
        Namespace: "<value>",
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
### Example Usage: specific

<!-- UsageSnippet language="go" operationID="ratelimit.getOverride" method="post" path="/v2/ratelimit.getOverride" example="specific" -->
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

    res, err := s.Ratelimit.GetOverride(ctx, components.V2RatelimitGetOverrideRequestBody{
        Namespace: "api.requests",
        Identifier: "premium_user_123",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitGetOverrideResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: wildcard

<!-- UsageSnippet language="go" operationID="ratelimit.getOverride" method="post" path="/v2/ratelimit.getOverride" example="wildcard" -->
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

    res, err := s.Ratelimit.GetOverride(ctx, components.V2RatelimitGetOverrideRequestBody{
        Namespace: "api.requests",
        Identifier: "premium_*",
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

## Limit

Check and enforce rate limits for any identifier (user ID, IP address, API client, etc.).

Use this for rate limiting beyond API keys - limit users by ID, IPs by address, or any custom identifier. Supports namespace organization, variable costs, and custom overrides.

**Response Codes**: Rate limit checks return HTTP 200 regardless of whether the limit is exceeded - check the `success` field in the response to determine if the request should be allowed. 4xx responses indicate auth, namespace existence/deletion, or validation errors (e.g., 410 Gone for deleted namespaces). 5xx responses indicate server errors.

**Required Permissions**

Your root key must have one of the following permissions:
- `ratelimit.*.limit` (to check limits in any namespace)
- `ratelimit.<namespace_id>.limit` (to check limits in a specific namespace)


### Example Usage: allowed

<!-- UsageSnippet language="go" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="allowed" -->
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

    res, err := s.Ratelimit.Limit(ctx, components.V2RatelimitLimitRequestBody{
        Namespace: "sms.sign_up",
        Cost: unkey.Pointer[int64](5),
        Duration: 60000,
        Identifier: "user_12345",
        Limit: 1000,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitLimitResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: basic

<!-- UsageSnippet language="go" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="basic" -->
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

    res, err := s.Ratelimit.Limit(ctx, components.V2RatelimitLimitRequestBody{
        Namespace: "api.requests",
        Cost: unkey.Pointer[int64](5),
        Duration: 60000,
        Identifier: "user_abc123",
        Limit: 100,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitLimitResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: ipLimit

<!-- UsageSnippet language="go" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="ipLimit" -->
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

    res, err := s.Ratelimit.Limit(ctx, components.V2RatelimitLimitRequestBody{
        Namespace: "auth.login",
        Cost: unkey.Pointer[int64](5),
        Duration: 60000,
        Identifier: "203.0.113.42",
        Limit: 5,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitLimitResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: limitReached

<!-- UsageSnippet language="go" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="limitReached" -->
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

    res, err := s.Ratelimit.Limit(ctx, components.V2RatelimitLimitRequestBody{
        Namespace: "sms.sign_up",
        Cost: unkey.Pointer[int64](5),
        Duration: 60000,
        Identifier: "user_12345",
        Limit: 1000,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitLimitResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: weightedCost

<!-- UsageSnippet language="go" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="weightedCost" -->
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

    res, err := s.Ratelimit.Limit(ctx, components.V2RatelimitLimitRequestBody{
        Namespace: "api.heavy_operations",
        Cost: unkey.Pointer[int64](5),
        Duration: 3600000,
        Identifier: "user_def456",
        Limit: 50,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitLimitResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: withOverride

<!-- UsageSnippet language="go" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="withOverride" -->
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

    res, err := s.Ratelimit.Limit(ctx, components.V2RatelimitLimitRequestBody{
        Namespace: "sms.sign_up",
        Cost: unkey.Pointer[int64](5),
        Duration: 60000,
        Identifier: "user_12345",
        Limit: 1000,
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
| apierrors.GoneErrorResponse           | 410                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## ListOverrides

Retrieve a paginated list of all rate limit overrides in a namespace.

Use this to audit rate limiting policies, build admin dashboards, or manage override configurations.

**Important:** Results are paginated. Use the cursor parameter to retrieve additional pages when more results are available.

**Permissions:** Requires `ratelimit.*.read_override` or `ratelimit.<namespace_id>.read_override`


### Example Usage: basic

<!-- UsageSnippet language="go" operationID="ratelimit.listOverrides" method="post" path="/v2/ratelimit.listOverrides" example="basic" -->
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

    res, err := s.Ratelimit.ListOverrides(ctx, components.V2RatelimitListOverridesRequestBody{
        Namespace: "api.requests",
        Limit: unkey.Pointer[int64](20),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitListOverridesResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="ratelimit.listOverrides" method="post" path="/v2/ratelimit.listOverrides" example="missingPermission" -->
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

    res, err := s.Ratelimit.ListOverrides(ctx, components.V2RatelimitListOverridesRequestBody{
        Namespace: "<value>",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitListOverridesResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: pagination

<!-- UsageSnippet language="go" operationID="ratelimit.listOverrides" method="post" path="/v2/ratelimit.listOverrides" example="pagination" -->
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

    res, err := s.Ratelimit.ListOverrides(ctx, components.V2RatelimitListOverridesRequestBody{
        Namespace: "api.requests",
        Cursor: unkey.Pointer("cursor_eyJsYXN0SWQiOiJvdnJfM2RITGNOeVN6SnppRHlwMkpla2E5ciJ9"),
    })
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

## MultiLimit

Check and enforce multiple rate limits in a single request for any identifiers (user IDs, IP addresses, API clients, etc.).

Use this to efficiently check multiple rate limits at once. Each rate limit check is independent and returns its own result with a top-level `passed` indicator showing if all checks succeeded.

**Response Codes**: Rate limit checks return HTTP 200 regardless of whether limits are exceeded - check the `passed` field to see if all limits passed, or the `success` field in each individual result. 4xx responses indicate auth, namespace existence/deletion, or validation errors (e.g., 410 Gone for deleted namespaces). 5xx responses indicate server errors.

**Required Permissions**

Your root key must have one of the following permissions:
- `ratelimit.*.limit` (to check limits in any namespace)
- `ratelimit.<namespace_id>.limit` (to check limits in all specific namespaces being checked)


### Example Usage: allAllowed

<!-- UsageSnippet language="go" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="allAllowed" -->
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

    res, err := s.Ratelimit.MultiLimit(ctx, []components.V2RatelimitLimitRequestBody{})
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitMultiLimitResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: ipHashAndUserLimits

<!-- UsageSnippet language="go" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="ipHashAndUserLimits" -->
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

    res, err := s.Ratelimit.MultiLimit(ctx, []components.V2RatelimitLimitRequestBody{
        components.V2RatelimitLimitRequestBody{
            Namespace: "auth.login",
            Cost: unkey.Pointer[int64](5),
            Duration: 60000,
            Identifier: "sha256_8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4",
            Limit: 10,
        },
        components.V2RatelimitLimitRequestBody{
            Namespace: "api.requests",
            Cost: unkey.Pointer[int64](5),
            Duration: 3600000,
            Identifier: "user_def456",
            Limit: 1000,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitMultiLimitResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: mixedResults

<!-- UsageSnippet language="go" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="mixedResults" -->
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

    res, err := s.Ratelimit.MultiLimit(ctx, []components.V2RatelimitLimitRequestBody{})
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitMultiLimitResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: multipleChecks

<!-- UsageSnippet language="go" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="multipleChecks" -->
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

    res, err := s.Ratelimit.MultiLimit(ctx, []components.V2RatelimitLimitRequestBody{
        components.V2RatelimitLimitRequestBody{
            Namespace: "api.requests",
            Cost: unkey.Pointer[int64](5),
            Duration: 60000,
            Identifier: "user_abc123",
            Limit: 100,
        },
        components.V2RatelimitLimitRequestBody{
            Namespace: "auth.login",
            Cost: unkey.Pointer[int64](5),
            Duration: 60000,
            Identifier: "user_abc123",
            Limit: 5,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitMultiLimitResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: withOverride

<!-- UsageSnippet language="go" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="withOverride" -->
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

    res, err := s.Ratelimit.MultiLimit(ctx, []components.V2RatelimitLimitRequestBody{
        components.V2RatelimitLimitRequestBody{
            Namespace: "sms.sign_up",
            Cost: unkey.Pointer[int64](5),
            Duration: 60000,
            Identifier: "user_12345",
            Limit: 1000,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitMultiLimitResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: withWeightedCost

<!-- UsageSnippet language="go" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="withWeightedCost" -->
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

    res, err := s.Ratelimit.MultiLimit(ctx, []components.V2RatelimitLimitRequestBody{
        components.V2RatelimitLimitRequestBody{
            Namespace: "api.light_operations",
            Duration: 60000,
            Identifier: "user_xyz789",
            Limit: 100,
        },
        components.V2RatelimitLimitRequestBody{
            Namespace: "api.heavy_operations",
            Cost: unkey.Pointer[int64](5),
            Duration: 3600000,
            Identifier: "user_xyz789",
            Limit: 50,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitMultiLimitResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ctx`                                                    | [context.Context](https://pkg.go.dev/context#Context)    | :heavy_check_mark:                                       | The context to use for the request.                      |
| `request`                                                | [[]components.V2RatelimitLimitRequestBody](../../.md)    | :heavy_check_mark:                                       | The request object to use for the request.               |
| `opts`                                                   | [][operations.Option](../../models/operations/option.md) | :heavy_minus_sign:                                       | The options for this request.                            |

### Response

**[*operations.RatelimitMultiLimitResponse](../../models/operations/ratelimitmultilimitresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.GoneErrorResponse           | 410                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## SetOverride

Create or update a custom rate limit for specific identifiers, bypassing the namespace default.

Use this to create premium tiers with higher limits, apply stricter limits to specific users, or implement emergency throttling.

**Important:** Overrides take effect immediately and completely replace the default limit for matching identifiers. Use wildcard patterns (e.g., `premium_*`) to match multiple identifiers.

**Permissions:** Requires `ratelimit.*.set_override` or `ratelimit.<namespace_id>.set_override`


### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="ratelimit.setOverride" method="post" path="/v2/ratelimit.setOverride" example="missingPermission" -->
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

    res, err := s.Ratelimit.SetOverride(ctx, components.V2RatelimitSetOverrideRequestBody{
        Namespace: "<value>",
        Duration: 956831,
        Identifier: "<value>",
        Limit: 816580,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitSetOverrideResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: namespaceNotFound

<!-- UsageSnippet language="go" operationID="ratelimit.setOverride" method="post" path="/v2/ratelimit.setOverride" example="namespaceNotFound" -->
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

    res, err := s.Ratelimit.SetOverride(ctx, components.V2RatelimitSetOverrideRequestBody{
        Namespace: "<value>",
        Duration: 956831,
        Identifier: "<value>",
        Limit: 816580,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitSetOverrideResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: premium

<!-- UsageSnippet language="go" operationID="ratelimit.setOverride" method="post" path="/v2/ratelimit.setOverride" example="premium" -->
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

    res, err := s.Ratelimit.SetOverride(ctx, components.V2RatelimitSetOverrideRequestBody{
        Namespace: "api.requests",
        Duration: 60000,
        Identifier: "premium_user_123",
        Limit: 1000,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RatelimitSetOverrideResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: wildcard

<!-- UsageSnippet language="go" operationID="ratelimit.setOverride" method="post" path="/v2/ratelimit.setOverride" example="wildcard" -->
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

    res, err := s.Ratelimit.SetOverride(ctx, components.V2RatelimitSetOverrideRequestBody{
        Namespace: "api.requests",
        Duration: 60000,
        Identifier: "premium_*",
        Limit: 500,
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