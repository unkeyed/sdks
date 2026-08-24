# Domains

## Overview

Custom domain operations

### Available Operations

* [CreateDomain](#createdomain) - Create domain
* [DeleteDomain](#deletedomain) - Delete domain
* [GetDomain](#getdomain) - Get domain
* [ListDomains](#listdomains) - List domains
* [VerifyDomain](#verifydomain) - Verify domain

## CreateDomain

Attach a custom domain to an environment and start verifying it.

The domain is created in the `pending` state and does not serve traffic until verification succeeds. Verification runs in the background and polls DNS, so it is eventually consistent.

The response returns `dnsRecords`: every record needed to finish setup, already resolved for whether this domain is an apex or a subdomain. Create every entry exactly as given. One record establishes routing and one proves ownership, and both are needed: whether ownership can be inferred from the routing record depends on how your provider publishes it, and a name another workspace has already verified can only be claimed through the ownership record. Neither is knowable before the records exist.

When your DNS provider supports Domain Connect, the response also carries a `domainConnect` object; opening its `url` applies the same records at the provider in one step. The object is absent when the shortcut is unavailable.

Domains are unique per workspace, so the same name cannot be attached to two environments. Attaching a domain that already exists in your workspace returns a 409 conflict.

How many domains you may attach is set by your plan. Attaching one beyond that allowance returns a 403; upgrade the plan or remove a domain you no longer need.

**Important**: verification stops after 24 hours without the required DNS records, and the domain moves to `failed`.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.create_domain` (to attach domains to any environment)
- `environment.<environment_id>.create_domain` (to attach domains to a specific environment)


### Example Usage: allowanceExceeded

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="allowanceExceeded" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: apex

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="apex" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        Domain: "acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: byId

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="byId" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "proj_1234abcd",
        App: "app_1234abcd",
        Environment: "env_1234abcd",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: bySlug

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="bySlug" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: domainConnect

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="domainConnect" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: domainExists

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="domainExists" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: environmentNotFound

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="environmentNotFound" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: internalError

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="internalError" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidDomain

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="invalidDomain" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="invalidRootKey" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="keyDisabled" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: publicSuffix

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="publicSuffix" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: rateLimited

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="rateLimited" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: subdomain

<!-- UsageSnippet language="go" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="subdomain" -->
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

    res, err := s.Domains.CreateDomain(ctx, components.V2DomainsCreateDomainRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsCreateDomainResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                      | :heavy_check_mark:                                                                                         | The context to use for the request.                                                                        |
| `request`                                                                                                  | [components.V2DomainsCreateDomainRequestBody](../../models/components/v2domainscreatedomainrequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `opts`                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                   | :heavy_minus_sign:                                                                                         | The options for this request.                                                                              |

### Response

**[*operations.DomainsCreateDomainResponse](../../models/operations/domainscreatedomainresponse.md), error**

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

## DeleteDomain

Delete a custom domain from your workspace.

Address the domain by its id or by its name. Names are unique per workspace, so
`api.acme.com` is enough.

Unkey stops serving the domain. Later requests fail with a certificate error. The DNS
records at your provider stay in place.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.delete_domain` (to delete domains in any environment)
- `environment.<environment_id>.delete_domain` (to delete domains in a specific environment)


### Example Usage: byId

<!-- UsageSnippet language="go" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="byId" -->
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

    res, err := s.Domains.DeleteDomain(ctx, components.V2DomainsDeleteDomainRequestBody{
        Domain: "dom_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsDeleteDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: byName

<!-- UsageSnippet language="go" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="byName" -->
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

    res, err := s.Domains.DeleteDomain(ctx, components.V2DomainsDeleteDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsDeleteDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: domainNotFound

<!-- UsageSnippet language="go" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="domainNotFound" -->
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

    res, err := s.Domains.DeleteDomain(ctx, components.V2DomainsDeleteDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsDeleteDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: internalError

<!-- UsageSnippet language="go" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="internalError" -->
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

    res, err := s.Domains.DeleteDomain(ctx, components.V2DomainsDeleteDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsDeleteDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidIdentifier

<!-- UsageSnippet language="go" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="invalidIdentifier" -->
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

    res, err := s.Domains.DeleteDomain(ctx, components.V2DomainsDeleteDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsDeleteDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="go" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="invalidRootKey" -->
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

    res, err := s.Domains.DeleteDomain(ctx, components.V2DomainsDeleteDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsDeleteDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="go" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="keyDisabled" -->
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

    res, err := s.Domains.DeleteDomain(ctx, components.V2DomainsDeleteDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsDeleteDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: rateLimited

<!-- UsageSnippet language="go" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="rateLimited" -->
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

    res, err := s.Domains.DeleteDomain(ctx, components.V2DomainsDeleteDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsDeleteDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: success

<!-- UsageSnippet language="go" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="success" -->
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

    res, err := s.Domains.DeleteDomain(ctx, components.V2DomainsDeleteDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsDeleteDomainResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                      | :heavy_check_mark:                                                                                         | The context to use for the request.                                                                        |
| `request`                                                                                                  | [components.V2DomainsDeleteDomainRequestBody](../../models/components/v2domainsdeletedomainrequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `opts`                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                   | :heavy_minus_sign:                                                                                         | The options for this request.                                                                              |

### Response

**[*operations.DomainsDeleteDomainResponse](../../models/operations/domainsdeletedomainresponse.md), error**

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

## GetDomain

Retrieve a custom domain and its verification status.

Address the domain by its id or by its name. Names are unique per workspace, so
`api.acme.com` is sufficient. You do not need to supply a project, app, or environment.

Use this endpoint to poll after `domains.createDomain`. Verification runs in the background
and checks DNS approximately each minute.

`status: verified` means the domain is verified. Unkey has configured routing and requested a
certificate. Each entry in `dnsRecords` has a `verified` flag. The flag shows which records
Unkey has read back, so you can see which records are still missing. Some providers hide a
record from DNS lookups, for example a proxied or flattened routing record. Such a record stays
`false` while it serves traffic. `verificationError` gives the reason for the last failed
attempt.

`dnsRecords` contains the same values that `domains.createDomain` returned. Use it to recover
the values without creating the domain again.

**Important**: verification stops 24 hours after the domain was created, and the status becomes
`failed`. The window starts at `createdAt`, not at the last attempt.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_domain` (to read domains in any environment)
- `environment.<environment_id>.read_domain` (to read domains in a specific environment)


### Example Usage: byId

<!-- UsageSnippet language="go" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="byId" -->
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

    res, err := s.Domains.GetDomain(ctx, components.V2DomainsGetDomainRequestBody{
        Domain: "dom_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsGetDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: byName

<!-- UsageSnippet language="go" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="byName" -->
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

    res, err := s.Domains.GetDomain(ctx, components.V2DomainsGetDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsGetDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: domainNotFound

<!-- UsageSnippet language="go" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="domainNotFound" -->
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

    res, err := s.Domains.GetDomain(ctx, components.V2DomainsGetDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsGetDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: failed

<!-- UsageSnippet language="go" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="failed" -->
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

    res, err := s.Domains.GetDomain(ctx, components.V2DomainsGetDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsGetDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: internalError

<!-- UsageSnippet language="go" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="internalError" -->
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

    res, err := s.Domains.GetDomain(ctx, components.V2DomainsGetDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsGetDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidIdentifier

<!-- UsageSnippet language="go" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="invalidIdentifier" -->
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

    res, err := s.Domains.GetDomain(ctx, components.V2DomainsGetDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsGetDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="go" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="invalidRootKey" -->
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

    res, err := s.Domains.GetDomain(ctx, components.V2DomainsGetDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsGetDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="go" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="keyDisabled" -->
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

    res, err := s.Domains.GetDomain(ctx, components.V2DomainsGetDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsGetDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: pending

<!-- UsageSnippet language="go" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="pending" -->
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

    res, err := s.Domains.GetDomain(ctx, components.V2DomainsGetDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsGetDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: rateLimited

<!-- UsageSnippet language="go" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="rateLimited" -->
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

    res, err := s.Domains.GetDomain(ctx, components.V2DomainsGetDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsGetDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: verified

<!-- UsageSnippet language="go" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="verified" -->
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

    res, err := s.Domains.GetDomain(ctx, components.V2DomainsGetDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsGetDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: verifiedThroughOwnership

<!-- UsageSnippet language="go" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="verifiedThroughOwnership" -->
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

    res, err := s.Domains.GetDomain(ctx, components.V2DomainsGetDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsGetDomainResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                | [context.Context](https://pkg.go.dev/context#Context)                                                | :heavy_check_mark:                                                                                   | The context to use for the request.                                                                  |
| `request`                                                                                            | [components.V2DomainsGetDomainRequestBody](../../models/components/v2domainsgetdomainrequestbody.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `opts`                                                                                               | [][operations.Option](../../models/operations/option.md)                                             | :heavy_minus_sign:                                                                                   | The options for this request.                                                                        |

### Response

**[*operations.DomainsGetDomainResponse](../../models/operations/domainsgetdomainresponse.md), error**

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

## ListDomains

List the custom domains attached to an environment and their verification status.

Results are paginated and sorted by their id. When `hasMore` is true, send the
returned `cursor` to get the next page. An environment with no domains returns an
empty array, not a 404.

`status: verified` means the domain is verified. Unkey has configured routing and requested a
certificate. Each domain includes its full `dnsRecords`. Each record has a `verified` flag.
The flag shows which records Unkey has read back, so you can see which records are still
missing without a second call. Some providers hide a record from DNS lookups, for example a
proxied or flattened routing record. Such a record stays `false` while it serves traffic.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_domain` (to read domains in any environment)
- `environment.<environment_id>.read_domain` (to read domains in a specific environment)


### Example Usage: byIds

<!-- UsageSnippet language="go" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="byIds" -->
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

    res, err := s.Domains.ListDomains(ctx, components.V2DomainsListDomainsRequestBody{
        Project: "proj_1234abcd",
        App: "app_1234abcd",
        Environment: "env_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsListDomainsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: bySlugs

<!-- UsageSnippet language="go" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="bySlugs" -->
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

    res, err := s.Domains.ListDomains(ctx, components.V2DomainsListDomainsRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsListDomainsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: domainList

<!-- UsageSnippet language="go" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="domainList" -->
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

    res, err := s.Domains.ListDomains(ctx, components.V2DomainsListDomainsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Cursor: unkey.Pointer("dom_1234abcd"),
        Search: unkey.Pointer("acme.com"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsListDomainsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: empty

<!-- UsageSnippet language="go" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="empty" -->
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

    res, err := s.Domains.ListDomains(ctx, components.V2DomainsListDomainsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Cursor: unkey.Pointer("dom_1234abcd"),
        Search: unkey.Pointer("acme.com"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsListDomainsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: environmentNotFound

<!-- UsageSnippet language="go" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="environmentNotFound" -->
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

    res, err := s.Domains.ListDomains(ctx, components.V2DomainsListDomainsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Cursor: unkey.Pointer("dom_1234abcd"),
        Search: unkey.Pointer("acme.com"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsListDomainsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: internalError

<!-- UsageSnippet language="go" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="internalError" -->
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

    res, err := s.Domains.ListDomains(ctx, components.V2DomainsListDomainsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Cursor: unkey.Pointer("dom_1234abcd"),
        Search: unkey.Pointer("acme.com"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsListDomainsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="go" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="invalidRootKey" -->
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

    res, err := s.Domains.ListDomains(ctx, components.V2DomainsListDomainsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Cursor: unkey.Pointer("dom_1234abcd"),
        Search: unkey.Pointer("acme.com"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsListDomainsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="go" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="keyDisabled" -->
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

    res, err := s.Domains.ListDomains(ctx, components.V2DomainsListDomainsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Cursor: unkey.Pointer("dom_1234abcd"),
        Search: unkey.Pointer("acme.com"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsListDomainsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: paginated

<!-- UsageSnippet language="go" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="paginated" -->
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

    res, err := s.Domains.ListDomains(ctx, components.V2DomainsListDomainsRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        Limit: unkey.Pointer[int64](20),
        Cursor: unkey.Pointer("dom_1234abcd"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsListDomainsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: rateLimited

<!-- UsageSnippet language="go" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="rateLimited" -->
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

    res, err := s.Domains.ListDomains(ctx, components.V2DomainsListDomainsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Cursor: unkey.Pointer("dom_1234abcd"),
        Search: unkey.Pointer("acme.com"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsListDomainsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: search

<!-- UsageSnippet language="go" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="search" -->
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

    res, err := s.Domains.ListDomains(ctx, components.V2DomainsListDomainsRequestBody{
        Project: "payments",
        App: "payments-api",
        Environment: "production",
        Search: unkey.Pointer("acme.com"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsListDomainsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: searchTooLong

<!-- UsageSnippet language="go" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="searchTooLong" -->
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

    res, err := s.Domains.ListDomains(ctx, components.V2DomainsListDomainsRequestBody{
        Project: "proj_1234abcd",
        App: "proj_1234abcd",
        Environment: "proj_1234abcd",
        Cursor: unkey.Pointer("dom_1234abcd"),
        Search: unkey.Pointer("acme.com"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsListDomainsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                    | [context.Context](https://pkg.go.dev/context#Context)                                                    | :heavy_check_mark:                                                                                       | The context to use for the request.                                                                      |
| `request`                                                                                                | [components.V2DomainsListDomainsRequestBody](../../models/components/v2domainslistdomainsrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `opts`                                                                                                   | [][operations.Option](../../models/operations/option.md)                                                 | :heavy_minus_sign:                                                                                       | The options for this request.                                                                            |

### Response

**[*operations.DomainsListDomainsResponse](../../models/operations/domainslistdomainsresponse.md), error**

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

## VerifyDomain

Restart verification for a custom domain.

Address the domain by its ID or by its name. Names are unique per workspace, so
`api.acme.com` is enough.

Call this after you correct the DNS records of a domain that shows `failed`, or to give a
`pending` domain a new 24-hour verification period. The domain goes back to `pending` and
the 24-hour period starts again.

The endpoint returns when Unkey accepts the retry. Poll `domains.getDomain` for the result.

A domain that is already `verified` returns a 412.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.verify_domain` (to verify domains in any environment)
- `environment.<environment_id>.verify_domain` (to verify domains in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="go" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="accepted" -->
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

    res, err := s.Domains.VerifyDomain(ctx, components.V2DomainsVerifyDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsVerifyDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: alreadyVerified

<!-- UsageSnippet language="go" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="alreadyVerified" -->
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

    res, err := s.Domains.VerifyDomain(ctx, components.V2DomainsVerifyDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsVerifyDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: byId

<!-- UsageSnippet language="go" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="byId" -->
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

    res, err := s.Domains.VerifyDomain(ctx, components.V2DomainsVerifyDomainRequestBody{
        Domain: "dom_1234abcd",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsVerifyDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: byName

<!-- UsageSnippet language="go" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="byName" -->
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

    res, err := s.Domains.VerifyDomain(ctx, components.V2DomainsVerifyDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsVerifyDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: domainNotFound

<!-- UsageSnippet language="go" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="domainNotFound" -->
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

    res, err := s.Domains.VerifyDomain(ctx, components.V2DomainsVerifyDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsVerifyDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: internalError

<!-- UsageSnippet language="go" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="internalError" -->
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

    res, err := s.Domains.VerifyDomain(ctx, components.V2DomainsVerifyDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsVerifyDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidIdentifier

<!-- UsageSnippet language="go" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="invalidIdentifier" -->
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

    res, err := s.Domains.VerifyDomain(ctx, components.V2DomainsVerifyDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsVerifyDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="go" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="invalidRootKey" -->
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

    res, err := s.Domains.VerifyDomain(ctx, components.V2DomainsVerifyDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsVerifyDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="go" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="keyDisabled" -->
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

    res, err := s.Domains.VerifyDomain(ctx, components.V2DomainsVerifyDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsVerifyDomainResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: rateLimited

<!-- UsageSnippet language="go" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="rateLimited" -->
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

    res, err := s.Domains.VerifyDomain(ctx, components.V2DomainsVerifyDomainRequestBody{
        Domain: "api.acme.com",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2DomainsVerifyDomainResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                      | :heavy_check_mark:                                                                                         | The context to use for the request.                                                                        |
| `request`                                                                                                  | [components.V2DomainsVerifyDomainRequestBody](../../models/components/v2domainsverifydomainrequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `opts`                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                   | :heavy_minus_sign:                                                                                         | The options for this request.                                                                              |

### Response

**[*operations.DomainsVerifyDomainResponse](../../models/operations/domainsverifydomainresponse.md), error**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| apierrors.BadRequestErrorResponse         | 400                                       | application/json                          |
| apierrors.UnauthorizedErrorResponse       | 401                                       | application/json                          |
| apierrors.ForbiddenErrorResponse          | 403                                       | application/json                          |
| apierrors.NotFoundErrorResponse           | 404                                       | application/json                          |
| apierrors.PreconditionFailedErrorResponse | 412                                       | application/json                          |
| apierrors.TooManyRequestsErrorResponse    | 429                                       | application/json                          |
| apierrors.InternalServerErrorResponse     | 500                                       | application/json                          |
| apierrors.APIError                        | 4XX, 5XX                                  | \*/\*                                     |