# Logs

## Overview

Log listing operations

### Available Operations

* [get_api_request_metrics](#get_api_request_metrics) - Get API request metrics
* [list_api_requests](#list_api_requests) - List API requests

## get_api_request_metrics

Count the requests that the Unkey API served for your workspace per time bucket, split by status class.

The filters have the same shape as in `logs.listApiRequests`, without `requestId`. In one field, values under `is`, `contains`, `startsWith`, and `endsWith` are combined with OR. Values under `isNot` and `notContains`, and the range operators `gt`, `gte`, `lt`, and `lte`, are combined with AND. Different fields are combined with AND. Every text match is exact and case-sensitive.

`filters.time` sets the window. A missing lower bound is the start of your log retention, and a missing upper bound is now. Unkey picks the bucket width from the window. It is the distance between the `time` of two points. The first bucket starts at or before the window start and counts its whole width. Windows reach back at most 100 days, and requests outside the log retention of your workspace are not counted.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:logs/apiRequests#read`


### Example Usage: empty

<!-- UsageSnippet language="python" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="empty" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.logs.get_api_request_metrics(filters={
        "time": {
            "gte": 1791936000000,
            "lt": 1792022400000,
        },
        "path": {
            "not_contains": [
                "verifyKey",
            ],
            "starts_with": [
                "/v2/keys.",
            ],
        },
        "method": {
            "is_": [
                models.HTTPMethod.POST,
                models.HTTPMethod.PUT,
            ],
        },
        "status": {
            "is_not": [
                429,
            ],
            "gte": 400,
            "lt": 600,
        },
    })

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="missingPermission" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.logs.get_api_request_metrics(filters={
        "time": {
            "gte": 1791936000000,
            "lt": 1792022400000,
        },
        "path": {
            "not_contains": [
                "verifyKey",
            ],
            "starts_with": [
                "/v2/keys.",
            ],
        },
        "method": {
            "is_": [
                models.HTTPMethod.POST,
                models.HTTPMethod.PUT,
            ],
        },
        "status": {
            "is_not": [
                429,
            ],
            "gte": 400,
            "lt": 600,
        },
    })

    # Handle response
    print(res)

```
### Example Usage: series

<!-- UsageSnippet language="python" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="series" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.logs.get_api_request_metrics(filters={
        "time": {
            "gte": 1791936000000,
            "lt": 1792022400000,
        },
        "path": {
            "not_contains": [
                "verifyKey",
            ],
            "starts_with": [
                "/v2/keys.",
            ],
        },
        "method": {
            "is_": [
                models.HTTPMethod.POST,
                models.HTTPMethod.PUT,
            ],
        },
        "status": {
            "is_not": [
                429,
            ],
            "gte": 400,
            "lt": 600,
        },
    })

    # Handle response
    print(res)

```
### Example Usage: timeout

<!-- UsageSnippet language="python" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="timeout" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.logs.get_api_request_metrics(filters={
        "time": {
            "gte": 1791936000000,
            "lt": 1792022400000,
        },
        "path": {
            "not_contains": [
                "verifyKey",
            ],
            "starts_with": [
                "/v2/keys.",
            ],
        },
        "method": {
            "is_": [
                models.HTTPMethod.POST,
                models.HTTPMethod.PUT,
            ],
        },
        "status": {
            "is_not": [
                429,
            ],
            "gte": 400,
            "lt": 600,
        },
    })

    # Handle response
    print(res)

```
### Example Usage: unknownField

<!-- UsageSnippet language="python" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="unknownField" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.logs.get_api_request_metrics(filters={
        "time": {
            "gte": 1791936000000,
            "lt": 1792022400000,
        },
        "path": {
            "not_contains": [
                "verifyKey",
            ],
            "starts_with": [
                "/v2/keys.",
            ],
        },
        "method": {
            "is_": [
                models.HTTPMethod.POST,
                models.HTTPMethod.PUT,
            ],
        },
        "status": {
            "is_not": [
                429,
            ],
            "gte": 400,
            "lt": 600,
        },
    })

    # Handle response
    print(res)

```
### Example Usage: workspaceRateLimited

<!-- UsageSnippet language="python" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="workspaceRateLimited" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.logs.get_api_request_metrics(filters={
        "time": {
            "gte": 1791936000000,
            "lt": 1792022400000,
        },
        "path": {
            "not_contains": [
                "verifyKey",
            ],
            "starts_with": [
                "/v2/keys.",
            ],
        },
        "method": {
            "is_": [
                models.HTTPMethod.POST,
                models.HTTPMethod.PUT,
            ],
        },
        "status": {
            "is_not": [
                429,
            ],
            "gte": 400,
            "lt": 600,
        },
    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `filters`                                                                                                                                                                                  | [Optional[models.V2LogsGetAPIRequestMetricsFilters]](../../models/v2logsgetapirequestmetricsfilters.md)                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Filters for the metrics. They have the same shape as the filters of `logs.listApiRequests`, without `requestId`. A missing field does not filter. Different fields are combined with AND.<br/> |
| `retries`                                                                                                                                                                                  | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                                                                        |

### Response

**[models.V2LogsGetAPIRequestMetricsResponseBody](../../models/v2logsgetapirequestmetricsresponsebody.md)**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestErrorResponse          | 400                                     | application/json                        |
| errors.UnauthorizedErrorResponse        | 401                                     | application/json                        |
| errors.ForbiddenErrorResponse           | 403                                     | application/json                        |
| errors.UnprocessableEntityErrorResponse | 422                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.ServiceUnavailableErrorResponse  | 503                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## list_api_requests

List the requests that the Unkey API served for your workspace, newest first.

Filter by time, path, method, request ID, and status. In one field, values under `is`, `contains`, `startsWith`, and `endsWith` are combined with OR. Values under `isNot` and `notContains`, and the range operators `gt`, `gte`, `lt`, and `lte`, are combined with AND. Different fields are combined with AND. Every text match is exact and case-sensitive.

To get the next page, send the `pagination.cursor` of the previous page together with the same `filters`. A cursor does not expire, but rows older than the log retention leave the listing.

Unkey returns only requests inside the log retention of your workspace. The calls to this endpoint are not logged.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:logs/apiRequests#read`


### Example Usage: empty

<!-- UsageSnippet language="python" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="empty" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.logs.list_api_requests(limit=50, cursor="MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g", filters={
        "time": {
            "gte": 1791936000000,
            "lt": 1792022400000,
        },
        "path": {
            "not_contains": [
                "verifyKey",
            ],
            "starts_with": [
                "/v2/keys.",
            ],
        },
        "method": {
            "is_": [
                models.HTTPMethod.POST,
                models.HTTPMethod.PUT,
            ],
        },
        "request_id": {
            "is_not": [
                "api.unkey.dev",
            ],
        },
        "status": {
            "is_not": [
                429,
            ],
            "gte": 400,
            "lt": 600,
        },
    })

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: invalidCursor

<!-- UsageSnippet language="python" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="invalidCursor" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.logs.list_api_requests(limit=50, cursor="MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g", filters={
        "time": {
            "gte": 1791936000000,
            "lt": 1792022400000,
        },
        "path": {
            "not_contains": [
                "verifyKey",
            ],
            "starts_with": [
                "/v2/keys.",
            ],
        },
        "method": {
            "is_": [
                models.HTTPMethod.POST,
                models.HTTPMethod.PUT,
            ],
        },
        "request_id": {
            "is_not": [
                "api.unkey.dev",
            ],
        },
        "status": {
            "is_not": [
                429,
            ],
            "gte": 400,
            "lt": 600,
        },
    })

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="missingPermission" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.logs.list_api_requests(limit=50, cursor="MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g", filters={
        "time": {
            "gte": 1791936000000,
            "lt": 1792022400000,
        },
        "path": {
            "not_contains": [
                "verifyKey",
            ],
            "starts_with": [
                "/v2/keys.",
            ],
        },
        "method": {
            "is_": [
                models.HTTPMethod.POST,
                models.HTTPMethod.PUT,
            ],
        },
        "request_id": {
            "is_not": [
                "api.unkey.dev",
            ],
        },
        "status": {
            "is_not": [
                429,
            ],
            "gte": 400,
            "lt": 600,
        },
    })

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: page

<!-- UsageSnippet language="python" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="page" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.logs.list_api_requests(limit=50, cursor="MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g", filters={
        "time": {
            "gte": 1791936000000,
            "lt": 1792022400000,
        },
        "path": {
            "not_contains": [
                "verifyKey",
            ],
            "starts_with": [
                "/v2/keys.",
            ],
        },
        "method": {
            "is_": [
                models.HTTPMethod.POST,
                models.HTTPMethod.PUT,
            ],
        },
        "request_id": {
            "is_not": [
                "api.unkey.dev",
            ],
        },
        "status": {
            "is_not": [
                429,
            ],
            "gte": 400,
            "lt": 600,
        },
    })

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: resultTooLarge

<!-- UsageSnippet language="python" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="resultTooLarge" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.logs.list_api_requests(limit=50, cursor="MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g", filters={
        "time": {
            "gte": 1791936000000,
            "lt": 1792022400000,
        },
        "path": {
            "not_contains": [
                "verifyKey",
            ],
            "starts_with": [
                "/v2/keys.",
            ],
        },
        "method": {
            "is_": [
                models.HTTPMethod.POST,
                models.HTTPMethod.PUT,
            ],
        },
        "request_id": {
            "is_not": [
                "api.unkey.dev",
            ],
        },
        "status": {
            "is_not": [
                429,
            ],
            "gte": 400,
            "lt": 600,
        },
    })

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: workspaceRateLimited

<!-- UsageSnippet language="python" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="workspaceRateLimited" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.logs.list_api_requests(limit=50, cursor="MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g", filters={
        "time": {
            "gte": 1791936000000,
            "lt": 1792022400000,
        },
        "path": {
            "not_contains": [
                "verifyKey",
            ],
            "starts_with": [
                "/v2/keys.",
            ],
        },
        "method": {
            "is_": [
                models.HTTPMethod.POST,
                models.HTTPMethod.PUT,
            ],
        },
        "request_id": {
            "is_not": [
                "api.unkey.dev",
            ],
        },
        "status": {
            "is_not": [
                429,
            ],
            "gte": 400,
            "lt": 600,
        },
    })

    while res is not None:
        # Handle items

        res = res.next()

```

### Parameters

| Parameter                                                                                                                                     | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                                       | *Optional[int]*                                                                                                                               | :heavy_minus_sign:                                                                                                                            | The maximum number of requests to return in one page.                                                                                         |                                                                                                                                               |
| `cursor`                                                                                                                                      | *Optional[str]*                                                                                                                               | :heavy_minus_sign:                                                                                                                            | The `pagination.cursor` of the previous page. Send the same `filters` with every page of one listing.<br/>Omit the cursor to get the first page.<br/> | MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g                                                                                                           |
| `filters`                                                                                                                                     | [Optional[models.V2LogsListAPIRequestsFilters]](../../models/v2logslistapirequestsfilters.md)                                                 | :heavy_minus_sign:                                                                                                                            | Filters for the listing. A missing field does not filter. Different fields are combined with AND.<br/>                                        |                                                                                                                                               |
| `retries`                                                                                                                                     | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                              | :heavy_minus_sign:                                                                                                                            | Configuration to override the default retry behavior of the client.                                                                           |                                                                                                                                               |

### Response

**[models.LogsListAPIRequestsResponse](../../models/logslistapirequestsresponse.md)**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestErrorResponse          | 400                                     | application/json                        |
| errors.UnauthorizedErrorResponse        | 401                                     | application/json                        |
| errors.ForbiddenErrorResponse           | 403                                     | application/json                        |
| errors.UnprocessableEntityErrorResponse | 422                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.ServiceUnavailableErrorResponse  | 503                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |