# Gateway

## Overview

Gateway policy operations

### Available Operations

* [ListPolicies](#listpolicies) - List policies
* [SetPolicies](#setpolicies) - Set policies
* [UpdatePolicy](#updatepolicy) - Update policy

## ListPolicies

Retrieve an environment's gateway policies in evaluation order: the
gateway evaluates them top to bottom and the first rejection
short-circuits the request.

The full policy list is returned in a single response.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_policies` (for any environment)
- `environment.<environment_id>.read_policies` (for a specific environment)


### Example Usage

<!-- UsageSnippet language="go" operationID="gateway.listPolicies" method="post" path="/v2/gateway.listPolicies" example="list" -->
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

    res, err := s.Gateway.ListPolicies(ctx, components.V2GatewayListPoliciesRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2GatewayListPoliciesResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                      | :heavy_check_mark:                                                                                         | The context to use for the request.                                                                        |
| `request`                                                                                                  | [components.V2GatewayListPoliciesRequestBody](../../models/components/v2gatewaylistpoliciesrequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `opts`                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                   | :heavy_minus_sign:                                                                                         | The options for this request.                                                                              |

### Response

**[*operations.GatewayListPoliciesResponse](../../models/operations/gatewaylistpoliciesresponse.md), error**

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

## SetPolicies

Replace an environment's gateway policies in a single atomic request.
Policies run at the edge before requests reach your app: verify API keys,
rate limit, block requests outright, or validate them against your
OpenAPI spec.

Policies are an ordered list: the gateway evaluates them top to bottom
and the first rejection short-circuits the request.

Each policy sets exactly one of `keyauth`, `ratelimit`, `firewall` or
`openapi`, plus optional `match` expressions restricting which requests
it applies to.

Every call is a full replace: the environment's policies become exactly
the request list in the given order, and the server generates a fresh id
for each one. An empty list removes all policies. The operation is
atomic: if any policy is invalid, nothing is written.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.set_policies` (for any environment)
- `environment.<environment_id>.set_policies` (for a specific environment)


### Example Usage: matchers

<!-- UsageSnippet language="go" operationID="gateway.setPolicies" method="post" path="/v2/gateway.setPolicies" example="matchers" -->
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

    res, err := s.Gateway.SetPolicies(ctx, components.V2GatewaySetPoliciesRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        Policies: []components.Policy{
            components.Policy{
                Name: "Block internal paths",
                Enabled: true,
                Match: []components.MatchExpr{
                    components.MatchExpr{
                        Path: &components.PathMatch{
                            Path: components.StringMatch{
                                Prefix: unkey.Pointer("/internal/"),
                            },
                        },
                    },
                },
                Firewall: &components.FirewallPolicy{
                    Action: components.ActionActionDeny,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2GatewaySetPoliciesResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: reset

<!-- UsageSnippet language="go" operationID="gateway.setPolicies" method="post" path="/v2/gateway.setPolicies" example="reset" -->
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

    res, err := s.Gateway.SetPolicies(ctx, components.V2GatewaySetPoliciesRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        Policies: []components.Policy{},
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2GatewaySetPoliciesResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: set

<!-- UsageSnippet language="go" operationID="gateway.setPolicies" method="post" path="/v2/gateway.setPolicies" example="set" -->
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

    res, err := s.Gateway.SetPolicies(ctx, components.V2GatewaySetPoliciesRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        Policies: []components.Policy{
            components.Policy{
                Name: "Require API key",
                Enabled: true,
                Keyauth: &components.KeyauthPolicy{
                    Keyspaces: []string{
                        "ks_1234abcd",
                    },
                },
            },
            components.Policy{
                Name: "Global IP limit",
                Enabled: true,
                Ratelimit: &components.RatelimitPolicy{
                    Limit: 100,
                    WindowMs: 60000,
                    Identifier: components.RatelimitIdentifier{
                        RemoteIP: &components.RemoteIPKey{},
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2GatewaySetPoliciesResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2GatewaySetPoliciesRequestBody](../../models/components/v2gatewaysetpoliciesrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.GatewaySetPoliciesResponse](../../models/operations/gatewaysetpoliciesresponse.md), error**

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

## UpdatePolicy

Update a single policy in place without resending the environment's full
policy list. The policy keeps its id and its position in the evaluation
order, and all other policies are untouched.

Omitted fields keep their stored values; at least one updatable field
must be provided. Setting `match` to null removes all match expressions
so the policy applies to every request. Providing one of `keyauth`,
`ratelimit`, `firewall` or `openapi` replaces the policy's rule
entirely, including switching its type; at most one may be set.

Policy ids are regenerated whenever `gateway.setPolicies` replaces the
list, so fetch current ids via `gateway.listPolicies` first.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.update_policy` (for any environment)
- `environment.<environment_id>.update_policy` (for a specific environment)


### Example Usage: clearMatch

<!-- UsageSnippet language="go" operationID="gateway.updatePolicy" method="post" path="/v2/gateway.updatePolicy" example="clearMatch" -->
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

    res, err := s.Gateway.UpdatePolicy(ctx, components.V2GatewayUpdatePolicyRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        PolicyID: "pol_9d2Fk1LmQ",
        Match: nil,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2GatewayUpdatePolicyResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: disable

<!-- UsageSnippet language="go" operationID="gateway.updatePolicy" method="post" path="/v2/gateway.updatePolicy" example="disable" -->
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

    res, err := s.Gateway.UpdatePolicy(ctx, components.V2GatewayUpdatePolicyRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        PolicyID: "pol_9d2Fk1LmQ",
        Enabled: unkey.Pointer(false),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2GatewayUpdatePolicyResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: rename

<!-- UsageSnippet language="go" operationID="gateway.updatePolicy" method="post" path="/v2/gateway.updatePolicy" example="rename" -->
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

    res, err := s.Gateway.UpdatePolicy(ctx, components.V2GatewayUpdatePolicyRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        PolicyID: "pol_9d2Fk1LmQ",
        Name: unkey.Pointer("Require API key (v2)"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2GatewayUpdatePolicyResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: switchRule

<!-- UsageSnippet language="go" operationID="gateway.updatePolicy" method="post" path="/v2/gateway.updatePolicy" example="switchRule" -->
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

    res, err := s.Gateway.UpdatePolicy(ctx, components.V2GatewayUpdatePolicyRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        PolicyID: "pol_9d2Fk1LmQ",
        Firewall: &components.FirewallPolicy{
            Action: components.ActionActionDeny,
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2GatewayUpdatePolicyResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                      | :heavy_check_mark:                                                                                         | The context to use for the request.                                                                        |
| `request`                                                                                                  | [components.V2GatewayUpdatePolicyRequestBody](../../models/components/v2gatewayupdatepolicyrequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `opts`                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                   | :heavy_minus_sign:                                                                                         | The options for this request.                                                                              |

### Response

**[*operations.GatewayUpdatePolicyResponse](../../models/operations/gatewayupdatepolicyresponse.md), error**

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