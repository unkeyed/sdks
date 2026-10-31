# Logs

## Overview

Log listing operations

### Available Operations

* [GetAPIRequestMetrics](#getapirequestmetrics) - Get API request metrics
* [ListAPIRequests](#listapirequests) - List API requests

## GetAPIRequestMetrics

Count the requests that the Unkey API served for your workspace per time bucket, split by status class.

The filters have the same shape as in `logs.listApiRequests`, without `requestId`. In one field, values under `is`, `contains`, `startsWith`, and `endsWith` are combined with OR. Values under `isNot` and `notContains`, and the range operators `gt`, `gte`, `lt`, and `lte`, are combined with AND. Different fields are combined with AND. Every text match is exact and case-sensitive.

`filters.time` sets the window. A missing lower bound is the start of your log retention, and a missing upper bound is now. Unkey picks the bucket width from the window. It is the distance between the `time` of two points. The first bucket starts at or before the window start and counts its whole width. Windows reach back at most 100 days, and requests outside the log retention of your workspace are not counted.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:logs/apiRequests#read`


### Example Usage: empty

<!-- UsageSnippet language="go" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="empty" -->
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

    res, err := s.Logs.GetAPIRequestMetrics(ctx, components.V2LogsGetAPIRequestMetricsRequestBody{
        Filters: &components.V2LogsGetAPIRequestMetricsFilters{
            Time: &components.TimeFilter{
                Gte: unkey.Pointer[int64](1791936000000),
                Lt: unkey.Pointer[int64](1792022400000),
            },
            Path: &components.TextFilter{
                NotContains: []string{
                    "verifyKey",
                },
                StartsWith: []string{
                    "/v2/keys.",
                },
            },
            Method: &components.MethodFilter{
                Is: []components.HTTPMethod{
                    components.HTTPMethodPost,
                    components.HTTPMethodPut,
                },
            },
            Status: &components.IntFilter{
                IsNot: []int64{
                    429,
                },
                Gte: unkey.Pointer[int64](400),
                Lt: unkey.Pointer[int64](600),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LogsGetAPIRequestMetricsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="missingPermission" -->
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

    res, err := s.Logs.GetAPIRequestMetrics(ctx, components.V2LogsGetAPIRequestMetricsRequestBody{
        Filters: &components.V2LogsGetAPIRequestMetricsFilters{
            Time: &components.TimeFilter{
                Gte: unkey.Pointer[int64](1791936000000),
                Lt: unkey.Pointer[int64](1792022400000),
            },
            Path: &components.TextFilter{
                NotContains: []string{
                    "verifyKey",
                },
                StartsWith: []string{
                    "/v2/keys.",
                },
            },
            Method: &components.MethodFilter{
                Is: []components.HTTPMethod{
                    components.HTTPMethodPost,
                    components.HTTPMethodPut,
                },
            },
            Status: &components.IntFilter{
                IsNot: []int64{
                    429,
                },
                Gte: unkey.Pointer[int64](400),
                Lt: unkey.Pointer[int64](600),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LogsGetAPIRequestMetricsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: series

<!-- UsageSnippet language="go" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="series" -->
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

    res, err := s.Logs.GetAPIRequestMetrics(ctx, components.V2LogsGetAPIRequestMetricsRequestBody{
        Filters: &components.V2LogsGetAPIRequestMetricsFilters{
            Time: &components.TimeFilter{
                Gte: unkey.Pointer[int64](1791936000000),
                Lt: unkey.Pointer[int64](1792022400000),
            },
            Path: &components.TextFilter{
                NotContains: []string{
                    "verifyKey",
                },
                StartsWith: []string{
                    "/v2/keys.",
                },
            },
            Method: &components.MethodFilter{
                Is: []components.HTTPMethod{
                    components.HTTPMethodPost,
                    components.HTTPMethodPut,
                },
            },
            Status: &components.IntFilter{
                IsNot: []int64{
                    429,
                },
                Gte: unkey.Pointer[int64](400),
                Lt: unkey.Pointer[int64](600),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LogsGetAPIRequestMetricsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: timeout

<!-- UsageSnippet language="go" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="timeout" -->
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

    res, err := s.Logs.GetAPIRequestMetrics(ctx, components.V2LogsGetAPIRequestMetricsRequestBody{
        Filters: &components.V2LogsGetAPIRequestMetricsFilters{
            Time: &components.TimeFilter{
                Gte: unkey.Pointer[int64](1791936000000),
                Lt: unkey.Pointer[int64](1792022400000),
            },
            Path: &components.TextFilter{
                NotContains: []string{
                    "verifyKey",
                },
                StartsWith: []string{
                    "/v2/keys.",
                },
            },
            Method: &components.MethodFilter{
                Is: []components.HTTPMethod{
                    components.HTTPMethodPost,
                    components.HTTPMethodPut,
                },
            },
            Status: &components.IntFilter{
                IsNot: []int64{
                    429,
                },
                Gte: unkey.Pointer[int64](400),
                Lt: unkey.Pointer[int64](600),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LogsGetAPIRequestMetricsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: unknownField

<!-- UsageSnippet language="go" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="unknownField" -->
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

    res, err := s.Logs.GetAPIRequestMetrics(ctx, components.V2LogsGetAPIRequestMetricsRequestBody{
        Filters: &components.V2LogsGetAPIRequestMetricsFilters{
            Time: &components.TimeFilter{
                Gte: unkey.Pointer[int64](1791936000000),
                Lt: unkey.Pointer[int64](1792022400000),
            },
            Path: &components.TextFilter{
                NotContains: []string{
                    "verifyKey",
                },
                StartsWith: []string{
                    "/v2/keys.",
                },
            },
            Method: &components.MethodFilter{
                Is: []components.HTTPMethod{
                    components.HTTPMethodPost,
                    components.HTTPMethodPut,
                },
            },
            Status: &components.IntFilter{
                IsNot: []int64{
                    429,
                },
                Gte: unkey.Pointer[int64](400),
                Lt: unkey.Pointer[int64](600),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LogsGetAPIRequestMetricsResponseBody != nil {
        // handle response
    }
}
```
### Example Usage: workspaceRateLimited

<!-- UsageSnippet language="go" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="workspaceRateLimited" -->
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

    res, err := s.Logs.GetAPIRequestMetrics(ctx, components.V2LogsGetAPIRequestMetricsRequestBody{
        Filters: &components.V2LogsGetAPIRequestMetricsFilters{
            Time: &components.TimeFilter{
                Gte: unkey.Pointer[int64](1791936000000),
                Lt: unkey.Pointer[int64](1792022400000),
            },
            Path: &components.TextFilter{
                NotContains: []string{
                    "verifyKey",
                },
                StartsWith: []string{
                    "/v2/keys.",
                },
            },
            Method: &components.MethodFilter{
                Is: []components.HTTPMethod{
                    components.HTTPMethodPost,
                    components.HTTPMethodPut,
                },
            },
            Status: &components.IntFilter{
                IsNot: []int64{
                    429,
                },
                Gte: unkey.Pointer[int64](400),
                Lt: unkey.Pointer[int64](600),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LogsGetAPIRequestMetricsResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                                | [context.Context](https://pkg.go.dev/context#Context)                                                                | :heavy_check_mark:                                                                                                   | The context to use for the request.                                                                                  |
| `request`                                                                                                            | [components.V2LogsGetAPIRequestMetricsRequestBody](../../models/components/v2logsgetapirequestmetricsrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `opts`                                                                                                               | [][operations.Option](../../models/operations/option.md)                                                             | :heavy_minus_sign:                                                                                                   | The options for this request.                                                                                        |

### Response

**[*operations.LogsGetAPIRequestMetricsResponse](../../models/operations/logsgetapirequestmetricsresponse.md), error**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| apierrors.BadRequestErrorResponse          | 400                                        | application/json                           |
| apierrors.UnauthorizedErrorResponse        | 401                                        | application/json                           |
| apierrors.ForbiddenErrorResponse           | 403                                        | application/json                           |
| apierrors.UnprocessableEntityErrorResponse | 422                                        | application/json                           |
| apierrors.InternalServerErrorResponse      | 500                                        | application/json                           |
| apierrors.ServiceUnavailableErrorResponse  | 503                                        | application/json                           |
| apierrors.APIError                         | 4XX, 5XX                                   | \*/\*                                      |

## ListAPIRequests

List the requests that the Unkey API served for your workspace, newest first.

Filter by time, path, method, request ID, and status. In one field, values under `is`, `contains`, `startsWith`, and `endsWith` are combined with OR. Values under `isNot` and `notContains`, and the range operators `gt`, `gte`, `lt`, and `lte`, are combined with AND. Different fields are combined with AND. Every text match is exact and case-sensitive.

To get the next page, send the `pagination.cursor` of the previous page together with the same `filters`. A cursor does not expire, but rows older than the log retention leave the listing.

Unkey returns only requests inside the log retention of your workspace. The calls to this endpoint are not logged.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:logs/apiRequests#read`


### Example Usage: empty

<!-- UsageSnippet language="go" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="empty" -->
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

    res, err := s.Logs.ListAPIRequests(ctx, components.V2LogsListAPIRequestsRequestBody{
        Cursor: unkey.Pointer("MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g"),
        Filters: &components.V2LogsListAPIRequestsFilters{
            Time: &components.TimeFilter{
                Gte: unkey.Pointer[int64](1791936000000),
                Lt: unkey.Pointer[int64](1792022400000),
            },
            Path: &components.TextFilter{
                NotContains: []string{
                    "verifyKey",
                },
                StartsWith: []string{
                    "/v2/keys.",
                },
            },
            Method: &components.MethodFilter{
                Is: []components.HTTPMethod{
                    components.HTTPMethodPost,
                    components.HTTPMethodPut,
                },
            },
            RequestID: &components.ExactFilter{
                IsNot: []string{
                    "api.unkey.dev",
                },
            },
            Status: &components.IntFilter{
                IsNot: []int64{
                    429,
                },
                Gte: unkey.Pointer[int64](400),
                Lt: unkey.Pointer[int64](600),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LogsListAPIRequestsResponseBody != nil {
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
### Example Usage: invalidCursor

<!-- UsageSnippet language="go" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="invalidCursor" -->
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

    res, err := s.Logs.ListAPIRequests(ctx, components.V2LogsListAPIRequestsRequestBody{
        Cursor: unkey.Pointer("MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g"),
        Filters: &components.V2LogsListAPIRequestsFilters{
            Time: &components.TimeFilter{
                Gte: unkey.Pointer[int64](1791936000000),
                Lt: unkey.Pointer[int64](1792022400000),
            },
            Path: &components.TextFilter{
                NotContains: []string{
                    "verifyKey",
                },
                StartsWith: []string{
                    "/v2/keys.",
                },
            },
            Method: &components.MethodFilter{
                Is: []components.HTTPMethod{
                    components.HTTPMethodPost,
                    components.HTTPMethodPut,
                },
            },
            RequestID: &components.ExactFilter{
                IsNot: []string{
                    "api.unkey.dev",
                },
            },
            Status: &components.IntFilter{
                IsNot: []int64{
                    429,
                },
                Gte: unkey.Pointer[int64](400),
                Lt: unkey.Pointer[int64](600),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LogsListAPIRequestsResponseBody != nil {
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
### Example Usage: missingPermission

<!-- UsageSnippet language="go" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="missingPermission" -->
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

    res, err := s.Logs.ListAPIRequests(ctx, components.V2LogsListAPIRequestsRequestBody{
        Cursor: unkey.Pointer("MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g"),
        Filters: &components.V2LogsListAPIRequestsFilters{
            Time: &components.TimeFilter{
                Gte: unkey.Pointer[int64](1791936000000),
                Lt: unkey.Pointer[int64](1792022400000),
            },
            Path: &components.TextFilter{
                NotContains: []string{
                    "verifyKey",
                },
                StartsWith: []string{
                    "/v2/keys.",
                },
            },
            Method: &components.MethodFilter{
                Is: []components.HTTPMethod{
                    components.HTTPMethodPost,
                    components.HTTPMethodPut,
                },
            },
            RequestID: &components.ExactFilter{
                IsNot: []string{
                    "api.unkey.dev",
                },
            },
            Status: &components.IntFilter{
                IsNot: []int64{
                    429,
                },
                Gte: unkey.Pointer[int64](400),
                Lt: unkey.Pointer[int64](600),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LogsListAPIRequestsResponseBody != nil {
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
### Example Usage: page

<!-- UsageSnippet language="go" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="page" -->
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

    res, err := s.Logs.ListAPIRequests(ctx, components.V2LogsListAPIRequestsRequestBody{
        Cursor: unkey.Pointer("MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g"),
        Filters: &components.V2LogsListAPIRequestsFilters{
            Time: &components.TimeFilter{
                Gte: unkey.Pointer[int64](1791936000000),
                Lt: unkey.Pointer[int64](1792022400000),
            },
            Path: &components.TextFilter{
                NotContains: []string{
                    "verifyKey",
                },
                StartsWith: []string{
                    "/v2/keys.",
                },
            },
            Method: &components.MethodFilter{
                Is: []components.HTTPMethod{
                    components.HTTPMethodPost,
                    components.HTTPMethodPut,
                },
            },
            RequestID: &components.ExactFilter{
                IsNot: []string{
                    "api.unkey.dev",
                },
            },
            Status: &components.IntFilter{
                IsNot: []int64{
                    429,
                },
                Gte: unkey.Pointer[int64](400),
                Lt: unkey.Pointer[int64](600),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LogsListAPIRequestsResponseBody != nil {
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
### Example Usage: resultTooLarge

<!-- UsageSnippet language="go" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="resultTooLarge" -->
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

    res, err := s.Logs.ListAPIRequests(ctx, components.V2LogsListAPIRequestsRequestBody{
        Cursor: unkey.Pointer("MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g"),
        Filters: &components.V2LogsListAPIRequestsFilters{
            Time: &components.TimeFilter{
                Gte: unkey.Pointer[int64](1791936000000),
                Lt: unkey.Pointer[int64](1792022400000),
            },
            Path: &components.TextFilter{
                NotContains: []string{
                    "verifyKey",
                },
                StartsWith: []string{
                    "/v2/keys.",
                },
            },
            Method: &components.MethodFilter{
                Is: []components.HTTPMethod{
                    components.HTTPMethodPost,
                    components.HTTPMethodPut,
                },
            },
            RequestID: &components.ExactFilter{
                IsNot: []string{
                    "api.unkey.dev",
                },
            },
            Status: &components.IntFilter{
                IsNot: []int64{
                    429,
                },
                Gte: unkey.Pointer[int64](400),
                Lt: unkey.Pointer[int64](600),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LogsListAPIRequestsResponseBody != nil {
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
### Example Usage: workspaceRateLimited

<!-- UsageSnippet language="go" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="workspaceRateLimited" -->
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

    res, err := s.Logs.ListAPIRequests(ctx, components.V2LogsListAPIRequestsRequestBody{
        Cursor: unkey.Pointer("MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g"),
        Filters: &components.V2LogsListAPIRequestsFilters{
            Time: &components.TimeFilter{
                Gte: unkey.Pointer[int64](1791936000000),
                Lt: unkey.Pointer[int64](1792022400000),
            },
            Path: &components.TextFilter{
                NotContains: []string{
                    "verifyKey",
                },
                StartsWith: []string{
                    "/v2/keys.",
                },
            },
            Method: &components.MethodFilter{
                Is: []components.HTTPMethod{
                    components.HTTPMethodPost,
                    components.HTTPMethodPut,
                },
            },
            RequestID: &components.ExactFilter{
                IsNot: []string{
                    "api.unkey.dev",
                },
            },
            Status: &components.IntFilter{
                IsNot: []int64{
                    429,
                },
                Gte: unkey.Pointer[int64](400),
                Lt: unkey.Pointer[int64](600),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LogsListAPIRequestsResponseBody != nil {
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

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ctx`                                                                                                      | [context.Context](https://pkg.go.dev/context#Context)                                                      | :heavy_check_mark:                                                                                         | The context to use for the request.                                                                        |
| `request`                                                                                                  | [components.V2LogsListAPIRequestsRequestBody](../../models/components/v2logslistapirequestsrequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `opts`                                                                                                     | [][operations.Option](../../models/operations/option.md)                                                   | :heavy_minus_sign:                                                                                         | The options for this request.                                                                              |

### Response

**[*operations.LogsListAPIRequestsResponse](../../models/operations/logslistapirequestsresponse.md), error**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| apierrors.BadRequestErrorResponse          | 400                                        | application/json                           |
| apierrors.UnauthorizedErrorResponse        | 401                                        | application/json                           |
| apierrors.ForbiddenErrorResponse           | 403                                        | application/json                           |
| apierrors.UnprocessableEntityErrorResponse | 422                                        | application/json                           |
| apierrors.InternalServerErrorResponse      | 500                                        | application/json                           |
| apierrors.ServiceUnavailableErrorResponse  | 503                                        | application/json                           |
| apierrors.APIError                         | 4XX, 5XX                                   | \*/\*                                      |