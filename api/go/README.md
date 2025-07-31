# github.com/unkeyed/sdks/go/api

Developer-friendly & type-safe Go SDK specifically catered to leverage *github.com/unkeyed/sdks/go/api* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=github-com/unkeyed/sdks/go/api&utm_campaign=go"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>



<!-- Start Summary [summary] -->
## Summary

Unkey API: Unkey's API provides programmatic access for all resources within our platform.


### Authentication
#
This API uses HTTP Bearer authentication with root keys. Most endpoints require specific permissions associated with your root key. When making requests, include your root key in the `Authorization` header:
```
Authorization: Bearer unkey_xxxxxxxxxxx
```

All responses follow a consistent envelope structure that separates operational metadata from actual data. This design provides several benefits:
- Debugging: Every response includes a unique requestId for tracing issues
- Consistency: Predictable response format across all endpoints
- Extensibility: Easy to add new metadata without breaking existing integrations
- Error Handling: Unified error format with actionable information

### Success Response Format:
```json
{
  "meta": {
    "requestId": "req_123456"
  },
  "data": {
    // Actual response data here
  }
}
```

The meta object contains operational information:
- `requestId`: Unique identifier for this request (essential for support)

The data object contains the actual response data specific to each endpoint.

### Paginated Response Format:
```json
{
  "meta": {
    "requestId": "req_123456"
  },
  "data": [
    // Array of results
  ],
  "pagination": {
    "cursor": "next_page_token",
    "hasMore": true
  }
}
```

The pagination object appears on list endpoints and contains:
- `cursor`: Token for requesting the next page
- `hasMore`: Whether more results are available

### Error Response Format:
```json
{
  "meta": {
    "requestId": "req_2c9a0jf23l4k567"
  },
  "error": {
    "detail": "The resource you are attempting to modify is protected and cannot be changed",
    "status": 403,
    "title": "Forbidden",
    "type": "https://unkey.com/docs/errors/unkey/application/protected_resource"
  }
}
```

Error responses include comprehensive diagnostic information:
- `title`: Human-readable error summary
- `detail`: Specific description of what went wrong
- `status`: HTTP status code
- `type`: Link to error documentation
- `errors`: Array of validation errors (for 400 responses)

This structure ensures you always have the context needed to debug issues and take corrective action.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [github.com/unkeyed/sdks/go/api](#githubcomunkeyedsdksgoapi)
  * [SDK Installation](#sdk-installation)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

To add the SDK as a dependency to your project:
```bash
go get github.com/unkeyed/sdks/api/go
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```go
package main

import (
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"log"
	"os"
)

func main() {
	ctx := context.Background()

	s := unkey.New(
		unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
	)

	res, err := s.Apis.CreateAPI(ctx, components.V2ApisCreateAPIRequestBody{
		Name: "payment-service-production",
	})
	if err != nil {
		log.Fatal(err)
	}
	if res.V2ApisCreateAPIResponseBody != nil {
		// handle response
	}
}

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name      | Type | Scheme      | Environment Variable |
| --------- | ---- | ----------- | -------------------- |
| `RootKey` | http | HTTP Bearer | `UNKEY_ROOT_KEY`     |

You can configure it using the `WithSecurity` option when initializing the SDK client instance. For example:
```go
package main

import (
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"log"
	"os"
)

func main() {
	ctx := context.Background()

	s := unkey.New(
		unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
	)

	res, err := s.Apis.CreateAPI(ctx, components.V2ApisCreateAPIRequestBody{
		Name: "payment-service-production",
	})
	if err != nil {
		log.Fatal(err)
	}
	if res.V2ApisCreateAPIResponseBody != nil {
		// handle response
	}
}

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Apis](docs/sdks/apis/README.md)

* [CreateAPI](docs/sdks/apis/README.md#createapi) - Create API namespace
* [DeleteAPI](docs/sdks/apis/README.md#deleteapi) - Delete API namespace
* [GetAPI](docs/sdks/apis/README.md#getapi) - Get API namespace
* [ListKeys](docs/sdks/apis/README.md#listkeys) - List API keys

### [Identities](docs/sdks/identities/README.md)

* [CreateIdentity](docs/sdks/identities/README.md#createidentity) - Create Identity
* [DeleteIdentity](docs/sdks/identities/README.md#deleteidentity) - Delete Identity
* [GetIdentity](docs/sdks/identities/README.md#getidentity) - Get Identity
* [ListIdentities](docs/sdks/identities/README.md#listidentities) - List Identities
* [UpdateIdentity](docs/sdks/identities/README.md#updateidentity) - Update Identity

### [Keys](docs/sdks/keys/README.md)

* [AddPermissions](docs/sdks/keys/README.md#addpermissions) - Add key permissions
* [AddRoles](docs/sdks/keys/README.md#addroles) - Add key roles
* [CreateKey](docs/sdks/keys/README.md#createkey) - Create API key
* [DeleteKey](docs/sdks/keys/README.md#deletekey) - Delete API keys
* [GetKey](docs/sdks/keys/README.md#getkey) - Get API key
* [RemovePermissions](docs/sdks/keys/README.md#removepermissions) - Remove key permissions
* [RemoveRoles](docs/sdks/keys/README.md#removeroles) - Remove key roles
* [SetPermissions](docs/sdks/keys/README.md#setpermissions) - Set key permissions
* [SetRoles](docs/sdks/keys/README.md#setroles) - Set key roles
* [UpdateCredits](docs/sdks/keys/README.md#updatecredits) - Update key credits
* [UpdateKey](docs/sdks/keys/README.md#updatekey) - Update key settings
* [VerifyKey](docs/sdks/keys/README.md#verifykey) - Verify API key
* [Whoami](docs/sdks/keys/README.md#whoami) - Get API key by hash

### [Permissions](docs/sdks/permissions/README.md)

* [CreatePermission](docs/sdks/permissions/README.md#createpermission) - Create permission
* [CreateRole](docs/sdks/permissions/README.md#createrole) - Create role
* [DeletePermission](docs/sdks/permissions/README.md#deletepermission) - Delete permission
* [DeleteRole](docs/sdks/permissions/README.md#deleterole) - Delete role
* [GetPermission](docs/sdks/permissions/README.md#getpermission) - Get permission
* [GetRole](docs/sdks/permissions/README.md#getrole) - Get role
* [ListPermissions](docs/sdks/permissions/README.md#listpermissions) - List permissions
* [ListRoles](docs/sdks/permissions/README.md#listroles) - List roles

### [Ratelimit](docs/sdks/ratelimit/README.md)

* [DeleteOverride](docs/sdks/ratelimit/README.md#deleteoverride) - Delete ratelimit override
* [GetOverride](docs/sdks/ratelimit/README.md#getoverride) - Get ratelimit override
* [Limit](docs/sdks/ratelimit/README.md#limit) - Apply rate limiting
* [ListOverrides](docs/sdks/ratelimit/README.md#listoverrides) - List ratelimit overrides
* [SetOverride](docs/sdks/ratelimit/README.md#setoverride) - Set ratelimit override


</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `Next` method that can be called to pull down the next group of results. If the
return value of `Next` is `nil`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
```go
package main

import (
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"log"
	"os"
)

func main() {
	ctx := context.Background()

	s := unkey.New(
		unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
	)

	res, err := s.Identities.ListIdentities(ctx, components.V2IdentitiesListIdentitiesRequestBody{
		Limit: unkey.Int64(50),
	})
	if err != nil {
		log.Fatal(err)
	}
	if res.V2IdentitiesListIdentitiesResponseBody != nil {
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
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API. However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a `retry.Config` object to the call by using the `WithRetries` option:
```go
package main

import (
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"github.com/unkeyed/sdks/api/go/v2/retry"
	"log"
	"models/operations"
	"os"
)

func main() {
	ctx := context.Background()

	s := unkey.New(
		unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
	)

	res, err := s.Apis.CreateAPI(ctx, components.V2ApisCreateAPIRequestBody{
		Name: "payment-service-production",
	}, operations.WithRetries(
		retry.Config{
			Strategy: "backoff",
			Backoff: &retry.BackoffStrategy{
				InitialInterval: 1,
				MaxInterval:     50,
				Exponent:        1.1,
				MaxElapsedTime:  100,
			},
			RetryConnectionErrors: false,
		}))
	if err != nil {
		log.Fatal(err)
	}
	if res.V2ApisCreateAPIResponseBody != nil {
		// handle response
	}
}

```

If you'd like to override the default retry strategy for all operations that support retries, you can use the `WithRetryConfig` option at SDK initialization:
```go
package main

import (
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"github.com/unkeyed/sdks/api/go/v2/retry"
	"log"
	"os"
)

func main() {
	ctx := context.Background()

	s := unkey.New(
		unkey.WithRetryConfig(
			retry.Config{
				Strategy: "backoff",
				Backoff: &retry.BackoffStrategy{
					InitialInterval: 1,
					MaxInterval:     50,
					Exponent:        1.1,
					MaxElapsedTime:  100,
				},
				RetryConnectionErrors: false,
			}),
		unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
	)

	res, err := s.Apis.CreateAPI(ctx, components.V2ApisCreateAPIRequestBody{
		Name: "payment-service-production",
	})
	if err != nil {
		log.Fatal(err)
	}
	if res.V2ApisCreateAPIResponseBody != nil {
		// handle response
	}
}

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations. All operations return a response object or an error, they will never return both.

By Default, an API error will return `apierrors.APIError`. When custom error responses are specified for an operation, the SDK may also return their associated error. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation.

For example, the `CreateAPI` function may return the following errors:

| Error Type                            | Status Code | Content Type     |
| ------------------------------------- | ----------- | ---------------- |
| apierrors.BadRequestErrorResponse     | 400         | application/json |
| apierrors.UnauthorizedErrorResponse   | 401         | application/json |
| apierrors.ForbiddenErrorResponse      | 403         | application/json |
| apierrors.InternalServerErrorResponse | 500         | application/json |
| apierrors.APIError                    | 4XX, 5XX    | \*/\*            |

### Example

```go
package main

import (
	"context"
	"errors"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/apierrors"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"log"
	"os"
)

func main() {
	ctx := context.Background()

	s := unkey.New(
		unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
	)

	res, err := s.Apis.CreateAPI(ctx, components.V2ApisCreateAPIRequestBody{
		Name: "payment-service-production",
	})
	if err != nil {

		var e *apierrors.BadRequestErrorResponse
		if errors.As(err, &e) {
			// handle error
			log.Fatal(e.Error())
		}

		var e *apierrors.UnauthorizedErrorResponse
		if errors.As(err, &e) {
			// handle error
			log.Fatal(e.Error())
		}

		var e *apierrors.ForbiddenErrorResponse
		if errors.As(err, &e) {
			// handle error
			log.Fatal(e.Error())
		}

		var e *apierrors.InternalServerErrorResponse
		if errors.As(err, &e) {
			// handle error
			log.Fatal(e.Error())
		}

		var e *apierrors.APIError
		if errors.As(err, &e) {
			// handle error
			log.Fatal(e.Error())
		}
	}
}

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally using the `WithServerURL(serverURL string)` option when initializing the SDK client instance. For example:
```go
package main

import (
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"log"
	"os"
)

func main() {
	ctx := context.Background()

	s := unkey.New(
		unkey.WithServerURL("https://api.unkey.com"),
		unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
	)

	res, err := s.Apis.CreateAPI(ctx, components.V2ApisCreateAPIRequestBody{
		Name: "payment-service-production",
	})
	if err != nil {
		log.Fatal(err)
	}
	if res.V2ApisCreateAPIResponseBody != nil {
		// handle response
	}
}

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Go SDK makes API calls that wrap an internal HTTP client. The requirements for the HTTP client are very simple. It must match this interface:

```go
type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}
```

The built-in `net/http` client satisfies this interface and a default client based on the built-in is provided by default. To replace this default with a client of your own, you can implement this interface yourself or provide your own client configured as desired. Here's a simple example, which adds a client with a 30 second timeout.

```go
import (
	"net/http"
	"time"

	"github.com/unkeyed/sdks/api/go/v2"
)

var (
	httpClient = &http.Client{Timeout: 30 * time.Second}
	sdkClient  = unkey.New(unkey.WithClient(httpClient))
)
```

This can be a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration.
<!-- End Custom HTTP Client [http-client] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=github-com/unkeyed/sdks/go/api&utm_campaign=go)
