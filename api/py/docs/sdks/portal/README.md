# Portal

## Overview

Customer Portal session management

### Available Operations

* [create_session](#create_session) - Create portal session
* [exchange_session](#exchange_session) - Exchange session token

## create_session

Create a short-lived session token for an end user to access the Customer Portal.

The returned session ID is valid for 15 minutes and can be exchanged exactly once
for a 24-hour browser session via `portal.exchangeSession`. Redirect the end user
to the returned URL to start the portal experience.

**Required Permissions**

Your root key must be associated with a workspace that has an enabled portal configuration.


### Example Usage

<!-- UsageSnippet language="python" operationID="portal.createSession" method="post" path="/v2/portal.createSession" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.portal.create_session(slug="my-portal", external_id="user_123", permissions=[
        "api.*.read_key",
        "api.*.create_key",
        "api.*.read_analytics",
    ], preview=False)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slug`                                                                                                                                                                                                                                                                                                                                                                                                                                            | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                | The human-readable slug of the portal configuration to create the session against.<br/>Identifies which app's portal the end user will access.<br/>Must be 3-64 characters, lowercase alphanumeric and hyphens only,<br/>must not start or end with a hyphen, and must not contain consecutive hyphens.<br/>                                                                                                                                      | my-portal                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `external_id`                                                                                                                                                                                                                                                                                                                                                                                                                                     | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                | The end user's identifier in the customer's system.<br/>Accepts arbitrary string values (user IDs, emails, UUIDs, etc.).<br/>                                                                                                                                                                                                                                                                                                                     | user_123                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `permissions`                                                                                                                                                                                                                                                                                                                                                                                                                                     | List[*str*]                                                                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                | List of RBAC tuple permissions defining what the end user can do in the Portal.<br/>Each permission is a string in the format `{resourceType}.{resourceId}.{action}`.<br/>Use `*` as resourceId to grant access to all resources of that type.<br/><br/>Tab visibility is derived from the action segment:<br/>- Keys tab: `read_key`, `create_key`, `update_key`, `delete_key`<br/>- Analytics tab: `read_analytics`<br/>- Docs tab: visible when any permission is present<br/> | [<br/>"api.*.read_key",<br/>"api.*.create_key",<br/>"api.*.read_analytics"<br/>]                                                                                                                                                                                                                                                                                                                                                                  |
| `preview`                                                                                                                                                                                                                                                                                                                                                                                                                                         | *Optional[bool]*                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                | When true, creates a preview session for testing the portal experience.<br/>                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                                         | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Response

**[models.PortalCreateSessionResponse](../../models/portalcreatesessionresponse.md)**

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

## exchange_session

Exchange a short-lived session token for a long-lived browser session.

This endpoint is unauthenticated. The session token itself serves as proof of authorization.
Each token can only be exchanged once; subsequent attempts return 401.

The returned browser session token is valid for 24 hours and should be stored as an
httpOnly cookie or used in the Authorization header for subsequent API calls.


### Example Usage

<!-- UsageSnippet language="python" operationID="portal.exchangeSession" method="post" path="/v2/portal.exchangeSession" -->
```python
from unkey.py import Unkey


with Unkey() as unkey:

    res = unkey.portal.exchange_session(session_id="pst_abc123def456")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                           | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `session_id`                                                                                                        | *str*                                                                                                               | :heavy_check_mark:                                                                                                  | The session token ID received from `portal.createSession`.<br/>Must be valid, unexpired, and not previously exchanged.<br/> | pst_abc123def456                                                                                                    |
| `retries`                                                                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                    | :heavy_minus_sign:                                                                                                  | Configuration to override the default retry behavior of the client.                                                 |                                                                                                                     |

### Response

**[models.PortalExchangeSessionResponse](../../models/portalexchangesessionresponse.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |