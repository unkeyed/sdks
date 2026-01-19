# Keys

## Overview

API key management operations

### Available Operations

* [AddPermissions](#addpermissions) - Add key permissions
* [AddRoles](#addroles) - Add key roles
* [CreateKey](#createkey) - Create API key
* [DeleteKey](#deletekey) - Delete API keys
* [GetKey](#getkey) - Get API key
* [MigrateKeys](#migratekeys) - Migrate API key(s)
* [RemovePermissions](#removepermissions) - Remove key permissions
* [RemoveRoles](#removeroles) - Remove key roles
* [RerollKey](#rerollkey) - Reroll Key
* [SetPermissions](#setpermissions) - Set key permissions
* [SetRoles](#setroles) - Set key roles
* [UpdateCredits](#updatecredits) - Update key credits
* [UpdateKey](#updatekey) - Update key settings
* [VerifyKey](#verifykey) - Verify API key
* [Whoami](#whoami) - Get API key by hash

## AddPermissions

Add permissions to a key without affecting existing permissions.

Use this for privilege upgrades, enabling new features, or plan changes that grant additional capabilities. Permissions granted through roles remain unchanged.

**Important**: Changes take effect immediately with up to 30-second edge propagation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Invalidates the key cache for immediate effect, and makes permissions available for verification within 30 seconds across all regions.


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.addPermissions" method="post" path="/v2/keys.addPermissions" -->
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

    res, err := s.Keys.AddPermissions(ctx, components.V2KeysAddPermissionsRequestBody{
        KeyID: "key_2cGKbMxRyIzhCxo1Idjz8q",
        Permissions: []string{
            "<value 1>",
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysAddPermissionsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2KeysAddPermissionsRequestBody](../../models/components/v2keysaddpermissionsrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.KeysAddPermissionsResponse](../../models/operations/keysaddpermissionsresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## AddRoles

Add roles to a key without affecting existing roles or permissions.

Use this for privilege upgrades, enabling new feature sets, or subscription changes that grant additional role-based capabilities. Direct permissions remain unchanged.

**Important**: Changes take effect immediately with up to 30-second edge propagation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Invalidates the key cache for immediate effect, and makes role assignments available for verification within 30 seconds across all regions.


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.addRoles" method="post" path="/v2/keys.addRoles" -->
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

    res, err := s.Keys.AddRoles(ctx, components.V2KeysAddRolesRequestBody{
        KeyID: "key_2cGKbMxRyIzhCxo1Idjz8q",
        Roles: []string{
            "<value 1>",
            "<value 2>",
            "<value 3>",
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysAddRolesResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `ctx`                                                                                        | [context.Context](https://pkg.go.dev/context#Context)                                        | :heavy_check_mark:                                                                           | The context to use for the request.                                                          |
| `request`                                                                                    | [components.V2KeysAddRolesRequestBody](../../models/components/v2keysaddrolesrequestbody.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `opts`                                                                                       | [][operations.Option](../../models/operations/option.md)                                     | :heavy_minus_sign:                                                                           | The options for this request.                                                                |

### Response

**[*operations.KeysAddRolesResponse](../../models/operations/keysaddrolesresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## CreateKey

Create a new API key for user authentication and authorization.

Use this endpoint when users sign up, upgrade subscription tiers, or need additional keys. Keys are cryptographically secure and unique to the specified API namespace.

**Important**: The key is returned only once. Store it immediately and provide it to your user, as it cannot be retrieved later.

**Common use cases:**
- Generate keys for new user registrations
- Create additional keys for different applications
- Issue keys with specific permissions or limits

**Required Permissions**

Your root key needs one of:
- `api.*.create_key` (create keys in any API)
- `api.<api_id>.create_key` (create keys in specific API)


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.createKey" method="post" path="/v2/keys.createKey" -->
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

    res, err := s.Keys.CreateKey(ctx, components.V2KeysCreateKeyRequestBody{
        APIID: "api_1234abcd",
        Prefix: unkey.Pointer("prod"),
        Name: unkey.Pointer("Payment Service Production Key"),
        ByteLength: unkey.Pointer[int64](24),
        ExternalID: unkey.Pointer("user_1234abcd"),
        Meta: map[string]any{
            "plan": "enterprise",
            "featureFlags": map[string]any{
                "betaAccess": true,
                "concurrentConnections": 10,
            },
            "customerName": "Acme Corp",
            "billing": map[string]any{
                "tier": "premium",
                "renewal": "2024-12-31",
            },
        },
        Roles: []string{
            "api_admin",
            "billing_reader",
        },
        Permissions: []string{
            "documents.read",
            "documents.write",
            "settings.view",
        },
        Expires: unkey.Pointer[int64](1704067200000),
        Credits: &components.KeyCreditsData{
            Remaining: unkey.Pointer[int64](1000),
            Refill: &components.KeyCreditsRefill{
                Interval: components.KeyCreditsRefillIntervalDaily,
                Amount: 1000,
                RefillDay: unkey.Pointer[int64](15),
            },
        },
        Ratelimits: []components.RatelimitRequest{
            components.RatelimitRequest{
                Name: "requests",
                Limit: 100,
                Duration: 60000,
                AutoApply: unkey.Pointer(true),
            },
            components.RatelimitRequest{
                Name: "heavy_operations",
                Limit: 10,
                Duration: 3600000,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysCreateKeyResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ctx`                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                          | :heavy_check_mark:                                                                             | The context to use for the request.                                                            |
| `request`                                                                                      | [components.V2KeysCreateKeyRequestBody](../../models/components/v2keyscreatekeyrequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `opts`                                                                                         | [][operations.Option](../../models/operations/option.md)                                       | :heavy_minus_sign:                                                                             | The options for this request.                                                                  |

### Response

**[*operations.KeysCreateKeyResponse](../../models/operations/keyscreatekeyresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## DeleteKey

Delete API keys permanently from user accounts or for cleanup purposes.

Use this for user-requested key deletion, account deletion workflows, or cleaning up unused keys. Keys are immediately invalidated. Two modes: soft delete (default, preserves audit records) and permanent delete.

**Important**: For temporary access control, use `updateKey` with `enabled: false` instead of deletion.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.delete_key` (to delete keys in any API)
- `api.<api_id>.delete_key` (to delete keys in a specific API)


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.deleteKey" method="post" path="/v2/keys.deleteKey" -->
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

    res, err := s.Keys.DeleteKey(ctx, components.V2KeysDeleteKeyRequestBody{
        KeyID: "key_2cGKbMxRyIzhCxo1Idjz8q",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysDeleteKeyResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ctx`                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                          | :heavy_check_mark:                                                                             | The context to use for the request.                                                            |
| `request`                                                                                      | [components.V2KeysDeleteKeyRequestBody](../../models/components/v2keysdeletekeyrequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `opts`                                                                                         | [][operations.Option](../../models/operations/option.md)                                       | :heavy_minus_sign:                                                                             | The options for this request.                                                                  |

### Response

**[*operations.KeysDeleteKeyResponse](../../models/operations/keysdeletekeyresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## GetKey

Retrieve detailed key information for dashboard interfaces and administrative purposes.

Use this to build key management dashboards showing users their key details, status, permissions, and usage data. You can identify keys by `keyId` or the actual key string.

**Important**: Set `decrypt: true` only in secure contexts to retrieve plaintext key values from recoverable keys.

**Required Permissions**

Your root key must have one of the following permissions for basic key information:
- `api.*.read_key` (to read keys from any API)
- `api.<api_id>.read_key` (to read keys from a specific API)

Additional permission required for decrypt functionality:
- `api.*.decrypt_key` or `api.<api_id>.decrypt_key`


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.getKey" method="post" path="/v2/keys.getKey" -->
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

    res, err := s.Keys.GetKey(ctx, components.V2KeysGetKeyRequestBody{
        KeyID: "key_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysGetKeyResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ctx`                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                    | :heavy_check_mark:                                                                       | The context to use for the request.                                                      |
| `request`                                                                                | [components.V2KeysGetKeyRequestBody](../../models/components/v2keysgetkeyrequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `opts`                                                                                   | [][operations.Option](../../models/operations/option.md)                                 | :heavy_minus_sign:                                                                       | The options for this request.                                                            |

### Response

**[*operations.KeysGetKeyResponse](../../models/operations/keysgetkeyresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## MigrateKeys

Returns HTTP 200 even on partial success; hashes that could not be migrated are listed under `data.failed`.

**Required Permissions**
Your root key must have one of the following permissions for basic key information:
- `api.*.create_key` (to migrate keys to any API)
- `api.<api_id>.create_key` (to migrate keys to a specific API)


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.migrateKeys" method="post" path="/v2/keys.migrateKeys" -->
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

    res, err := s.Keys.MigrateKeys(ctx, components.V2KeysMigrateKeysRequestBody{
        MigrationID: "your_company",
        APIID: "api_123456789",
        Keys: []components.V2KeysMigrateKeyData{
            components.V2KeysMigrateKeyData{
                Hash: "your_already_hashed_key",
                Name: unkey.Pointer("Payment Service Production Key"),
                ExternalID: unkey.Pointer("user_1234abcd"),
                Meta: map[string]any{
                    "plan": "enterprise",
                    "featureFlags": map[string]any{
                        "betaAccess": true,
                        "concurrentConnections": 10,
                    },
                    "customerName": "Acme Corp",
                    "billing": map[string]any{
                        "tier": "premium",
                        "renewal": "2024-12-31",
                    },
                },
                Roles: []string{
                    "api_admin",
                    "billing_reader",
                },
                Permissions: []string{
                    "documents.read",
                    "documents.write",
                    "settings.view",
                },
                Credits: &components.KeyCreditsData{
                    Remaining: unkey.Pointer[int64](1000),
                    Refill: &components.KeyCreditsRefill{
                        Interval: components.KeyCreditsRefillIntervalDaily,
                        Amount: 1000,
                        RefillDay: unkey.Pointer[int64](15),
                    },
                },
                Ratelimits: []components.RatelimitRequest{
                    components.RatelimitRequest{
                        Name: "requests",
                        Limit: 100,
                        Duration: 60000,
                        AutoApply: unkey.Pointer(true),
                    },
                    components.RatelimitRequest{
                        Name: "heavy_operations",
                        Limit: 10,
                        Duration: 3600000,
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysMigrateKeysResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                              | [context.Context](https://pkg.go.dev/context#Context)                                              | :heavy_check_mark:                                                                                 | The context to use for the request.                                                                |
| `request`                                                                                          | [components.V2KeysMigrateKeysRequestBody](../../models/components/v2keysmigratekeysrequestbody.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `opts`                                                                                             | [][operations.Option](../../models/operations/option.md)                                           | :heavy_minus_sign:                                                                                 | The options for this request.                                                                      |

### Response

**[*operations.KeysMigrateKeysResponse](../../models/operations/keysmigratekeysresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## RemovePermissions

Remove permissions from a key without affecting existing roles or other permissions.

Use this for privilege downgrades, removing temporary access, or plan changes that revoke specific capabilities. Permissions granted through roles remain unchanged.

**Important**: Changes take effect immediately with up to 30-second edge propagation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Invalidates the key cache for immediate effect, and makes permission changes available for verification within 30 seconds across all regions.


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.removePermissions" method="post" path="/v2/keys.removePermissions" -->
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

    res, err := s.Keys.RemovePermissions(ctx, components.V2KeysRemovePermissionsRequestBody{
        KeyID: "key_2cGKbMxRyIzhCxo1Idjz8q",
        Permissions: []string{},
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysRemovePermissionsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                                          | :heavy_check_mark:                                                                                             | The context to use for the request.                                                                            |
| `request`                                                                                                      | [components.V2KeysRemovePermissionsRequestBody](../../models/components/v2keysremovepermissionsrequestbody.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `opts`                                                                                                         | [][operations.Option](../../models/operations/option.md)                                                       | :heavy_minus_sign:                                                                                             | The options for this request.                                                                                  |

### Response

**[*operations.KeysRemovePermissionsResponse](../../models/operations/keysremovepermissionsresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## RemoveRoles

Remove roles from a key without affecting direct permissions or other roles.

Use this for privilege downgrades, removing temporary access, or subscription changes that revoke specific role-based capabilities. Direct permissions remain unchanged.

**Important**: Changes take effect immediately with up to 30-second edge propagation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Invalidates the key cache for immediate effect, and makes role changes available for verification within 30 seconds across all regions.


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.removeRoles" method="post" path="/v2/keys.removeRoles" -->
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

    res, err := s.Keys.RemoveRoles(ctx, components.V2KeysRemoveRolesRequestBody{
        KeyID: "key_2cGKbMxRyIzhCxo1Idjz8q",
        Roles: []string{},
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysRemoveRolesResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                              | [context.Context](https://pkg.go.dev/context#Context)                                              | :heavy_check_mark:                                                                                 | The context to use for the request.                                                                |
| `request`                                                                                          | [components.V2KeysRemoveRolesRequestBody](../../models/components/v2keysremoverolesrequestbody.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `opts`                                                                                             | [][operations.Option](../../models/operations/option.md)                                           | :heavy_minus_sign:                                                                                 | The options for this request.                                                                      |

### Response

**[*operations.KeysRemoveRolesResponse](../../models/operations/keysremoverolesresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## RerollKey

Generate a new API key while preserving the configuration from an existing key.

This operation creates a fresh key with a new token while maintaining all settings from the original key:
- Permissions and roles
- Custom metadata
- Rate limit configurations
- Identity associations
- Remaining credits
- Recovery settings

**Key Generation:**
- The system attempts to extract the prefix from the original key
- If prefix extraction fails, the default API prefix is used
- Key length follows the API's default byte configuration (or 16 bytes if not specified)

**Original Key Handling:**
- The original key will be revoked after the duration specified in `expiration`
- Set `expiration` to 0 to revoke immediately
- This allows for graceful key rotation with an overlap period

Common use cases include:
- Rotating keys for security compliance
- Issuing replacement keys for compromised credentials
- Creating backup keys with identical permissions

**Important:** Analytics and usage metrics are tracked at both the key level AND identity level. If the original key has an identity, the new key will inherit it, allowing you to track usage across both individual keys and the overall identity.

**Required Permissions**

 Your root key must have:
 - `api.*.create_key` or `api.<api_id>.create_key`
 - `api.*.encrypt_key` or `api.<api_id>.encrypt_key` (only when the original key is recoverable)


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.rerollKey" method="post" path="/v2/keys.rerollKey" -->
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

    res, err := s.Keys.RerollKey(ctx, components.V2KeysRerollKeyRequestBody{
        KeyID: "key_2cGKbMxRyIzhCxo1Idjz8q",
        Expiration: 86400000,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysRerollKeyResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ctx`                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                          | :heavy_check_mark:                                                                             | The context to use for the request.                                                            |
| `request`                                                                                      | [components.V2KeysRerollKeyRequestBody](../../models/components/v2keysrerollkeyrequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `opts`                                                                                         | [][operations.Option](../../models/operations/option.md)                                       | :heavy_minus_sign:                                                                             | The options for this request.                                                                  |

### Response

**[*operations.KeysRerollKeyResponse](../../models/operations/keysrerollkeyresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## SetPermissions

Replace all permissions on a key with the specified set in a single atomic operation.

Use this to synchronize with external systems, reset permissions to a known state, or apply standardized permission templates. Permissions granted through roles remain unchanged.

**Important**: Changes take effect immediately with up to 30-second edge propagation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Invalidates the key cache for immediate effect, and makes permission changes available for verification within 30 seconds across all regions.


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.setPermissions" method="post" path="/v2/keys.setPermissions" -->
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

    res, err := s.Keys.SetPermissions(ctx, components.V2KeysSetPermissionsRequestBody{
        KeyID: "key_2cGKbMxRyIzhCxo1Idjz8q",
        Permissions: []string{
            "<value 1>",
            "<value 2>",
            "<value 3>",
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysSetPermissionsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2KeysSetPermissionsRequestBody](../../models/components/v2keyssetpermissionsrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.KeysSetPermissionsResponse](../../models/operations/keyssetpermissionsresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## SetRoles

Replace all roles on a key with the specified set in a single atomic operation.

Use this to synchronize with external systems, reset roles to a known state, or apply standardized role templates. Direct permissions are never affected.

**Important**: Changes take effect immediately with up to 30-second edge propagation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Invalidates the key cache for immediate effect, and makes role changes available for verification within 30 seconds across all regions.


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.setRoles" method="post" path="/v2/keys.setRoles" -->
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

    res, err := s.Keys.SetRoles(ctx, components.V2KeysSetRolesRequestBody{
        KeyID: "key_2cGKbMxRyIzhCxo1Idjz8q",
        Roles: []string{},
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysSetRolesResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `ctx`                                                                                        | [context.Context](https://pkg.go.dev/context#Context)                                        | :heavy_check_mark:                                                                           | The context to use for the request.                                                          |
| `request`                                                                                    | [components.V2KeysSetRolesRequestBody](../../models/components/v2keyssetrolesrequestbody.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `opts`                                                                                       | [][operations.Option](../../models/operations/option.md)                                     | :heavy_minus_sign:                                                                           | The options for this request.                                                                |

### Response

**[*operations.KeysSetRolesResponse](../../models/operations/keyssetrolesresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## UpdateCredits

Update credit quotas in response to plan changes, billing cycles, or usage purchases.

Use this for user upgrades/downgrades, monthly quota resets, credit purchases, or promotional bonuses. Supports three operations: set, increment, or decrement credits. Set to null for unlimited usage.

**Important**: Setting unlimited credits automatically clears existing refill configurations.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Credit updates remove the key from cache immediately. Setting credits to unlimited automatically clears any existing refill settings. Changes take effect instantly but may take up to 30 seconds to propagate to all edge regions.


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.updateCredits" method="post" path="/v2/keys.updateCredits" -->
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

    res, err := s.Keys.UpdateCredits(ctx, components.V2KeysUpdateCreditsRequestBody{
        KeyID: "key_2cGKbMxRyIzhCxo1Idjz8q",
        Value: unkey.Pointer[int64](1000),
        Operation: components.OperationSet,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysUpdateCreditsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                  | [context.Context](https://pkg.go.dev/context#Context)                                                  | :heavy_check_mark:                                                                                     | The context to use for the request.                                                                    |
| `request`                                                                                              | [components.V2KeysUpdateCreditsRequestBody](../../models/components/v2keysupdatecreditsrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `opts`                                                                                                 | [][operations.Option](../../models/operations/option.md)                                               | :heavy_minus_sign:                                                                                     | The options for this request.                                                                          |

### Response

**[*operations.KeysUpdateCreditsResponse](../../models/operations/keysupdatecreditsresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## UpdateKey

Update key properties in response to plan changes, subscription updates, or account status changes.

Use this for user upgrades/downgrades, role modifications, or administrative changes. Supports partial updates - only specify fields you want to change. Set fields to null to clear them.

**Important**: Permissions and roles are replaced entirely. Use dedicated add/remove endpoints for incremental changes.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

If you specify an `externalId` that doesn't exist, a new identity will be automatically created and linked to the key. Permission updates will auto-create any permissions that don't exist in your workspace. Changes take effect immediately but may take up to 30 seconds to propagate to all edge regions due to cache invalidation.


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.updateKey" method="post" path="/v2/keys.updateKey" -->
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

    res, err := s.Keys.UpdateKey(ctx, components.V2KeysUpdateKeyRequestBody{
        KeyID: "key_2cGKbMxRyIzhCxo1Idjz8q",
        Name: unkey.Pointer("Payment Service Production Key"),
        ExternalID: unkey.Pointer("user_912a841d"),
        Meta: map[string]any{
            "plan": "enterprise",
            "limits": map[string]any{
                "storage": "500GB",
                "compute": "1000 minutes/month",
            },
            "features": []any{
                "analytics",
                "exports",
                "webhooks",
            },
            "hasAcceptedTerms": true,
            "billing": map[string]any{
                "cycle": "monthly",
                "next_billing": "2024-01-15",
            },
            "preferences": map[string]any{
                "timezone": "UTC",
                "notifications": true,
            },
            "lastBillingDate": "2023-10-15",
        },
        Expires: unkey.Pointer[int64](1704067200000),
        Credits: &components.UpdateKeyCreditsData{
            Remaining: unkey.Pointer[int64](1000),
            Refill: &components.UpdateKeyCreditsRefill{
                Interval: components.UpdateKeyCreditsRefillIntervalDaily,
                Amount: 1000,
                RefillDay: unkey.Pointer[int64](15),
            },
        },
        Ratelimits: []components.RatelimitRequest{
            components.RatelimitRequest{
                Name: "api",
                Limit: 738192,
                Duration: 167910,
            },
        },
        Enabled: unkey.Pointer(true),
        Roles: []string{
            "api_admin",
            "billing_reader",
        },
        Permissions: []string{
            "documents.read",
            "documents.write",
            "settings.view",
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysUpdateKeyResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ctx`                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                          | :heavy_check_mark:                                                                             | The context to use for the request.                                                            |
| `request`                                                                                      | [components.V2KeysUpdateKeyRequestBody](../../models/components/v2keysupdatekeyrequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `opts`                                                                                         | [][operations.Option](../../models/operations/option.md)                                       | :heavy_minus_sign:                                                                             | The options for this request.                                                                  |

### Response

**[*operations.KeysUpdateKeyResponse](../../models/operations/keysupdatekeyresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## VerifyKey

Verify an API key's validity and permissions for request authentication.

Use this endpoint on every incoming request to your protected resources. It checks key validity, permissions, rate limits, and usage quotas in a single call.

**Important**: Always returns HTTP 200. Check the `valid` field in response data to determine if the key is authorized.

**Common use cases:**
- Authenticate API requests before processing
- Enforce permission-based access control
- Track usage and apply rate limits

**Required Permissions**

Your root key needs one of:
- `api.*.verify_key` (verify keys in any API)
- `api.<api_id>.verify_key` (verify keys in specific API)

**Note**: If your root key has no verify permissions at all, you will receive a `403 Forbidden` error. If your root key has verify permissions for a different API than the key you're verifying, you will receive a `200` response with `code: NOT_FOUND` to avoid leaking key existence.


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.verifyKey" method="post" path="/v2/keys.verifyKey" -->
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

    res, err := s.Keys.VerifyKey(ctx, components.V2KeysVerifyKeyRequestBody{
        Key: "sk_1234abcdef",
        Tags: []string{
            "endpoint=/users/profile",
            "method=GET",
            "region=us-east-1",
            "clientVersion=2.3.0",
            "feature=premium",
        },
        Permissions: unkey.Pointer("documents.read AND users.view"),
        Credits: &components.KeysVerifyKeyCredits{
            Cost: 5,
        },
        Ratelimits: []components.KeysVerifyKeyRatelimit{
            components.KeysVerifyKeyRatelimit{
                Name: "tokens",
                Cost: unkey.Pointer[int64](2),
                Limit: unkey.Pointer[int64](50),
                Duration: unkey.Pointer[int64](600000),
            },
        },
        MigrationID: unkey.Pointer("m_1234abcd"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysVerifyKeyResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ctx`                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                          | :heavy_check_mark:                                                                             | The context to use for the request.                                                            |
| `request`                                                                                      | [components.V2KeysVerifyKeyRequestBody](../../models/components/v2keysverifykeyrequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `opts`                                                                                         | [][operations.Option](../../models/operations/option.md)                                       | :heavy_minus_sign:                                                                             | The options for this request.                                                                  |

### Response

**[*operations.KeysVerifyKeyResponse](../../models/operations/keysverifykeyresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |

## Whoami

Find out what key this is.

**Required Permissions**

Your root key must have one of the following permissions for basic key information:
- `api.*.read_key` (to read keys from any API)
- `api.<api_id>.read_key` (to read keys from a specific API)

If your rootkey lacks permissions but the key exists, we may return a 404 status here to prevent leaking the existance of a key to unauthorized clients. If you believe that a key should exist, but receive a 404, please double check your root key has the correct permissions.


### Example Usage

<!-- UsageSnippet language="go" operationID="keys.whoami" method="post" path="/v2/keys.whoami" -->
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

    res, err := s.Keys.Whoami(ctx, components.V2KeysWhoamiRequestBody{
        Key: "sk_1234abcdef5678",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2KeysWhoamiResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ctx`                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                    | :heavy_check_mark:                                                                       | The context to use for the request.                                                      |
| `request`                                                                                | [components.V2KeysWhoamiRequestBody](../../models/components/v2keyswhoamirequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `opts`                                                                                   | [][operations.Option](../../models/operations/option.md)                                 | :heavy_minus_sign:                                                                       | The options for this request.                                                            |

### Response

**[*operations.KeysWhoamiResponse](../../models/operations/keyswhoamiresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.NotFoundErrorResponse       | 404                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |