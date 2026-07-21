# Portal

## Overview

Customer Portal session management

### Available Operations

* [CreateSession](#createsession) - Create portal session
* [ExchangeSession](#exchangesession) - Exchange session token
* [GetVerifications](#getverifications) - Get portal verifications
* [ListKeys](#listkeys) - List portal keys
* [RerollKey](#rerollkey) - Reroll portal key

## CreateSession

Create a short-lived session token for an end user to access the Customer Portal.

The returned session ID is valid for 15 minutes and can be exchanged exactly once
for a 24-hour browser session via `portal.exchangeSession`. Redirect the end user
to the returned URL to start the portal experience.

**Required Permissions**

Your root key must be associated with a workspace that has an enabled portal configuration.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.createSession" method="post" path="/v2/portal.createSession" -->
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

    res, err := s.Portal.CreateSession(ctx, components.V2PortalCreateSessionRequestBody{
        Slug: "my-portal",
        ExternalID: "user_123",
        Permissions: []components.PermissionEnum{
            components.PermissionEnumKeysCreate,
            components.PermissionEnumAnalyticsRead,
            components.PermissionEnumKeysCreate,
        },
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

## ExchangeSession

Exchange a short-lived session token for a long-lived browser session.

This endpoint is unauthenticated. The session token itself serves as proof of authorization.
Each token can only be exchanged once; subsequent attempts return 401.

The returned browser session token is valid for 24 hours and should be stored as an
httpOnly cookie or used in the Authorization header for subsequent API calls.


### Example Usage

<!-- UsageSnippet language="go" operationID="portal.exchangeSession" method="post" path="/v2/portal.exchangeSession" -->
```go
package main

import(
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New()

    res, err := s.Portal.ExchangeSession(ctx, components.V2PortalExchangeSessionRequestBody{
        SessionID: "pst_abc123def456",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2PortalExchangeSessionResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                                          | :heavy_check_mark:                                                                                             | The context to use for the request.                                                                            |
| `request`                                                                                                      | [components.V2PortalExchangeSessionRequestBody](../../models/components/v2portalexchangesessionrequestbody.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `opts`                                                                                                         | [][operations.Option](../../models/operations/option.md)                                                       | :heavy_minus_sign:                                                                                             | The options for this request.                                                                                  |

### Response

**[*operations.PortalExchangeSessionResponse](../../models/operations/portalexchangesessionresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
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
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"os"
	"github.com/unkeyed/sdks/api/go/v2/models/operations"
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
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"os"
	"github.com/unkeyed/sdks/api/go/v2/models/operations"
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
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"os"
	"github.com/unkeyed/sdks/api/go/v2/models/operations"
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