# Apps

## Overview

App management operations

### Available Operations

* [create_app](#create_app) - Create app
* [delete_app](#delete_app) - Delete app
* [get_app](#get_app) - Get app
* [list_apps](#list_apps) - List apps
* [update_app](#update_app) - Update app

## create_app

Create an app within a project. The app is created with default `production` and `preview` environments.

The slug you provide is the stable, caller-defined handle used to reference this app. It must be unique within the project.

**Important**: The slug cannot collide with an existing app in the same project. A duplicate slug returns a 409 conflict.

**Required Permissions**

Your root key must have one of the following permissions:
- `project.*.create_app` (to create apps in any project)
- `project.<project_id>.create_app` (to create apps in a specific project)


### Example Usage: appExists

<!-- UsageSnippet language="python" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="appExists" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.create_app(project="proj_1234abcd", name="Payments API", slug="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: basic

<!-- UsageSnippet language="python" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="basic" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.create_app(project="payments", name="Payments API", slug="payments-api")

    # Handle response
    print(res)

```
### Example Usage: invalidSlug

<!-- UsageSnippet language="python" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="invalidSlug" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.create_app(project="proj_1234abcd", name="Payments API", slug="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.create_app(project="proj_1234abcd", name="Payments API", slug="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: projectNotFound

<!-- UsageSnippet language="python" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="projectNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.create_app(project="proj_1234abcd", name="Payments API", slug="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: success

<!-- UsageSnippet language="python" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="success" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.create_app(project="proj_1234abcd", name="Payments API", slug="proj_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `name`                                                                                                                   | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Human-readable name for this app.<br/>Use a descriptive name like 'Payments API' to identify its purpose.<br/>           | Payments API                                                                                                             |
| `slug`                                                                                                                   | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2AppsCreateAppResponseBody](../../models/v2appscreateappresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## delete_app

Delete an existing app, identified by its id.

Deletion is asynchronous and eventually consistent. The app and all of its associated resources (environments, deployments, custom domains) are torn down by a background workflow. A successful response indicates the deletion was enqueued, not that every resource has already been removed.

Apps with delete protection enabled cannot be deleted until protection is disabled.

**Required Permissions**

Your root key must have one of the following permissions:
- `app.*.delete_app` (to delete any app)
- `app.<app_id>.delete_app` (to delete a specific app)


### Example Usage: appNotFound

<!-- UsageSnippet language="python" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="appNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.delete_app(project="proj_1234abcd", app="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: deleteById

<!-- UsageSnippet language="python" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="deleteById" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.delete_app(project="payments", app="app_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: deleteBySlug

<!-- UsageSnippet language="python" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="deleteBySlug" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.delete_app(project="payments", app="payments-service")

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.delete_app(project="proj_1234abcd", app="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: success

<!-- UsageSnippet language="python" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="success" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.delete_app(project="proj_1234abcd", app="proj_1234abcd")

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

**[models.V2AppsDeleteAppResponseBody](../../models/v2appsdeleteappresponsebody.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.BadRequestErrorResponse         | 400                                    | application/json                       |
| errors.UnauthorizedErrorResponse       | 401                                    | application/json                       |
| errors.ForbiddenErrorResponse          | 403                                    | application/json                       |
| errors.NotFoundErrorResponse           | 404                                    | application/json                       |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.TooManyRequestsErrorResponse    | 429                                    | application/problem+json               |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## get_app

Retrieve a single app by its id or slug within a project.

Use this to fetch app details after creation or to verify an app exists before performing operations.

**Required Permissions**

Your root key must have one of the following permissions:
- `app.*.read_app` (to read any app)
- `app.<app_id>.read_app` (to read a specific app)


### Example Usage: app

<!-- UsageSnippet language="python" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="app" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.get_app(project="proj_1234abcd", app="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: appNotFound

<!-- UsageSnippet language="python" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="appNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.get_app(project="proj_1234abcd", app="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: getById

<!-- UsageSnippet language="python" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="getById" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.get_app(project="payments", app="app_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: getBySlug

<!-- UsageSnippet language="python" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="getBySlug" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.get_app(project="payments", app="payments-api")

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.get_app(project="proj_1234abcd", app="proj_1234abcd")

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

**[models.V2AppsGetAppResponseBody](../../models/v2appsgetappresponsebody.md)**

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

## list_apps

Retrieve a paginated list of apps within a project.

Use this to enumerate every app in a project. Results are ordered by app id and paginated; when `hasMore` is true, pass the returned `cursor` to fetch the next page.

**Required Permissions**

Your root key must have the following permission:
- `app.*.read_app` (to read apps in any project)


### Example Usage: appList

<!-- UsageSnippet language="python" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="appList" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.list_apps(project="proj_1234abcd", limit=100, cursor="app_1234abcd")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: basic

<!-- UsageSnippet language="python" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="basic" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.list_apps(project="payments-service", limit=100, cursor="app_1234abcd")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: invalidLimit

<!-- UsageSnippet language="python" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="invalidLimit" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.list_apps(project="proj_1234abcd", limit=100, cursor="app_1234abcd")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.list_apps(project="proj_1234abcd", limit=100, cursor="app_1234abcd")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: projectNotFound

<!-- UsageSnippet language="python" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="projectNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.list_apps(project="proj_1234abcd", limit=100, cursor="app_1234abcd")

    while res is not None:
        # Handle items

        res = res.next()

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `limit`                                                                                                                  | *Optional[int]*                                                                                                          | :heavy_minus_sign:                                                                                                       | Maximum number of apps to return per request.<br/>Balance between response size and number of pagination calls needed.<br/> |                                                                                                                          |
| `cursor`                                                                                                                 | *Optional[str]*                                                                                                          | :heavy_minus_sign:                                                                                                       | Pagination cursor from a previous response to fetch the next page.<br/>Use when `hasMore: true` in the previous response.<br/> | app_1234abcd                                                                                                             |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.AppsListAppsResponse](../../models/appslistappsresponse.md)**

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

## update_app

Update an existing app, identified by its id.

The app name, slug, default branch, and delete protection setting can be changed. Omitted fields are left unchanged. Changing the slug affects the deployment domains generated for this app.

**Important**: The slug cannot collide with an existing app in the same project. A duplicate slug returns a 409 conflict.

**Required Permissions**

Your root key must have one of the following permissions:
- `app.*.update_app` (to update any app)
- `app.<app_id>.update_app` (to update a specific app)


### Example Usage: app

<!-- UsageSnippet language="python" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="app" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.update_app(project="proj_1234abcd", app="proj_1234abcd", name="Payments API", slug="proj_1234abcd", default_branch="main", delete_protection=True)

    # Handle response
    print(res)

```
### Example Usage: appExists

<!-- UsageSnippet language="python" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="appExists" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.update_app(project="proj_1234abcd", app="proj_1234abcd", name="Payments API", slug="proj_1234abcd", default_branch="main", delete_protection=True)

    # Handle response
    print(res)

```
### Example Usage: appNotFound

<!-- UsageSnippet language="python" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="appNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.update_app(project="proj_1234abcd", app="proj_1234abcd", name="Payments API", slug="proj_1234abcd", default_branch="main", delete_protection=True)

    # Handle response
    print(res)

```
### Example Usage: changeSlug

<!-- UsageSnippet language="python" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="changeSlug" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.update_app(project="payments", app="payments-service", name="Payments API", slug="payments-api", default_branch="main", delete_protection=True)

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.update_app(project="proj_1234abcd", app="proj_1234abcd", name="Payments API", slug="proj_1234abcd", default_branch="main", delete_protection=True)

    # Handle response
    print(res)

```
### Example Usage: rename

<!-- UsageSnippet language="python" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="rename" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apps.update_app(project="payments", app="app_1234abcd", name="Payments API", slug="proj_1234abcd", default_branch="main", delete_protection=True)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `app`                                                                                                                    | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `name`                                                                                                                   | *Optional[str]*                                                                                                          | :heavy_minus_sign:                                                                                                       | New human-readable name for the app.<br/>Omit this field to leave the current name unchanged.<br/>                       | Payments API                                                                                                             |
| `slug`                                                                                                                   | *Optional[str]*                                                                                                          | :heavy_minus_sign:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `default_branch`                                                                                                         | *Optional[str]*                                                                                                          | :heavy_minus_sign:                                                                                                       | New default git branch deployments track for this app.<br/>Omit this field to leave the current branch unchanged.<br/>   | main                                                                                                                     |
| `delete_protection`                                                                                                      | *Optional[bool]*                                                                                                         | :heavy_minus_sign:                                                                                                       | Enable or disable delete protection for the app.<br/>Omit this field to leave the current setting unchanged.<br/>        | true                                                                                                                     |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2AppsUpdateAppResponseBody](../../models/v2appsupdateappresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |