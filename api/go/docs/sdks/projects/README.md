# Projects

## Overview

### Available Operations

* [CreateProject](#createproject) - Create project
* [DeleteProject](#deleteproject) - Delete project
* [GetProject](#getproject) - Get project
* [ListProjects](#listprojects) - List projects
* [UpdateProject](#updateproject) - Update project

## CreateProject

Create a project to group deployments and applications under a workspace-scoped slug.

The slug you provide is the stable, caller-defined handle used to reference this project in subsequent operations (get, update, delete). It must be unique within your workspace.

**Important**: The slug cannot collide with an existing project in your workspace. A duplicate slug returns a 409 conflict.

**Required Permissions**

Your root key must have the following permission:
- `project.*.create_project` (to create projects in your workspace)


### Example Usage: basic

<!-- UsageSnippet language="go" operationID="projects.createProject" method="post" path="/v2/projects.createProject" example="basic" -->
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

    res, err := s.Projects.CreateProject(ctx, components.V2ProjectsCreateProjectRequestBody{
        Name: "Payments Service",
        Slug: "payments-service",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsCreateProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidSlug

<!-- UsageSnippet language="go" operationID="projects.createProject" method="post" path="/v2/projects.createProject" example="invalidSlug" -->
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

    res, err := s.Projects.CreateProject(ctx, components.V2ProjectsCreateProjectRequestBody{
        Name: "Payments Service",
        Slug: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsCreateProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="projects.createProject" method="post" path="/v2/projects.createProject" example="missingPermission" -->
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

    res, err := s.Projects.CreateProject(ctx, components.V2ProjectsCreateProjectRequestBody{
        Name: "Payments Service",
        Slug: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsCreateProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: projectExists

<!-- UsageSnippet language="go" operationID="projects.createProject" method="post" path="/v2/projects.createProject" example="projectExists" -->
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

    res, err := s.Projects.CreateProject(ctx, components.V2ProjectsCreateProjectRequestBody{
        Name: "Payments Service",
        Slug: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsCreateProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: success

<!-- UsageSnippet language="go" operationID="projects.createProject" method="post" path="/v2/projects.createProject" example="success" -->
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

    res, err := s.Projects.CreateProject(ctx, components.V2ProjectsCreateProjectRequestBody{
        Name: "Payments Service",
        Slug: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsCreateProjectResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                                          | :heavy_check_mark:                                                                                             | The context to use for the request.                                                                            |
| `request`                                                                                                      | [components.V2ProjectsCreateProjectRequestBody](../../models/components/v2projectscreateprojectrequestbody.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `opts`                                                                                                         | [][operations.Option](../../models/operations/option.md)                                                       | :heavy_minus_sign:                                                                                             | The options for this request.                                                                                  |

### Response

**[*operations.ProjectsCreateProjectResponse](../../models/operations/projectscreateprojectresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.ConflictErrorResponse        | 409                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## DeleteProject

Delete an existing project in your workspace, identified by its id.

Deletion is asynchronous and eventually consistent. The project and all of its associated resources (apps, environments, deployments, custom domains) are torn down by a background workflow. A successful response indicates the deletion was enqueued, not that every resource has already been removed.

Projects with delete protection enabled cannot be deleted until protection is disabled.

**Required Permissions**

Your root key must have one of the following permissions:
- `project.*.delete_project` (to delete any project)
- `project.<project_id>.delete_project` (to delete a specific project)


### Example Usage: deleteById

<!-- UsageSnippet language="go" operationID="projects.deleteProject" method="post" path="/v2/projects.deleteProject" example="deleteById" -->
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

    res, err := s.Projects.DeleteProject(ctx, components.V2ProjectsDeleteProjectRequestBody{
        Project: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsDeleteProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: deleteBySlug

<!-- UsageSnippet language="go" operationID="projects.deleteProject" method="post" path="/v2/projects.deleteProject" example="deleteBySlug" -->
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

    res, err := s.Projects.DeleteProject(ctx, components.V2ProjectsDeleteProjectRequestBody{
        Project: "payment-service",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsDeleteProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="projects.deleteProject" method="post" path="/v2/projects.deleteProject" example="missingPermission" -->
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

    res, err := s.Projects.DeleteProject(ctx, components.V2ProjectsDeleteProjectRequestBody{
        Project: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsDeleteProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: projectNotFound

<!-- UsageSnippet language="go" operationID="projects.deleteProject" method="post" path="/v2/projects.deleteProject" example="projectNotFound" -->
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

    res, err := s.Projects.DeleteProject(ctx, components.V2ProjectsDeleteProjectRequestBody{
        Project: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsDeleteProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: success

<!-- UsageSnippet language="go" operationID="projects.deleteProject" method="post" path="/v2/projects.deleteProject" example="success" -->
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

    res, err := s.Projects.DeleteProject(ctx, components.V2ProjectsDeleteProjectRequestBody{
        Project: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsDeleteProjectResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                                          | :heavy_check_mark:                                                                                             | The context to use for the request.                                                                            |
| `request`                                                                                                      | [components.V2ProjectsDeleteProjectRequestBody](../../models/components/v2projectsdeleteprojectrequestbody.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `opts`                                                                                                         | [][operations.Option](../../models/operations/option.md)                                                       | :heavy_minus_sign:                                                                                             | The options for this request.                                                                                  |

### Response

**[*operations.ProjectsDeleteProjectResponse](../../models/operations/projectsdeleteprojectresponse.md), error**

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

## GetProject

Retrieve a single project in your workspace by its id.

Use this to fetch project details after creation, verify a project exists before performing operations, or resolve a project's metadata from its id.

**Required Permissions**

Your root key must have one of the following permissions:
- `project.*.read_project` (to read any project)
- `project.<project_id>.read_project` (to read a specific project)


### Example Usage: getById

<!-- UsageSnippet language="go" operationID="projects.getProject" method="post" path="/v2/projects.getProject" example="getById" -->
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

    res, err := s.Projects.GetProject(ctx, components.V2ProjectsGetProjectRequestBody{
        Project: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsGetProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: getBySlug

<!-- UsageSnippet language="go" operationID="projects.getProject" method="post" path="/v2/projects.getProject" example="getBySlug" -->
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

    res, err := s.Projects.GetProject(ctx, components.V2ProjectsGetProjectRequestBody{
        Project: "payment-service",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsGetProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="projects.getProject" method="post" path="/v2/projects.getProject" example="missingPermission" -->
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

    res, err := s.Projects.GetProject(ctx, components.V2ProjectsGetProjectRequestBody{
        Project: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsGetProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: project

<!-- UsageSnippet language="go" operationID="projects.getProject" method="post" path="/v2/projects.getProject" example="project" -->
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

    res, err := s.Projects.GetProject(ctx, components.V2ProjectsGetProjectRequestBody{
        Project: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsGetProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: projectNotFound

<!-- UsageSnippet language="go" operationID="projects.getProject" method="post" path="/v2/projects.getProject" example="projectNotFound" -->
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

    res, err := s.Projects.GetProject(ctx, components.V2ProjectsGetProjectRequestBody{
        Project: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsGetProjectResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2ProjectsGetProjectRequestBody](../../models/components/v2projectsgetprojectrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.ProjectsGetProjectResponse](../../models/operations/projectsgetprojectresponse.md), error**

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

## ListProjects

Retrieve a paginated list of projects in your workspace.

Use this to build project management dashboards or to enumerate projects for administrative purposes. Results are ordered by project id and returned in pages. When `hasMore` is true, pass the returned `cursor` to fetch the next page.

**Required Permissions**

Your root key must have the following permission:
- `project.*.read_project` (to read projects in your workspace)


### Example Usage: basic

<!-- UsageSnippet language="go" operationID="projects.listProjects" method="post" path="/v2/projects.listProjects" example="basic" -->
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

    res, err := s.Projects.ListProjects(ctx, components.V2ProjectsListProjectsRequestBody{})
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsListProjectsResponseBody != nil {
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

<!-- UsageSnippet language="go" operationID="projects.listProjects" method="post" path="/v2/projects.listProjects" example="invalidLimit" -->
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

    res, err := s.Projects.ListProjects(ctx, components.V2ProjectsListProjectsRequestBody{
        Cursor: unkey.Pointer("proj_1234abcd"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsListProjectsResponseBody != nil {
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

<!-- UsageSnippet language="go" operationID="projects.listProjects" method="post" path="/v2/projects.listProjects" example="missingPermission" -->
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

    res, err := s.Projects.ListProjects(ctx, components.V2ProjectsListProjectsRequestBody{
        Cursor: unkey.Pointer("proj_1234abcd"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsListProjectsResponseBody != nil {
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
### Example Usage: projectList

<!-- UsageSnippet language="go" operationID="projects.listProjects" method="post" path="/v2/projects.listProjects" example="projectList" -->
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

    res, err := s.Projects.ListProjects(ctx, components.V2ProjectsListProjectsRequestBody{
        Cursor: unkey.Pointer("proj_1234abcd"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsListProjectsResponseBody != nil {
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                        | [context.Context](https://pkg.go.dev/context#Context)                                                        | :heavy_check_mark:                                                                                           | The context to use for the request.                                                                          |
| `request`                                                                                                    | [components.V2ProjectsListProjectsRequestBody](../../models/components/v2projectslistprojectsrequestbody.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `opts`                                                                                                       | [][operations.Option](../../models/operations/option.md)                                                     | :heavy_minus_sign:                                                                                           | The options for this request.                                                                                |

### Response

**[*operations.ProjectsListProjectsResponse](../../models/operations/projectslistprojectsresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## UpdateProject

Update an existing project in your workspace, identified by its id.

The project name, slug, and delete protection setting can be changed. Omitted fields are left unchanged. Changing the slug affects the deployment domains generated for this project.

**Required Permissions**

Your root key must have one of the following permissions:
- `project.*.update_project` (to update any project)
- `project.<project_id>.update_project` (to update a specific project)


### Example Usage: changeSlug

<!-- UsageSnippet language="go" operationID="projects.updateProject" method="post" path="/v2/projects.updateProject" example="changeSlug" -->
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

    res, err := s.Projects.UpdateProject(ctx, components.V2ProjectsUpdateProjectRequestBody{
        Project: "payments-service",
        Slug: unkey.Pointer("payments-api"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsUpdateProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="projects.updateProject" method="post" path="/v2/projects.updateProject" example="missingPermission" -->
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

    res, err := s.Projects.UpdateProject(ctx, components.V2ProjectsUpdateProjectRequestBody{
        Project: "proj_1234abcd",
        Slug: unkey.Pointer("proj_1234abcd"),
        Name: unkey.Pointer("Payments Service"),
        DeleteProtection: unkey.Pointer(true),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsUpdateProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: project

<!-- UsageSnippet language="go" operationID="projects.updateProject" method="post" path="/v2/projects.updateProject" example="project" -->
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

    res, err := s.Projects.UpdateProject(ctx, components.V2ProjectsUpdateProjectRequestBody{
        Project: "proj_1234abcd",
        Slug: unkey.Pointer("proj_1234abcd"),
        Name: unkey.Pointer("Payments Service"),
        DeleteProtection: unkey.Pointer(true),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsUpdateProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: projectExists

<!-- UsageSnippet language="go" operationID="projects.updateProject" method="post" path="/v2/projects.updateProject" example="projectExists" -->
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

    res, err := s.Projects.UpdateProject(ctx, components.V2ProjectsUpdateProjectRequestBody{
        Project: "proj_1234abcd",
        Slug: unkey.Pointer("proj_1234abcd"),
        Name: unkey.Pointer("Payments Service"),
        DeleteProtection: unkey.Pointer(true),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsUpdateProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: projectNotFound

<!-- UsageSnippet language="go" operationID="projects.updateProject" method="post" path="/v2/projects.updateProject" example="projectNotFound" -->
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

    res, err := s.Projects.UpdateProject(ctx, components.V2ProjectsUpdateProjectRequestBody{
        Project: "proj_1234abcd",
        Slug: unkey.Pointer("proj_1234abcd"),
        Name: unkey.Pointer("Payments Service"),
        DeleteProtection: unkey.Pointer(true),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsUpdateProjectResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: rename

<!-- UsageSnippet language="go" operationID="projects.updateProject" method="post" path="/v2/projects.updateProject" example="rename" -->
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

    res, err := s.Projects.UpdateProject(ctx, components.V2ProjectsUpdateProjectRequestBody{
        Project: "proj_1234abcd",
        Name: unkey.Pointer("Payments API"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ProjectsUpdateProjectResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                                          | :heavy_check_mark:                                                                                             | The context to use for the request.                                                                            |
| `request`                                                                                                      | [components.V2ProjectsUpdateProjectRequestBody](../../models/components/v2projectsupdateprojectrequestbody.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `opts`                                                                                                         | [][operations.Option](../../models/operations/option.md)                                                       | :heavy_minus_sign:                                                                                             | The options for this request.                                                                                  |

### Response

**[*operations.ProjectsUpdateProjectResponse](../../models/operations/projectsupdateprojectresponse.md), error**

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