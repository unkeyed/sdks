# Analytics

## Overview

Analytics query operations

### Available Operations

* [GetVerifications](#getverifications) - Query key verification data

## GetVerifications

Execute custom SQL queries against your key verification analytics.
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
| apierrors.NotFoundErrorResponse            | 404                                        | application/json                           |
| apierrors.UnprocessableEntityErrorResponse | 422                                        | application/json                           |
| apierrors.TooManyRequestsErrorResponse     | 429                                        | application/json                           |
| apierrors.InternalServerErrorResponse      | 500                                        | application/json                           |
| apierrors.ServiceUnavailableErrorResponse  | 503                                        | application/json                           |
| apierrors.APIError                         | 4XX, 5XX                                   | \*/\*                                      |