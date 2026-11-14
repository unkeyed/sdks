# Portal

## Overview

Customer Portal session management

### Available Operations

* [CreateDomain](#createdomain) - Create portal domain
* [CreatePortal](#createportal) - Create portal
* [CreateSession](#createsession) - Create portal session
* [DeleteDomain](#deletedomain) - Delete portal domain
* [DeletePortal](#deleteportal) - Delete portal
* [ExchangeCode](#exchangecode) - Exchange portal code
* [GetDomain](#getdomain) - Get portal domain
* [GetPortal](#getportal) - Get portal
* [GetVerifications](#getverifications) - Get portal verifications
* [ListDomains](#listdomains) - List portal domains
* [ListKeys](#listkeys) - List portal keys
* [ListSessions](#listsessions) - List portal sessions
* [RerollKey](#rerollkey) - Reroll portal key
* [RevokeSession](#revokesession) - Revoke portal sessions
* [UpdatePortal](#updateportal) - Update portal
* [VerifyDomain](#verifydomain) - Verify portal domain

## CreateDomain

Attach a custom domain to a portal and start verifying it.

The domain is created in the `pending` state and does not serve the portal until
verification succeeds. The response returns `dnsRecords`: create every entry exactly as
given. Verification runs in the background; poll `portal.getDomain` for the result.

A name already attached to one of your portals or environments returns a 409.

Requires `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/domains/*#write`.
Use `portals/*/domains/*#write` to attach domains to any portal in the project.
Without the permission this returns **404**, not 403, unless the key can read
the portal or its domains.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.createDomain" method="post" path="/v2/portal.createDomain" -->
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

    res, err := s.Portal.CreateDomain(ctx, components.V2PortalCreateDomainRequestBody{
        Portal: "proj_1234abcd",
        Domain: "portal.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalCreateDomainResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2PortalCreateDomainRequestBody](../../models/components/v2portalcreatedomainrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.PortalCreateDomainResponse](../../models/operations/portalcreatedomainresponse.md), error**

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

## CreatePortal

Create a portal for one app or keyspace in your workspace.

Unreleased and subject to change without notice.

Send exactly one of `keyspaceId` or `appId`. That resource must belong to your
workspace, and it can back only one portal, so a second portal for the same
resource is a **409**.

`displayName` is what your end users see. It is yours to set and change
independently of the resource the portal serves.

**Required Permissions**

Your root key must have `unkey:v1:<workspace_id>:projects/<project_id>/portals/*#write`
for the project that owns the app or keyspace. A grant scoped to a specific
portal ID does not authorize creation, because the ID does not exist yet.

You must also have read permission on the resource the portal serves:

- `unkey:v1:<workspace_id>:projects/<project_id>/apps/<app_id>#read` for an app.
- `unkey:v1:<workspace_id>:projects/<project_id>/keyspaces/<keyspace_id>#read` for a keyspace.

Broader grants that cover these resources and actions also authorize the request.
A missing permission returns **403**. An app or keyspace outside your workspace
returns **404**, the same as a resource that does not exist.


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

First, your root key must have
`unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/sessions/*#write`.
Write permission on the portal itself does not grant permission to mint sessions.

Second, a session can never carry a capability your root key does not itself
hold. Each requested scope additionally requires the equivalent permission on
every keyspace the portal resolves to:
- `keys:read` requires `unkey:v1:<workspace_id>:projects/<project_id>/keyspaces/<keyspace_id>/keys/*#read`
  and `unkey:v1:<workspace_id>:projects/<project_id>/keyspaces/<keyspace_id>#read`.
- `keys:reroll` requires `unkey:v1:<workspace_id>:projects/<project_id>/keyspaces/<keyspace_id>/keys/*#write`,
  including when the keyspace stores encrypted keys.
- `analytics:read` requires `unkey:v1:<workspace_id>:projects/<project_id>/keyspaces/<keyspace_id>/logs#read`.

Broader URN grants that cover these resources and actions are also accepted.
A grant on one concrete key cannot satisfy the `keys/*` requirement.
Requesting a scope you do not hold
returns 403 for the whole request rather than minting a reduced session, so a
missing grant is visible instead of surfacing later as a broken portal.

Missing the portal permission itself returns **404** when your root key
cannot read the portal or its sessions, so a caller who cannot see a portal
is not told whether it exists. A root key that can read the portal but lacks
the permission gets **403**.

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
            components.ScopeAnalyticsRead,
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
| apierrors.ConflictErrorResponse        | 409                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## DeleteDomain

Detach a custom domain from a portal. A verified domain stops serving the portal.

Requires `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/domains/<domain_id>#delete`.
Use `portals/<portal_id>/domains/*#delete` to delete any domain on the portal.
Without the permission this returns **404**, not 403, unless the key can read
the portal or the domain.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.deleteDomain" method="post" path="/v2/portal.deleteDomain" example="accepted" -->
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

    res, err := s.Portal.DeleteDomain(ctx, components.V2PortalDeleteDomainRequestBody{
        Portal: "proj_1234abcd",
        DomainID: "pdom_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalDeleteDomainResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2PortalDeleteDomainRequestBody](../../models/components/v2portaldeletedomainrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.PortalDeleteDomainResponse](../../models/operations/portaldeletedomainresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/json                       |
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

Its custom domains are deleted with it: they stop serving and their DNS
records can be removed. Their certificates are not revoked.

**Required Permissions**

Your root key must have `delete` permission on
`unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>`.
A broader grant, such as `unkey:v1:<workspace_id>:**#delete`, also permits deletion.

A root key that cannot read the portal gets **404**. One that can read it
but lacks the permission gets **403**.


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
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
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

## GetDomain

Read one custom domain attached to a portal, with its verification status and DNS records.

Requires `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/domains/<domain_id>#read`.
Use `portals/<portal_id>/domains/*#read` to read every domain on the portal.
Without the permission this returns **404**, not 403, unless the key can read
the portal itself.


### Example Usage: failed

<!-- UsageSnippet language="go" operationID="portal.getDomain" method="post" path="/v2/portal.getDomain" example="failed" -->
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

    res, err := s.Portal.GetDomain(ctx, components.V2PortalGetDomainRequestBody{
        Portal: "proj_1234abcd",
        DomainID: "pdom_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalGetDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: verified

<!-- UsageSnippet language="go" operationID="portal.getDomain" method="post" path="/v2/portal.getDomain" example="verified" -->
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

    res, err := s.Portal.GetDomain(ctx, components.V2PortalGetDomainRequestBody{
        Portal: "proj_1234abcd",
        DomainID: "pdom_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalGetDomainResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                              | [context.Context](https://pkg.go.dev/context#Context)                                              | :heavy_check_mark:                                                                                 | The context to use for the request.                                                                |
| `request`                                                                                          | [components.V2PortalGetDomainRequestBody](../../models/components/v2portalgetdomainrequestbody.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `opts`                                                                                             | [][operations.Option](../../models/operations/option.md)                                           | :heavy_minus_sign:                                                                                 | The options for this request.                                                                      |

### Response

**[*operations.PortalGetDomainResponse](../../models/operations/portalgetdomainresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/json                       |
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
query language) and returns outcome-broken-out counts. Bucket granularity is
chosen automatically from the window size.

The response carries one zero-filled series per key the end user has
verifications for, so a client can render both a per-key table and an
account-wide chart from one call by summing them. Pass `keyId` to narrow the
window to a single key.


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

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| apierrors.BadRequestErrorResponse          | 400                                        | application/json                           |
| apierrors.UnauthorizedErrorResponse        | 401                                        | application/json                           |
| apierrors.ForbiddenErrorResponse           | 403                                        | application/json                           |
| apierrors.NotFoundErrorResponse            | 404                                        | application/json                           |
| apierrors.UnprocessableEntityErrorResponse | 422                                        | application/json                           |
| apierrors.TooManyRequestsErrorResponse     | 429                                        | application/problem+json                   |
| apierrors.InternalServerErrorResponse      | 500                                        | application/json                           |
| apierrors.APIError                         | 4XX, 5XX                                   | \*/\*                                      |

## ListDomains

List the custom domains attached to a portal, with their verification status and DNS records.

Requires `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/domains/*#read`.
Without the permission this returns **404**, not 403, unless the key can read
the portal itself.


### Example Usage: empty

<!-- UsageSnippet language="go" operationID="portal.listDomains" method="post" path="/v2/portal.listDomains" example="empty" -->
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

    res, err := s.Portal.ListDomains(ctx, components.V2PortalListDomainsRequestBody{
        Portal: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalListDomainsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: twoDomains

<!-- UsageSnippet language="go" operationID="portal.listDomains" method="post" path="/v2/portal.listDomains" example="twoDomains" -->
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

    res, err := s.Portal.ListDomains(ctx, components.V2PortalListDomainsRequestBody{
        Portal: "proj_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalListDomainsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                  | [context.Context](https://pkg.go.dev/context#Context)                                                  | :heavy_check_mark:                                                                                     | The context to use for the request.                                                                    |
| `request`                                                                                              | [components.V2PortalListDomainsRequestBody](../../models/components/v2portallistdomainsrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `opts`                                                                                                 | [][operations.Option](../../models/operations/option.md)                                               | :heavy_minus_sign:                                                                                     | The options for this request.                                                                          |

### Response

**[*operations.PortalListDomainsResponse](../../models/operations/portallistdomainsresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/json                       |
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

## ListSessions

List the end users holding a revocable session on a portal, with each
end user's sessions.

Unreleased and subject to change without notice.

A session is revocable until it expires or is revoked. That includes
sessions whose portal URL was created but not opened yet. Pass an end
user's `externalId` to `portal.revokeSession` to end their sessions.

**Required Permissions**

Your root key must have `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/sessions/*`
with `#read` or `#write`. Reading the portal itself is not enough.

Without the permission this returns **404**, not 403.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.listSessions" method="post" path="/v2/portal.listSessions" -->
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

    res, err := s.Portal.ListSessions(ctx, components.V2PortalListSessionsRequestBody{
        Portal: "proj_1234abcd",
        Cursor: unkey.Pointer("user_123"),
        Search: unkey.Pointer("user_"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalListSessionsResponseBody != nil {
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

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2PortalListSessionsRequestBody](../../models/components/v2portallistsessionsrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.PortalListSessionsResponse](../../models/operations/portallistsessionsresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
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
        Expiration: unkey.Pointer[int64](86400000),
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

## RevokeSession

Revoke every live session an end user holds on a portal.

Unreleased and subject to change without notice.

Sessions that were created but not yet opened are revoked too, so their
portal URLs stop working. Revocation is not instantaneous: session lookups
are cached briefly, so a request already in flight may still succeed.

Revoking ends existing sessions only. To keep the end user out, also stop
calling `portal.createSession` for them.

Calling this again for the same end user is safe and revokes nothing.

**Required Permissions**

Your root key must have `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/sessions/*#write`,
which dashboard roles carry. Unlike `portal.createSession`, a dashboard
session can call this, not just a root key.

A root key that cannot read the portal's sessions gets **404**. One that can
read them but lacks the permission gets **403**.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.revokeSession" method="post" path="/v2/portal.revokeSession" -->
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

    res, err := s.Portal.RevokeSession(ctx, components.V2PortalRevokeSessionRequestBody{
        Portal: "proj_1234abcd",
        ExternalID: "user_123",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalRevokeSessionResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                      | :heavy_check_mark:                                                                                         | The context to use for the request.                                                                        |
| `request`                                                                                                  | [components.V2PortalRevokeSessionRequestBody](../../models/components/v2portalrevokesessionrequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `opts`                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                   | :heavy_minus_sign:                                                                                         | The options for this request.                                                                              |

### Response

**[*operations.PortalRevokeSessionResponse](../../models/operations/portalrevokesessionresponse.md), error**

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
- Disabling stops new sessions and revokes the live ones. Re-enabling does
  not restore them.

**Required Permissions**

Your root key must have `write` permission on
`unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>`.
A broader grant, such as `unkey:v1:<workspace_id>:**#write`, also permits updates.

To change the mapped resource, your root key must also have `read` permission
on the target:
- `unkey:v1:<workspace_id>:projects/<project_id>/keyspaces/<keyspace_id>#read`
  for a keyspace.
- `unkey:v1:<workspace_id>:projects/<project_id>/apps/<app_id>#read` for an app.

A root key that cannot read the portal gets **404**. One that can read it
but lacks the permission gets **403**.


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
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.ConflictErrorResponse        | 409                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |

## VerifyDomain

Restart verification for a portal domain.

Call this after you correct the DNS records of a domain that shows `failed`, or to give a
`pending` domain a new 24-hour verification period. The endpoint returns when Unkey accepts
the retry. Poll `portal.getDomain` for the result.

A domain that is already `verified` returns a 202 and starts nothing.

Requires `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/domains/<domain_id>#write`.
Use `portals/<portal_id>/domains/*#write` to manage every domain on the portal.
Without the permission this returns **404**, not 403, unless the key can read
the portal or the domain.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.verifyDomain" method="post" path="/v2/portal.verifyDomain" example="accepted" -->
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

    res, err := s.Portal.VerifyDomain(ctx, components.V2PortalVerifyDomainRequestBody{
        Portal: "proj_1234abcd",
        DomainID: "pdom_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalVerifyDomainResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2PortalVerifyDomainRequestBody](../../models/components/v2portalverifydomainrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.PortalVerifyDomainResponse](../../models/operations/portalverifydomainresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.NotFoundErrorResponse        | 404                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/json                       |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |