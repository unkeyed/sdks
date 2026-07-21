# Deployments

## Overview

Deployment operations

### Available Operations

* [create_deployment](#create_deployment) - Create deployment
* [get_deployment](#get_deployment) - Get deployment
* [list_deployments](#list_deployments) - List deployments
* [promote_deployment](#promote_deployment) - Promote deployment
* [rollback_deployment](#rollback_deployment) - Rollback deployment
* [start_deployment](#start_deployment) - Start deployment
* [stop_deployment](#stop_deployment) - Stop deployment

## create_deployment

Create a deployment for an app in a project.

Provide exactly one source:
- `image`: deploy a prebuilt Docker image as-is (no build).
- `git`: build and deploy from the app's connected GitHub repository, a branch, a specific commit, or a fork commit. Requires the app to have a repository connected.
- `deployment`: re-run an existing deployment by its id. Git-connected apps rebuild from the recorded commit; other apps reuse the recorded image.

Returns immediately with a `deploymentId`. The build and rollout run asynchronously — poll `deployments.getDeployment` to watch status until it is ready.

**Authentication**: requires a root key with permission to create deployments.


### Example Usage

<!-- UsageSnippet language="python" operationID="deployments.createDeployment" method="post" path="/v2/deployments.createDeployment" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.create_deployment(request={
        "project": "proj_1234abcd",
        "app": "proj_1234abcd",
        "environment": "proj_1234abcd",
        "git": {
            "branch": "main",
            "commit_sha": "9f2c1a7",
            "repository": "contributor/acme-api",
        },
        "image": {
            "docker_image": "ghcr.io/acme/api:v1.2.3",
        },
        "deployment": {
            "deployment_id": "proj_1234abcd",
        },
    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                             | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                             | [models.V2DeploymentsCreateDeploymentRequestBodyUnion](../../models/v2deploymentscreatedeploymentrequestbodyunion.md) | :heavy_check_mark:                                                                                                    | The request object to use for the request.                                                                            |
| `retries`                                                                                                             | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                      | :heavy_minus_sign:                                                                                                    | Configuration to override the default retry behavior of the client.                                                   |

### Response

**[models.V2DeploymentsCreateDeploymentResponseBody](../../models/v2deploymentscreatedeploymentresponsebody.md)**

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

## get_deployment

Retrieve a single deployment by its id.

Use this to check a deployment's status after creating it, or to inspect the
runtime configuration of an existing deployment.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_deployment` (to read deployments in any environment)
- `environment.<environment_id>.read_deployment` (to read deployments in a specific environment)


### Example Usage: deployment

<!-- UsageSnippet language="python" operationID="deployments.getDeployment" method="post" path="/v2/deployments.getDeployment" example="deployment" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.get_deployment(deployment_id="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: deploymentNotFound

<!-- UsageSnippet language="python" operationID="deployments.getDeployment" method="post" path="/v2/deployments.getDeployment" example="deploymentNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.get_deployment(deployment_id="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: getById

<!-- UsageSnippet language="python" operationID="deployments.getDeployment" method="post" path="/v2/deployments.getDeployment" example="getById" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.get_deployment(deployment_id="d_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `deployment_id`                                                                                                          | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2DeploymentsGetDeploymentResponseBody](../../models/v2deploymentsgetdeploymentresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## list_deployments

Retrieve a paginated list of deployments within a workspace, newest first.

Filter by project, app, environment, and lifecycle status. All filters are
optional; with none set, every deployment in the workspace is returned.
Filters nest: `app` requires `project`, and `environment` requires both
`project` and `app`. Results are paginated; when `hasMore` is true, pass the
returned `cursor` to fetch the next page.

**Required Permissions**

Your root key must have the `environment.*.read_deployment` permission.
Listing spans environments, so a grant on a single environment is not
sufficient.


### Example Usage: byEnvironment

<!-- UsageSnippet language="python" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="byEnvironment" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.list_deployments(project="payments-service", app="payments-api", environment="production", status=[
        models.DeploymentStatus.READY,
        models.DeploymentStatus.FAILED,
    ], limit=100)

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: deploymentList

<!-- UsageSnippet language="python" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="deploymentList" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.list_deployments(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", status=[
        models.DeploymentStatus.READY,
        models.DeploymentStatus.FAILED,
    ], limit=100)

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: missingParent

<!-- UsageSnippet language="python" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="missingParent" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.list_deployments(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", status=[
        models.DeploymentStatus.READY,
        models.DeploymentStatus.FAILED,
    ], limit=100)

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: missingPermission

<!-- UsageSnippet language="python" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="missingPermission" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.list_deployments(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", status=[
        models.DeploymentStatus.READY,
        models.DeploymentStatus.FAILED,
    ], limit=100)

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: projectNotFound

<!-- UsageSnippet language="python" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="projectNotFound" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.list_deployments(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", status=[
        models.DeploymentStatus.READY,
        models.DeploymentStatus.FAILED,
    ], limit=100)

    while res is not None:
        # Handle items

        res = res.next()

```
### Example Usage: workspaceWide

<!-- UsageSnippet language="python" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="workspaceWide" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.list_deployments(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", status=[
        models.DeploymentStatus.READY,
        models.DeploymentStatus.FAILED,
    ], limit=100)

    while res is not None:
        # Handle items

        res = res.next()

```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                  | *Optional[str]*                                                                                                            | :heavy_minus_sign:                                                                                                         | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                              |
| `app`                                                                                                                      | *Optional[str]*                                                                                                            | :heavy_minus_sign:                                                                                                         | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                              |
| `environment`                                                                                                              | *Optional[str]*                                                                                                            | :heavy_minus_sign:                                                                                                         | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                              |
| `status`                                                                                                                   | List[[models.DeploymentStatus](../../models/deploymentstatus.md)]                                                          | :heavy_minus_sign:                                                                                                         | Restrict results to deployments in any of the given lifecycle statuses.<br/>Omit to return deployments in every status.<br/> | [<br/>"ready",<br/>"failed"<br/>]                                                                                          |
| `limit`                                                                                                                    | *Optional[int]*                                                                                                            | :heavy_minus_sign:                                                                                                         | Maximum number of deployments to return per request.<br/>Balance between response size and number of pagination calls needed.<br/> |                                                                                                                            |
| `cursor`                                                                                                                   | *Optional[str]*                                                                                                            | :heavy_minus_sign:                                                                                                         | Pagination cursor from a previous response to fetch the next page.<br/>Use when `hasMore: true` in the previous response.<br/> |                                                                                                                            |
| `retries`                                                                                                                  | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                           | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |                                                                                                                            |

### Response

**[models.DeploymentsListDeploymentsResponse](../../models/deploymentslistdeploymentsresponse.md)**

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

## promote_deployment

Promote a deployment to become the current deployment for its environment.
All sticky domains are reassigned from the current deployment to the
promoted one, and the previous deployment is scheduled for standby.

The deployment must be ready, not already shutting down, belong to the
production environment, and its app must already have a current deployment.
Promoting the deployment that is already current fails, unless the app is in
a rolled-back state, in which case promoting the current deployment
confirms the rollback and re-enables automatic promotion of future
deployments.

Promotion runs as a durable workflow: this endpoint returns once the
promotion is accepted. Poll `getDeployment` or `listDeployments` to observe
the result.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.promote_deployment` (to promote deployments in any environment)
- `environment.<environment_id>.promote_deployment` (to promote deployments in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="python" operationID="deployments.promoteDeployment" method="post" path="/v2/deployments.promoteDeployment" example="accepted" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.promote_deployment(deployment_id="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: promote

<!-- UsageSnippet language="python" operationID="deployments.promoteDeployment" method="post" path="/v2/deployments.promoteDeployment" example="promote" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.promote_deployment(deployment_id="d_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `deployment_id`                                                                                                          | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2DeploymentsPromoteDeploymentResponseBody](../../models/v2deploymentspromotedeploymentresponsebody.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.BadRequestErrorResponse         | 400                                    | application/json                       |
| errors.UnauthorizedErrorResponse       | 401                                    | application/json                       |
| errors.NotFoundErrorResponse           | 404                                    | application/json                       |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.TooManyRequestsErrorResponse    | 429                                    | application/problem+json               |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## rollback_deployment

Roll live traffic back to a previous deployment. `deploymentId` is the
deployment to roll back TO; the app's current deployment is used as
the rollback source automatically.

The target deployment must be ready, not already shutting down, belong to
the production environment, and must not itself be the current deployment.

After a rollback the app is marked as rolled back, which prevents new
deployments from automatically taking over live traffic. Promote the
rolled-back deployment (or a newer one) to clear this state.

Rollback runs as a durable workflow: this endpoint returns once the
rollback is accepted. Poll `getDeployment` or `listDeployments` to observe
the result.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.rollback_deployment` (to roll back deployments in any environment)
- `environment.<environment_id>.rollback_deployment` (to roll back deployments in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="python" operationID="deployments.rollbackDeployment" method="post" path="/v2/deployments.rollbackDeployment" example="accepted" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.rollback_deployment(deployment_id="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: rollback

<!-- UsageSnippet language="python" operationID="deployments.rollbackDeployment" method="post" path="/v2/deployments.rollbackDeployment" example="rollback" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.rollback_deployment(deployment_id="d_prev5678")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `deployment_id`                                                                                                          | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2DeploymentsRollbackDeploymentResponseBody](../../models/v2deploymentsrollbackdeploymentresponsebody.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.BadRequestErrorResponse         | 400                                    | application/json                       |
| errors.UnauthorizedErrorResponse       | 401                                    | application/json                       |
| errors.NotFoundErrorResponse           | 404                                    | application/json                       |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.TooManyRequestsErrorResponse    | 429                                    | application/problem+json               |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## start_deployment

Start a deployment that was previously stopped with `stopDeployment`, so it
serves traffic again. The deployment keeps the configuration it had when it
was stopped; nothing is rebuilt or redeployed.

The deployment must currently be stopped, and must belong to a
non-production environment. Production deployments are never stopped, so
they cannot be started.

Starting is asynchronous: this endpoint only enqueues the start and returns
immediately. Poll `getDeployment` until the status reaches `ready`.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.start_deployment` (to start deployments in any environment)
- `environment.<environment_id>.start_deployment` (to start deployments in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="python" operationID="deployments.startDeployment" method="post" path="/v2/deployments.startDeployment" example="accepted" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.start_deployment(deployment_id="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: start

<!-- UsageSnippet language="python" operationID="deployments.startDeployment" method="post" path="/v2/deployments.startDeployment" example="start" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.start_deployment(deployment_id="d_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `deployment_id`                                                                                                          | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2DeploymentsStartDeploymentResponseBody](../../models/v2deploymentsstartdeploymentresponsebody.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.BadRequestErrorResponse         | 400                                    | application/json                       |
| errors.UnauthorizedErrorResponse       | 401                                    | application/json                       |
| errors.NotFoundErrorResponse           | 404                                    | application/json                       |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.TooManyRequestsErrorResponse    | 429                                    | application/problem+json               |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## stop_deployment

Stop a running preview deployment. Stopped deployments keep their
configuration and can be resumed later with `startDeployment`.

The deployment must be ready and running, and must belong to a
non-production environment; production deployments cannot be stopped.
A deployment that is already draining from a previous stop is rejected
with a precondition error.

Stopping is asynchronous: this endpoint only enqueues the stop and returns
immediately. Poll `getDeployment` until the status reaches `stopped`.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.stop_deployment` (to stop deployments in any environment)
- `environment.<environment_id>.stop_deployment` (to stop deployments in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="python" operationID="deployments.stopDeployment" method="post" path="/v2/deployments.stopDeployment" example="accepted" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.stop_deployment(deployment_id="proj_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: stop

<!-- UsageSnippet language="python" operationID="deployments.stopDeployment" method="post" path="/v2/deployments.stopDeployment" example="stop" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.deployments.stop_deployment(deployment_id="d_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `deployment_id`                                                                                                          | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2DeploymentsStopDeploymentResponseBody](../../models/v2deploymentsstopdeploymentresponsebody.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.BadRequestErrorResponse         | 400                                    | application/json                       |
| errors.UnauthorizedErrorResponse       | 401                                    | application/json                       |
| errors.NotFoundErrorResponse           | 404                                    | application/json                       |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.TooManyRequestsErrorResponse    | 429                                    | application/problem+json               |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |