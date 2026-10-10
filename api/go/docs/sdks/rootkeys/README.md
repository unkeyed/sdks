# RootKeys

## Overview

### Available Operations

* [CreateKey](#createkey) - Create root key
* [DeleteKey](#deletekey) - Delete root key
* [ListKeys](#listkeys) - List root keys
* [RerollKey](#rerollkey) - Reroll root key
* [UpdateKey](#updatekey) - Update root key

## CreateKey

Creates a root key for the authenticated workspace.
Requires `unkey:v1:<workspace_id>:rootKeys/*#write`.
The created root key cannot have more permissions than the caller.


### Example Usage

<!-- UsageSnippet language="go" operationID="rootKeys.createKey" method="post" path="/v2/rootKeys.createKey" -->
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

    res, err := s.RootKeys.CreateKey(ctx, components.V2RootKeysCreateKeyRequestBody{
        Permissions: []string{
            "<value 1>",
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RootKeysCreateKeyResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                  | [context.Context](https://pkg.go.dev/context#Context)                                                  | :heavy_check_mark:                                                                                     | The context to use for the request.                                                                    |
| `request`                                                                                              | [components.V2RootKeysCreateKeyRequestBody](../../models/components/v2rootkeyscreatekeyrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `opts`                                                                                                 | [][operations.Option](../../models/operations/option.md)                                               | :heavy_minus_sign:                                                                                     | The options for this request.                                                                          |

### Response

**[*operations.RootKeysCreateKeyResponse](../../models/operations/rootkeyscreatekeyresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## DeleteKey

Deletes a root key in the authenticated workspace.
Requires `unkey:v1:<workspace_id>:rootKeys/<key_id>#delete`.
Use `rootKeys/*#delete` to delete any root key in the workspace.
Deleted keys cannot authenticate.


### Example Usage

<!-- UsageSnippet language="go" operationID="rootKeys.deleteKey" method="post" path="/v2/rootKeys.deleteKey" -->
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

    res, err := s.RootKeys.DeleteKey(ctx, components.V2RootKeysDeleteKeyRequestBody{
        KeyID: "<id>",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RootKeysDeleteKeyResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                  | [context.Context](https://pkg.go.dev/context#Context)                                                  | :heavy_check_mark:                                                                                     | The context to use for the request.                                                                    |
| `request`                                                                                              | [components.V2RootKeysDeleteKeyRequestBody](../../models/components/v2rootkeysdeletekeyrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `opts`                                                                                                 | [][operations.Option](../../models/operations/option.md)                                               | :heavy_minus_sign:                                                                                     | The options for this request.                                                                          |

### Response

**[*operations.RootKeysDeleteKeyResponse](../../models/operations/rootkeysdeletekeyresponse.md), error**

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

## ListKeys

Lists readable root keys in the authenticated workspace, ordered by key ID.
Requires `unkey:v1:<workspace_id>:rootKeys/<key_id>#read` for each returned key.
Use `rootKeys/*#read` to read all root keys. Write permission does not imply read.
A caller with no readable keys receives an empty page.

Includes disabled and expired keys from the new root-key store.
Deleted keys are excluded. Secrets and hashes are never returned.
Pass the returned cursor when hasMore is true to retrieve the next page.


### Example Usage

<!-- UsageSnippet language="go" operationID="rootKeys.listKeys" method="post" path="/v2/rootKeys.listKeys" -->
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

    res, err := s.RootKeys.ListKeys(ctx, components.V2RootKeysListKeysRequestBody{})
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RootKeysListKeysResponseBody != nil {
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                | [context.Context](https://pkg.go.dev/context#Context)                                                | :heavy_check_mark:                                                                                   | The context to use for the request.                                                                  |
| `request`                                                                                            | [components.V2RootKeysListKeysRequestBody](../../models/components/v2rootkeyslistkeysrequestbody.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `opts`                                                                                               | [][operations.Option](../../models/operations/option.md)                                             | :heavy_minus_sign:                                                                                   | The options for this request.                                                                        |

### Response

**[*operations.RootKeysListKeysResponse](../../models/operations/rootkeyslistkeysresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## RerollKey

Creates a new root key secret with the same name, enabled state, expiration, and
effective permissions as an existing root key in the authenticated workspace.
Requires `unkey:v1:<workspace_id>:rootKeys/<key_id>#write`, and the caller must
already hold every permission of the original key. When `expiration` is not null,
it also requires `unkey:v1:<workspace_id>:rootKeys/<key_id>#delete`.

`expiration` controls the original key: 0 revokes it immediately, a positive value
keeps it valid for that many milliseconds, and null keeps its current expiration.


### Example Usage

<!-- UsageSnippet language="go" operationID="rootKeys.rerollKey" method="post" path="/v2/rootKeys.rerollKey" -->
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

    res, err := s.RootKeys.RerollKey(ctx, components.V2RootKeysRerollKeyRequestBody{
        KeyID: "<id>",
        Expiration: unkey.Pointer[int64](997482),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RootKeysRerollKeyResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                  | [context.Context](https://pkg.go.dev/context#Context)                                                  | :heavy_check_mark:                                                                                     | The context to use for the request.                                                                    |
| `request`                                                                                              | [components.V2RootKeysRerollKeyRequestBody](../../models/components/v2rootkeysrerollkeyrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `opts`                                                                                                 | [][operations.Option](../../models/operations/option.md)                                               | :heavy_minus_sign:                                                                                     | The options for this request.                                                                          |

### Response

**[*operations.RootKeysRerollKeyResponse](../../models/operations/rootkeysrerollkeyresponse.md), error**

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

## UpdateKey

Updates a root key in the authenticated workspace.
Requires `unkey:v1:<workspace_id>:rootKeys/<key_id>#write`.
Use `rootKeys/*#write` to update any root key in the workspace.

`permissions` replaces the complete permission set. Each permission must be a supported URN
in the authenticated workspace and within the caller's permissions.
An expiring root key can only update root keys that expire no later than itself.


### Example Usage

<!-- UsageSnippet language="go" operationID="rootKeys.updateKey" method="post" path="/v2/rootKeys.updateKey" -->
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

    res, err := s.RootKeys.UpdateKey(ctx, components.V2RootKeysUpdateKeyRequestBody{
        KeyID: "<id>",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2RootKeysUpdateKeyResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                  | [context.Context](https://pkg.go.dev/context#Context)                                                  | :heavy_check_mark:                                                                                     | The context to use for the request.                                                                    |
| `request`                                                                                              | [components.V2RootKeysUpdateKeyRequestBody](../../models/components/v2rootkeysupdatekeyrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `opts`                                                                                                 | [][operations.Option](../../models/operations/option.md)                                               | :heavy_minus_sign:                                                                                     | The options for this request.                                                                          |

### Response

**[*operations.RootKeysUpdateKeyResponse](../../models/operations/rootkeysupdatekeyresponse.md), error**

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