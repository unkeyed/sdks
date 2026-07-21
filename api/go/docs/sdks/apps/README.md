# Apps

## Overview

App management operations

### Available Operations

* [CreateApp](#createapp) - Create app
* [DeleteApp](#deleteapp) - Delete app
* [GetApp](#getapp) - Get app
* [ListApps](#listapps) - List apps
* [UpdateApp](#updateapp) - Update app

## CreateApp

Create an app within a project. The app is created with default `production` and `preview` environments.

The slug you provide is the stable, caller-defined handle used to reference this app. It must be unique within the project.

**Important**: The slug cannot collide with an existing app in the same project. A duplicate slug returns a 409 conflict.

**Required Permissions**

Your root key must have one of the following permissions:
- `project.*.create_app` (to create apps in any project)
- `project.<project_id>.create_app` (to create apps in a specific project)


### Example Usage: appExists

<!-- UsageSnippet language="go" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="appExists" -->
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

    res, err := s.Apps.CreateApp(ctx, components.V2AppsCreateAppRequestBody{
        Project: "proj_1234abcd",
        Name: "Payments API",
        Slug: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsCreateAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: basic

<!-- UsageSnippet language="go" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="basic" -->
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

    res, err := s.Apps.CreateApp(ctx, components.V2AppsCreateAppRequestBody{
        Project: "payments",
        Name: "Payments API",
        Slug: "payments-api",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsCreateAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidSlug

<!-- UsageSnippet language="go" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="invalidSlug" -->
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

    res, err := s.Apps.CreateApp(ctx, components.V2AppsCreateAppRequestBody{
        Project: "proj_1234abcd",
        Name: "Payments API",
        Slug: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsCreateAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="missingPermission" -->
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

    res, err := s.Apps.CreateApp(ctx, components.V2AppsCreateAppRequestBody{
        Project: "proj_1234abcd",
        Name: "Payments API",
        Slug: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsCreateAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: projectNotFound

<!-- UsageSnippet language="go" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="projectNotFound" -->
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

    res, err := s.Apps.CreateApp(ctx, components.V2AppsCreateAppRequestBody{
        Project: "proj_1234abcd",
        Name: "Payments API",
        Slug: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsCreateAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: success

<!-- UsageSnippet language="go" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="success" -->
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

    res, err := s.Apps.CreateApp(ctx, components.V2AppsCreateAppRequestBody{
        Project: "proj_1234abcd",
        Name: "Payments API",
        Slug: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsCreateAppResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ctx`                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                          | :heavy_check_mark:                                                                             | The context to use for the request.                                                            |
| `request`                                                                                      | [components.V2AppsCreateAppRequestBody](../../models/components/v2appscreateapprequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `opts`                                                                                         | [][operations.Option](../../models/operations/option.md)                                       | :heavy_minus_sign:                                                                             | The options for this request.                                                                  |

### Response

**[*operations.AppsCreateAppResponse](../../models/operations/appscreateappresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.ConflictErrorResponse        | 409                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## DeleteApp

Delete an existing app, identified by its id.

Deletion is asynchronous and eventually consistent. The app and all of its associated resources (environments, deployments, custom domains) are torn down by a background workflow. A successful response indicates the deletion was enqueued, not that every resource has already been removed.

Apps with delete protection enabled cannot be deleted until protection is disabled.

**Required Permissions**

Your root key must have one of the following permissions:
- `app.*.delete_app` (to delete any app)
- `app.<app_id>.delete_app` (to delete a specific app)


### Example Usage: appNotFound

<!-- UsageSnippet language="go" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="appNotFound" -->
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

    res, err := s.Apps.DeleteApp(ctx, components.V2AppsDeleteAppRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsDeleteAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: deleteById

<!-- UsageSnippet language="go" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="deleteById" -->
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

    res, err := s.Apps.DeleteApp(ctx, components.V2AppsDeleteAppRequestBody{
        Project: "payments",
        App: "app_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsDeleteAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: deleteBySlug

<!-- UsageSnippet language="go" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="deleteBySlug" -->
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

    res, err := s.Apps.DeleteApp(ctx, components.V2AppsDeleteAppRequestBody{
        Project: "payments",
        App: "payments-service",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsDeleteAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="missingPermission" -->
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

    res, err := s.Apps.DeleteApp(ctx, components.V2AppsDeleteAppRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsDeleteAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: success

<!-- UsageSnippet language="go" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="success" -->
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

    res, err := s.Apps.DeleteApp(ctx, components.V2AppsDeleteAppRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsDeleteAppResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ctx`                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                          | :heavy_check_mark:                                                                             | The context to use for the request.                                                            |
| `request`                                                                                      | [components.V2AppsDeleteAppRequestBody](../../models/components/v2appsdeleteapprequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `opts`                                                                                         | [][operations.Option](../../models/operations/option.md)                                       | :heavy_minus_sign:                                                                             | The options for this request.                                                                  |

### Response

**[*operations.AppsDeleteAppResponse](../../models/operations/appsdeleteappresponse.md), error**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| apierrors.BadRequestErrorResponse         | 400                                       | application/json                          |
| apierrors.UnauthorizedErrorResponse       | 401                                       | application/json                          |
| apierrors.ForbiddenErrorResponse          | 403                                       | application/json                          |
| apierrors.NotFoundErrorResponse           | 404                                       | application/json                          |
| apierrors.PreconditionFailedErrorResponse | 412                                       | application/json                          |
| apierrors.TooManyRequestsErrorResponse    | 429                                       | application/problem+json                  |
| apierrors.InternalServerErrorResponse     | 500                                       | application/json                          |
| apierrors.APIError                        | 4XX, 5XX                                  | \*/\*                                     |

## GetApp

Retrieve a single app by its id or slug within a project.

Use this to fetch app details after creation or to verify an app exists before performing operations.

**Required Permissions**

Your root key must have one of the following permissions:
- `app.*.read_app` (to read any app)
- `app.<app_id>.read_app` (to read a specific app)


### Example Usage: app

<!-- UsageSnippet language="go" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="app" -->
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

    res, err := s.Apps.GetApp(ctx, components.V2AppsGetAppRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsGetAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: appNotFound

<!-- UsageSnippet language="go" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="appNotFound" -->
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

    res, err := s.Apps.GetApp(ctx, components.V2AppsGetAppRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsGetAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: getById

<!-- UsageSnippet language="go" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="getById" -->
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

    res, err := s.Apps.GetApp(ctx, components.V2AppsGetAppRequestBody{
        Project: "payments",
        App: "app_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsGetAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: getBySlug

<!-- UsageSnippet language="go" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="getBySlug" -->
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

    res, err := s.Apps.GetApp(ctx, components.V2AppsGetAppRequestBody{
        Project: "payments",
        App: "payments-api",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsGetAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="missingPermission" -->
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

    res, err := s.Apps.GetApp(ctx, components.V2AppsGetAppRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsGetAppResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ctx`                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                    | :heavy_check_mark:                                                                       | The context to use for the request.                                                      |
| `request`                                                                                | [components.V2AppsGetAppRequestBody](../../models/components/v2appsgetapprequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `opts`                                                                                   | [][operations.Option](../../models/operations/option.md)                                 | :heavy_minus_sign:                                                                       | The options for this request.                                                            |

### Response

**[*operations.AppsGetAppResponse](../../models/operations/appsgetappresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## ListApps

Retrieve a paginated list of apps within a project.

Use this to enumerate every app in a project. Results are ordered by app id and paginated; when `hasMore` is true, pass the returned `cursor` to fetch the next page.

**Required Permissions**

Your root key must have the following permission:
- `app.*.read_app` (to read apps in any project)


### Example Usage: appList

<!-- UsageSnippet language="go" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="appList" -->
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

    res, err := s.Apps.ListApps(ctx, components.V2AppsListAppsRequestBody{
        Project: "proj_1234abcd",
        Cursor: unkey.Pointer("app_1234abcd"),
        Search: unkey.Pointer("checkout"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsListAppsResponseBody != nil {
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
### Example Usage: basic

<!-- UsageSnippet language="go" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="basic" -->
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

    res, err := s.Apps.ListApps(ctx, components.V2AppsListAppsRequestBody{
        Project: "payments-service",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsListAppsResponseBody != nil {
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
### Example Usage: invalidLimit

<!-- UsageSnippet language="go" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="invalidLimit" -->
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

    res, err := s.Apps.ListApps(ctx, components.V2AppsListAppsRequestBody{
        Project: "proj_1234abcd",
        Cursor: unkey.Pointer("app_1234abcd"),
        Search: unkey.Pointer("checkout"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsListAppsResponseBody != nil {
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
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="missingPermission" -->
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

    res, err := s.Apps.ListApps(ctx, components.V2AppsListAppsRequestBody{
        Project: "proj_1234abcd",
        Cursor: unkey.Pointer("app_1234abcd"),
        Search: unkey.Pointer("checkout"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsListAppsResponseBody != nil {
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
### Example Usage: projectNotFound

<!-- UsageSnippet language="go" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="projectNotFound" -->
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

    res, err := s.Apps.ListApps(ctx, components.V2AppsListAppsRequestBody{
        Project: "proj_1234abcd",
        Cursor: unkey.Pointer("app_1234abcd"),
        Search: unkey.Pointer("checkout"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsListAppsResponseBody != nil {
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `ctx`                                                                                        | [context.Context](https://pkg.go.dev/context#Context)                                        | :heavy_check_mark:                                                                           | The context to use for the request.                                                          |
| `request`                                                                                    | [components.V2AppsListAppsRequestBody](../../models/components/v2appslistappsrequestbody.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `opts`                                                                                       | [][operations.Option](../../models/operations/option.md)                                     | :heavy_minus_sign:                                                                           | The options for this request.                                                                |

### Response

**[*operations.AppsListAppsResponse](../../models/operations/appslistappsresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## UpdateApp

Update an existing app, identified by its id.

The app name, slug, default branch, and delete protection setting can be changed. Omitted fields are left unchanged. Changing the slug affects the deployment domains generated for this app.

**Important**: The slug cannot collide with an existing app in the same project. A duplicate slug returns a 409 conflict.

**Required Permissions**

Your root key must have one of the following permissions:
- `app.*.update_app` (to update any app)
- `app.<app_id>.update_app` (to update a specific app)


### Example Usage: app

<!-- UsageSnippet language="go" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="app" -->
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

    res, err := s.Apps.UpdateApp(ctx, components.V2AppsUpdateAppRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Name: unkey.Pointer("Payments API"),
        Slug: unkey.Pointer("proj_1234abcd"),
        DefaultBranch: unkey.Pointer("main"),
        DeleteProtection: unkey.Pointer(true),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsUpdateAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: appExists

<!-- UsageSnippet language="go" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="appExists" -->
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

    res, err := s.Apps.UpdateApp(ctx, components.V2AppsUpdateAppRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Name: unkey.Pointer("Payments API"),
        Slug: unkey.Pointer("proj_1234abcd"),
        DefaultBranch: unkey.Pointer("main"),
        DeleteProtection: unkey.Pointer(true),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsUpdateAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: appNotFound

<!-- UsageSnippet language="go" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="appNotFound" -->
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

    res, err := s.Apps.UpdateApp(ctx, components.V2AppsUpdateAppRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Name: unkey.Pointer("Payments API"),
        Slug: unkey.Pointer("proj_1234abcd"),
        DefaultBranch: unkey.Pointer("main"),
        DeleteProtection: unkey.Pointer(true),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsUpdateAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: changeSlug

<!-- UsageSnippet language="go" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="changeSlug" -->
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

    res, err := s.Apps.UpdateApp(ctx, components.V2AppsUpdateAppRequestBody{
        Project: "payments",
        App: "payments-service",
        Slug: unkey.Pointer("payments-api"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsUpdateAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="missingPermission" -->
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

    res, err := s.Apps.UpdateApp(ctx, components.V2AppsUpdateAppRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Name: unkey.Pointer("Payments API"),
        Slug: unkey.Pointer("proj_1234abcd"),
        DefaultBranch: unkey.Pointer("main"),
        DeleteProtection: unkey.Pointer(true),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsUpdateAppResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: rename

<!-- UsageSnippet language="go" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="rename" -->
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

    res, err := s.Apps.UpdateApp(ctx, components.V2AppsUpdateAppRequestBody{
        Project: "payments",
        App: "app_1234abcd",
        Name: unkey.Pointer("Payments API"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AppsUpdateAppResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ctx`                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                          | :heavy_check_mark:                                                                             | The context to use for the request.                                                            |
| `request`                                                                                      | [components.V2AppsUpdateAppRequestBody](../../models/components/v2appsupdateapprequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `opts`                                                                                         | [][operations.Option](../../models/operations/option.md)                                       | :heavy_minus_sign:                                                                             | The options for this request.                                                                  |

### Response

**[*operations.AppsUpdateAppResponse](../../models/operations/appsupdateappresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.ConflictErrorResponse        | 409                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |