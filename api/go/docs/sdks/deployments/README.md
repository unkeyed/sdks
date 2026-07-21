# Deployments

## Overview

Deployment operations

### Available Operations

* [CreateDeployment](#createdeployment) - Create deployment
* [GetDeployment](#getdeployment) - Get deployment
* [ListDeployments](#listdeployments) - List deployments
* [PromoteDeployment](#promotedeployment) - Promote deployment
* [RollbackDeployment](#rollbackdeployment) - Rollback deployment
* [StartDeployment](#startdeployment) - Start deployment
* [StopDeployment](#stopdeployment) - Stop deployment

## CreateDeployment

Create a deployment for an app in a project.

Provide exactly one source:
- `image`: deploy a prebuilt Docker image as-is (no build).
- `git`: build and deploy from the app's connected GitHub repository, a branch, a specific commit, or a fork commit. Requires the app to have a repository connected.
- `deployment`: re-run an existing deployment by its id. Git-connected apps rebuild from the recorded commit; other apps reuse the recorded image.

Returns immediately with a `deploymentId`. The build and rollout run asynchronously — poll `deployments.getDeployment` to watch status until it is ready.

**Authentication**: requires a root key with permission to create deployments.


### Example Usage

<!-- UsageSnippet language="go" operationID="deployments.createDeployment" method="post" path="/v2/deployments.createDeployment" -->
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

    res, err := s.Deployments.CreateDeployment(ctx, components.CreateV2DeploymentsCreateDeploymentRequestBodyUnionV2DeploymentsCreateDeploymentRequestBody1(
        components.V2DeploymentsCreateDeploymentRequestBody1{
            Project: "proj_1234abcd",
            App: "proj_1234abcd",
            Environment: "proj_1234abcd",
            Git: &components.DeploymentSourceGit{
                Branch: unkey.Pointer("main"),
                CommitSha: unkey.Pointer("9f2c1a7"),
                Repository: unkey.Pointer("contributor/acme-api"),
            },
            Image: components.DeploymentSourceImage{
                DockerImage: "ghcr.io/acme/api:v1.2.3",
            },
            Deployment: &components.DeploymentSourceDeployment{
                DeploymentID: "proj_1234abcd",
            },
        },
    ))
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsCreateDeploymentResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                                                | [context.Context](https://pkg.go.dev/context#Context)                                                                                | :heavy_check_mark:                                                                                                                   | The context to use for the request.                                                                                                  |
| `request`                                                                                                                            | [components.V2DeploymentsCreateDeploymentRequestBodyUnion](../../models/components/v2deploymentscreatedeploymentrequestbodyunion.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `opts`                                                                                                                               | [][operations.Option](../../models/operations/option.md)                                                                             | :heavy_minus_sign:                                                                                                                   | The options for this request.                                                                                                        |

### Response

**[*operations.DeploymentsCreateDeploymentResponse](../../models/operations/deploymentscreatedeploymentresponse.md), error**

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

## GetDeployment

Retrieve a single deployment by its id.

Use this to check a deployment's status after creating it, or to inspect the
runtime configuration of an existing deployment.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_deployment` (to read deployments in any environment)
- `environment.<environment_id>.read_deployment` (to read deployments in a specific environment)


### Example Usage: deployment

<!-- UsageSnippet language="go" operationID="deployments.getDeployment" method="post" path="/v2/deployments.getDeployment" example="deployment" -->
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

    res, err := s.Deployments.GetDeployment(ctx, components.V2DeploymentsGetDeploymentRequestBody{
        DeploymentID: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsGetDeploymentResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: deploymentNotFound

<!-- UsageSnippet language="go" operationID="deployments.getDeployment" method="post" path="/v2/deployments.getDeployment" example="deploymentNotFound" -->
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

    res, err := s.Deployments.GetDeployment(ctx, components.V2DeploymentsGetDeploymentRequestBody{
        DeploymentID: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsGetDeploymentResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: getById

<!-- UsageSnippet language="go" operationID="deployments.getDeployment" method="post" path="/v2/deployments.getDeployment" example="getById" -->
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

    res, err := s.Deployments.GetDeployment(ctx, components.V2DeploymentsGetDeploymentRequestBody{
        DeploymentID: "d_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsGetDeploymentResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                | [context.Context](https://pkg.go.dev/context#Context)                                                                | :heavy_check_mark:                                                                                                   | The context to use for the request.                                                                                  |
| `request`                                                                                                            | [components.V2DeploymentsGetDeploymentRequestBody](../../models/components/v2deploymentsgetdeploymentrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `opts`                                                                                                               | [][operations.Option](../../models/operations/option.md)                                                             | :heavy_minus_sign:                                                                                                   | The options for this request.                                                                                        |

### Response

**[*operations.DeploymentsGetDeploymentResponse](../../models/operations/deploymentsgetdeploymentresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## ListDeployments

Retrieve a paginated list of deployments within a workspace, newest first.

Filter by project, app, environment, and lifecycle status. All filters are
optional; with none set, every deployment in the workspace is returned.
Filters nest: `app` requires `project`, and `environment` requires both
`project` and `app`. Results are paginated; when `hasMore` is true, pass the
returned `cursor` to fetch the next page.

**Required Permissions**

Your root key must have the `environment.*.read_deployment` permission.
Listing spans environments, so a grant on a single environment is not
sufficient.


### Example Usage: byEnvironment

<!-- UsageSnippet language="go" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="byEnvironment" -->
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

    res, err := s.Deployments.ListDeployments(ctx, components.V2DeploymentsListDeploymentsRequestBody{
        Project: unkey.Pointer("payments-service"),
        App: unkey.Pointer("payments-api"),
        Environment: unkey.Pointer("production"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsListDeploymentsResponseBody != nil {
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
### Example Usage: deploymentList

<!-- UsageSnippet language="go" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="deploymentList" -->
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

    res, err := s.Deployments.ListDeployments(ctx, components.V2DeploymentsListDeploymentsRequestBody{
        Project: unkey.Pointer("proj_1234abcd"),
        App: unkey.Pointer("proj_1234abcd"),
        Environment: unkey.Pointer("proj_1234abcd"),
        Status: []components.DeploymentStatus{
            components.DeploymentStatusReady,
            components.DeploymentStatusFailed,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsListDeploymentsResponseBody != nil {
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
### Example Usage: missingParent

<!-- UsageSnippet language="go" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="missingParent" -->
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

    res, err := s.Deployments.ListDeployments(ctx, components.V2DeploymentsListDeploymentsRequestBody{
        Project: unkey.Pointer("proj_1234abcd"),
        App: unkey.Pointer("proj_1234abcd"),
        Environment: unkey.Pointer("proj_1234abcd"),
        Status: []components.DeploymentStatus{
            components.DeploymentStatusReady,
            components.DeploymentStatusFailed,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsListDeploymentsResponseBody != nil {
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

<!-- UsageSnippet language="go" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="missingPermission" -->
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

    res, err := s.Deployments.ListDeployments(ctx, components.V2DeploymentsListDeploymentsRequestBody{
        Project: unkey.Pointer("proj_1234abcd"),
        App: unkey.Pointer("proj_1234abcd"),
        Environment: unkey.Pointer("proj_1234abcd"),
        Status: []components.DeploymentStatus{
            components.DeploymentStatusReady,
            components.DeploymentStatusFailed,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsListDeploymentsResponseBody != nil {
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

<!-- UsageSnippet language="go" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="projectNotFound" -->
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

    res, err := s.Deployments.ListDeployments(ctx, components.V2DeploymentsListDeploymentsRequestBody{
        Project: unkey.Pointer("proj_1234abcd"),
        App: unkey.Pointer("proj_1234abcd"),
        Environment: unkey.Pointer("proj_1234abcd"),
        Status: []components.DeploymentStatus{
            components.DeploymentStatusReady,
            components.DeploymentStatusFailed,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsListDeploymentsResponseBody != nil {
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
### Example Usage: workspaceWide

<!-- UsageSnippet language="go" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="workspaceWide" -->
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

    res, err := s.Deployments.ListDeployments(ctx, components.V2DeploymentsListDeploymentsRequestBody{})
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsListDeploymentsResponseBody != nil {
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

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                                    | :heavy_check_mark:                                                                                                       | The context to use for the request.                                                                                      |
| `request`                                                                                                                | [components.V2DeploymentsListDeploymentsRequestBody](../../models/components/v2deploymentslistdeploymentsrequestbody.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `opts`                                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                                 | :heavy_minus_sign:                                                                                                       | The options for this request.                                                                                            |

### Response

**[*operations.DeploymentsListDeploymentsResponse](../../models/operations/deploymentslistdeploymentsresponse.md), error**

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

## PromoteDeployment

Promote a deployment to become the current deployment for its environment.
All sticky domains are reassigned from the current deployment to the
promoted one, and the previous deployment is scheduled for standby.

The deployment must be ready, not already shutting down, belong to the
production environment, and its app must already have a current deployment.
Promoting the deployment that is already current fails, unless the app is in
a rolled-back state, in which case promoting the current deployment
confirms the rollback and re-enables automatic promotion of future
deployments.

Promotion runs as a durable workflow: this endpoint returns once the
promotion is accepted. Poll `getDeployment` or `listDeployments` to observe
the result.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.promote_deployment` (to promote deployments in any environment)
- `environment.<environment_id>.promote_deployment` (to promote deployments in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="go" operationID="deployments.promoteDeployment" method="post" path="/v2/deployments.promoteDeployment" example="accepted" -->
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

    res, err := s.Deployments.PromoteDeployment(ctx, components.V2DeploymentsPromoteDeploymentRequestBody{
        DeploymentID: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsPromoteDeploymentResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: promote

<!-- UsageSnippet language="go" operationID="deployments.promoteDeployment" method="post" path="/v2/deployments.promoteDeployment" example="promote" -->
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

    res, err := s.Deployments.PromoteDeployment(ctx, components.V2DeploymentsPromoteDeploymentRequestBody{
        DeploymentID: "d_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsPromoteDeploymentResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                        | [context.Context](https://pkg.go.dev/context#Context)                                                                        | :heavy_check_mark:                                                                                                           | The context to use for the request.                                                                                          |
| `request`                                                                                                                    | [components.V2DeploymentsPromoteDeploymentRequestBody](../../models/components/v2deploymentspromotedeploymentrequestbody.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `opts`                                                                                                                       | [][operations.Option](../../models/operations/option.md)                                                                     | :heavy_minus_sign:                                                                                                           | The options for this request.                                                                                                |

### Response

**[*operations.DeploymentsPromoteDeploymentResponse](../../models/operations/deploymentspromotedeploymentresponse.md), error**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| apierrors.BadRequestErrorResponse         | 400                                       | application/json                          |
| apierrors.UnauthorizedErrorResponse       | 401                                       | application/json                          |
| apierrors.NotFoundErrorResponse           | 404                                       | application/json                          |
| apierrors.PreconditionFailedErrorResponse | 412                                       | application/json                          |
| apierrors.TooManyRequestsErrorResponse    | 429                                       | application/problem+json                  |
| apierrors.InternalServerErrorResponse     | 500                                       | application/json                          |
| apierrors.APIError                        | 4XX, 5XX                                  | \*/\*                                     |

## RollbackDeployment

Roll live traffic back to a previous deployment. `deploymentId` is the
deployment to roll back TO; the app's current deployment is used as
the rollback source automatically.

The target deployment must be ready, not already shutting down, belong to
the production environment, and must not itself be the current deployment.

After a rollback the app is marked as rolled back, which prevents new
deployments from automatically taking over live traffic. Promote the
rolled-back deployment (or a newer one) to clear this state.

Rollback runs as a durable workflow: this endpoint returns once the
rollback is accepted. Poll `getDeployment` or `listDeployments` to observe
the result.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.rollback_deployment` (to roll back deployments in any environment)
- `environment.<environment_id>.rollback_deployment` (to roll back deployments in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="go" operationID="deployments.rollbackDeployment" method="post" path="/v2/deployments.rollbackDeployment" example="accepted" -->
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

    res, err := s.Deployments.RollbackDeployment(ctx, components.V2DeploymentsRollbackDeploymentRequestBody{
        DeploymentID: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsRollbackDeploymentResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: rollback

<!-- UsageSnippet language="go" operationID="deployments.rollbackDeployment" method="post" path="/v2/deployments.rollbackDeployment" example="rollback" -->
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

    res, err := s.Deployments.RollbackDeployment(ctx, components.V2DeploymentsRollbackDeploymentRequestBody{
        DeploymentID: "d_prev5678",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsRollbackDeploymentResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                                                          | :heavy_check_mark:                                                                                                             | The context to use for the request.                                                                                            |
| `request`                                                                                                                      | [components.V2DeploymentsRollbackDeploymentRequestBody](../../models/components/v2deploymentsrollbackdeploymentrequestbody.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `opts`                                                                                                                         | [][operations.Option](../../models/operations/option.md)                                                                       | :heavy_minus_sign:                                                                                                             | The options for this request.                                                                                                  |

### Response

**[*operations.DeploymentsRollbackDeploymentResponse](../../models/operations/deploymentsrollbackdeploymentresponse.md), error**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| apierrors.BadRequestErrorResponse         | 400                                       | application/json                          |
| apierrors.UnauthorizedErrorResponse       | 401                                       | application/json                          |
| apierrors.NotFoundErrorResponse           | 404                                       | application/json                          |
| apierrors.PreconditionFailedErrorResponse | 412                                       | application/json                          |
| apierrors.TooManyRequestsErrorResponse    | 429                                       | application/problem+json                  |
| apierrors.InternalServerErrorResponse     | 500                                       | application/json                          |
| apierrors.APIError                        | 4XX, 5XX                                  | \*/\*                                     |

## StartDeployment

Start a deployment that was previously stopped with `stopDeployment`, so it
serves traffic again. The deployment keeps the configuration it had when it
was stopped; nothing is rebuilt or redeployed.

The deployment must currently be stopped, and must belong to a
non-production environment. Production deployments are never stopped, so
they cannot be started.

Starting is asynchronous: this endpoint only enqueues the start and returns
immediately. Poll `getDeployment` until the status reaches `ready`.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.start_deployment` (to start deployments in any environment)
- `environment.<environment_id>.start_deployment` (to start deployments in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="go" operationID="deployments.startDeployment" method="post" path="/v2/deployments.startDeployment" example="accepted" -->
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

    res, err := s.Deployments.StartDeployment(ctx, components.V2DeploymentsStartDeploymentRequestBody{
        DeploymentID: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsStartDeploymentResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: start

<!-- UsageSnippet language="go" operationID="deployments.startDeployment" method="post" path="/v2/deployments.startDeployment" example="start" -->
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

    res, err := s.Deployments.StartDeployment(ctx, components.V2DeploymentsStartDeploymentRequestBody{
        DeploymentID: "d_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsStartDeploymentResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                                    | :heavy_check_mark:                                                                                                       | The context to use for the request.                                                                                      |
| `request`                                                                                                                | [components.V2DeploymentsStartDeploymentRequestBody](../../models/components/v2deploymentsstartdeploymentrequestbody.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `opts`                                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                                 | :heavy_minus_sign:                                                                                                       | The options for this request.                                                                                            |

### Response

**[*operations.DeploymentsStartDeploymentResponse](../../models/operations/deploymentsstartdeploymentresponse.md), error**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| apierrors.BadRequestErrorResponse         | 400                                       | application/json                          |
| apierrors.UnauthorizedErrorResponse       | 401                                       | application/json                          |
| apierrors.NotFoundErrorResponse           | 404                                       | application/json                          |
| apierrors.PreconditionFailedErrorResponse | 412                                       | application/json                          |
| apierrors.TooManyRequestsErrorResponse    | 429                                       | application/problem+json                  |
| apierrors.InternalServerErrorResponse     | 500                                       | application/json                          |
| apierrors.APIError                        | 4XX, 5XX                                  | \*/\*                                     |

## StopDeployment

Stop a running preview deployment. Stopped deployments keep their
configuration and can be resumed later with `startDeployment`.

The deployment must be ready and running, and must belong to a
non-production environment; production deployments cannot be stopped.
A deployment that is already draining from a previous stop is rejected
with a precondition error.

Stopping is asynchronous: this endpoint only enqueues the stop and returns
immediately. Poll `getDeployment` until the status reaches `stopped`.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.stop_deployment` (to stop deployments in any environment)
- `environment.<environment_id>.stop_deployment` (to stop deployments in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="go" operationID="deployments.stopDeployment" method="post" path="/v2/deployments.stopDeployment" example="accepted" -->
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

    res, err := s.Deployments.StopDeployment(ctx, components.V2DeploymentsStopDeploymentRequestBody{
        DeploymentID: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsStopDeploymentResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: stop

<!-- UsageSnippet language="go" operationID="deployments.stopDeployment" method="post" path="/v2/deployments.stopDeployment" example="stop" -->
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

    res, err := s.Deployments.StopDeployment(ctx, components.V2DeploymentsStopDeploymentRequestBody{
        DeploymentID: "d_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DeploymentsStopDeploymentResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                  | [context.Context](https://pkg.go.dev/context#Context)                                                                  | :heavy_check_mark:                                                                                                     | The context to use for the request.                                                                                    |
| `request`                                                                                                              | [components.V2DeploymentsStopDeploymentRequestBody](../../models/components/v2deploymentsstopdeploymentrequestbody.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `opts`                                                                                                                 | [][operations.Option](../../models/operations/option.md)                                                               | :heavy_minus_sign:                                                                                                     | The options for this request.                                                                                          |

### Response

**[*operations.DeploymentsStopDeploymentResponse](../../models/operations/deploymentsstopdeploymentresponse.md), error**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| apierrors.BadRequestErrorResponse         | 400                                       | application/json                          |
| apierrors.UnauthorizedErrorResponse       | 401                                       | application/json                          |
| apierrors.NotFoundErrorResponse           | 404                                       | application/json                          |
| apierrors.PreconditionFailedErrorResponse | 412                                       | application/json                          |
| apierrors.TooManyRequestsErrorResponse    | 429                                       | application/problem+json                  |
| apierrors.InternalServerErrorResponse     | 500                                       | application/json                          |
| apierrors.APIError                        | 4XX, 5XX                                  | \*/\*                                     |