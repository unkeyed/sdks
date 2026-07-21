# Environments

## Overview

Environment management operations

### Available Operations

* [get_environment](#get_environment) - Get environment
* [list_environment_variables](#list_environment_variables) - List environment variables
* [list_environments](#list_environments) - List environments
* [remove_environment_variables](#remove_environment_variables) - Remove environment variables
* [set_environment_variables](#set_environment_variables) - Set environment variables
* [update_settings](#update_settings) - Update environment settings

## get_environment

Retrieve a single environment by its id.

Use this to fetch environment details after creation or to verify an environment exists before performing operations.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_environment` (to read any environment)
- `environment.<environment_id>.read_environment` (to read a specific environment)


### Example Usage: environment

<!-- UsageSnippet language="python" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="environment" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.get_environment(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: environmentNotFound

<!-- UsageSnippet language="python" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="environmentNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.get_environment(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: getById

<!-- UsageSnippet language="python" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="getById" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.get_environment(project="payments", app="payments-api", environment="env_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: getBySlug

<!-- UsageSnippet language="python" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="getBySlug" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.get_environment(project="payments", app="payments-api", environment="production")

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.get_environment(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd")

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

**[models.V2EnvironmentsGetEnvironmentResponseBody](../../models/v2environmentsgetenvironmentresponsebody.md)**

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

## list_environment_variables

Retrieve the environment variables for an environment.

Identify the environment by its project, app, and environment identifiers.
Results are ordered by variable id and paginated; when `hasMore` is true,
pass the returned `cursor` to fetch the next page.

`recoverable` variables are returned with their decrypted plaintext value.
`writeonly` variables never expose a value: only the key, kind, and
description are returned.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_environment_variables` (for any environment)
- `environment.<environment_id>.read_environment_variables` (for a specific environment)


### Example Usage

<!-- UsageSnippet language="python" operationID="environments.listEnvironmentVariables" method="post" path="/v2/environments.listEnvironmentVariables" example="list" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.list_environment_variables(project="payments", app="payments-api", environment="production", limit=100)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `app`                                                                                                                    | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `environment`                                                                                                            | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `limit`                                                                                                                  | *Optional[int]*                                                                                                          | :heavy_minus_sign:                                                                                                       | Maximum number of variables to return per request.                                                                       |                                                                                                                          |
| `cursor`                                                                                                                 | *Optional[str]*                                                                                                          | :heavy_minus_sign:                                                                                                       | Pagination cursor from a previous response to fetch the next page.<br/>Use when `hasMore: true` in the previous response.<br/> |                                                                                                                          |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2EnvironmentsListEnvironmentVariablesResponseBody](../../models/v2environmentslistenvironmentvariablesresponsebody.md)**

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

## list_environments

Retrieve the environments within an app.

Use this to enumerate every environment in an app. Identify the app by its project slug and app slug. Results are ordered by environment id. An app has only a handful of environments, so all of them are returned in a single response.

**Required Permissions**

Your root key must have the following permission:
- `environment.*.read_environment` (to read environments in any app)


### Example Usage: appNotFound

<!-- UsageSnippet language="python" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="appNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.list_environments(project="proj_1234abcd", app="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: basic

<!-- UsageSnippet language="python" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="basic" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.list_environments(project="payments-service", app="payments-api")

    # Handle response
    print(res)

```
### Example Usage: environmentList

<!-- UsageSnippet language="python" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="environmentList" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.list_environments(project="proj_1234abcd", app="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: missingApp

<!-- UsageSnippet language="python" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="missingApp" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.list_environments(project="proj_1234abcd", app="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.list_environments(project="proj_1234abcd", app="proj_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `app`                                                                                                                    | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2EnvironmentsListEnvironmentsResponseBody](../../models/v2environmentslistenvironmentsresponsebody.md)**

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

## remove_environment_variables

Remove environment variables from an environment in a single atomic request.

This operation only deletes keys by name. Keys in the payload that exist are
removed; keys that are not present are ignored, since their absence already
matches the requested state. To replace or update values, use
`setEnvironmentVariables` instead. The whole operation is atomic: if any part
fails the environment is left unchanged.

Duplicate keys in the payload collapse to a single removal. Values are never
read or returned.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.remove_environment_variables` (for any environment)
- `environment.<environment_id>.remove_environment_variables` (for a specific environment)


### Example Usage

<!-- UsageSnippet language="python" operationID="environments.removeEnvironmentVariables" method="post" path="/v2/environments.removeEnvironmentVariables" example="removeVariables" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.remove_environment_variables(project="payments", app="payments-api", environment="production", variables=[
        "LOG_LEVEL",
        "DEBUG_MODE",
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                | Example                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                                                                                                                                                                                                                                  | *str*                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                                                                           | proj_1234abcd                                                                                                                                                                                                                                                                                                                              |
| `app`                                                                                                                                                                                                                                                                                                                                      | *str*                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                                                                           | proj_1234abcd                                                                                                                                                                                                                                                                                                                              |
| `environment`                                                                                                                                                                                                                                                                                                                              | *str*                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                                                                           | proj_1234abcd                                                                                                                                                                                                                                                                                                                              |
| `variables`                                                                                                                                                                                                                                                                                                                                | List[*str*]                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | The names of the variables to remove. Keys that exist are deleted; keys<br/>that are not present are ignored, since their absence already matches the<br/>requested state.<br/><br/>Duplicate keys collapse to a single removal. The whole operation is atomic:<br/>if any part fails the environment is left unchanged. Limited to 50<br/>variables per request.<br/> |                                                                                                                                                                                                                                                                                                                                            |
| `retries`                                                                                                                                                                                                                                                                                                                                  | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                            |

### Response

**[models.V2EnvironmentsRemoveEnvironmentVariablesResponseBody](../../models/v2environmentsremoveenvironmentvariablesresponsebody.md)**

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

## set_environment_variables

Create or update environment variables for an environment in a single atomic
request.

By default this is an upsert: each variable in the payload is created if new
or fully overwritten if the key already exists, and any variable not in the
payload is left untouched. This lets you change one variable without
re-sending the others, which matters for write-only secrets you can no longer
read back.

Set `prune: true` to make it a full replace instead: after upserting, every
variable not in the payload is deleted. Sending `prune: true` with an empty
`variables` list resets the environment by deleting every variable.

Each variable is written exactly as sent, never merged, so omitted optional
fields fall back to their defaults rather than the previous value. Values are
always encrypted at rest. Set `kind: recoverable` to allow a value to be read
back; it defaults to `writeonly`, which can never be read back through the API.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.set_environment_variables` (for any environment)
- `environment.<environment_id>.set_environment_variables` (for a specific environment)


### Example Usage: replace

<!-- UsageSnippet language="python" operationID="environments.setEnvironmentVariables" method="post" path="/v2/environments.setEnvironmentVariables" example="replace" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.set_environment_variables(project="payments", app="payments-api", environment="production", variables=[
        {
            "key": "DATABASE_URL",
            "value": "postgresql://user:pass@host:5432/db",
        },
        {
            "key": "LOG_LEVEL",
            "value": "debug",
            "kind": models.Kind.RECOVERABLE,
            "description": "Application log verbosity",
        },
    ], prune=True)

    # Handle response
    print(res)

```
### Example Usage: reset

<!-- UsageSnippet language="python" operationID="environments.setEnvironmentVariables" method="post" path="/v2/environments.setEnvironmentVariables" example="reset" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.set_environment_variables(project="payments", app="payments-api", environment="production", variables=[], prune=True)

    # Handle response
    print(res)

```
### Example Usage: upsert

<!-- UsageSnippet language="python" operationID="environments.setEnvironmentVariables" method="post" path="/v2/environments.setEnvironmentVariables" example="upsert" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.set_environment_variables(project="payments", app="payments-api", environment="production", variables=[
        {
            "key": "LOG_LEVEL",
            "value": "info",
            "kind": models.Kind.RECOVERABLE,
        },
    ], prune=False)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | proj_1234abcd                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `app`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | proj_1234abcd                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `environment`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | proj_1234abcd                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `variables`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | List[[models.EnvironmentVariableInput](../../models/environmentvariableinput.md)]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | The variables to upsert. Each entry is created if its key is new or fully<br/>overwritten if the key already exists. Existing variables whose keys are<br/>not in this list are left untouched, unless `prune` is true.<br/><br/>Each entry is written exactly as sent, never merged with the current<br/>state. Only `value` is required; omitted optional fields (`kind`,<br/>`description`) fall back to their defaults rather than any previous value,<br/>so overwriting a variable without a `description` clears it.<br/><br/>Each key may appear at most once; a duplicate key is rejected with a 400.<br/>The whole operation is atomic: if any part fails the environment is left<br/>unchanged. All values are encrypted at rest. Limited to 50 variables per<br/>request.<br/> |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `prune`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | *Optional[bool]*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Optional. Defaults to false. When false, the variables above are upserted<br/>and any existing variable not in the list is kept. When true, this becomes<br/>a full replace: after upserting, every variable not in the list is deleted.<br/>Combined with an empty `variables` list, `prune: true` resets the entire<br/>environment by deleting every variable.                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### Response

**[models.V2EnvironmentsSetEnvironmentVariablesResponseBody](../../models/v2environmentssetenvironmentvariablesresponsebody.md)**

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

## update_settings

Update the build, runtime, and regional settings for an environment.

All settings fields are optional. Omit a field to leave it unchanged. For
nullable fields (`dockerfile`, `healthcheck`, `openapiSpecPath`), send null
to clear the value. When `regions` is present it replaces the full set of
regions for the environment.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.update_environment` (to update any environment)
- `environment.<environment_id>.update_environment` (to update a specific environment)


### Example Usage: environmentNotFound

<!-- UsageSnippet language="python" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="environmentNotFound" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.update_settings(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", dockerfile="./Dockerfile", root_directory=".", build_command="pnpm --filter api build", auto_deploy=True, port=8080, v_cpus=1, memory_mib=512, storage_mib=1024, healthcheck={
        "method": models.EnvironmentHealthcheckMethod.GET,
        "path": "/healthz",
        "interval_seconds": 10,
        "timeout_seconds": 2,
        "failure_threshold": 3,
        "initial_delay_seconds": 5,
    }, shutdown_signal=models.EnvironmentShutdownSignal.SIGTERM, upstream_protocol=models.EnvironmentUpstreamProtocol.HTTP1, openapi_spec_path="/openapi.yaml", regions=[
        {
            "name": "us-east-1",
            "replicas": {
                "min": 1,
                "max": 3,
            },
        },
    ])

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="missingPermission" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.update_settings(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", dockerfile="./Dockerfile", root_directory=".", build_command="pnpm --filter api build", auto_deploy=True, port=8080, v_cpus=1, memory_mib=512, storage_mib=1024, healthcheck={
        "method": models.EnvironmentHealthcheckMethod.GET,
        "path": "/healthz",
        "interval_seconds": 10,
        "timeout_seconds": 2,
        "failure_threshold": 3,
        "initial_delay_seconds": 5,
    }, shutdown_signal=models.EnvironmentShutdownSignal.SIGTERM, upstream_protocol=models.EnvironmentUpstreamProtocol.HTTP1, openapi_spec_path="/openapi.yaml", regions=[
        {
            "name": "us-east-1",
            "replicas": {
                "min": 1,
                "max": 3,
            },
        },
    ])

    # Handle response
    print(res)

```
### Example Usage: setRegions

<!-- UsageSnippet language="python" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="setRegions" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.update_settings(project="payments", app="payments-api", environment="production", dockerfile="./Dockerfile", root_directory=".", build_command="pnpm --filter api build", auto_deploy=True, port=8080, v_cpus=1, memory_mib=512, storage_mib=1024, healthcheck={
        "method": models.EnvironmentHealthcheckMethod.GET,
        "path": "/healthz",
        "interval_seconds": 10,
        "timeout_seconds": 2,
        "failure_threshold": 3,
        "initial_delay_seconds": 5,
    }, shutdown_signal=models.EnvironmentShutdownSignal.SIGTERM, upstream_protocol=models.EnvironmentUpstreamProtocol.HTTP1, openapi_spec_path="/openapi.yaml", regions=[
        {
            "name": "us-east-1",
            "replicas": {
                "min": 1,
                "max": 3,
            },
        },
    ])

    # Handle response
    print(res)

```
### Example Usage: setRuntime

<!-- UsageSnippet language="python" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="setRuntime" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.update_settings(project="payments", app="payments-api", environment="production", dockerfile="./Dockerfile", root_directory=".", build_command="pnpm --filter api build", auto_deploy=True, port=8080, v_cpus=2, memory_mib=1024, storage_mib=1024, healthcheck={
        "method": models.EnvironmentHealthcheckMethod.GET,
        "path": "/healthz",
        "interval_seconds": 10,
        "timeout_seconds": 2,
        "failure_threshold": 3,
        "initial_delay_seconds": 5,
    }, shutdown_signal=models.EnvironmentShutdownSignal.SIGTERM, upstream_protocol=models.EnvironmentUpstreamProtocol.HTTP1, openapi_spec_path="/openapi.yaml", regions=[
        {
            "name": "us-east-1",
            "replicas": {
                "min": 1,
                "max": 3,
            },
        },
    ])

    # Handle response
    print(res)

```
### Example Usage: success

<!-- UsageSnippet language="python" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="success" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.environments.update_settings(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", dockerfile="./Dockerfile", root_directory=".", build_command="pnpm --filter api build", auto_deploy=True, port=8080, v_cpus=1, memory_mib=512, storage_mib=1024, healthcheck={
        "method": models.EnvironmentHealthcheckMethod.GET,
        "path": "/healthz",
        "interval_seconds": 10,
        "timeout_seconds": 2,
        "failure_threshold": 3,
        "initial_delay_seconds": 5,
    }, shutdown_signal=models.EnvironmentShutdownSignal.SIGTERM, upstream_protocol=models.EnvironmentUpstreamProtocol.HTTP1, openapi_spec_path="/openapi.yaml", regions=[
        {
            "name": "us-east-1",
            "replicas": {
                "min": 1,
                "max": 3,
            },
        },
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                                                                                                                                                                                 | *str*                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                        | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                          | proj_1234abcd                                                                                                                                                                                                                                                                             |
| `app`                                                                                                                                                                                                                                                                                     | *str*                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                        | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                          | proj_1234abcd                                                                                                                                                                                                                                                                             |
| `environment`                                                                                                                                                                                                                                                                             | *str*                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                        | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                          | proj_1234abcd                                                                                                                                                                                                                                                                             |
| `dockerfile`                                                                                                                                                                                                                                                                              | *OptionalNullable[str]*                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Path to the Dockerfile used for builds.<br/>Omit to leave unchanged; set null to clear and fall back to Railpack.<br/>                                                                                                                                                                    | ./Dockerfile                                                                                                                                                                                                                                                                              |
| `root_directory`                                                                                                                                                                                                                                                                          | *Optional[str]*                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | The directory your app lives in. Unkey builds from here.<br/>Use "." for the repository root, or set a subdirectory when your app<br/>is nested (e.g., services/api). Omit to leave unchanged.<br/>                                                                                       | .                                                                                                                                                                                                                                                                                         |
| `build_command`                                                                                                                                                                                                                                                                           | *OptionalNullable[str]*                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Overrides the build command auto-detected by Railpack.<br/>Omit to leave unchanged; set null to clear and fall back to auto-detection.<br/>                                                                                                                                               | pnpm --filter api build                                                                                                                                                                                                                                                                   |
| `watch_paths`                                                                                                                                                                                                                                                                             | List[*str*]                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Glob paths that trigger auto-deploys when changed.<br/>Omit to leave unchanged.<br/>                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                           |
| `auto_deploy`                                                                                                                                                                                                                                                                             | *Optional[bool]*                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Whether pushes auto-deploy.<br/>Omit to leave unchanged.<br/>                                                                                                                                                                                                                             | true                                                                                                                                                                                                                                                                                      |
| `port`                                                                                                                                                                                                                                                                                    | *Optional[int]*                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Container port the app listens on.<br/>Omit to leave unchanged.<br/>                                                                                                                                                                                                                      | 8080                                                                                                                                                                                                                                                                                      |
| `v_cpus`                                                                                                                                                                                                                                                                                  | *Optional[float]*                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | CPU allocation in vCPUs. Minimum 0.25 (1/4 vCPU), in steps of 0.25.<br/>The upper bound is your workspace's per-instance quota; exceeding it returns 400.<br/>Omit to leave unchanged.<br/>                                                                                               | 1                                                                                                                                                                                                                                                                                         |
| `memory_mib`                                                                                                                                                                                                                                                                              | *Optional[int]*                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Memory allocation in MiB. Minimum 256, in steps of 256.<br/>The upper bound is your workspace's per-instance quota; exceeding it returns 400.<br/>Omit to leave unchanged.<br/>                                                                                                           | 512                                                                                                                                                                                                                                                                                       |
| `storage_mib`                                                                                                                                                                                                                                                                             | *Optional[int]*                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Ephemeral storage allocation in MiB, in steps of 512 (0 for none).<br/>The upper bound is your workspace's per-instance quota; exceeding it returns 400.<br/>Omit to leave unchanged.<br/>                                                                                                | 1024                                                                                                                                                                                                                                                                                      |
| `command`                                                                                                                                                                                                                                                                                 | List[*str*]                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Override container entrypoint command.<br/>Omit to leave unchanged.<br/>                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                           |
| `healthcheck`                                                                                                                                                                                                                                                                             | [OptionalNullable[models.EnvironmentHealthcheck]](../../models/environmenthealthcheck.md)                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | HTTP healthcheck configuration.<br/>Omit to leave unchanged; set null to remove.<br/>                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                           |
| `shutdown_signal`                                                                                                                                                                                                                                                                         | [Optional[models.EnvironmentShutdownSignal]](../../models/environmentshutdownsignal.md)                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Signal sent to the container on shutdown.<br/>                                                                                                                                                                                                                                            | SIGTERM                                                                                                                                                                                                                                                                                   |
| `upstream_protocol`                                                                                                                                                                                                                                                                       | [Optional[models.EnvironmentUpstreamProtocol]](../../models/environmentupstreamprotocol.md)                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Protocol used to reach the container.<br/>                                                                                                                                                                                                                                                | http1                                                                                                                                                                                                                                                                                     |
| `openapi_spec_path`                                                                                                                                                                                                                                                                       | *OptionalNullable[str]*                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Path to the OpenAPI spec file within the build. Must start with a slash.<br/>Omit to leave unchanged; set null to clear.<br/>                                                                                                                                                             | /openapi.yaml                                                                                                                                                                                                                                                                             |
| `regions`                                                                                                                                                                                                                                                                                 | List[[models.EnvironmentRegion](../../models/environmentregion.md)]                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Desired set of regions with per-region replica bounds.<br/>Omit to leave regions unchanged; when present, this replaces the full set<br/>(regions absent from the list are removed). At least one region is required;<br/>an empty list is rejected because an environment cannot have zero regions.<br/> |                                                                                                                                                                                                                                                                                           |
| `retries`                                                                                                                                                                                                                                                                                 | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                           |

### Response

**[models.V2EnvironmentsUpdateSettingsResponseBody](../../models/v2environmentsupdatesettingsresponsebody.md)**

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