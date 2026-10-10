# Permissions

## Overview

Permission and role management operations

### Available Operations

* [CreatePermission](#createpermission) - Create permission
* [CreateRole](#createrole) - Create role
* [DeletePermission](#deletepermission) - Delete permission
* [DeleteRole](#deleterole) - Delete role
* [GetPermission](#getpermission) - Get permission
* [GetRole](#getrole) - Get role
* [ListPermissions](#listpermissions) - List permissions
* [ListRoles](#listroles) - List roles
* [SetRolePermissions](#setrolepermissions) - Set role permissions
* [UpdatePermission](#updatepermission) - Update permission
* [UpdateRole](#updaterole) - Update role

## CreatePermission

Create a new permission to define specific actions or capabilities in your RBAC system. Permissions can be assigned directly to API keys or included in roles.

Use hierarchical naming patterns like `documents.read`, `admin.users.delete`, or `billing.invoices.create` for clear organization.

**Important:** Permission slugs must be unique within the workspace. Names do not need to be unique. Once created, permissions are immediately available for assignment.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.create_permission`


### Example Usage

<!-- UsageSnippet language="go" operationID="permissions.createPermission" method="post" path="/v2/permissions.createPermission" -->
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

    res, err := s.Permissions.CreatePermission(ctx, components.V2PermissionsCreatePermissionRequestBody{
        Name: "users.read",
        Slug: "users-read",
        Description: unkey.Pointer("Grants read-only access to user profile information, account settings, and subscription status."),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsCreatePermissionResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                                      | :heavy_check_mark:                                                                                                         | The context to use for the request.                                                                                        |
| `request`                                                                                                                  | [components.V2PermissionsCreatePermissionRequestBody](../../models/components/v2permissionscreatepermissionrequestbody.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `opts`                                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                                   | :heavy_minus_sign:                                                                                                         | The options for this request.                                                                                              |

### Response

**[*operations.PermissionsCreatePermissionResponse](../../models/operations/permissionscreatepermissionresponse.md), error**

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

## CreateRole

Create a new role to group related permissions for easier management. Roles enable consistent permission assignment across multiple API keys. Permission slugs supplied in `permissions` are attached during creation. Missing permissions are created automatically.

**Important:** Role names must be unique within the workspace. Once created, roles are immediately available for assignment.

**Required Permissions**

Your root key must always have:
- `rbac.*.create_role`

When `permissions` is not empty, it must also have:
- `rbac.*.add_permission_to_role`

When any requested permission slug does not exist, it must also have:
- `rbac.*.create_permission`


### Example Usage: basic

<!-- UsageSnippet language="go" operationID="permissions.createRole" method="post" path="/v2/permissions.createRole" example="basic" -->
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

    res, err := s.Permissions.CreateRole(ctx, components.V2PermissionsCreateRoleRequestBody{
        Name: "content.editor",
        Description: unkey.Pointer("Can read and write content"),
        Permissions: []string{
            "content.read",
            "content.write",
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsCreateRoleResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: withoutDescription

<!-- UsageSnippet language="go" operationID="permissions.createRole" method="post" path="/v2/permissions.createRole" example="withoutDescription" -->
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

    res, err := s.Permissions.CreateRole(ctx, components.V2PermissionsCreateRoleRequestBody{
        Name: "api.reader",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsCreateRoleResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                                          | :heavy_check_mark:                                                                                             | The context to use for the request.                                                                            |
| `request`                                                                                                      | [components.V2PermissionsCreateRoleRequestBody](../../models/components/v2permissionscreaterolerequestbody.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `opts`                                                                                                         | [][operations.Option](../../models/operations/option.md)                                                       | :heavy_minus_sign:                                                                                             | The options for this request.                                                                                  |

### Response

**[*operations.PermissionsCreateRoleResponse](../../models/operations/permissionscreateroleresponse.md), error**

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

## DeletePermission

Remove a permission from your workspace. This also removes the permission from all API keys and roles.

**Important:** This operation cannot be undone and immediately affects all API keys and roles that had this permission assigned.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.delete_permission`


### Example Usage

<!-- UsageSnippet language="go" operationID="permissions.deletePermission" method="post" path="/v2/permissions.deletePermission" example="basic" -->
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

    res, err := s.Permissions.DeletePermission(ctx, components.V2PermissionsDeletePermissionRequestBody{
        Permission: "perm_1234567890abcdef",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsDeletePermissionResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                                      | :heavy_check_mark:                                                                                                         | The context to use for the request.                                                                                        |
| `request`                                                                                                                  | [components.V2PermissionsDeletePermissionRequestBody](../../models/components/v2permissionsdeletepermissionrequestbody.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `opts`                                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                                   | :heavy_minus_sign:                                                                                                         | The options for this request.                                                                                              |

### Response

**[*operations.PermissionsDeletePermissionResponse](../../models/operations/permissionsdeletepermissionresponse.md), error**

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

## DeleteRole

Remove a role from your workspace. This also removes the role from all assigned API keys.

**Important:** This operation cannot be undone and immediately affects all API keys that had this role assigned.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.delete_role`


### Example Usage

<!-- UsageSnippet language="go" operationID="permissions.deleteRole" method="post" path="/v2/permissions.deleteRole" -->
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

    res, err := s.Permissions.DeleteRole(ctx, components.V2PermissionsDeleteRoleRequestBody{
        Role: "role_dns_manager",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsDeleteRoleResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                                          | :heavy_check_mark:                                                                                             | The context to use for the request.                                                                            |
| `request`                                                                                                      | [components.V2PermissionsDeleteRoleRequestBody](../../models/components/v2permissionsdeleterolerequestbody.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `opts`                                                                                                         | [][operations.Option](../../models/operations/option.md)                                                       | :heavy_minus_sign:                                                                                             | The options for this request.                                                                                  |

### Response

**[*operations.PermissionsDeleteRoleResponse](../../models/operations/permissionsdeleteroleresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## GetPermission

Retrieve details about a specific permission including its name, description, and metadata.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.read_permission`


### Example Usage

<!-- UsageSnippet language="go" operationID="permissions.getPermission" method="post" path="/v2/permissions.getPermission" -->
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

    res, err := s.Permissions.GetPermission(ctx, components.V2PermissionsGetPermissionRequestBody{
        Permission: "perm_1234567890abcdef",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsGetPermissionResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                | [context.Context](https://pkg.go.dev/context#Context)                                                                | :heavy_check_mark:                                                                                                   | The context to use for the request.                                                                                  |
| `request`                                                                                                            | [components.V2PermissionsGetPermissionRequestBody](../../models/components/v2permissionsgetpermissionrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `opts`                                                                                                               | [][operations.Option](../../models/operations/option.md)                                                             | :heavy_minus_sign:                                                                                                   | The options for this request.                                                                                        |

### Response

**[*operations.PermissionsGetPermissionResponse](../../models/operations/permissionsgetpermissionresponse.md), error**

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

## GetRole

Retrieve details about a specific role including its assigned permissions.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.read_role`


### Example Usage

<!-- UsageSnippet language="go" operationID="permissions.getRole" method="post" path="/v2/permissions.getRole" -->
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

    res, err := s.Permissions.GetRole(ctx, components.V2PermissionsGetRoleRequestBody{
        Role: "role_1234567890abcdef",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsGetRoleResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2PermissionsGetRoleRequestBody](../../models/components/v2permissionsgetrolerequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.PermissionsGetRoleResponse](../../models/operations/permissionsgetroleresponse.md), error**

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

## ListPermissions

Retrieve all permissions in your workspace.
Results are paginated and sorted by their id.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.read_permission`


### Example Usage

<!-- UsageSnippet language="go" operationID="permissions.listPermissions" method="post" path="/v2/permissions.listPermissions" -->
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

    res, err := s.Permissions.ListPermissions(ctx, components.V2PermissionsListPermissionsRequestBody{
        Cursor: unkey.Pointer("eyJrZXkiOiJwZXJtXzEyMzQifQ=="),
        Limit: unkey.Pointer[int64](50),
        Search: unkey.Pointer("documents"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsListPermissionsResponseBody != nil {
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
| `request`                                                                                                                | [components.V2PermissionsListPermissionsRequestBody](../../models/components/v2permissionslistpermissionsrequestbody.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `opts`                                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                                 | :heavy_minus_sign:                                                                                                       | The options for this request.                                                                                            |

### Response

**[*operations.PermissionsListPermissionsResponse](../../models/operations/permissionslistpermissionsresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## ListRoles

Retrieve all roles in your workspace including their assigned permissions.
Results are paginated and sorted by their id.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.read_role`


### Example Usage

<!-- UsageSnippet language="go" operationID="permissions.listRoles" method="post" path="/v2/permissions.listRoles" -->
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

    res, err := s.Permissions.ListRoles(ctx, components.V2PermissionsListRolesRequestBody{
        Limit: unkey.Pointer[int64](50),
        Cursor: unkey.Pointer("eyJrZXkiOiJyb2xlXzEyMzQifQ=="),
        Search: unkey.Pointer("admin"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsListRolesResponseBody != nil {
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
| `request`                                                                                                    | [components.V2PermissionsListRolesRequestBody](../../models/components/v2permissionslistrolesrequestbody.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `opts`                                                                                                       | [][operations.Option](../../models/operations/option.md)                                                     | :heavy_minus_sign:                                                                                           | The options for this request.                                                                                |

### Response

**[*operations.PermissionsListRolesResponse](../../models/operations/permissionslistrolesresponse.md), error**

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

## SetRolePermissions

Atomically replaces all permissions directly assigned to a role. An empty `permissions` array removes every permission from the role. Permissions that do not exist are created when the caller has permission to create them.

**Required Permissions**

Your root key must have:
- `rbac.*.add_permission_to_role`
- `rbac.*.remove_permission_from_role`

When any requested permission slug does not exist, it must also have:
- `rbac.*.create_permission`


### Example Usage

<!-- UsageSnippet language="go" operationID="permissions.setRolePermissions" method="post" path="/v2/permissions.setRolePermissions" -->
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

    res, err := s.Permissions.SetRolePermissions(ctx, components.CreateV2PermissionsSetRolePermissionsRequestBodyUnionV2PermissionsSetRolePermissionsRequestBody2(
        components.V2PermissionsSetRolePermissionsRequestBody2{
            RoleID: "proj_1234abcd",
            Permissions: []string{
                "<value 1>",
            },
        },
    ))
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsSetRolePermissionsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                                                    | :heavy_check_mark:                                                                                                                       | The context to use for the request.                                                                                                      |
| `request`                                                                                                                                | [components.V2PermissionsSetRolePermissionsRequestBodyUnion](../../models/components/v2permissionssetrolepermissionsrequestbodyunion.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `opts`                                                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                                                 | :heavy_minus_sign:                                                                                                                       | The options for this request.                                                                                                            |

### Response

**[*operations.PermissionsSetRolePermissionsResponse](../../models/operations/permissionssetrolepermissionsresponse.md), error**

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

## UpdatePermission

Update the name, slug, or description of a permission, identified by its ID or slug.

Omitted fields keep their current values. A request with no fields to update returns the stored permission without a write.

**Important**: Keys and roles reference the permission by ID, so they keep the permission after a slug change. Key verification can return the old slug for a short time while caches refresh. A slug that another permission in your workspace already uses returns 409.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:projects/<project_id>/rbac/permissions/<permission_id>#write`


### Example Usage: changeSlug

<!-- UsageSnippet language="go" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="changeSlug" -->
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

    res, err := s.Permissions.UpdatePermission(ctx, components.V2PermissionsUpdatePermissionRequestBody{
        Permission: "documents-read",
        Slug: unkey.Pointer("documents.read"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdatePermissionResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: clearDescription

<!-- UsageSnippet language="go" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="clearDescription" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdatePermission(ctx, components.V2PermissionsUpdatePermissionRequestBody{
        Permission: "perm_1234567890abcdef",
        Description: optionalnullable.From[string](nil),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdatePermissionResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidSlug

<!-- UsageSnippet language="go" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="invalidSlug" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdatePermission(ctx, components.V2PermissionsUpdatePermissionRequestBody{
        Permission: "perm_1234567890abcdef",
        Name: unkey.Pointer("Read documents"),
        Slug: unkey.Pointer("documents.read"),
        Description: optionalnullable.From(unkey.Pointer("Allows reading document resources")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdatePermissionResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="go" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="keyDisabled" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdatePermission(ctx, components.V2PermissionsUpdatePermissionRequestBody{
        Permission: "perm_1234567890abcdef",
        Name: unkey.Pointer("Read documents"),
        Slug: unkey.Pointer("documents.read"),
        Description: optionalnullable.From(unkey.Pointer("Allows reading document resources")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdatePermissionResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingKey

<!-- UsageSnippet language="go" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="missingKey" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdatePermission(ctx, components.V2PermissionsUpdatePermissionRequestBody{
        Permission: "perm_1234567890abcdef",
        Name: unkey.Pointer("Read documents"),
        Slug: unkey.Pointer("documents.read"),
        Description: optionalnullable.From(unkey.Pointer("Allows reading document resources")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdatePermissionResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: permissionNotFound

<!-- UsageSnippet language="go" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="permissionNotFound" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdatePermission(ctx, components.V2PermissionsUpdatePermissionRequestBody{
        Permission: "perm_1234567890abcdef",
        Name: unkey.Pointer("Read documents"),
        Slug: unkey.Pointer("documents.read"),
        Description: optionalnullable.From(unkey.Pointer("Allows reading document resources")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdatePermissionResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: rename

<!-- UsageSnippet language="go" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="rename" -->
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

    res, err := s.Permissions.UpdatePermission(ctx, components.V2PermissionsUpdatePermissionRequestBody{
        Permission: "perm_1234567890abcdef",
        Name: unkey.Pointer("Read documents"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdatePermissionResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: slugTaken

<!-- UsageSnippet language="go" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="slugTaken" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdatePermission(ctx, components.V2PermissionsUpdatePermissionRequestBody{
        Permission: "perm_1234567890abcdef",
        Name: unkey.Pointer("Read documents"),
        Slug: unkey.Pointer("documents.read"),
        Description: optionalnullable.From(unkey.Pointer("Allows reading document resources")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdatePermissionResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: updated

<!-- UsageSnippet language="go" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="updated" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdatePermission(ctx, components.V2PermissionsUpdatePermissionRequestBody{
        Permission: "perm_1234567890abcdef",
        Name: unkey.Pointer("Read documents"),
        Slug: unkey.Pointer("documents.read"),
        Description: optionalnullable.From(unkey.Pointer("Allows reading document resources")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdatePermissionResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                                      | :heavy_check_mark:                                                                                                         | The context to use for the request.                                                                                        |
| `request`                                                                                                                  | [components.V2PermissionsUpdatePermissionRequestBody](../../models/components/v2permissionsupdatepermissionrequestbody.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `opts`                                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                                   | :heavy_minus_sign:                                                                                                         | The options for this request.                                                                                              |

### Response

**[*operations.PermissionsUpdatePermissionResponse](../../models/operations/permissionsupdatepermissionresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.ConflictErrorResponse        | 409                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/json                       |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## UpdateRole

Update the name or description of a role, identified by its ID or name.

Omitted fields keep their current values. A request with no fields to update returns the stored role without a write.

This endpoint does not change the role's permissions or keys. Use `permissions.setRolePermissions`, `keys.addRoles`, and `keys.removeRoles` for those.

**Important**: Keys keep the role after a rename. Requests that name the role, such as `keys.addRoles`, must use the new name. Key verification can return the old name for a short time while caches refresh. A name that another role in your workspace already uses returns 409.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:projects/<project_id>/rbac/roles/<role_id>#write`


### Example Usage: clearDescription

<!-- UsageSnippet language="go" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="clearDescription" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdateRole(ctx, components.V2PermissionsUpdateRoleRequestBody{
        Role: "role_1234567890abcdef",
        Description: optionalnullable.From[string](nil),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdateRoleResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: describeByName

<!-- UsageSnippet language="go" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="describeByName" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdateRole(ctx, components.V2PermissionsUpdateRoleRequestBody{
        Role: "support.readonly",
        Description: optionalnullable.From(unkey.Pointer("Read-only access for customer support")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdateRoleResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: emptyName

<!-- UsageSnippet language="go" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="emptyName" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdateRole(ctx, components.V2PermissionsUpdateRoleRequestBody{
        Role: "role_1234567890abcdef",
        Name: unkey.Pointer("support.readonly"),
        Description: optionalnullable.From(unkey.Pointer("Read-only access for customer support")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdateRoleResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="go" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="keyDisabled" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdateRole(ctx, components.V2PermissionsUpdateRoleRequestBody{
        Role: "role_1234567890abcdef",
        Name: unkey.Pointer("support.readonly"),
        Description: optionalnullable.From(unkey.Pointer("Read-only access for customer support")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdateRoleResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingKey

<!-- UsageSnippet language="go" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="missingKey" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdateRole(ctx, components.V2PermissionsUpdateRoleRequestBody{
        Role: "role_1234567890abcdef",
        Name: unkey.Pointer("support.readonly"),
        Description: optionalnullable.From(unkey.Pointer("Read-only access for customer support")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdateRoleResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: nameTaken

<!-- UsageSnippet language="go" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="nameTaken" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdateRole(ctx, components.V2PermissionsUpdateRoleRequestBody{
        Role: "role_1234567890abcdef",
        Name: unkey.Pointer("support.readonly"),
        Description: optionalnullable.From(unkey.Pointer("Read-only access for customer support")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdateRoleResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: rename

<!-- UsageSnippet language="go" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="rename" -->
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

    res, err := s.Permissions.UpdateRole(ctx, components.V2PermissionsUpdateRoleRequestBody{
        Role: "role_1234567890abcdef",
        Name: unkey.Pointer("support.readonly"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdateRoleResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: roleNotFound

<!-- UsageSnippet language="go" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="roleNotFound" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdateRole(ctx, components.V2PermissionsUpdateRoleRequestBody{
        Role: "role_1234567890abcdef",
        Name: unkey.Pointer("support.readonly"),
        Description: optionalnullable.From(unkey.Pointer("Read-only access for customer support")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdateRoleResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: updated

<!-- UsageSnippet language="go" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="updated" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Permissions.UpdateRole(ctx, components.V2PermissionsUpdateRoleRequestBody{
        Role: "role_1234567890abcdef",
        Name: unkey.Pointer("support.readonly"),
        Description: optionalnullable.From(unkey.Pointer("Read-only access for customer support")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PermissionsUpdateRoleResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                                          | :heavy_check_mark:                                                                                             | The context to use for the request.                                                                            |
| `request`                                                                                                      | [components.V2PermissionsUpdateRoleRequestBody](../../models/components/v2permissionsupdaterolerequestbody.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `opts`                                                                                                         | [][operations.Option](../../models/operations/option.md)                                                       | :heavy_minus_sign:                                                                                             | The options for this request.                                                                                  |

### Response

**[*operations.PermissionsUpdateRoleResponse](../../models/operations/permissionsupdateroleresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.ConflictErrorResponse        | 409                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/json                       |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |