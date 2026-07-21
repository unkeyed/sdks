# Environments

## Overview

Environment management operations

### Available Operations

* [GetEnvironment](#getenvironment) - Get environment
* [ListEnvironmentVariables](#listenvironmentvariables) - List environment variables
* [ListEnvironments](#listenvironments) - List environments
* [RemoveEnvironmentVariables](#removeenvironmentvariables) - Remove environment variables
* [SetEnvironmentVariables](#setenvironmentvariables) - Set environment variables
* [UpdateSettings](#updatesettings) - Update environment settings

## GetEnvironment

Retrieve a single environment by its id.

Use this to fetch environment details after creation or to verify an environment exists before performing operations.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_environment` (to read any environment)
- `environment.<environment_id>.read_environment` (to read a specific environment)


### Example Usage: environment

<!-- UsageSnippet language="go" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="environment" -->
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

    res, err := s.Environments.GetEnvironment(ctx, components.V2EnvironmentsGetEnvironmentRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsGetEnvironmentResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: environmentNotFound

<!-- UsageSnippet language="go" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="environmentNotFound" -->
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

    res, err := s.Environments.GetEnvironment(ctx, components.V2EnvironmentsGetEnvironmentRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsGetEnvironmentResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: getById

<!-- UsageSnippet language="go" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="getById" -->
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

    res, err := s.Environments.GetEnvironment(ctx, components.V2EnvironmentsGetEnvironmentRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "env_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsGetEnvironmentResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: getBySlug

<!-- UsageSnippet language="go" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="getBySlug" -->
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

    res, err := s.Environments.GetEnvironment(ctx, components.V2EnvironmentsGetEnvironmentRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsGetEnvironmentResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="missingPermission" -->
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

    res, err := s.Environments.GetEnvironment(ctx, components.V2EnvironmentsGetEnvironmentRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsGetEnvironmentResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                                    | :heavy_check_mark:                                                                                                       | The context to use for the request.                                                                                      |
| `request`                                                                                                                | [components.V2EnvironmentsGetEnvironmentRequestBody](../../models/components/v2environmentsgetenvironmentrequestbody.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `opts`                                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                                 | :heavy_minus_sign:                                                                                                       | The options for this request.                                                                                            |

### Response

**[*operations.EnvironmentsGetEnvironmentResponse](../../models/operations/environmentsgetenvironmentresponse.md), error**

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

## ListEnvironmentVariables

Retrieve the environment variables for an environment.

Identify the environment by its project, app, and environment identifiers.
Results are ordered by variable id and paginated; when `hasMore` is true,
pass the returned `cursor` to fetch the next page.

`recoverable` variables are returned with their decrypted plaintext value.
`writeonly` variables never expose a value: only the key, kind, and
description are returned.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_environment_variables` (for any environment)
- `environment.<environment_id>.read_environment_variables` (for a specific environment)


### Example Usage

<!-- UsageSnippet language="go" operationID="environments.listEnvironmentVariables" method="post" path="/v2/environments.listEnvironmentVariables" example="list" -->
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

    res, err := s.Environments.ListEnvironmentVariables(ctx, components.V2EnvironmentsListEnvironmentVariablesRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsListEnvironmentVariablesResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                                        | [context.Context](https://pkg.go.dev/context#Context)                                                                                        | :heavy_check_mark:                                                                                                                           | The context to use for the request.                                                                                                          |
| `request`                                                                                                                                    | [components.V2EnvironmentsListEnvironmentVariablesRequestBody](../../models/components/v2environmentslistenvironmentvariablesrequestbody.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `opts`                                                                                                                                       | [][operations.Option](../../models/operations/option.md)                                                                                     | :heavy_minus_sign:                                                                                                                           | The options for this request.                                                                                                                |

### Response

**[*operations.EnvironmentsListEnvironmentVariablesResponse](../../models/operations/environmentslistenvironmentvariablesresponse.md), error**

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

## ListEnvironments

Retrieve the environments within an app.

Use this to enumerate every environment in an app. Identify the app by its project slug and app slug. Results are ordered by environment id. An app has only a handful of environments, so all of them are returned in a single response.

**Required Permissions**

Your root key must have the following permission:
- `environment.*.read_environment` (to read environments in any app)


### Example Usage: appNotFound

<!-- UsageSnippet language="go" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="appNotFound" -->
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

    res, err := s.Environments.ListEnvironments(ctx, components.V2EnvironmentsListEnvironmentsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsListEnvironmentsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: basic

<!-- UsageSnippet language="go" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="basic" -->
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

    res, err := s.Environments.ListEnvironments(ctx, components.V2EnvironmentsListEnvironmentsRequestBody{
        Project: "payments-service",
        App: "payments-api",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsListEnvironmentsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: environmentList

<!-- UsageSnippet language="go" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="environmentList" -->
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

    res, err := s.Environments.ListEnvironments(ctx, components.V2EnvironmentsListEnvironmentsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsListEnvironmentsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingApp

<!-- UsageSnippet language="go" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="missingApp" -->
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

    res, err := s.Environments.ListEnvironments(ctx, components.V2EnvironmentsListEnvironmentsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsListEnvironmentsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="missingPermission" -->
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

    res, err := s.Environments.ListEnvironments(ctx, components.V2EnvironmentsListEnvironmentsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsListEnvironmentsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                        | [context.Context](https://pkg.go.dev/context#Context)                                                                        | :heavy_check_mark:                                                                                                           | The context to use for the request.                                                                                          |
| `request`                                                                                                                    | [components.V2EnvironmentsListEnvironmentsRequestBody](../../models/components/v2environmentslistenvironmentsrequestbody.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `opts`                                                                                                                       | [][operations.Option](../../models/operations/option.md)                                                                     | :heavy_minus_sign:                                                                                                           | The options for this request.                                                                                                |

### Response

**[*operations.EnvironmentsListEnvironmentsResponse](../../models/operations/environmentslistenvironmentsresponse.md), error**

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

## RemoveEnvironmentVariables

Remove environment variables from an environment in a single atomic request.

This operation only deletes keys by name. Keys in the payload that exist are
removed; keys that are not present are ignored, since their absence already
matches the requested state. To replace or update values, use
`setEnvironmentVariables` instead. The whole operation is atomic: if any part
fails the environment is left unchanged.

Duplicate keys in the payload collapse to a single removal. Values are never
read or returned.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.remove_environment_variables` (for any environment)
- `environment.<environment_id>.remove_environment_variables` (for a specific environment)


### Example Usage

<!-- UsageSnippet language="go" operationID="environments.removeEnvironmentVariables" method="post" path="/v2/environments.removeEnvironmentVariables" example="removeVariables" -->
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

    res, err := s.Environments.RemoveEnvironmentVariables(ctx, components.V2EnvironmentsRemoveEnvironmentVariablesRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        Variables: []string{
            "LOG_LEVEL",
            "DEBUG_MODE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsRemoveEnvironmentVariablesResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                                                            | [context.Context](https://pkg.go.dev/context#Context)                                                                                            | :heavy_check_mark:                                                                                                                               | The context to use for the request.                                                                                                              |
| `request`                                                                                                                                        | [components.V2EnvironmentsRemoveEnvironmentVariablesRequestBody](../../models/components/v2environmentsremoveenvironmentvariablesrequestbody.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `opts`                                                                                                                                           | [][operations.Option](../../models/operations/option.md)                                                                                         | :heavy_minus_sign:                                                                                                                               | The options for this request.                                                                                                                    |

### Response

**[*operations.EnvironmentsRemoveEnvironmentVariablesResponse](../../models/operations/environmentsremoveenvironmentvariablesresponse.md), error**

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

## SetEnvironmentVariables

Create or update environment variables for an environment in a single atomic
request.

By default this is an upsert: each variable in the payload is created if new
or fully overwritten if the key already exists, and any variable not in the
payload is left untouched. This lets you change one variable without
re-sending the others, which matters for write-only secrets you can no longer
read back.

Set `prune: true` to make it a full replace instead: after upserting, every
variable not in the payload is deleted. Sending `prune: true` with an empty
`variables` list resets the environment by deleting every variable.

Each variable is written exactly as sent, never merged, so omitted optional
fields fall back to their defaults rather than the previous value. Values are
always encrypted at rest. Set `kind: recoverable` to allow a value to be read
back; it defaults to `writeonly`, which can never be read back through the API.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.set_environment_variables` (for any environment)
- `environment.<environment_id>.set_environment_variables` (for a specific environment)


### Example Usage: replace

<!-- UsageSnippet language="go" operationID="environments.setEnvironmentVariables" method="post" path="/v2/environments.setEnvironmentVariables" example="replace" -->
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

    res, err := s.Environments.SetEnvironmentVariables(ctx, components.V2EnvironmentsSetEnvironmentVariablesRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        Variables: []components.EnvironmentVariableInput{
            components.EnvironmentVariableInput{
                Key: "DATABASE_URL",
                Value: "postgresql://user:pass@host:5432/db",
            },
            components.EnvironmentVariableInput{
                Key: "LOG_LEVEL",
                Value: "debug",
                Kind: components.KindRecoverable.ToPointer(),
                Description: unkey.Pointer("Application log verbosity"),
            },
        },
        Prune: unkey.Pointer(true),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsSetEnvironmentVariablesResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: reset

<!-- UsageSnippet language="go" operationID="environments.setEnvironmentVariables" method="post" path="/v2/environments.setEnvironmentVariables" example="reset" -->
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

    res, err := s.Environments.SetEnvironmentVariables(ctx, components.V2EnvironmentsSetEnvironmentVariablesRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        Variables: []components.EnvironmentVariableInput{},
        Prune: unkey.Pointer(true),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsSetEnvironmentVariablesResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: upsert

<!-- UsageSnippet language="go" operationID="environments.setEnvironmentVariables" method="post" path="/v2/environments.setEnvironmentVariables" example="upsert" -->
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

    res, err := s.Environments.SetEnvironmentVariables(ctx, components.V2EnvironmentsSetEnvironmentVariablesRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        Variables: []components.EnvironmentVariableInput{
            components.EnvironmentVariableInput{
                Key: "LOG_LEVEL",
                Value: "info",
                Kind: components.KindRecoverable.ToPointer(),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsSetEnvironmentVariablesResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                                                      | :heavy_check_mark:                                                                                                                         | The context to use for the request.                                                                                                        |
| `request`                                                                                                                                  | [components.V2EnvironmentsSetEnvironmentVariablesRequestBody](../../models/components/v2environmentssetenvironmentvariablesrequestbody.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `opts`                                                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                                                   | :heavy_minus_sign:                                                                                                                         | The options for this request.                                                                                                              |

### Response

**[*operations.EnvironmentsSetEnvironmentVariablesResponse](../../models/operations/environmentssetenvironmentvariablesresponse.md), error**

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

## UpdateSettings

Update the build, runtime, and regional settings for an environment.

All settings fields are optional. Omit a field to leave it unchanged. For
nullable fields (`dockerfile`, `healthcheck`, `openapiSpecPath`), send null
to clear the value. When `regions` is present it replaces the full set of
regions for the environment.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.update_environment` (to update any environment)
- `environment.<environment_id>.update_environment` (to update a specific environment)


### Example Usage: environmentNotFound

<!-- UsageSnippet language="go" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="environmentNotFound" -->
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

    res, err := s.Environments.UpdateSettings(ctx, components.V2EnvironmentsUpdateSettingsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Dockerfile: unkey.Pointer("./Dockerfile"),
        RootDirectory: unkey.Pointer("."),
        BuildCommand: unkey.Pointer("pnpm --filter api build"),
        AutoDeploy: unkey.Pointer(true),
        Port: unkey.Pointer[int64](8080),
        VCpus: unkey.Pointer[float64](1.0),
        MemoryMib: unkey.Pointer[int64](512),
        StorageMib: unkey.Pointer[int64](1024),
        Healthcheck: &components.EnvironmentHealthcheck{
            Method: components.EnvironmentHealthcheckMethodGet,
            Path: "/healthz",
            IntervalSeconds: unkey.Pointer[int64](10),
            TimeoutSeconds: unkey.Pointer[int64](2),
            FailureThreshold: unkey.Pointer[int64](3),
            InitialDelaySeconds: unkey.Pointer[int64](5),
        },
        ShutdownSignal: components.EnvironmentShutdownSignalSigterm.ToPointer(),
        UpstreamProtocol: components.EnvironmentUpstreamProtocolHttp1.ToPointer(),
        OpenapiSpecPath: unkey.Pointer("/openapi.yaml"),
        Regions: []components.EnvironmentRegion{
            components.EnvironmentRegion{
                Name: "us-east-1",
                Replicas: components.Replicas{
                    Min: 1,
                    Max: 3,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsUpdateSettingsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="missingPermission" -->
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

    res, err := s.Environments.UpdateSettings(ctx, components.V2EnvironmentsUpdateSettingsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Dockerfile: unkey.Pointer("./Dockerfile"),
        RootDirectory: unkey.Pointer("."),
        BuildCommand: unkey.Pointer("pnpm --filter api build"),
        AutoDeploy: unkey.Pointer(true),
        Port: unkey.Pointer[int64](8080),
        VCpus: unkey.Pointer[float64](1.0),
        MemoryMib: unkey.Pointer[int64](512),
        StorageMib: unkey.Pointer[int64](1024),
        Healthcheck: &components.EnvironmentHealthcheck{
            Method: components.EnvironmentHealthcheckMethodGet,
            Path: "/healthz",
            IntervalSeconds: unkey.Pointer[int64](10),
            TimeoutSeconds: unkey.Pointer[int64](2),
            FailureThreshold: unkey.Pointer[int64](3),
            InitialDelaySeconds: unkey.Pointer[int64](5),
        },
        ShutdownSignal: components.EnvironmentShutdownSignalSigterm.ToPointer(),
        UpstreamProtocol: components.EnvironmentUpstreamProtocolHttp1.ToPointer(),
        OpenapiSpecPath: unkey.Pointer("/openapi.yaml"),
        Regions: []components.EnvironmentRegion{
            components.EnvironmentRegion{
                Name: "us-east-1",
                Replicas: components.Replicas{
                    Min: 1,
                    Max: 3,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsUpdateSettingsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: setRegions

<!-- UsageSnippet language="go" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="setRegions" -->
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

    res, err := s.Environments.UpdateSettings(ctx, components.V2EnvironmentsUpdateSettingsRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        Regions: []components.EnvironmentRegion{
            components.EnvironmentRegion{
                Name: "us-east-1",
                Replicas: components.Replicas{
                    Min: 1,
                    Max: 3,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsUpdateSettingsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: setRuntime

<!-- UsageSnippet language="go" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="setRuntime" -->
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

    res, err := s.Environments.UpdateSettings(ctx, components.V2EnvironmentsUpdateSettingsRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        VCpus: unkey.Pointer[float64](2.0),
        MemoryMib: unkey.Pointer[int64](1024),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsUpdateSettingsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: success

<!-- UsageSnippet language="go" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="success" -->
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

    res, err := s.Environments.UpdateSettings(ctx, components.V2EnvironmentsUpdateSettingsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Dockerfile: unkey.Pointer("./Dockerfile"),
        RootDirectory: unkey.Pointer("."),
        BuildCommand: unkey.Pointer("pnpm --filter api build"),
        AutoDeploy: unkey.Pointer(true),
        Port: unkey.Pointer[int64](8080),
        VCpus: unkey.Pointer[float64](1.0),
        MemoryMib: unkey.Pointer[int64](512),
        StorageMib: unkey.Pointer[int64](1024),
        Healthcheck: &components.EnvironmentHealthcheck{
            Method: components.EnvironmentHealthcheckMethodGet,
            Path: "/healthz",
            IntervalSeconds: unkey.Pointer[int64](10),
            TimeoutSeconds: unkey.Pointer[int64](2),
            FailureThreshold: unkey.Pointer[int64](3),
            InitialDelaySeconds: unkey.Pointer[int64](5),
        },
        ShutdownSignal: components.EnvironmentShutdownSignalSigterm.ToPointer(),
        UpstreamProtocol: components.EnvironmentUpstreamProtocolHttp1.ToPointer(),
        OpenapiSpecPath: unkey.Pointer("/openapi.yaml"),
        Regions: []components.EnvironmentRegion{
            components.EnvironmentRegion{
                Name: "us-east-1",
                Replicas: components.Replicas{
                    Min: 1,
                    Max: 3,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2EnvironmentsUpdateSettingsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                                    | :heavy_check_mark:                                                                                                       | The context to use for the request.                                                                                      |
| `request`                                                                                                                | [components.V2EnvironmentsUpdateSettingsRequestBody](../../models/components/v2environmentsupdatesettingsrequestbody.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `opts`                                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                                 | :heavy_minus_sign:                                                                                                       | The options for this request.                                                                                            |

### Response

**[*operations.EnvironmentsUpdateSettingsResponse](../../models/operations/environmentsupdatesettingsresponse.md), error**

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