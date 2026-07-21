# Gateway

## Overview

Gateway policy operations

### Available Operations

* [list_policies](#list_policies) - List policies
* [set_policies](#set_policies) - Set policies
* [update_policy](#update_policy) - Update policy

## list_policies

Retrieve an environment's gateway policies in evaluation order: the
gateway evaluates them top to bottom and the first rejection
short-circuits the request.

The full policy list is returned in a single response.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_policies` (for any environment)
- `environment.<environment_id>.read_policies` (for a specific environment)


### Example Usage

<!-- UsageSnippet language="python" operationID="gateway.listPolicies" method="post" path="/v2/gateway.listPolicies" example="list" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.gateway.list_policies(project="payments", app="payments-api", environment="production")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `app`                                                                                                                    | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `environment`                                                                                                            | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2GatewayListPoliciesResponseBody](../../models/v2gatewaylistpoliciesresponsebody.md)**

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

## set_policies

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

<!-- UsageSnippet language="python" operationID="gateway.setPolicies" method="post" path="/v2/gateway.setPolicies" example="matchers" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.gateway.set_policies(project="payments", app="payments-api", environment="production", policies=[
        {
            "name": "Block internal paths",
            "enabled": True,
            "match": [
                models.MatchExpr(
                    path=models.PathMatch(
                        path=models.StringMatch(
                            prefix="/internal/",
                        ),
                    ),
                ),
            ],
            "firewall": {
                "action": models.Action.ACTION_DENY,
            },
        },
    ])

    # Handle response
    print(res)

```
### Example Usage: reset

<!-- UsageSnippet language="python" operationID="gateway.setPolicies" method="post" path="/v2/gateway.setPolicies" example="reset" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.gateway.set_policies(project="payments", app="payments-api", environment="production", policies=[])

    # Handle response
    print(res)

```
### Example Usage: set

<!-- UsageSnippet language="python" operationID="gateway.setPolicies" method="post" path="/v2/gateway.setPolicies" example="set" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.gateway.set_policies(project="payments", app="payments-api", environment="production", policies=[
        {
            "name": "Require API key",
            "enabled": True,
            "keyauth": {
                "keyspaces": [
                    "ks_1234abcd",
                ],
            },
        },
        {
            "name": "Global IP limit",
            "enabled": True,
            "ratelimit": {
                "limit": 100,
                "window_ms": 60000,
                "identifier": {
                    "remote_ip": {},
                },
            },
        },
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                                                                                                                                                                            | *str*                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                   | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                     | proj_1234abcd                                                                                                                                                                                                                                                                        |
| `app`                                                                                                                                                                                                                                                                                | *str*                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                   | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                     | proj_1234abcd                                                                                                                                                                                                                                                                        |
| `environment`                                                                                                                                                                                                                                                                        | *str*                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                   | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                     | proj_1234abcd                                                                                                                                                                                                                                                                        |
| `policies`                                                                                                                                                                                                                                                                           | List[[models.Policy](../../models/policy.md)]                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                   | The environment's complete policy list, in evaluation order. Every call<br/>replaces all stored policies with exactly this list; an empty list<br/>removes every policy. The operation is atomic: if any policy is<br/>invalid, nothing is written. An environment can hold at most 50<br/>policies. |                                                                                                                                                                                                                                                                                      |
| `retries`                                                                                                                                                                                                                                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                   | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                      |

### Response

**[models.V2GatewaySetPoliciesResponseBody](../../models/v2gatewaysetpoliciesresponsebody.md)**

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

## update_policy

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

<!-- UsageSnippet language="python" operationID="gateway.updatePolicy" method="post" path="/v2/gateway.updatePolicy" example="clearMatch" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.gateway.update_policy(project="payments", app="payments-api", environment="production", policy_id="pol_9d2Fk1LmQ", match=None, keyauth={
        "keyspaces": [
            "ks_1234abcd",
        ],
    }, ratelimit={
        "limit": 100,
        "window_ms": 60000,
        "identifier": {
            "remote_ip": {},
        },
    }, firewall={
        "action": models.Action.ACTION_DENY,
    }, openapi={})

    # Handle response
    print(res)

```
### Example Usage: disable

<!-- UsageSnippet language="python" operationID="gateway.updatePolicy" method="post" path="/v2/gateway.updatePolicy" example="disable" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.gateway.update_policy(project="payments", app="payments-api", environment="production", policy_id="pol_9d2Fk1LmQ", enabled=False, match=[
        models.MatchExpr(
            path=models.PathMatch(
                path=models.StringMatch(
                    prefix="/api/",
                ),
            ),
        ),
    ], keyauth={
        "keyspaces": [
            "ks_1234abcd",
        ],
    }, ratelimit={
        "limit": 100,
        "window_ms": 60000,
        "identifier": {
            "remote_ip": {},
        },
    }, firewall={
        "action": models.Action.ACTION_DENY,
    }, openapi={})

    # Handle response
    print(res)

```
### Example Usage: rename

<!-- UsageSnippet language="python" operationID="gateway.updatePolicy" method="post" path="/v2/gateway.updatePolicy" example="rename" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.gateway.update_policy(project="payments", app="payments-api", environment="production", policy_id="pol_9d2Fk1LmQ", name="Require API key (v2)", match=[
        models.MatchExpr(
            path=models.PathMatch(
                path=models.StringMatch(
                    prefix="/api/",
                ),
            ),
        ),
    ], keyauth={
        "keyspaces": [
            "ks_1234abcd",
        ],
    }, ratelimit={
        "limit": 100,
        "window_ms": 60000,
        "identifier": {
            "remote_ip": {},
        },
    }, firewall={
        "action": models.Action.ACTION_DENY,
    }, openapi={})

    # Handle response
    print(res)

```
### Example Usage: switchRule

<!-- UsageSnippet language="python" operationID="gateway.updatePolicy" method="post" path="/v2/gateway.updatePolicy" example="switchRule" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.gateway.update_policy(project="payments", app="payments-api", environment="production", policy_id="pol_9d2Fk1LmQ", match=[
        models.MatchExpr(
            path=models.PathMatch(
                path=models.StringMatch(
                    prefix="/api/",
                ),
            ),
        ),
    ], keyauth={
        "keyspaces": [
            "ks_1234abcd",
        ],
    }, ratelimit={
        "limit": 100,
        "window_ms": 60000,
        "identifier": {
            "remote_ip": {},
        },
    }, firewall={
        "action": models.Action.ACTION_DENY,
    }, openapi={})

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                           | Type                                                                                                                                                                                                                | Required                                                                                                                                                                                                            | Description                                                                                                                                                                                                         | Example                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                                                                                                           | *str*                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                  | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                    | proj_1234abcd                                                                                                                                                                                                       |
| `app`                                                                                                                                                                                                               | *str*                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                  | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                    | proj_1234abcd                                                                                                                                                                                                       |
| `environment`                                                                                                                                                                                                       | *str*                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                  | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                    | proj_1234abcd                                                                                                                                                                                                       |
| `policy_id`                                                                                                                                                                                                         | *str*                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                  | Id of the policy to update, as returned by `gateway.listPolicies`.<br/>Ids are regenerated whenever `gateway.setPolicies` replaces the list,<br/>so list the policies first if you are unsure the id is current.    | pol_9d2Fk1LmQ                                                                                                                                                                                                       |
| `name`                                                                                                                                                                                                              | *Optional[str]*                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                  | New human-readable name. Omit to keep the current name.                                                                                                                                                             |                                                                                                                                                                                                                     |
| `enabled`                                                                                                                                                                                                           | *Optional[bool]*                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                  | Enable or disable the policy. Disabled policies are stored but skipped<br/>during evaluation. Omit to keep the current setting.                                                                                     |                                                                                                                                                                                                                     |
| `match`                                                                                                                                                                                                             | List[[models.MatchExpr](../../models/matchexpr.md)]                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                  | Replaces all match expressions. Set null to remove them so the policy<br/>applies to every request. Omit to keep the current expressions.                                                                           |                                                                                                                                                                                                                     |
| `keyauth`                                                                                                                                                                                                           | [Optional[models.KeyauthPolicy]](../../models/keyauthpolicy.md)                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                  | Verifies Unkey API keys on matching requests.                                                                                                                                                                       | {<br/>"keyspaces": [<br/>"ks_1234abcd"<br/>]<br/>}                                                                                                                                                                  |
| `ratelimit`                                                                                                                                                                                                         | [Optional[models.RatelimitPolicy]](../../models/ratelimitpolicy.md)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                  | Rate limits matching requests.                                                                                                                                                                                      | {<br/>"limit": 100,<br/>"windowMs": 60000,<br/>"identifier": {<br/>"remoteIp": {}<br/>}<br/>}                                                                                                                       |
| `firewall`                                                                                                                                                                                                          | [Optional[models.FirewallPolicy]](../../models/firewallpolicy.md)                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                  | Blocks matching requests.                                                                                                                                                                                           | {<br/>"action": "ACTION_DENY"<br/>}                                                                                                                                                                                 |
| `openapi`                                                                                                                                                                                                           | [Optional[models.OpenapiPolicy]](../../models/openapipolicy.md)                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                  | Validates matching requests against the app's uploaded OpenAPI spec. Has no<br/>configuration of its own. If no spec has been uploaded for the deployment,<br/>the policy is a no-op and requests pass through unvalidated. | {}                                                                                                                                                                                                                  |
| `retries`                                                                                                                                                                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                  | Configuration to override the default retry behavior of the client.                                                                                                                                                 |                                                                                                                                                                                                                     |

### Response

**[models.V2GatewayUpdatePolicyResponseBody](../../models/v2gatewayupdatepolicyresponsebody.md)**

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