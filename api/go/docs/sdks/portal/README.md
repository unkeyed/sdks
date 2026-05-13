# Portal

## Overview

Customer Portal session management

### Available Operations

* [CreateSession](#createsession) - Create portal session
* [ExchangeSession](#exchangesession) - Exchange session token

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
        Permissions: []string{
            "api.*.read_key",
            "api.*.create_key",
            "api.*.read_analytics",
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