# Ratelimit

## Overview

Rate limiting operations

### Available Operations

* [create_namespace](#create_namespace) - Create ratelimit namespace
* [delete_namespace](#delete_namespace) - Delete ratelimit namespace
* [delete_override](#delete_override) - Delete ratelimit override
* [get_override](#get_override) - Get ratelimit override
* [limit](#limit) - Apply rate limiting
* [list_namespaces](#list_namespaces) - List ratelimit namespaces
* [list_overrides](#list_overrides) - List ratelimit overrides
* [multi_limit](#multi_limit) - Apply multiple rate limit checks
* [set_override](#set_override) - Set ratelimit override
* [update_namespace](#update_namespace) - Update ratelimit namespace

## create_namespace

Create a rate limit namespace before you rate limit against it.

`ratelimit.limit` also creates a namespace the first time you use its name, when your root key can create namespaces. Use this endpoint when you want the namespace to exist up front, for example to set overrides before the first request.

**Important**: Names are unique within your workspace, deleted namespaces included. A name that is in use or was deleted returns 409.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:projects/*/ratelimits/namespaces/*#write`


### Example Usage: basic

<!-- UsageSnippet language="python" operationID="ratelimit.createNamespace" method="post" path="/v2/ratelimit.createNamespace" example="basic" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.create_namespace(name="email.outbound")

    # Handle response
    print(res)

```
### Example Usage: emptyName

<!-- UsageSnippet language="python" operationID="ratelimit.createNamespace" method="post" path="/v2/ratelimit.createNamespace" example="emptyName" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.create_namespace(name="email.outbound")

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="ratelimit.createNamespace" method="post" path="/v2/ratelimit.createNamespace" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.create_namespace(name="email.outbound")

    # Handle response
    print(res)

```
### Example Usage: nameTaken

<!-- UsageSnippet language="python" operationID="ratelimit.createNamespace" method="post" path="/v2/ratelimit.createNamespace" example="nameTaken" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.create_namespace(name="email.outbound")

    # Handle response
    print(res)

```
### Example Usage: success

<!-- UsageSnippet language="python" operationID="ratelimit.createNamespace" method="post" path="/v2/ratelimit.createNamespace" example="success" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.create_namespace(name="email.outbound")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                   | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 | Example                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                      | *str*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                          | The name of the namespace, unique within your workspace. Names are case-sensitive.<br/>Pass it as `namespace` to `ratelimit.limit` and the override endpoints.<br/> | email.outbound                                                                                                                                              |
| `retries`                                                                                                                                                   | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                            | :heavy_minus_sign:                                                                                                                                          | Configuration to override the default retry behavior of the client.                                                                                         |                                                                                                                                                             |

### Response

**[models.V2RatelimitCreateNamespaceResponseBody](../../models/v2ratelimitcreatenamespaceresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/json                    |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## delete_namespace

Delete a rate limit namespace and all of its overrides, identified by the namespace ID or name.

**Important**: A deleted name cannot be reused. `ratelimit.limit` and `ratelimit.multiLimit` return 410 for it instead of creating a new namespace, so a deleted namespace does not turn into unlimited traffic. Other API nodes can take up to a minute to see the deletion.

**Required Permissions**

Your root key must have one of the following permissions:
- `unkey:v1:<workspace_id>:projects/*/ratelimits/namespaces/*#delete` (to delete any namespace)
- `unkey:v1:<workspace_id>:projects/<project_id>/ratelimits/namespaces/<namespace_id>#delete` (to delete a specific namespace)


### Example Usage: byId

<!-- UsageSnippet language="python" operationID="ratelimit.deleteNamespace" method="post" path="/v2/ratelimit.deleteNamespace" example="byId" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.delete_namespace(namespace="rlns_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: byName

<!-- UsageSnippet language="python" operationID="ratelimit.deleteNamespace" method="post" path="/v2/ratelimit.deleteNamespace" example="byName" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.delete_namespace(namespace="email.outbound")

    # Handle response
    print(res)

```
### Example Usage: deleted

<!-- UsageSnippet language="python" operationID="ratelimit.deleteNamespace" method="post" path="/v2/ratelimit.deleteNamespace" example="deleted" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.delete_namespace(namespace="rlns_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: emptyNamespace

<!-- UsageSnippet language="python" operationID="ratelimit.deleteNamespace" method="post" path="/v2/ratelimit.deleteNamespace" example="emptyNamespace" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.delete_namespace(namespace="rlns_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: namespaceNotFound

<!-- UsageSnippet language="python" operationID="ratelimit.deleteNamespace" method="post" path="/v2/ratelimit.deleteNamespace" example="namespaceNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.delete_namespace(namespace="rlns_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                 | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `namespace`                                                               | *str*                                                                     | :heavy_check_mark:                                                        | The namespace to delete. Pass the namespace ID (`rlns_...`) or its name.<br/> | rlns_1234abcd                                                             |
| `retries`                                                                 | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)          | :heavy_minus_sign:                                                        | Configuration to override the default retry behavior of the client.       |                                                                           |

### Response

**[models.V2RatelimitDeleteNamespaceResponseBody](../../models/v2ratelimitdeletenamespaceresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/json                    |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## delete_override

Permanently remove a rate limit override. Affected identifiers immediately revert to the namespace default.

Use this to remove temporary overrides, reset identifiers to standard limits, or clean up outdated rules.

**Important:** Deletion is immediate and permanent. The override cannot be recovered and must be recreated if needed again.

**Permissions:** Requires `ratelimit.*.delete_override` or `ratelimit.<namespace_id>.delete_override`


### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="ratelimit.deleteOverride" method="post" path="/v2/ratelimit.deleteOverride" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.delete_override(namespace="<value>", identifier="<value>")

    # Handle response
    print(res)

```
### Example Usage: overrideNotFound

<!-- UsageSnippet language="python" operationID="ratelimit.deleteOverride" method="post" path="/v2/ratelimit.deleteOverride" example="overrideNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.delete_override(namespace="<value>", identifier="<value>")

    # Handle response
    print(res)

```
### Example Usage: specific

<!-- UsageSnippet language="python" operationID="ratelimit.deleteOverride" method="post" path="/v2/ratelimit.deleteOverride" example="specific" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.delete_override(namespace="api.requests", identifier="premium_user_123")

    # Handle response
    print(res)

```
### Example Usage: wildcard

<!-- UsageSnippet language="python" operationID="ratelimit.deleteOverride" method="post" path="/v2/ratelimit.deleteOverride" example="wildcard" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.delete_override(namespace="api.requests", identifier="premium_*")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `namespace`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | The id or name of the namespace containing the override.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `identifier`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | The exact identifier pattern of the override to delete. This must match exactly as it was specified when creating the override.<br/><br/>Important notes:<br/>- This is case-sensitive and must match exactly<br/>- Include any wildcards (*) that were part of the original pattern<br/>- For example, if the override was created for 'premium_*', you must use 'premium_*' here, not a specific ID<br/><br/>After deletion, any identifiers previously affected by this override will immediately revert to using the default rate limit for the namespace. |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### Response

**[models.V2RatelimitDeleteOverrideResponseBody](../../models/v2ratelimitdeleteoverrideresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## get_override

Retrieve the configuration of a specific rate limit override by its identifier.

Use this to inspect override configurations, audit rate limiting policies, or debug rate limiting behavior.

**Important:** The identifier must match exactly as specified when creating the override, including wildcard patterns.

**Permissions:** Requires `ratelimit.*.read_override` or `ratelimit.<namespace_id>.read_override`


### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="ratelimit.getOverride" method="post" path="/v2/ratelimit.getOverride" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.get_override(namespace="<value>", identifier="<value>")

    # Handle response
    print(res)

```
### Example Usage: overrideNotFound

<!-- UsageSnippet language="python" operationID="ratelimit.getOverride" method="post" path="/v2/ratelimit.getOverride" example="overrideNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.get_override(namespace="<value>", identifier="<value>")

    # Handle response
    print(res)

```
### Example Usage: specific

<!-- UsageSnippet language="python" operationID="ratelimit.getOverride" method="post" path="/v2/ratelimit.getOverride" example="specific" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.get_override(namespace="api.requests", identifier="premium_user_123")

    # Handle response
    print(res)

```
### Example Usage: wildcard

<!-- UsageSnippet language="python" operationID="ratelimit.getOverride" method="post" path="/v2/ratelimit.getOverride" example="wildcard" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.get_override(namespace="api.requests", identifier="premium_*")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `namespace`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | The id or name of the namespace containing the override.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `identifier`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | The exact identifier pattern for the override you want to retrieve. This must match exactly as it was specified when creating the override.<br/><br/>Important notes:<br/>- This is case-sensitive and must match exactly<br/>- Include any wildcards (*) that were part of the original pattern<br/>- For example, if the override was created for 'premium_*', you must use 'premium_*' here, not a specific ID like 'premium_user1'<br/><br/>This field is used to look up the specific override configuration for this pattern. |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### Response

**[models.V2RatelimitGetOverrideResponseBody](../../models/v2ratelimitgetoverrideresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## limit

Check and enforce rate limits for any identifier (user ID, IP address, API client, etc.).

Use this for rate limiting beyond API keys - limit users by ID, IPs by address, or any custom identifier. Supports namespace organization, variable costs, and custom overrides.

**Response Codes**: Rate limit checks return HTTP 200 regardless of whether the limit is exceeded — check the `success` field in the response to determine if the request should be allowed. A 429 may be returned if the workspace exceeds its API rate limit. Other 4xx responses indicate auth, namespace existence/deletion, or validation errors (e.g., 410 Gone for deleted namespaces). 5xx responses indicate server errors.

**Required Permissions**

Your root key must have one of the following permissions:
- `ratelimit.*.limit` (to check limits in any namespace)
- `ratelimit.<namespace_id>.limit` (to check limits in a specific namespace)


### Example Usage: allowed

<!-- UsageSnippet language="python" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="allowed" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.limit(namespace="sms.sign_up", duration=60000, identifier="user_12345", limit=1000, cost=5)

    # Handle response
    print(res)

```
### Example Usage: basic

<!-- UsageSnippet language="python" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="basic" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.limit(namespace="api.requests", duration=60000, identifier="user_abc123", limit=100, cost=5)

    # Handle response
    print(res)

```
### Example Usage: ipLimit

<!-- UsageSnippet language="python" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="ipLimit" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.limit(namespace="auth.login", duration=60000, identifier="203.0.113.42", limit=5, cost=5)

    # Handle response
    print(res)

```
### Example Usage: limitReached

<!-- UsageSnippet language="python" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="limitReached" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.limit(namespace="sms.sign_up", duration=60000, identifier="user_12345", limit=1000, cost=5)

    # Handle response
    print(res)

```
### Example Usage: weightedCost

<!-- UsageSnippet language="python" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="weightedCost" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.limit(namespace="api.heavy_operations", duration=3600000, identifier="user_def456", limit=50, cost=5)

    # Handle response
    print(res)

```
### Example Usage: withOverride

<!-- UsageSnippet language="python" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="withOverride" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.limit(namespace="sms.sign_up", duration=60000, identifier="user_12345", limit=1000, cost=5)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `namespace`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | The id or name of the namespace.                                                                                                                                                                                                                                                                                                                                                                                                                                                           | sms.sign_up                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `duration`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | *int*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Sets the rate limit window duration in milliseconds after which the counter resets.<br/>Shorter durations enable faster recovery but may be less effective against sustained abuse.<br/>Common values include 60000 (1 minute), 3600000 (1 hour), and 86400000 (24 hours).<br/>Balance user experience with protection needs when choosing window sizes.<br/>                                                                                                                              | 60000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `identifier`                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Defines the scope of rate limiting by identifying the entity being limited.<br/>Use user IDs for per-user limits, IP addresses for anonymous limiting, or API key IDs for per-key limits.<br/>Accepts letters, numbers, underscores, dots, colons, slashes, and hyphens for flexible identifier formats.<br/>The same identifier can be used across different namespaces to apply multiple rate limit types.<br/>Choose identifiers that provide appropriate granularity for your rate limiting strategy.<br/> | user_12345                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `limit`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | *int*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Sets the maximum operations allowed within the duration window before requests are rejected.<br/>When this limit is reached, subsequent requests fail with `RATE_LIMITED` until the window resets.<br/>Balance user experience with resource protection when setting limits for different user tiers.<br/>Consider system capacity, business requirements, and fair usage policies in limit determination.<br/>                                                                            | 1000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `cost`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | *Optional[int]*                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Sets how much of the rate limit quota this request consumes, enabling weighted rate limiting.<br/>Use higher values for resource-intensive operations and 0 for tracking without limiting.<br/>When accumulated cost exceeds the limit within the duration window, subsequent requests are rejected.<br/>Essential for implementing fair usage policies and preventing resource abuse through expensive operations.<br/>                                                                   | 5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Response

**[models.V2RatelimitLimitResponseBody](../../models/v2ratelimitlimitresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.GoneErrorResponse            | 410                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## list_namespaces

Retrieve a paginated list of the rate limit namespaces in your workspace.

Use this to find the namespaces your services rate limit against, for example to build an admin view or to look up a namespace ID. Results are ordered newest first and returned in pages. When `hasMore` is true, pass the returned `cursor` to fetch the next page.

Deleted namespaces are not returned. The list contains only the namespaces your root key can read.

**Required Permissions**

Your root key must have one of the following permissions:
- `unkey:v1:<workspace_id>:projects/*/ratelimits/namespaces/*#read` (to read any namespace)
- `unkey:v1:<workspace_id>:projects/<project_id>/ratelimits/namespaces/<namespace_id>#read` (to read a specific namespace)


### Example Usage: basic

<!-- UsageSnippet language="python" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="basic" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.list_namespaces(limit=100, cursor="rlns_1234abcd", search="api")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: empty

<!-- UsageSnippet language="python" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="empty" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.list_namespaces(limit=100, cursor="rlns_1234abcd", search="api")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: invalidLimit

<!-- UsageSnippet language="python" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="invalidLimit" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.list_namespaces(limit=100, cursor="rlns_1234abcd", search="api")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: morePages

<!-- UsageSnippet language="python" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="morePages" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.list_namespaces(limit=100, cursor="rlns_1234abcd", search="api")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: namespaceList

<!-- UsageSnippet language="python" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="namespaceList" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.list_namespaces(limit=100, cursor="rlns_1234abcd", search="api")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: paginated

<!-- UsageSnippet language="python" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="paginated" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.list_namespaces(limit=20, cursor="rlns_1234abcd", search="api")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: search

<!-- UsageSnippet language="python" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="search" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.list_namespaces(limit=100, cursor="rlns_1234abcd", search="api")

    while res is not None:
        # Handle items

        res = res.next()

```

### Parameters

| Parameter                                                                                                                                                                    | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  | Example                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                                                                      | *Optional[int]*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                           | Maximum number of namespaces to return per request.<br/>Omit this field to receive up to 100 namespaces.<br/>                                                                |                                                                                                                                                                              |
| `cursor`                                                                                                                                                                     | *Optional[str]*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                           | Pagination cursor from a previous response to fetch the next page.<br/>Use when `hasMore: true` in the previous response. Omit this field to start from the first page.<br/> | rlns_1234abcd                                                                                                                                                                |
| `search`                                                                                                                                                                     | *Optional[str]*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                           | Free-form text to filter namespaces. Returns namespaces whose ID or name contains the search string. Matching is case-insensitive.<br/>Omit this field to list every namespace.<br/> | api                                                                                                                                                                          |
| `retries`                                                                                                                                                                    | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                           | Configuration to override the default retry behavior of the client.                                                                                                          |                                                                                                                                                                              |

### Response

**[models.RatelimitListNamespacesResponse](../../models/ratelimitlistnamespacesresponse.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/json                    |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## list_overrides

Retrieve a paginated list of all rate limit overrides in a namespace.

Use this to audit rate limiting policies, build admin dashboards, or manage override configurations.

**Important:** Results are paginated. Use the cursor parameter to retrieve additional pages when more results are available.

**Permissions:** Requires `ratelimit.*.read_override` or `ratelimit.<namespace_id>.read_override`


### Example Usage: basic

<!-- UsageSnippet language="python" operationID="ratelimit.listOverrides" method="post" path="/v2/ratelimit.listOverrides" example="basic" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.list_overrides(namespace="api.requests", limit=20)

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="ratelimit.listOverrides" method="post" path="/v2/ratelimit.listOverrides" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.list_overrides(namespace="<value>", limit=10)

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: pagination

<!-- UsageSnippet language="python" operationID="ratelimit.listOverrides" method="post" path="/v2/ratelimit.listOverrides" example="pagination" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.list_overrides(namespace="api.requests", cursor="cursor_eyJsYXN0SWQiOiJvdnJfM2RITGNOeVN6SnppRHlwMkpla2E5ciJ9", limit=10)

    while res is not None:
        # Handle items

        res = res.next()

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `namespace`                                                                                                                                                                                                                                                                                                                                                                                                                           | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                    | The id or name of the rate limit namespace to list overrides for.                                                                                                                                                                                                                                                                                                                                                                     |
| `cursor`                                                                                                                                                                                                                                                                                                                                                                                                                              | *Optional[str]*                                                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                    | Pagination cursor from a previous response. Include this when fetching subsequent pages of results. Each response containing more results than the requested limit will include a cursor value in the pagination object that can be used here.                                                                                                                                                                                        |
| `limit`                                                                                                                                                                                                                                                                                                                                                                                                                               | *Optional[int]*                                                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                    | Maximum number of override entries to return in a single response. Use this to control response size and loading performance.<br/><br/>- Lower values (10-20): Better for UI displays and faster response times<br/>- Higher values (50-100): Better for data exports or bulk operations<br/>- Default (10): Suitable for most dashboard views<br/><br/>Results exceeding this limit will be paginated, with a cursor provided for fetching subsequent pages. |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                             | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                    | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                                   |

### Response

**[models.RatelimitListOverridesResponse](../../models/ratelimitlistoverridesresponse.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## multi_limit

Check and enforce multiple rate limits in a single request for any identifiers (user IDs, IP addresses, API clients, etc.).

Use this to efficiently check multiple rate limits at once. Each rate limit check is independent and returns its own result with a top-level `passed` indicator showing if all checks succeeded.

**Response Codes**: Rate limit checks return HTTP 200 regardless of whether limits are exceeded — check the `passed` field to see if all limits passed, or the `success` field in each individual result. A 429 may be returned if the workspace exceeds its API rate limit. Other 4xx responses indicate auth, namespace existence/deletion, or validation errors (e.g., 410 Gone for deleted namespaces). 5xx responses indicate server errors.

**Required Permissions**

Your root key must have one of the following permissions:
- `ratelimit.*.limit` (to check limits in any namespace)
- `ratelimit.<namespace_id>.limit` (to check limits in all specific namespaces being checked)


### Example Usage: allAllowed

<!-- UsageSnippet language="python" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="allAllowed" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.multi_limit(request=[])

    # Handle response
    print(res)

```
### Example Usage: ipHashAndUserLimits

<!-- UsageSnippet language="python" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="ipHashAndUserLimits" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.multi_limit(request=[
        {
            "namespace": "auth.login",
            "cost": 5,
            "duration": 60000,
            "identifier": "sha256_8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4",
            "limit": 10,
        },
        {
            "namespace": "api.requests",
            "cost": 5,
            "duration": 3600000,
            "identifier": "user_def456",
            "limit": 1000,
        },
    ])

    # Handle response
    print(res)

```
### Example Usage: mixedResults

<!-- UsageSnippet language="python" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="mixedResults" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.multi_limit(request=[])

    # Handle response
    print(res)

```
### Example Usage: multipleChecks

<!-- UsageSnippet language="python" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="multipleChecks" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.multi_limit(request=[
        {
            "namespace": "api.requests",
            "cost": 5,
            "duration": 60000,
            "identifier": "user_abc123",
            "limit": 100,
        },
        {
            "namespace": "auth.login",
            "cost": 5,
            "duration": 60000,
            "identifier": "user_abc123",
            "limit": 5,
        },
    ])

    # Handle response
    print(res)

```
### Example Usage: withOverride

<!-- UsageSnippet language="python" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="withOverride" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.multi_limit(request=[
        {
            "namespace": "sms.sign_up",
            "cost": 5,
            "duration": 60000,
            "identifier": "user_12345",
            "limit": 1000,
        },
    ])

    # Handle response
    print(res)

```
### Example Usage: withWeightedCost

<!-- UsageSnippet language="python" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="withWeightedCost" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.multi_limit(request=[
        {
            "namespace": "api.light_operations",
            "duration": 60000,
            "identifier": "user_xyz789",
            "limit": 100,
        },
        {
            "namespace": "api.heavy_operations",
            "cost": 5,
            "duration": 3600000,
            "identifier": "user_xyz789",
            "limit": 50,
        },
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [List[models.V2RatelimitLimitRequestBody]](../../models/.md)        | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.V2RatelimitMultiLimitResponseBody](../../models/v2ratelimitmultilimitresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.GoneErrorResponse            | 410                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## set_override

Create or update a custom rate limit for specific identifiers, bypassing the namespace default.

Use this to create premium tiers with higher limits, apply stricter limits to specific users, or implement emergency throttling.

**Important:** Overrides take effect immediately and completely replace the default limit for matching identifiers. Use wildcard patterns (e.g., `premium_*`) to match multiple identifiers.

**Permissions:** Requires `ratelimit.*.set_override` or `ratelimit.<namespace_id>.set_override`


### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="ratelimit.setOverride" method="post" path="/v2/ratelimit.setOverride" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.set_override(namespace="<value>", duration=956831, identifier="<value>", limit=816580)

    # Handle response
    print(res)

```
### Example Usage: namespaceNotFound

<!-- UsageSnippet language="python" operationID="ratelimit.setOverride" method="post" path="/v2/ratelimit.setOverride" example="namespaceNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.set_override(namespace="<value>", duration=956831, identifier="<value>", limit=816580)

    # Handle response
    print(res)

```
### Example Usage: premium

<!-- UsageSnippet language="python" operationID="ratelimit.setOverride" method="post" path="/v2/ratelimit.setOverride" example="premium" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.set_override(namespace="api.requests", duration=60000, identifier="premium_user_123", limit=1000)

    # Handle response
    print(res)

```
### Example Usage: wildcard

<!-- UsageSnippet language="python" operationID="ratelimit.setOverride" method="post" path="/v2/ratelimit.setOverride" example="wildcard" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.set_override(namespace="api.requests", duration=60000, identifier="premium_*", limit=500)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `namespace`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | The ID or name of the rate limit namespace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `duration`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | *int*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | The duration in milliseconds for the rate limit window. This defines how long the rate limit counter accumulates before resetting to zero.<br/><br/>Considerations:<br/>- This can differ from the default duration for the namespace<br/>- Longer durations create stricter limits that take longer to reset<br/>- Shorter durations allow more frequent bursts of activity<br/>- Common values: 60000 (1 minute), 3600000 (1 hour), 86400000 (1 day)                                                                                                                                                                                                                                                                           |
| `identifier`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Identifier of the entity receiving this custom rate limit. This can be:<br/><br/>- A specific user ID for individual custom limits<br/>- An IP address for location-based rules<br/>- An email domain for organization-wide policies<br/>- Any other string that identifies the target entity<br/><br/>Wildcards (*) can be used to create pattern-matching rules that apply to multiple identifiers. For example:<br/>- 'premium_*' would match all identifiers starting with 'premium_'<br/>- '*_admin' would match all identifiers ending with '_admin'<br/>- '*suspicious*' would match any identifier containing 'suspicious'<br/><br/>More detailed information on wildcard pattern rules is available at https://www.unkey.com/docs/ratelimiting/overrides#wildcard-rules |
| `limit`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | *int*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | The maximum number of requests allowed for this override. This defines the custom quota for the specified identifier(s).<br/><br/>Special values:<br/>- Higher than default: For premium or trusted entities<br/>- Lower than default: For suspicious or abusive entities<br/>- 0: To completely block access (useful for ban implementation)<br/><br/>This limit entirely replaces the default limit for matching identifiers.                                                                                                                                                                                                                                                                                                  |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Response

**[models.V2RatelimitSetOverrideResponseBody](../../models/v2ratelimitsetoverrideresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## update_namespace

Rename a rate limit namespace, identified by its ID or current name.

Renaming to the current name returns the namespace without a write.

**Important**: Overrides stay with the namespace. Requests that pass the namespace by name, such as `ratelimit.limit`, must use the new name. A `ratelimit.limit` call with the old name can create a new, empty namespace with that name. A name that is in use or was deleted returns 409. Other API nodes can take up to a minute to see the new name.

**Required Permissions**

Your root key must have one of the following permissions:
- `unkey:v1:<workspace_id>:projects/*/ratelimits/namespaces/*#write` (to rename any namespace)
- `unkey:v1:<workspace_id>:projects/<project_id>/ratelimits/namespaces/<namespace_id>#write` (to rename a specific namespace)


### Example Usage: emptyName

<!-- UsageSnippet language="python" operationID="ratelimit.updateNamespace" method="post" path="/v2/ratelimit.updateNamespace" example="emptyName" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.update_namespace(namespace="rlns_1234abcd", name="email.outbound")

    # Handle response
    print(res)

```
### Example Usage: nameTaken

<!-- UsageSnippet language="python" operationID="ratelimit.updateNamespace" method="post" path="/v2/ratelimit.updateNamespace" example="nameTaken" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.update_namespace(namespace="rlns_1234abcd", name="email.outbound")

    # Handle response
    print(res)

```
### Example Usage: namespaceNotFound

<!-- UsageSnippet language="python" operationID="ratelimit.updateNamespace" method="post" path="/v2/ratelimit.updateNamespace" example="namespaceNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.update_namespace(namespace="rlns_1234abcd", name="email.outbound")

    # Handle response
    print(res)

```
### Example Usage: renameById

<!-- UsageSnippet language="python" operationID="ratelimit.updateNamespace" method="post" path="/v2/ratelimit.updateNamespace" example="renameById" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.update_namespace(namespace="rlns_1234abcd", name="email.outbound")

    # Handle response
    print(res)

```
### Example Usage: renameByName

<!-- UsageSnippet language="python" operationID="ratelimit.updateNamespace" method="post" path="/v2/ratelimit.updateNamespace" example="renameByName" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.update_namespace(namespace="email.sends", name="email.outbound")

    # Handle response
    print(res)

```
### Example Usage: renamed

<!-- UsageSnippet language="python" operationID="ratelimit.updateNamespace" method="post" path="/v2/ratelimit.updateNamespace" example="renamed" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.ratelimit.update_namespace(namespace="rlns_1234abcd", name="email.outbound")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                               | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `namespace`                                                                             | *str*                                                                                   | :heavy_check_mark:                                                                      | The namespace to rename. Pass the namespace ID (`rlns_...`) or its current name.<br/>   | rlns_1234abcd                                                                           |
| `name`                                                                                  | *str*                                                                                   | :heavy_check_mark:                                                                      | The new name of the namespace, unique within your workspace. Names are case-sensitive.<br/> | email.outbound                                                                          |
| `retries`                                                                               | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                        | :heavy_minus_sign:                                                                      | Configuration to override the default retry behavior of the client.                     |                                                                                         |

### Response

**[models.V2RatelimitUpdateNamespaceResponseBody](../../models/v2ratelimitupdatenamespaceresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/json                    |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |