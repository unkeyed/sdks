# Projects

## Overview

### Available Operations

* [create_project](#create_project) - Create project
* [delete_project](#delete_project) - Delete project
* [get_project](#get_project) - Get project
* [list_projects](#list_projects) - List projects
* [update_project](#update_project) - Update project

## create_project

Create a project to group deployments and applications under a workspace-scoped slug.

The slug you provide is the stable, caller-defined handle used to reference this project in subsequent operations (get, update, delete). It must be unique within your workspace.

**Important**: The slug cannot collide with an existing project in your workspace. A duplicate slug returns a 409 conflict.

**Required Permissions**

Your root key must have the following permission:
- `project.*.create_project` (to create projects in your workspace)


### Example Usage: basic

<!-- UsageSnippet language="python" operationID="projects.createProject" method="post" path="/v2/projects.createProject" example="basic" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.create_project(name="Payments Service", slug="payments-service")

    # Handle response
    print(res)

```
### Example Usage: invalidSlug

<!-- UsageSnippet language="python" operationID="projects.createProject" method="post" path="/v2/projects.createProject" example="invalidSlug" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.create_project(name="Payments Service", slug="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="projects.createProject" method="post" path="/v2/projects.createProject" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.create_project(name="Payments Service", slug="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: projectExists

<!-- UsageSnippet language="python" operationID="projects.createProject" method="post" path="/v2/projects.createProject" example="projectExists" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.create_project(name="Payments Service", slug="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: success

<!-- UsageSnippet language="python" operationID="projects.createProject" method="post" path="/v2/projects.createProject" example="success" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.create_project(name="Payments Service", slug="proj_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                   | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Human-readable name for this project.<br/>Use a descriptive name like 'Payments Service' to identify its purpose.<br/>   | Payments Service                                                                                                         |
| `slug`                                                                                                                   | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2ProjectsCreateProjectResponseBody](../../models/v2projectscreateprojectresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## delete_project

Delete an existing project in your workspace, identified by its id.

Deletion is asynchronous and eventually consistent. The project and all of its associated resources (apps, environments, deployments, custom domains) are torn down by a background workflow. A successful response indicates the deletion was enqueued, not that every resource has already been removed.

Projects with delete protection enabled cannot be deleted until protection is disabled.

**Required Permissions**

Your root key must have one of the following permissions:
- `project.*.delete_project` (to delete any project)
- `project.<project_id>.delete_project` (to delete a specific project)


### Example Usage: deleteById

<!-- UsageSnippet language="python" operationID="projects.deleteProject" method="post" path="/v2/projects.deleteProject" example="deleteById" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.delete_project(project="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: deleteBySlug

<!-- UsageSnippet language="python" operationID="projects.deleteProject" method="post" path="/v2/projects.deleteProject" example="deleteBySlug" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.delete_project(project="payment-service")

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="projects.deleteProject" method="post" path="/v2/projects.deleteProject" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.delete_project(project="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: projectNotFound

<!-- UsageSnippet language="python" operationID="projects.deleteProject" method="post" path="/v2/projects.deleteProject" example="projectNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.delete_project(project="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: success

<!-- UsageSnippet language="python" operationID="projects.deleteProject" method="post" path="/v2/projects.deleteProject" example="success" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.delete_project(project="proj_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2ProjectsDeleteProjectResponseBody](../../models/v2projectsdeleteprojectresponsebody.md)**

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

## get_project

Retrieve a single project in your workspace by its id.

Use this to fetch project details after creation, verify a project exists before performing operations, or resolve a project's metadata from its id.

**Required Permissions**

Your root key must have one of the following permissions:
- `project.*.read_project` (to read any project)
- `project.<project_id>.read_project` (to read a specific project)


### Example Usage: getById

<!-- UsageSnippet language="python" operationID="projects.getProject" method="post" path="/v2/projects.getProject" example="getById" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.get_project(project="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: getBySlug

<!-- UsageSnippet language="python" operationID="projects.getProject" method="post" path="/v2/projects.getProject" example="getBySlug" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.get_project(project="payment-service")

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="projects.getProject" method="post" path="/v2/projects.getProject" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.get_project(project="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: project

<!-- UsageSnippet language="python" operationID="projects.getProject" method="post" path="/v2/projects.getProject" example="project" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.get_project(project="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: projectNotFound

<!-- UsageSnippet language="python" operationID="projects.getProject" method="post" path="/v2/projects.getProject" example="projectNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.get_project(project="proj_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2ProjectsGetProjectResponseBody](../../models/v2projectsgetprojectresponsebody.md)**

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

## list_projects

Retrieve a paginated list of projects in your workspace.

Use this to build project management dashboards or to enumerate projects for administrative purposes. Results are ordered by project id and returned in pages. When `hasMore` is true, pass the returned `cursor` to fetch the next page.

**Required Permissions**

Your root key must have the following permission:
- `project.*.read_project` (to read projects in your workspace)


### Example Usage: basic

<!-- UsageSnippet language="python" operationID="projects.listProjects" method="post" path="/v2/projects.listProjects" example="basic" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.list_projects(limit=100, cursor="proj_1234abcd", search="billing-service")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: invalidLimit

<!-- UsageSnippet language="python" operationID="projects.listProjects" method="post" path="/v2/projects.listProjects" example="invalidLimit" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.list_projects(limit=100, cursor="proj_1234abcd", search="billing-service")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="projects.listProjects" method="post" path="/v2/projects.listProjects" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.list_projects(limit=100, cursor="proj_1234abcd", search="billing-service")

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: projectList

<!-- UsageSnippet language="python" operationID="projects.listProjects" method="post" path="/v2/projects.listProjects" example="projectList" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.list_projects(limit=100, cursor="proj_1234abcd", search="billing-service")

    while res is not None:
        # Handle items

        res = res.next()

```

### Parameters

| Parameter                                                                                                                             | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                               | *Optional[int]*                                                                                                                       | :heavy_minus_sign:                                                                                                                    | Maximum number of projects to return per request.<br/>Balance between response size and number of pagination calls needed.<br/>       |                                                                                                                                       |
| `cursor`                                                                                                                              | *Optional[str]*                                                                                                                       | :heavy_minus_sign:                                                                                                                    | Pagination cursor from a previous response to fetch the next page.<br/>Use when `hasMore: true` in the previous response.<br/>        | proj_1234abcd                                                                                                                         |
| `search`                                                                                                                              | *Optional[str]*                                                                                                                       | :heavy_minus_sign:                                                                                                                    | Free-form text to filter projects. Returns projects whose ID, name, or slug contains the search string. Matching is case-insensitive. | billing-service                                                                                                                       |
| `retries`                                                                                                                             | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                      | :heavy_minus_sign:                                                                                                                    | Configuration to override the default retry behavior of the client.                                                                   |                                                                                                                                       |

### Response

**[models.ProjectsListProjectsResponse](../../models/projectslistprojectsresponse.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## update_project

Update an existing project in your workspace, identified by its id.

The project name, slug, and delete protection setting can be changed. Omitted fields are left unchanged. Changing the slug affects the deployment domains generated for this project.

**Required Permissions**

Your root key must have one of the following permissions:
- `project.*.update_project` (to update any project)
- `project.<project_id>.update_project` (to update a specific project)


### Example Usage: changeSlug

<!-- UsageSnippet language="python" operationID="projects.updateProject" method="post" path="/v2/projects.updateProject" example="changeSlug" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.update_project(project="payments-service", slug="payments-api", name="Payments Service", delete_protection=True)

    # Handle response
    print(res)

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="projects.updateProject" method="post" path="/v2/projects.updateProject" example="missingPermission" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.update_project(project="proj_1234abcd", slug="proj_1234abcd", name="Payments Service", delete_protection=True)

    # Handle response
    print(res)

```
### Example Usage: project

<!-- UsageSnippet language="python" operationID="projects.updateProject" method="post" path="/v2/projects.updateProject" example="project" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.update_project(project="proj_1234abcd", slug="proj_1234abcd", name="Payments Service", delete_protection=True)

    # Handle response
    print(res)

```
### Example Usage: projectExists

<!-- UsageSnippet language="python" operationID="projects.updateProject" method="post" path="/v2/projects.updateProject" example="projectExists" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.update_project(project="proj_1234abcd", slug="proj_1234abcd", name="Payments Service", delete_protection=True)

    # Handle response
    print(res)

```
### Example Usage: projectNotFound

<!-- UsageSnippet language="python" operationID="projects.updateProject" method="post" path="/v2/projects.updateProject" example="projectNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.update_project(project="proj_1234abcd", slug="proj_1234abcd", name="Payments Service", delete_protection=True)

    # Handle response
    print(res)

```
### Example Usage: rename

<!-- UsageSnippet language="python" operationID="projects.updateProject" method="post" path="/v2/projects.updateProject" example="rename" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.projects.update_project(project="proj_1234abcd", slug="proj_1234abcd", name="Payments API", delete_protection=True)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `slug`                                                                                                                   | *Optional[str]*                                                                                                          | :heavy_minus_sign:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `name`                                                                                                                   | *Optional[str]*                                                                                                          | :heavy_minus_sign:                                                                                                       | New human-readable name for the project.<br/>Omit this field to leave the current name unchanged.<br/>                   | Payments Service                                                                                                         |
| `delete_protection`                                                                                                      | *Optional[bool]*                                                                                                         | :heavy_minus_sign:                                                                                                       | Enable or disable delete protection for the project.<br/>Omit this field to leave the current setting unchanged.<br/>    | true                                                                                                                     |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2ProjectsUpdateProjectResponseBody](../../models/v2projectsupdateprojectresponsebody.md)**

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