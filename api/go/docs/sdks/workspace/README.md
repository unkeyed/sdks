# Workspace

## Overview

Workspace limits and usage operations

### Available Operations

* [GetLimits](#getlimits) - Get workspace limits
* [GetUsage](#getusage) - Get workspace usage

## GetLimits

Get every limit of your workspace, with the current value against each
limit that has one.

Use this before an operation that a limit can reject, for example to see how
many custom domains or log drains remain, or how much CPU, memory, and disk
a new deployment can still reserve.

The request takes no parameters. Each limit has a `limit`, which is `null`
when unlimited, and a `current` value when the limit has one. Billable
operations count the current calendar month in UTC. The Compute limits are
present only when the workspace has a Compute plan.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:limits#read`


### Example Usage: withCompute

<!-- UsageSnippet language="go" operationID="workspace.getLimits" method="post" path="/v2/workspace.getLimits" example="withCompute" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetLimits(ctx)
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetLimitsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: withoutCompute

<!-- UsageSnippet language="go" operationID="workspace.getLimits" method="post" path="/v2/workspace.getLimits" example="withoutCompute" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetLimits(ctx)
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetLimitsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ctx`                                                    | [context.Context](https://pkg.go.dev/context#Context)    | :heavy_check_mark:                                       | The context to use for the request.                      |
| `opts`                                                   | [][operations.Option](../../models/operations/option.md) | :heavy_minus_sign:                                       | The options for this request.                            |

### Response

**[*operations.WorkspaceGetLimitsResponse](../../models/operations/workspacegetlimitsresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## GetUsage

Get the usage of your workspace for one calendar month (UTC): billable API
operations, compute usage per environment, and active keys per app.

Use this to track usage during the month or to look back at a past
month. The response has no prices. Your invoice is the source of truth.
Compute usage can be up to 15 minutes late, and it can change for up to 7
days.

Send `{}` for the current month to date, or
`{"period": {"year": 2026, "month": 9}}` for a full past month. The month
must start within the last 90 days.

**Required Permissions**

Your root key must have this permission:
- `unkey:v1:<workspace_id>:usage#read`


### Example Usage: currentMonth

<!-- UsageSnippet language="go" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="currentMonth" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetUsage(ctx, components.V2WorkspaceGetUsageRequestBody{})
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetUsageResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: deletedApp

<!-- UsageSnippet language="go" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="deletedApp" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetUsage(ctx, components.V2WorkspaceGetUsageRequestBody{
        Period: &components.V2WorkspaceGetUsageRequestPeriod{
            Year: 2026,
            Month: 9,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetUsageResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: emptyMonth

<!-- UsageSnippet language="go" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="emptyMonth" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetUsage(ctx, components.V2WorkspaceGetUsageRequestBody{
        Period: &components.V2WorkspaceGetUsageRequestPeriod{
            Year: 2026,
            Month: 9,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetUsageResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: futureMonth

<!-- UsageSnippet language="go" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="futureMonth" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetUsage(ctx, components.V2WorkspaceGetUsageRequestBody{
        Period: &components.V2WorkspaceGetUsageRequestPeriod{
            Year: 2026,
            Month: 9,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetUsageResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidMonth

<!-- UsageSnippet language="go" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="invalidMonth" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetUsage(ctx, components.V2WorkspaceGetUsageRequestBody{
        Period: &components.V2WorkspaceGetUsageRequestPeriod{
            Year: 2026,
            Month: 9,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetUsageResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="go" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="invalidRootKey" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetUsage(ctx, components.V2WorkspaceGetUsageRequestBody{
        Period: &components.V2WorkspaceGetUsageRequestPeriod{
            Year: 2026,
            Month: 9,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetUsageResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="missingPermission" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetUsage(ctx, components.V2WorkspaceGetUsageRequestBody{
        Period: &components.V2WorkspaceGetUsageRequestPeriod{
            Year: 2026,
            Month: 9,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetUsageResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: monthTooOld

<!-- UsageSnippet language="go" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="monthTooOld" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetUsage(ctx, components.V2WorkspaceGetUsageRequestBody{
        Period: &components.V2WorkspaceGetUsageRequestPeriod{
            Year: 2026,
            Month: 9,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetUsageResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: pastMonth

<!-- UsageSnippet language="go" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="pastMonth" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetUsage(ctx, components.V2WorkspaceGetUsageRequestBody{
        Period: &components.V2WorkspaceGetUsageRequestPeriod{
            Year: 2026,
            Month: 9,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetUsageResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: usageUnavailable

<!-- UsageSnippet language="go" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="usageUnavailable" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetUsage(ctx, components.V2WorkspaceGetUsageRequestBody{
        Period: &components.V2WorkspaceGetUsageRequestPeriod{
            Year: 2026,
            Month: 9,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetUsageResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: workspaceRateLimited

<!-- UsageSnippet language="go" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="workspaceRateLimited" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Workspace.GetUsage(ctx, components.V2WorkspaceGetUsageRequestBody{
        Period: &components.V2WorkspaceGetUsageRequestPeriod{
            Year: 2026,
            Month: 9,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2WorkspaceGetUsageResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                  | [context.Context](https://pkg.go.dev/context#Context)                                                  | :heavy_check_mark:                                                                                     | The context to use for the request.                                                                    |
| `request`                                                                                              | [components.V2WorkspaceGetUsageRequestBody](../../models/components/v2workspacegetusagerequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `opts`                                                                                                 | [][operations.Option](../../models/operations/option.md)                                               | :heavy_minus_sign:                                                                                     | The options for this request.                                                                          |

### Response

**[*operations.WorkspaceGetUsageResponse](../../models/operations/workspacegetusageresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |