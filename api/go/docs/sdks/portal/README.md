# Portal

## Overview

Customer Portal session management

### Available Operations

* [CreatePortal](#createportal) - Create portal
* [CreateSession](#createsession) - Create portal session
* [DeletePortal](#deleteportal) - Delete portal
* [ExchangeCode](#exchangecode) - Exchange portal code
* [GetPortal](#getportal) - Get portal
* [GetVerifications](#getverifications) - Get portal verifications
* [ListKeys](#listkeys) - List portal keys
* [RerollKey](#rerollkey) - Reroll portal key
* [UpdatePortal](#updateportal) - Update portal

## CreatePortal

Create a portal for one app or keyspace in your workspace.

Unreleased and subject to change without notice.

Send exactly one of `keyspaceId` or `appId`. That resource must belong to your
workspace, and it can back only one portal, so a second portal for the same
resource is a **409**.

`displayName` is what your end users see. It is yours to set and change
independently of the resource the portal serves.

**Required Permissions**

Your root key must have `portal.*.create_portal`. A grant scoped to a specific
portal id does not authorize creation, because the id does not exist yet.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.createPortal" method="post" path="/v2/portal.createPortal" -->
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

    res, err := s.Portal.CreatePortal(ctx, components.CreateV2PortalCreatePortalRequestBodyUnionV2PortalCreatePortalRequestBody1(
        components.V2PortalCreatePortalRequestBody1{
            Slug: "acme-portal",
            DisplayName: "Acme",
            KeyspaceID: "ks_1234abcd",
            AppID: unkey.Pointer("app_1234abcd"),
            LogoURL: unkey.Pointer("https://cdn.example.com/logo.svg"),
            PrimaryColor: unkey.Pointer("#6366f1"),
        },
    ))
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalCreatePortalResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                              | [context.Context](https://pkg.go.dev/context#Context)                                                              | :heavy_check_mark:                                                                                                 | The context to use for the request.                                                                                |
| `request`                                                                                                          | [components.V2PortalCreatePortalRequestBodyUnion](../../models/components/v2portalcreateportalrequestbodyunion.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `opts`                                                                                                             | [][operations.Option](../../models/operations/option.md)                                                           | :heavy_minus_sign:                                                                                                 | The options for this request.                                                                                      |

### Response

**[*operations.PortalCreatePortalResponse](../../models/operations/portalcreateportalresponse.md), error**

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

## CreateSession

Create a portal session for an end user and get the URL to redirect them to.

The URL carries a single-use exchange code valid for 15 minutes, which the portal
redeems exactly once for a 24-hour access token via `portal.exchangeCode`.

**Required Permissions**

Authorization runs in two stages, and both must pass.

First, your root key must have one of the following permissions:
- `portal.*.create_portal_session` (to mint sessions for any portal in the workspace)
- `portal.<portal_id>.create_portal_session` (to mint sessions for a specific portal)

Second, a session can never carry a capability your root key does not itself
hold. Each requested scope additionally requires the equivalent permission on
every keyspace the portal resolves to:
- `keys:read` requires `api.<api_id>.read_key` **and** `api.<api_id>.read_api`
- `keys:reroll` requires `api.<api_id>.create_key`, plus
  `api.<api_id>.encrypt_key` when the keyspace stores encrypted keys

The `*` form of each is also accepted. Requesting a scope you do not hold
returns 403 for the whole request rather than minting a reduced session, so a
missing grant is visible instead of surfacing later as a broken portal.

Missing the portal permission itself returns **404**, not 403: a caller who
cannot mint for a portal is not told whether it exists.

Your root key must also be associated with a workspace that has an enabled portal.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.createSession" method="post" path="/v2/portal.createSession" -->
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

    res, err := s.Portal.CreateSession(ctx, components.V2PortalCreateSessionRequestBody{
        Portal: "proj_1234abcd",
        ExternalID: "user_123",
        Scopes: []components.Scope{
            components.ScopeKeysRead,
            components.ScopeKeysReroll,
            components.ScopeKeysRead,
        },
        ReturnURL: unkey.Pointer("https://app.example.com/settings/api-keys"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalCreateSessionResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                      | :heavy_check_mark:                                                                                         | The context to use for the request.                                                                        |
| `request`                                                                                                  | [components.V2PortalCreateSessionRequestBody](../../models/components/v2portalcreatesessionrequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `opts`                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                   | :heavy_minus_sign:                                                                                         | The options for this request.                                                                              |

### Response

**[*operations.PortalCreateSessionResponse](../../models/operations/portalcreatesessionresponse.md), error**

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

## DeletePortal

Delete a portal and revoke the sessions it minted.

Unreleased and subject to change without notice.

Its end users lose access rather than keeping it until their tokens expire.
Revocation is not instantaneous: session lookups are cached briefly, so a
request already in flight may still succeed.

The app or keyspace it served is untouched, and its slug becomes free for a
new portal.

**Required Permissions**

Your root key must have one of:
- `portal.*.delete_portal` (to delete any portal in the workspace)
- `portal.<portal_id>.delete_portal` (to delete a specific portal)

Without the permission this returns **404**, not 403.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.deletePortal" method="post" path="/v2/portal.deletePortal" -->
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

    res, err := s.Portal.DeletePortal(ctx, components.V2PortalDeletePortalRequestBody{
        Portal: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalDeletePortalResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2PortalDeletePortalRequestBody](../../models/components/v2portaldeleteportalrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.PortalDeletePortalResponse](../../models/operations/portaldeleteportalresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## ExchangeCode

Exchange a short-lived code for a long-lived portal access token.

This endpoint is unauthenticated. The code itself serves as proof of authorization.
Each code can only be redeemed once; subsequent attempts return 401.

The returned access token is valid for 24 hours and should be stored as an
httpOnly cookie or used in the Authorization header for subsequent API calls.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.exchangeCode" method="post" path="/v2/portal.exchangeCode" -->
```go
package main

import(
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New()

    res, err := s.Portal.ExchangeCode(ctx, components.V2PortalExchangeCodeRequestBody{
        Code: "pst_abc123def456",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalExchangeCodeResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2PortalExchangeCodeRequestBody](../../models/components/v2portalexchangecoderequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.PortalExchangeCodeResponse](../../models/operations/portalexchangecoderesponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## GetPortal

Read one portal, by its id or slug, or by the resource it serves.

Unreleased and subject to change without notice.

Send exactly one of `portal`, `keyspaceId`, or `appId`. Sending more than one
is a **400**.

**Required Permissions**

Your root key must have one of:
- `portal.*.read_portal` (to read any portal in the workspace)
- `portal.<portal_id>.read_portal` (to read a specific portal)

Without the permission this returns **404**, not 403.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.getPortal" method="post" path="/v2/portal.getPortal" -->
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

    res, err := s.Portal.GetPortal(ctx, components.CreateV2PortalGetPortalRequestBodyUnionV2PortalGetPortalRequestBody1(
        components.V2PortalGetPortalRequestBody1{
            Portal: "proj_1234abcd",
            KeyspaceID: unkey.Pointer("ks_1234abcd"),
            AppID: unkey.Pointer("app_1234abcd"),
        },
    ))
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalGetPortalResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                        | [context.Context](https://pkg.go.dev/context#Context)                                                        | :heavy_check_mark:                                                                                           | The context to use for the request.                                                                          |
| `request`                                                                                                    | [components.V2PortalGetPortalRequestBodyUnion](../../models/components/v2portalgetportalrequestbodyunion.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `opts`                                                                                                       | [][operations.Option](../../models/operations/option.md)                                                     | :heavy_minus_sign:                                                                                           | The options for this request.                                                                                |

### Response

**[*operations.PortalGetPortalResponse](../../models/operations/portalgetportalresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## GetVerifications

Return a verification analytics timeseries for the authenticated portal
session's end user.

Authenticates only with a portal session cookie and always restricts results
to verification events attributed to the session's external identity. Unlike
`analytics.getVerifications`, this endpoint takes a fixed time window (no
query language) and returns a zero-filled, outcome-broken-out timeseries.
Bucket granularity is chosen automatically from the window size.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.getVerifications" method="post" path="/v2/portal.getVerifications" -->
```go
package main

import(
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"os"
	"github.com/unkeyed/sdks/api/go/v3/models/operations"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New()

    res, err := s.Portal.GetVerifications(ctx, components.V2PortalGetVerificationsRequestBody{
        StartTime: 1704067200000,
        EndTime: 1704672000000,
        KeyID: unkey.Pointer("key_1234abcd"),
    }, operations.PortalGetVerificationsSecurity{
        PortalSession: os.Getenv("UNKEY_PORTAL_SESSION"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalGetVerificationsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                            | [context.Context](https://pkg.go.dev/context#Context)                                                            | :heavy_check_mark:                                                                                               | The context to use for the request.                                                                              |
| `request`                                                                                                        | [components.V2PortalGetVerificationsRequestBody](../../models/components/v2portalgetverificationsrequestbody.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `security`                                                                                                       | [operations.PortalGetVerificationsSecurity](../../models/operations/portalgetverificationssecurity.md)           | :heavy_check_mark:                                                                                               | The security requirements to use for the request.                                                                |
| `opts`                                                                                                           | [][operations.Option](../../models/operations/option.md)                                                         | :heavy_minus_sign:                                                                                               | The options for this request.                                                                                    |

### Response

**[*operations.PortalGetVerificationsResponse](../../models/operations/portalgetverificationsresponse.md), error**

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

Retrieve a paginated list of API keys owned by the authenticated portal
session's end user.

This is the portal-scoped variant of `apis.listKeys`. It authenticates only
with a portal session cookie and always restricts results to the keys owned
by the session's external identity, within the keyspaces configured on the
portal configuration. Both the identity and the keyspaces come from the
session, so the request body has no `externalId` or `apiId` field.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.listKeys" method="post" path="/v2/portal.listKeys" -->
```go
package main

import(
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"os"
	"github.com/unkeyed/sdks/api/go/v3/models/operations"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New()

    res, err := s.Portal.ListKeys(ctx, components.V2PortalListKeysRequestBody{
        Cursor: unkey.Pointer("key_1234abcd"),
    }, operations.PortalListKeysSecurity{
        PortalSession: os.Getenv("UNKEY_PORTAL_SESSION"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalListKeysResponseBody != nil {
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                            | [context.Context](https://pkg.go.dev/context#Context)                                            | :heavy_check_mark:                                                                               | The context to use for the request.                                                              |
| `request`                                                                                        | [components.V2PortalListKeysRequestBody](../../models/components/v2portallistkeysrequestbody.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.PortalListKeysSecurity](../../models/operations/portallistkeyssecurity.md)           | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `opts`                                                                                           | [][operations.Option](../../models/operations/option.md)                                         | :heavy_minus_sign:                                                                               | The options for this request.                                                                    |

### Response

**[*operations.PortalListKeysResponse](../../models/operations/portallistkeysresponse.md), error**

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

## RerollKey

Reroll an API key owned by the authenticated portal session's end user,
issuing a new key while preserving its configuration.

This is the portal-scoped variant of `keys.rerollKey`. It authenticates only
with a portal session cookie and may only reroll keys owned by the session's
external identity; any other key returns 404.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.rerollKey" method="post" path="/v2/portal.rerollKey" -->
```go
package main

import(
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"os"
	"github.com/unkeyed/sdks/api/go/v3/models/operations"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New()

    res, err := s.Portal.RerollKey(ctx, components.V2KeysRerollKeyRequestBody{
        KeyID: "key_2cGKbMxRyIzhCxo1Idjz8q",
        Expiration: 86400000,
    }, operations.PortalRerollKeySecurity{
        PortalSession: os.Getenv("UNKEY_PORTAL_SESSION"),
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
| `security`                                                                                     | [operations.PortalRerollKeySecurity](../../models/operations/portalrerollkeysecurity.md)       | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `opts`                                                                                         | [][operations.Option](../../models/operations/option.md)                                       | :heavy_minus_sign:                                                                             | The options for this request.                                                                  |

### Response

**[*operations.PortalRerollKeyResponse](../../models/operations/portalrerollkeyresponse.md), error**

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

## UpdatePortal

Change a portal's slug, display name, the resource it serves, its enabled
state, or its branding.

Unreleased and subject to change without notice.

Only the fields you send change. Omitting a field leaves it as it is, and for
branding, sending null clears it. Send at most one of `keyspaceId` or `appId`.

Two changes affect your end users immediately:
- Re-pointing at a different resource revokes the portal's live sessions,
  because a session carries the scope it was minted with.
- Disabling stops new sessions but leaves live ones running until they expire.

**Required Permissions**

Your root key must have one of:
- `portal.*.update_portal` (to update any portal in the workspace)
- `portal.<portal_id>.update_portal` (to update a specific portal)

Without the permission this returns **404**, not 403.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.updatePortal" method="post" path="/v2/portal.updatePortal" -->
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

    res, err := s.Portal.UpdatePortal(ctx, components.V2PortalUpdatePortalRequestBody{
        Portal: "proj_1234abcd",
        Slug: unkey.Pointer("acme-portal"),
        DisplayName: unkey.Pointer("Acme"),
        KeyspaceID: unkey.Pointer("ks_1234abcd"),
        AppID: unkey.Pointer("app_1234abcd"),
        Enabled: unkey.Pointer(false),
        LogoURL: optionalnullable.From(unkey.Pointer("https://cdn.example.com/logo.svg")),
        PrimaryColor: optionalnullable.From(unkey.Pointer("#6366f1")),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalUpdatePortalResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2PortalUpdatePortalRequestBody](../../models/components/v2portalupdateportalrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.PortalUpdatePortalResponse](../../models/operations/portalupdateportalresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.ConflictErrorResponse        | 409                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |