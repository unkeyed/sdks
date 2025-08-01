// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package v2

// Generated from OpenAPI doc version 2.0.0 and generator version 2.668.4

import (
	"context"
	"fmt"
	"github.com/unkeyed/sdks/api/go/v2/internal/config"
	"github.com/unkeyed/sdks/api/go/v2/internal/hooks"
	"github.com/unkeyed/sdks/api/go/v2/internal/utils"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"github.com/unkeyed/sdks/api/go/v2/retry"
	"net/http"
	"time"
)

// ServerList contains the list of servers available to the SDK
var ServerList = []string{
	"https://api.unkey.com",
}

// HTTPClient provides an interface for supplying the SDK with a custom HTTP client
type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// String provides a helper function to return a pointer to a string
func String(s string) *string { return &s }

// Bool provides a helper function to return a pointer to a bool
func Bool(b bool) *bool { return &b }

// Int provides a helper function to return a pointer to an int
func Int(i int) *int { return &i }

// Int64 provides a helper function to return a pointer to an int64
func Int64(i int64) *int64 { return &i }

// Float32 provides a helper function to return a pointer to a float32
func Float32(f float32) *float32 { return &f }

// Float64 provides a helper function to return a pointer to a float64
func Float64(f float64) *float64 { return &f }

// Pointer provides a helper function to return a pointer to a type
func Pointer[T any](v T) *T { return &v }

// Unkey API: Unkey's API provides programmatic access for all resources within our platform.
//
// ### Authentication
// #
// This API uses HTTP Bearer authentication with root keys. Most endpoints require specific permissions associated with your root key. When making requests, include your root key in the `Authorization` header:
// ```
// Authorization: Bearer unkey_xxxxxxxxxxx
// ```
//
// All responses follow a consistent envelope structure that separates operational metadata from actual data. This design provides several benefits:
// - Debugging: Every response includes a unique requestId for tracing issues
// - Consistency: Predictable response format across all endpoints
// - Extensibility: Easy to add new metadata without breaking existing integrations
// - Error Handling: Unified error format with actionable information
//
// ### Success Response Format:
// ```json
//
//	{
//	  "meta": {
//	    "requestId": "req_123456"
//	  },
//	  "data": {
//	    // Actual response data here
//	  }
//	}
//
// ```
//
// The meta object contains operational information:
// - `requestId`: Unique identifier for this request (essential for support)
//
// The data object contains the actual response data specific to each endpoint.
//
// ### Paginated Response Format:
// ```json
//
//	{
//	  "meta": {
//	    "requestId": "req_123456"
//	  },
//	  "data": [
//	    // Array of results
//	  ],
//	  "pagination": {
//	    "cursor": "next_page_token",
//	    "hasMore": true
//	  }
//	}
//
// ```
//
// The pagination object appears on list endpoints and contains:
// - `cursor`: Token for requesting the next page
// - `hasMore`: Whether more results are available
//
// ### Error Response Format:
// ```json
//
//	{
//	  "meta": {
//	    "requestId": "req_2c9a0jf23l4k567"
//	  },
//	  "error": {
//	    "detail": "The resource you are attempting to modify is protected and cannot be changed",
//	    "status": 403,
//	    "title": "Forbidden",
//	    "type": "https://unkey.com/docs/errors/unkey/application/protected_resource"
//	  }
//	}
//
// ```
//
// Error responses include comprehensive diagnostic information:
// - `title`: Human-readable error summary
// - `detail`: Specific description of what went wrong
// - `status`: HTTP status code
// - `type`: Link to error documentation
// - `errors`: Array of validation errors (for 400 responses)
//
// This structure ensures you always have the context needed to debug issues and take corrective action.
type Unkey struct {
	SDKVersion string
	// API management operations
	Apis *Apis
	// Identity management operations
	Identities *Identities
	// API key management operations
	Keys *Keys
	// Permission and role management operations
	Permissions *Permissions
	// Rate limiting operations
	Ratelimit *Ratelimit

	sdkConfiguration config.SDKConfiguration
	hooks            *hooks.Hooks
}

type SDKOption func(*Unkey)

// WithServerURL allows the overriding of the default server URL
func WithServerURL(serverURL string) SDKOption {
	return func(sdk *Unkey) {
		sdk.sdkConfiguration.ServerURL = serverURL
	}
}

// WithTemplatedServerURL allows the overriding of the default server URL with a templated URL populated with the provided parameters
func WithTemplatedServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *Unkey) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk.sdkConfiguration.ServerURL = serverURL
	}
}

// WithServerIndex allows the overriding of the default server by index
func WithServerIndex(serverIndex int) SDKOption {
	return func(sdk *Unkey) {
		if serverIndex < 0 || serverIndex >= len(ServerList) {
			panic(fmt.Errorf("server index %d out of range", serverIndex))
		}

		sdk.sdkConfiguration.ServerIndex = serverIndex
	}
}

// WithClient allows the overriding of the default HTTP client used by the SDK
func WithClient(client HTTPClient) SDKOption {
	return func(sdk *Unkey) {
		sdk.sdkConfiguration.Client = client
	}
}

// WithSecurity configures the SDK to use the provided security details
func WithSecurity(rootKey string) SDKOption {
	return func(sdk *Unkey) {
		security := components.Security{RootKey: &rootKey}
		sdk.sdkConfiguration.Security = utils.AsSecuritySource(&security)
	}
}

// WithSecuritySource configures the SDK to invoke the Security Source function on each method call to determine authentication
func WithSecuritySource(security func(context.Context) (components.Security, error)) SDKOption {
	return func(sdk *Unkey) {
		sdk.sdkConfiguration.Security = func(ctx context.Context) (interface{}, error) {
			return security(ctx)
		}
	}
}

func WithRetryConfig(retryConfig retry.Config) SDKOption {
	return func(sdk *Unkey) {
		sdk.sdkConfiguration.RetryConfig = &retryConfig
	}
}

// WithTimeout Optional request timeout applied to each operation
func WithTimeout(timeout time.Duration) SDKOption {
	return func(sdk *Unkey) {
		sdk.sdkConfiguration.Timeout = &timeout
	}
}

// New creates a new instance of the SDK with the provided options
func New(opts ...SDKOption) *Unkey {
	sdk := &Unkey{
		SDKVersion: "2.0.0",
		sdkConfiguration: config.SDKConfiguration{
			UserAgent:  "speakeasy-sdk/go 2.0.0 2.668.4 2.0.0 github.com/unkeyed/sdks/api/go/v2",
			ServerList: ServerList,
		},
		hooks: hooks.New(),
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk.sdkConfiguration.Security == nil {
		var envVarSecurity components.Security
		if utils.PopulateSecurityFromEnv(&envVarSecurity) {
			sdk.sdkConfiguration.Security = utils.AsSecuritySource(envVarSecurity)
		}
	}

	// Use WithClient to override the default client if you would like to customize the timeout
	if sdk.sdkConfiguration.Client == nil {
		sdk.sdkConfiguration.Client = &http.Client{Timeout: 60 * time.Second}
	}

	currentServerURL, _ := sdk.sdkConfiguration.GetServerDetails()
	serverURL := currentServerURL
	serverURL, sdk.sdkConfiguration.Client = sdk.hooks.SDKInit(currentServerURL, sdk.sdkConfiguration.Client)
	if currentServerURL != serverURL {
		sdk.sdkConfiguration.ServerURL = serverURL
	}

	sdk.Apis = newApis(sdk, sdk.sdkConfiguration, sdk.hooks)
	sdk.Identities = newIdentities(sdk, sdk.sdkConfiguration, sdk.hooks)
	sdk.Keys = newKeys(sdk, sdk.sdkConfiguration, sdk.hooks)
	sdk.Permissions = newPermissions(sdk, sdk.sdkConfiguration, sdk.hooks)
	sdk.Ratelimit = newRatelimit(sdk, sdk.sdkConfiguration, sdk.hooks)

	return sdk
}
