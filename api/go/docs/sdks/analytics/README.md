# Analytics

## Overview

Analytics query operations

### Available Operations

* [GetGatewayRequests](#getgatewayrequests) - Query gateway request data
* [GetRatelimits](#getratelimits) - Query rate limit data
* [GetRuntimeLogs](#getruntimelogs) - Query runtime log data
* [GetVerifications](#getverifications) - Query key verification data

## GetGatewayRequests

A query can use only the public alias `gateway_requests_v1`. CTEs, subqueries, UNION, and EXCEPT are permitted.
The root key must have the `project.*.read_gateway_requests` permission.
Unkey limits each query to the workspace of the root key. To get the data for one project, app, or environment, add a filter on `project_id`, `app_id`, or `environment_id`.
The workspace retention period and the workspace query limits apply.
For the columns and more query examples, see the gateway request analytics documentation.


### Example Usage

<!-- UsageSnippet language="go" operationID="analytics.getGatewayRequests" method="post" path="/v2/analytics.getGatewayRequests" -->
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

    res, err := s.Analytics.GetGatewayRequests(ctx, components.V2AnalyticsGetGatewayRequestsRequestBody{
        Query: "SELECT path, count() AS total FROM gateway_requests_v1 WHERE response_status >= 500 AND time >= toUnixTimestamp64Milli(now64(3) - INTERVAL 24 HOUR) GROUP BY path ORDER BY total DESC LIMIT 10",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AnalyticsGetGatewayRequestsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                                      | :heavy_check_mark:                                                                                                         | The context to use for the request.                                                                                        |
| `request`                                                                                                                  | [components.V2AnalyticsGetGatewayRequestsRequestBody](../../models/components/v2analyticsgetgatewayrequestsrequestbody.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `opts`                                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                                   | :heavy_minus_sign:                                                                                                         | The options for this request.                                                                                              |

### Response

**[*operations.AnalyticsGetGatewayRequestsResponse](../../models/operations/analyticsgetgatewayrequestsresponse.md), error**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| apierrors.BadRequestErrorResponse          | 400                                        | application/json                           |
| apierrors.UnauthorizedErrorResponse        | 401                                        | application/json                           |
| apierrors.ForbiddenErrorResponse           | 403                                        | application/json                           |
| apierrors.PreconditionFailedErrorResponse  | 412                                        | application/json                           |
| apierrors.UnprocessableEntityErrorResponse | 422                                        | application/json                           |
| apierrors.TooManyRequestsErrorResponse     | 429                                        | application/problem+json                   |
| apierrors.InternalServerErrorResponse      | 500                                        | application/json                           |
| apierrors.ServiceUnavailableErrorResponse  | 503                                        | application/json                           |
| apierrors.APIError                         | 4XX, 5XX                                   | \*/\*                                      |

## GetRatelimits

Queries may reference only the five public rate limit analytics aliases: `ratelimits_v1`, `ratelimits_per_minute_v1`, `ratelimits_per_hour_v1`, `ratelimits_per_day_v1`, or `ratelimits_per_month_v1`. CTEs, subqueries, UNION, and EXCEPT are supported.
Queries are always restricted to the authenticated workspace. Wildcard analytics permission can read every namespace in that workspace; namespace-scoped permissions automatically restrict results to the permitted namespace IDs.
Workspace retention and query limits apply.


### Example Usage

<!-- UsageSnippet language="go" operationID="analytics.getRatelimits" method="post" path="/v2/analytics.getRatelimits" -->
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

    res, err := s.Analytics.GetRatelimits(ctx, components.V2AnalyticsGetRatelimitsRequestBody{
        Query: "SELECT namespace_id, COUNT(*) AS total FROM ratelimits_v1 WHERE namespace_id = 'rlns_123' GROUP BY namespace_id",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AnalyticsGetRatelimitsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                            | [context.Context](https://pkg.go.dev/context#Context)                                                            | :heavy_check_mark:                                                                                               | The context to use for the request.                                                                              |
| `request`                                                                                                        | [components.V2AnalyticsGetRatelimitsRequestBody](../../models/components/v2analyticsgetratelimitsrequestbody.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `opts`                                                                                                           | [][operations.Option](../../models/operations/option.md)                                                         | :heavy_minus_sign:                                                                                               | The options for this request.                                                                                    |

### Response

**[*operations.AnalyticsGetRatelimitsResponse](../../models/operations/analyticsgetratelimitsresponse.md), error**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| apierrors.BadRequestErrorResponse          | 400                                        | application/json                           |
| apierrors.UnauthorizedErrorResponse        | 401                                        | application/json                           |
| apierrors.ForbiddenErrorResponse           | 403                                        | application/json                           |
| apierrors.PreconditionFailedErrorResponse  | 412                                        | application/json                           |
| apierrors.UnprocessableEntityErrorResponse | 422                                        | application/json                           |
| apierrors.TooManyRequestsErrorResponse     | 429                                        | application/problem+json                   |
| apierrors.InternalServerErrorResponse      | 500                                        | application/json                           |
| apierrors.ServiceUnavailableErrorResponse  | 503                                        | application/json                           |
| apierrors.APIError                         | 4XX, 5XX                                   | \*/\*                                      |

## GetRuntimeLogs

A query can use only the public alias `runtime_logs_v1`. CTEs, subqueries, UNION, and EXCEPT are permitted.
The root key must have the `project.*.read_runtime_logs` permission.
Unkey limits each query to the workspace of the root key. To get the logs of one project, app, environment, or deployment, add a filter on `project_id`, `app_id`, `environment_id`, or `deployment_id`.
The workspace retention period and the workspace query limits apply.
For the table, the columns, and more query examples, see [Query runtime logs](/platform/analytics/get-runtime-logs).


### Example Usage

<!-- UsageSnippet language="go" operationID="analytics.getRuntimeLogs" method="post" path="/v2/analytics.getRuntimeLogs" -->
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

    res, err := s.Analytics.GetRuntimeLogs(ctx, components.V2AnalyticsGetRuntimeLogsRequestBody{
        Query: "SELECT time, severity, message FROM runtime_logs_v1 WHERE lower(message) LIKE '%timeout%' ORDER BY time DESC LIMIT 100",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AnalyticsGetRuntimeLogsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `ctx`                                                                                                              | [context.Context](https://pkg.go.dev/context#Context)                                                              | :heavy_check_mark:                                                                                                 | The context to use for the request.                                                                                |
| `request`                                                                                                          | [components.V2AnalyticsGetRuntimeLogsRequestBody](../../models/components/v2analyticsgetruntimelogsrequestbody.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `opts`                                                                                                             | [][operations.Option](../../models/operations/option.md)                                                           | :heavy_minus_sign:                                                                                                 | The options for this request.                                                                                      |

### Response

**[*operations.AnalyticsGetRuntimeLogsResponse](../../models/operations/analyticsgetruntimelogsresponse.md), error**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| apierrors.BadRequestErrorResponse          | 400                                        | application/json                           |
| apierrors.UnauthorizedErrorResponse        | 401                                        | application/json                           |
| apierrors.ForbiddenErrorResponse           | 403                                        | application/json                           |
| apierrors.PreconditionFailedErrorResponse  | 412                                        | application/json                           |
| apierrors.UnprocessableEntityErrorResponse | 422                                        | application/json                           |
| apierrors.TooManyRequestsErrorResponse     | 429                                        | application/problem+json                   |
| apierrors.InternalServerErrorResponse      | 500                                        | application/json                           |
| apierrors.ServiceUnavailableErrorResponse  | 503                                        | application/json                           |
| apierrors.APIError                         | 4XX, 5XX                                   | \*/\*                                      |

## GetVerifications

Execute custom SQL queries against your key verification analytics. CTEs, subqueries, UNION, and EXCEPT are supported.
Queries must use one of the five public aliases: `key_verifications_v1`, `key_verifications_per_minute_v1`, `key_verifications_per_hour_v1`, `key_verifications_per_day_v1`, or `key_verifications_per_month_v1`. Physical `default.*` table names are unsupported.
Queries are always restricted to the authenticated workspace. Wildcard analytics permission can read every API in that workspace; API-scoped permissions automatically restrict results to the permitted APIs.
For complete documentation including available tables, columns, data types, query examples, see the schema reference in the API documentation.


### Example Usage

<!-- UsageSnippet language="go" operationID="analytics.getVerifications" method="post" path="/v2/analytics.getVerifications" -->
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

    res, err := s.Analytics.GetVerifications(ctx, components.V2AnalyticsGetVerificationsRequestBody{
        Query: "SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2AnalyticsGetVerificationsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                  | [context.Context](https://pkg.go.dev/context#Context)                                                                  | :heavy_check_mark:                                                                                                     | The context to use for the request.                                                                                    |
| `request`                                                                                                              | [components.V2AnalyticsGetVerificationsRequestBody](../../models/components/v2analyticsgetverificationsrequestbody.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `opts`                                                                                                                 | [][operations.Option](../../models/operations/option.md)                                                               | :heavy_minus_sign:                                                                                                     | The options for this request.                                                                                          |

### Response

**[*operations.AnalyticsGetVerificationsResponse](../../models/operations/analyticsgetverificationsresponse.md), error**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| apierrors.BadRequestErrorResponse          | 400                                        | application/json                           |
| apierrors.UnauthorizedErrorResponse        | 401                                        | application/json                           |
| apierrors.ForbiddenErrorResponse           | 403                                        | application/json                           |
| apierrors.UnprocessableEntityErrorResponse | 422                                        | application/json                           |
| apierrors.TooManyRequestsErrorResponse     | 429                                        | application/problem+json                   |
| apierrors.InternalServerErrorResponse      | 500                                        | application/json                           |
| apierrors.ServiceUnavailableErrorResponse  | 503                                        | application/json                           |
| apierrors.APIError                         | 4XX, 5XX                                   | \*/\*                                      |