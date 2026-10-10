# Workspace

## Overview

Workspace limits and usage operations

### Available Operations

* [get_limits](#get_limits) - Get workspace limits
* [get_usage](#get_usage) - Get workspace usage

## get_limits

Get every limit of your workspace, with the current value against each
limit that has one.

Use this before an operation that a limit can reject, for example to see how
many custom domains or log drains remain, or how much CPU, memory, and disk
a new deployment can still reserve.

The request takes no parameters. Each limit has a `limit`, which is `null`
when unlimited, and a `current` value when the limit has one. Billable
operations count the current calendar month in UTC. The Compute limits are
present only when the workspace has a Compute plan.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:limits#read`


### Example Usage: withCompute

<!-- UsageSnippet language="python" operationID="workspace.getLimits" method="post" path="/v2/workspace.getLimits" example="withCompute" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_limits()

    # Handle response
    print(res)

```
### Example Usage: withoutCompute

<!-- UsageSnippet language="python" operationID="workspace.getLimits" method="post" path="/v2/workspace.getLimits" example="withoutCompute" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_limits()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.V2WorkspaceGetLimitsResponseBody](../../models/v2workspacegetlimitsresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## get_usage

Get the usage of your workspace for one calendar month (UTC): billable API
operations, compute usage per environment, and active keys per app.

Use this to track usage during the month or to look back at a past
month. The response has no prices. Your invoice is the source of truth.
Compute usage can be up to 15 minutes late, and it can change for up to 7
days.

Send `{}` for the current month to date, or
`{"period": {"year": 2026, "month": 9}}` for a full past month. The month
must start within the last 90 days.

**Required Permissions**

Your root key must have this permission:
- `unkey:v1:<workspace_id>:usage#read`


### Example Usage: currentMonth

<!-- UsageSnippet language="python" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="currentMonth" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_usage(period={
        "year": 2026,
        "month": 9,
    })

    # Handle response
    print(res)

```
### Example Usage: deletedApp

<!-- UsageSnippet language="python" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="deletedApp" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_usage(period={
        "year": 2026,
        "month": 9,
    })

    # Handle response
    print(res)

```
### Example Usage: emptyMonth

<!-- UsageSnippet language="python" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="emptyMonth" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_usage(period={
        "year": 2026,
        "month": 9,
    })

    # Handle response
    print(res)

```
### Example Usage: futureMonth

<!-- UsageSnippet language="python" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="futureMonth" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_usage(period={
        "year": 2026,
        "month": 9,
    })

    # Handle response
    print(res)

```
### Example Usage: invalidMonth

<!-- UsageSnippet language="python" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="invalidMonth" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_usage(period={
        "year": 2026,
        "month": 9,
    })

    # Handle response
    print(res)

```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="python" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="invalidRootKey" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_usage(period={
        "year": 2026,
        "month": 9,
    })

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_usage(period={
        "year": 2026,
        "month": 9,
    })

    # Handle response
    print(res)

```
### Example Usage: monthTooOld

<!-- UsageSnippet language="python" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="monthTooOld" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_usage(period={
        "year": 2026,
        "month": 9,
    })

    # Handle response
    print(res)

```
### Example Usage: pastMonth

<!-- UsageSnippet language="python" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="pastMonth" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_usage(period={
        "year": 2026,
        "month": 9,
    })

    # Handle response
    print(res)

```
### Example Usage: usageUnavailable

<!-- UsageSnippet language="python" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="usageUnavailable" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_usage(period={
        "year": 2026,
        "month": 9,
    })

    # Handle response
    print(res)

```
### Example Usage: workspaceRateLimited

<!-- UsageSnippet language="python" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="workspaceRateLimited" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.workspace.get_usage(period={
        "year": 2026,
        "month": 9,
    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `period`                                                                                                                                                                                                                         | [Optional[models.V2WorkspaceGetUsageRequestPeriod]](../../models/v2workspacegetusagerequestperiod.md)                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                               | The calendar month (UTC) to read. Omit it for the current month to date. A<br/>past month returns the full month. It cannot be in the future, and it must<br/>start within the last 90 days, because compute usage is kept for 90 days.<br/> |
| `retries`                                                                                                                                                                                                                        | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                               | Configuration to override the default retry behavior of the client.                                                                                                                                                              |

### Response

**[models.V2WorkspaceGetUsageResponseBody](../../models/v2workspacegetusageresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |