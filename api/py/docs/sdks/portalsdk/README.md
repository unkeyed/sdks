# Portal

## Overview

Customer Portal session management

### Available Operations

* [create_portal](#create_portal) - Create portal
* [create_session](#create_session) - Create portal session
* [delete_portal](#delete_portal) - Delete portal
* [exchange_code](#exchange_code) - Exchange portal code
* [get_portal](#get_portal) - Get portal
* [get_verifications](#get_verifications) - Get portal verifications
* [list_keys](#list_keys) - List portal keys
* [reroll_key](#reroll_key) - Reroll portal key
* [update_portal](#update_portal) - Update portal

## create_portal

Create a portal for one app or keyspace in your workspace.

Unreleased and subject to change without notice.

Send exactly one of `keyspaceId` or `appId`. That resource must belong to your
workspace, and it can back only one portal, so a second portal for the same
resource is a **409**.

`displayName` is what your end users see. It is yours to set and change
independently of the resource the portal serves.

**Required Permissions**

Your root key must have `portal.*.create_portal`. A grant scoped to a specific
portal id does not authorize creation, because the id does not exist yet.


### Example Usage

<!-- UsageSnippet language="python" operationID="portal.createPortal" method="post" path="/v2/portal.createPortal" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.portal.create_portal(request={
        "slug": "acme-portal",
        "display_name": "Acme",
        "keyspace_id": "ks_1234abcd",
        "app_id": "app_1234abcd",
        "enabled": True,
        "logo_url": "https://cdn.example.com/logo.svg",
        "primary_color": "#6366f1",
    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                           | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `request`                                                                                           | [models.V2PortalCreatePortalRequestBodyUnion](../../models/v2portalcreateportalrequestbodyunion.md) | :heavy_check_mark:                                                                                  | The request object to use for the request.                                                          |
| `retries`                                                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                    | :heavy_minus_sign:                                                                                  | Configuration to override the default retry behavior of the client.                                 |

### Response

**[models.V2PortalCreatePortalResponseBody](../../models/v2portalcreateportalresponsebody.md)**

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

## create_session

Create a portal session for an end user and get the URL to redirect them to.

The URL carries a single-use exchange code valid for 15 minutes, which the portal
redeems exactly once for a 24-hour access token via `portal.exchangeCode`.

**Required Permissions**

Authorization runs in two stages, and both must pass.

First, your root key must have one of the following permissions:
- `portal.*.create_portal_session` (to mint sessions for any portal in the workspace)
- `portal.<portal_id>.create_portal_session` (to mint sessions for a specific portal)

Second, a session can never carry a capability your root key does not itself
hold. Each requested scope additionally requires the equivalent permission on
every keyspace the portal resolves to:
- `keys:read` requires `api.<api_id>.read_key` **and** `api.<api_id>.read_api`
- `keys:reroll` requires `api.<api_id>.create_key`, plus
  `api.<api_id>.encrypt_key` when the keyspace stores encrypted keys

The `*` form of each is also accepted. Requesting a scope you do not hold
returns 403 for the whole request rather than minting a reduced session, so a
missing grant is visible instead of surfacing later as a broken portal.

Missing the portal permission itself returns **404**, not 403: a caller who
cannot mint for a portal is not told whether it exists.

Your root key must also be associated with a workspace that has an enabled portal.


### Example Usage

<!-- UsageSnippet language="python" operationID="portal.createSession" method="post" path="/v2/portal.createSession" -->
```python
from unkey.py import Unkey, models


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.portal.create_session(portal="proj_1234abcd", external_id="user_123", scopes=[
        models.Scope.KEYS_READ,
        models.Scope.KEYS_REROLL,
        models.Scope.KEYS_READ,
    ], preview=False, return_url="https://app.example.com/settings/api-keys")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `portal`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | proj_1234abcd                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `external_id`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | The end user's identifier in the customer's system.<br/>Accepts arbitrary string values (user IDs, emails, UUIDs, etc.).<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | user_123                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `scopes`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | List[[models.Scope](../../models/scope.md)]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | The capabilities granted to the end user in the Portal, from a fixed<br/>vocabulary. All capabilities are scoped to this end user: key capabilities<br/>(`keys:*`) apply only to keys the end user owns within the keyspace<br/>configured on the portal. An end user can never see another identity's<br/>keys.<br/><br/>The portal currently exposes only the keys page, so these scopes gate<br/>what the end user can do there rather than which pages they see. Because<br/>rerolling is reached from that page, `keys:reroll` requires `keys:read`<br/>in the same session; requesting it alone is rejected.<br/><br/>Each scope requires the equivalent permission on your own root key. See<br/>Required Permissions on this operation.<br/> | [<br/>"keys:read",<br/>"keys:reroll"<br/>]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `preview`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | *Optional[bool]*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | When true, creates a preview session for testing the portal experience.<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `return_url`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | *Optional[str]*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Absolute URL the end user is sent back to when they leave the portal, or<br/>when their session expires mid-visit. Set per session rather than per<br/>portal, so one portal can serve several entry points and return each user<br/>to the page they came from.<br/><br/>When omitted, the portal shows no return link.<br/>                                                                                                                                                                                                                                                                                                                                                                    | https://app.example.com/settings/api-keys                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

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

## delete_portal

Delete a portal and revoke the sessions it minted.

Unreleased and subject to change without notice.

Its end users lose access rather than keeping it until their tokens expire.
Revocation is not instantaneous: session lookups are cached briefly, so a
request already in flight may still succeed.

The app or keyspace it served is untouched, and its slug becomes free for a
new portal.

**Required Permissions**

Your root key must have one of:
- `portal.*.delete_portal` (to delete any portal in the workspace)
- `portal.<portal_id>.delete_portal` (to delete a specific portal)

Without the permission this returns **404**, not 403.


### Example Usage

<!-- UsageSnippet language="python" operationID="portal.deletePortal" method="post" path="/v2/portal.deletePortal" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.portal.delete_portal(portal="proj_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `portal`                                                                                                                 | *str*                                                                                                                    | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `retries`                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |                                                                                                                          |

### Response

**[models.V2PortalDeletePortalResponseBody](../../models/v2portaldeleteportalresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## exchange_code

Exchange a short-lived code for a long-lived portal access token.

This endpoint is unauthenticated. The code itself serves as proof of authorization.
Each code can only be redeemed once; subsequent attempts return 401.

The returned access token is valid for 24 hours and should be stored as an
httpOnly cookie or used in the Authorization header for subsequent API calls.


### Example Usage

<!-- UsageSnippet language="python" operationID="portal.exchangeCode" method="post" path="/v2/portal.exchangeCode" -->
```python
from unkey.py import Unkey


with Unkey() as unkey:

    res = unkey.portal.exchange_code(code="pst_abc123def456")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                           | *str*                                                                                                                            | :heavy_check_mark:                                                                                                               | The exchange code carried by the portal URL from `portal.createSession`.<br/>Must be valid, unexpired, and not previously redeemed.<br/> | pst_abc123def456                                                                                                                 |
| `retries`                                                                                                                        | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                 | :heavy_minus_sign:                                                                                                               | Configuration to override the default retry behavior of the client.                                                              |                                                                                                                                  |

### Response

**[models.PortalExchangeCodeResponse](../../models/portalexchangecoderesponse.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## get_portal

Read one portal, by its id or slug, or by the resource it serves.

Unreleased and subject to change without notice.

Send exactly one of `portal`, `keyspaceId`, or `appId`. Sending more than one
is a **400**.

**Required Permissions**

Your root key must have one of:
- `portal.*.read_portal` (to read any portal in the workspace)
- `portal.<portal_id>.read_portal` (to read a specific portal)

Without the permission this returns **404**, not 403.


### Example Usage

<!-- UsageSnippet language="python" operationID="portal.getPortal" method="post" path="/v2/portal.getPortal" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.portal.get_portal(request={
        "portal": "proj_1234abcd",
        "keyspace_id": "ks_1234abcd",
        "app_id": "app_1234abcd",
    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                     | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `request`                                                                                     | [models.V2PortalGetPortalRequestBodyUnion](../../models/v2portalgetportalrequestbodyunion.md) | :heavy_check_mark:                                                                            | The request object to use for the request.                                                    |
| `retries`                                                                                     | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                              | :heavy_minus_sign:                                                                            | Configuration to override the default retry behavior of the client.                           |

### Response

**[models.V2PortalGetPortalResponseBody](../../models/v2portalgetportalresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## get_verifications

Return a verification analytics timeseries for the authenticated portal
session's end user.

Authenticates only with a portal session cookie and always restricts results
to verification events attributed to the session's external identity. Unlike
`analytics.getVerifications`, this endpoint takes a fixed time window (no
query language) and returns a zero-filled, outcome-broken-out timeseries.
Bucket granularity is chosen automatically from the window size.


### Example Usage

<!-- UsageSnippet language="python" operationID="portal.getVerifications" method="post" path="/v2/portal.getVerifications" -->
```python
from unkey.py import Unkey, models


with Unkey() as unkey:

    res = unkey.portal.get_verifications(security=models.PortalGetVerificationsSecurity(
        portal_session="<YOUR_API_KEY_HERE>",
    ), start_time=1704067200000, end_time=1704672000000, key_id="key_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                   | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 | Example                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                                                                  | [models.PortalGetVerificationsSecurity](../../models/portalgetverificationssecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `start_time`                                                                                                                                                                | *int*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                          | Start of the query window as a unix timestamp in milliseconds (inclusive).<br/>                                                                                             | 1704067200000                                                                                                                                                               |
| `end_time`                                                                                                                                                                  | *int*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                          | End of the query window as a unix timestamp in milliseconds (exclusive).<br/>Bucket granularity (minute, hour, or day) is chosen automatically from the<br/>window size.<br/> | 1704672000000                                                                                                                                                               |
| `key_id`                                                                                                                                                                    | *Optional[str]*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                          | Optional. Restrict results to a single key. The key must belong to the<br/>authenticated end user; results are always scoped to the session identity<br/>regardless of this value.<br/> | key_1234abcd                                                                                                                                                                |
| `retries`                                                                                                                                                                   | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                            | :heavy_minus_sign:                                                                                                                                                          | Configuration to override the default retry behavior of the client.                                                                                                         |                                                                                                                                                                             |

### Response

**[models.V2PortalGetVerificationsResponseBody](../../models/v2portalgetverificationsresponsebody.md)**

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

## list_keys

Retrieve a paginated list of API keys owned by the authenticated portal
session's end user.

This is the portal-scoped variant of `apis.listKeys`. It authenticates only
with a portal session cookie and always restricts results to the keys owned
by the session's external identity, within the keyspaces configured on the
portal configuration. Both the identity and the keyspaces come from the
session, so the request body has no `externalId` or `apiId` field.


### Example Usage

<!-- UsageSnippet language="python" operationID="portal.listKeys" method="post" path="/v2/portal.listKeys" -->
```python
from unkey.py import Unkey, models


with Unkey() as unkey:

    res = unkey.portal.list_keys(security=models.PortalListKeysSecurity(
        portal_session="<YOUR_API_KEY_HERE>",
    ), limit=100, cursor="key_1234abcd")

    while res is not None:
        # Handle items

        res = res.next()

```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                             | [models.PortalListKeysSecurity](../../models/portallistkeyssecurity.md)                                                | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `limit`                                                                                                                | *Optional[int]*                                                                                                        | :heavy_minus_sign:                                                                                                     | Maximum number of keys to return per request.<br/>Balance between response size and number of pagination calls needed.<br/> |                                                                                                                        |
| `cursor`                                                                                                               | *Optional[str]*                                                                                                        | :heavy_minus_sign:                                                                                                     | Pagination cursor from a previous response to fetch the next page.<br/>Use when `hasMore: true` in the previous response.<br/> | key_1234abcd                                                                                                           |
| `retries`                                                                                                              | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                                     | Configuration to override the default retry behavior of the client.                                                    |                                                                                                                        |

### Response

**[models.PortalListKeysResponse](../../models/portallistkeysresponse.md)**

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

## reroll_key

Reroll an API key owned by the authenticated portal session's end user,
issuing a new key while preserving its configuration.

This is the portal-scoped variant of `keys.rerollKey`. It authenticates only
with a portal session cookie and may only reroll keys owned by the session's
external identity; any other key returns 404.


### Example Usage

<!-- UsageSnippet language="python" operationID="portal.rerollKey" method="post" path="/v2/portal.rerollKey" -->
```python
from unkey.py import Unkey, models


with Unkey() as unkey:

    res = unkey.portal.reroll_key(security=models.PortalRerollKeySecurity(
        portal_session="<YOUR_API_KEY_HERE>",
    ), key_id="key_2cGKbMxRyIzhCxo1Idjz8q", expiration=86400000)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [models.PortalRerollKeySecurity](../../models/portalrerollkeysecurity.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `key_id`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | The database identifier of the key to reroll.<br/><br/>This is the unique ID returned when creating or listing keys, NOT the actual API key token.<br/>You can find this ID in:<br/>- The response from `keys.createKey`<br/>- Key verification responses<br/>- The Unkey dashboard<br/>- API key listing endpoints<br/>                                                                                                                                                                                                                         | key_2cGKbMxRyIzhCxo1Idjz8q                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `expiration`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | *int*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Duration in milliseconds until the ORIGINAL key is revoked, starting from now.<br/><br/>This parameter controls the overlap period for key rotation:<br/>- Set to `0` to revoke the original key immediately<br/>- Positive values keep the original key active for the specified duration<br/>- Allows graceful migration by giving users time to update their credentials<br/><br/>Common overlap periods:<br/>- Immediate revocation: 0<br/>- 1 hour grace period: 3600000<br/>- 24 hours grace period: 86400000<br/>- 7 days grace period: 604800000<br/>- 30 days grace period: 2592000000<br/> | 86400000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Response

**[models.V2KeysRerollKeyResponseBody](../../models/v2keysrerollkeyresponsebody.md)**

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

## update_portal

Change a portal's slug, display name, the resource it serves, its enabled
state, or its branding.

Unreleased and subject to change without notice.

Only the fields you send change. Omitting a field leaves it as it is, and for
branding, sending null clears it. Send at most one of `keyspaceId` or `appId`.

Two changes affect your end users immediately:
- Re-pointing at a different resource revokes the portal's live sessions,
  because a session carries the scope it was minted with.
- Disabling stops new sessions but leaves live ones running until they expire.

**Required Permissions**

Your root key must have one of:
- `portal.*.update_portal` (to update any portal in the workspace)
- `portal.<portal_id>.update_portal` (to update a specific portal)

Without the permission this returns **404**, not 403.


### Example Usage

<!-- UsageSnippet language="python" operationID="portal.updatePortal" method="post" path="/v2/portal.updatePortal" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.portal.update_portal(portal="proj_1234abcd", slug="acme-portal", display_name="Acme", keyspace_id="ks_1234abcd", app_id="app_1234abcd", enabled=False, logo_url="https://cdn.example.com/logo.svg", primary_color="#6366f1")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `portal`                                                                                                                                                                                                                                                                               | *str*                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                     | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                       | proj_1234abcd                                                                                                                                                                                                                                                                          |
| `slug`                                                                                                                                                                                                                                                                                 | *Optional[str]*                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | New handle for this portal. Omit to leave unchanged.<br/>                                                                                                                                                                                                                              | acme-portal                                                                                                                                                                                                                                                                            |
| `display_name`                                                                                                                                                                                                                                                                         | *Optional[str]*                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | New human-readable name shown to your end users. Omit to leave unchanged.<br/>                                                                                                                                                                                                         | Acme                                                                                                                                                                                                                                                                                   |
| `keyspace_id`                                                                                                                                                                                                                                                                          | *Optional[str]*                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Re-point the portal at a different keyspace. Omit to leave the resource it<br/>serves alone.<br/><br/>Re-pointing revokes the portal's live sessions, because a session carries<br/>the keyspace scope it was minted with and would otherwise keep reaching the<br/>resource the portal no longer serves.<br/> | ks_1234abcd                                                                                                                                                                                                                                                                            |
| `app_id`                                                                                                                                                                                                                                                                               | *Optional[str]*                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Re-point the portal at a different app. Omit to leave the resource it<br/>serves alone.<br/><br/>Re-pointing revokes the portal's live sessions, for the same reason as<br/>`keyspaceId`.<br/>                                                                                         | app_1234abcd                                                                                                                                                                                                                                                                           |
| `enabled`                                                                                                                                                                                                                                                                              | *Optional[bool]*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Whether new sessions can be minted. Omit to leave unchanged.<br/><br/>Disabling does not end sessions that are already live.<br/>                                                                                                                                                      | false                                                                                                                                                                                                                                                                                  |
| `logo_url`                                                                                                                                                                                                                                                                             | *OptionalNullable[str]*                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Absolute `https://` URL of the portal logo. Omit to leave unchanged, or set<br/>null to remove the logo.<br/>                                                                                                                                                                          | https://cdn.example.com/logo.svg                                                                                                                                                                                                                                                       |
| `primary_color`                                                                                                                                                                                                                                                                        | *OptionalNullable[str]*                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Six-digit hex colour for primary actions. Omit to leave unchanged, or set<br/>null to fall back to default styling.<br/>                                                                                                                                                               | #6366f1                                                                                                                                                                                                                                                                                |
| `retries`                                                                                                                                                                                                                                                                              | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                        |

### Response

**[models.V2PortalUpdatePortalResponseBody](../../models/v2portalupdateportalresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |