# unkey.py

Developer-friendly & type-safe Python SDK specifically catered to leverage *unkey.py* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=unkey-py&utm_campaign=python"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>



<!-- Start Summary [summary] -->
## Summary

Unkey API: Unkey's API provides programmatic access for all resources within our platform.


### Authentication
#
This API uses HTTP Bearer authentication with root keys. Most endpoints require specific permissions associated with your root key. When making requests, include your root key in the `Authorization` header:
```
Authorization: Bearer unkey_xxxxxxxxxxx
```

All responses follow a consistent envelope structure that separates operational metadata from actual data. This design provides several benefits:
- Debugging: Every response includes a unique requestId for tracing issues
- Consistency: Predictable response format across all endpoints
- Extensibility: Easy to add new metadata without breaking existing integrations
- Error Handling: Unified error format with actionable information

### Success Response Format:
```json
{
  "meta": {
    "requestId": "req_123456"
  },
  "data": {
    // Actual response data here
  }
}
```

The meta object contains operational information:
- `requestId`: Unique identifier for this request (essential for support)

The data object contains the actual response data specific to each endpoint.

### Paginated Response Format:
```json
{
  "meta": {
    "requestId": "req_123456"
  },
  "data": [
    // Array of results
  ],
  "pagination": {
    "cursor": "next_page_token",
    "hasMore": true
  }
}
```

The pagination object appears on list endpoints and contains:
- `cursor`: Token for requesting the next page
- `hasMore`: Whether more results are available

### Error Response Format:
```json
{
  "meta": {
    "requestId": "req_2c9a0jf23l4k567"
  },
  "error": {
    "detail": "The resource you are attempting to modify is protected and cannot be changed",
    "status": 403,
    "title": "Forbidden",
    "type": "https://unkey.com/docs/errors/unkey/application/protected_resource"
  }
}
```

Error responses include comprehensive diagnostic information:
- `title`: Human-readable error summary
- `detail`: Specific description of what went wrong
- `status`: HTTP status code
- `type`: Link to error documentation
- `errors`: Array of validation errors (for 400 responses)

This structure ensures you always have the context needed to debug issues and take corrective action.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [unkey.py](#unkeypy)
  * [SDK Installation](#sdk-installation)
  * [IDE Support](#ide-support)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Resource Management](#resource-management)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!NOTE]
> **Python version upgrade policy**
>
> Once a Python version reaches its [official end of life date](https://devguide.python.org/versions/), a 3-month grace period is provided for users to upgrade. Following this grace period, the minimum python version supported in the SDK will be updated.

The SDK can be installed with *uv*, *pip*, or *poetry* package managers.

### uv

*uv* is a fast Python package installer and resolver, designed as a drop-in replacement for pip and pip-tools. It's recommended for its speed and modern Python tooling capabilities.

```bash
uv add unkey.py
```

### PIP

*PIP* is the default package installer for Python, enabling easy installation and management of packages from PyPI via the command line.

```bash
pip install unkey.py
```

### Poetry

*Poetry* is a modern tool that simplifies dependency management and package publishing by using a single `pyproject.toml` file to handle project metadata and dependencies.

```bash
poetry add unkey.py
```

### Shell and script usage with `uv`

You can use this SDK in a Python shell with [uv](https://docs.astral.sh/uv/) and the `uvx` command that comes with it like so:

```shell
uvx --from unkey.py python
```

It's also possible to write a standalone Python script without needing to set up a whole project like so:

```python
#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.9"
# dependencies = [
#     "unkey.py",
# ]
# ///

from unkey.py import Unkey

sdk = Unkey(
  # SDK arguments
)

# Rest of script here...
```

Once that is saved to a file, you can run it with `uv run script.py` where
`script.py` can be replaced with the actual file name.
<!-- End SDK Installation [installation] -->

<!-- Start IDE Support [idesupport] -->
## IDE Support

### PyCharm

Generally, the SDK will work well with most IDEs out of the box. However, when using PyCharm, you can enjoy much better integration with Pydantic by installing an additional plugin.

- [PyCharm Pydantic Plugin](https://docs.pydantic.dev/latest/integrations/pycharm/)
<!-- End IDE Support [idesupport] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```python
# Synchronous Example
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.analytics.get_verifications(query="SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY")

    # Handle response
    print(res)
```

</br>

The same SDK client can also be used to make asynchronous requests by importing asyncio.

```python
# Asynchronous Example
import asyncio
from unkey.py import Unkey

async def main():

    async with Unkey(
        root_key="<YOUR_BEARER_TOKEN_HERE>",
    ) as unkey:

        res = await unkey.analytics.get_verifications_async(query="SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY")

        # Handle response
        print(res)

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name       | Type | Scheme      |
| ---------- | ---- | ----------- |
| `root_key` | http | HTTP Bearer |

To authenticate with the API the `root_key` parameter must be set when initializing the SDK client instance. For example:
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.analytics.get_verifications(query="SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY")

    # Handle response
    print(res)

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [analytics](docs/sdks/analytics/README.md)

* [get_verifications](docs/sdks/analytics/README.md#get_verifications) - Query key verification data

### [apis](docs/sdks/apis/README.md)

* [create_api](docs/sdks/apis/README.md#create_api) - Create API namespace
* [delete_api](docs/sdks/apis/README.md#delete_api) - Delete API namespace
* [get_api](docs/sdks/apis/README.md#get_api) - Get API namespace
* [list_keys](docs/sdks/apis/README.md#list_keys) - List API keys

### [identities](docs/sdks/identities/README.md)

* [create_identity](docs/sdks/identities/README.md#create_identity) - Create Identity
* [delete_identity](docs/sdks/identities/README.md#delete_identity) - Delete Identity
* [get_identity](docs/sdks/identities/README.md#get_identity) - Get Identity
* [list_identities](docs/sdks/identities/README.md#list_identities) - List Identities
* [update_identity](docs/sdks/identities/README.md#update_identity) - Update Identity

### [keys](docs/sdks/keys/README.md)

* [add_permissions](docs/sdks/keys/README.md#add_permissions) - Add key permissions
* [add_roles](docs/sdks/keys/README.md#add_roles) - Add key roles
* [create_key](docs/sdks/keys/README.md#create_key) - Create API key
* [delete_key](docs/sdks/keys/README.md#delete_key) - Delete API keys
* [get_key](docs/sdks/keys/README.md#get_key) - Get API key
* [remove_permissions](docs/sdks/keys/README.md#remove_permissions) - Remove key permissions
* [remove_roles](docs/sdks/keys/README.md#remove_roles) - Remove key roles
* [reroll_key](docs/sdks/keys/README.md#reroll_key) - Reroll Key
* [set_permissions](docs/sdks/keys/README.md#set_permissions) - Set key permissions
* [set_roles](docs/sdks/keys/README.md#set_roles) - Set key roles
* [update_credits](docs/sdks/keys/README.md#update_credits) - Update key credits
* [update_key](docs/sdks/keys/README.md#update_key) - Update key settings
* [verify_key](docs/sdks/keys/README.md#verify_key) - Verify API key
* [whoami](docs/sdks/keys/README.md#whoami) - Get API key by hash

### [permissions](docs/sdks/permissions/README.md)

* [create_permission](docs/sdks/permissions/README.md#create_permission) - Create permission
* [create_role](docs/sdks/permissions/README.md#create_role) - Create role
* [delete_permission](docs/sdks/permissions/README.md#delete_permission) - Delete permission
* [delete_role](docs/sdks/permissions/README.md#delete_role) - Delete role
* [get_permission](docs/sdks/permissions/README.md#get_permission) - Get permission
* [get_role](docs/sdks/permissions/README.md#get_role) - Get role
* [list_permissions](docs/sdks/permissions/README.md#list_permissions) - List permissions
* [list_roles](docs/sdks/permissions/README.md#list_roles) - List roles

### [ratelimit](docs/sdks/ratelimit/README.md)

* [delete_override](docs/sdks/ratelimit/README.md#delete_override) - Delete ratelimit override
* [get_override](docs/sdks/ratelimit/README.md#get_override) - Get ratelimit override
* [limit](docs/sdks/ratelimit/README.md#limit) - Apply rate limiting
* [list_overrides](docs/sdks/ratelimit/README.md#list_overrides) - List ratelimit overrides
* [multi_limit](docs/sdks/ratelimit/README.md#multi_limit) - Apply multiple rate limit checks
* [set_override](docs/sdks/ratelimit/README.md#set_override) - Set ratelimit override

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `Next` method that can be called to pull down the next group of results. If the
return value of `Next` is `None`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.identities.list_identities(limit=50, cursor="cursor_eyJrZXkiOiJrZXlfMTIzNCJ9")

    while res is not None:
        # Handle items

        res = res.next()

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API. However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a `RetryConfig` object to the call:
```python
from unkey.py import Unkey
from unkey.py.utils import BackoffStrategy, RetryConfig


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.analytics.get_verifications(query="SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY",
        RetryConfig("backoff", BackoffStrategy(1, 50, 1.1, 100), False))

    # Handle response
    print(res)

```

If you'd like to override the default retry strategy for all operations that support retries, you can use the `retry_config` optional parameter when initializing the SDK:
```python
from unkey.py import Unkey
from unkey.py.utils import BackoffStrategy, RetryConfig


with Unkey(
    retry_config=RetryConfig("backoff", BackoffStrategy(1, 50, 1.1, 100), False),
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.analytics.get_verifications(query="SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY")

    # Handle response
    print(res)

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`UnkeyError`](./src/unkey/py/errors/unkeyerror.py) is the base class for all HTTP error responses. It has the following properties:

| Property           | Type             | Description                                                                             |
| ------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| `err.message`      | `str`            | Error message                                                                           |
| `err.status_code`  | `int`            | HTTP response status code eg `404`                                                      |
| `err.headers`      | `httpx.Headers`  | HTTP response headers                                                                   |
| `err.body`         | `str`            | HTTP body. Can be empty string if no body is returned.                                  |
| `err.raw_response` | `httpx.Response` | Raw HTTP response                                                                       |
| `err.data`         |                  | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```python
from unkey.py import Unkey, errors


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:
    res = None
    try:

        res = unkey.analytics.get_verifications(query="SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY")

        # Handle response
        print(res)


    except errors.UnkeyError as e:
        # The base class for HTTP error responses
        print(e.message)
        print(e.status_code)
        print(e.body)
        print(e.headers)
        print(e.raw_response)

        # Depending on the method different errors may be thrown
        if isinstance(e, errors.BadRequestErrorResponse):
            print(e.data.meta)  # models.Meta
            print(e.data.error)  # models.BadRequestErrorDetails
```

### Error Classes
**Primary errors:**
* [`UnkeyError`](./src/unkey/py/errors/unkeyerror.py): The base class for HTTP error responses.
  * [`BadRequestErrorResponse`](./src/unkey/py/errors/badrequesterrorresponse.py): Error response for invalid requests that cannot be processed due to client-side errors. This typically occurs when request parameters are missing, malformed, or fail validation rules. The response includes detailed information about the specific errors in the request, including the location of each error and suggestions for fixing it. When receiving this error, check the 'errors' array in the response for specific validation issues that need to be addressed before retrying. Status code `400`.
  * [`UnauthorizedErrorResponse`](./src/unkey/py/errors/unauthorizederrorresponse.py): Error response when authentication has failed or credentials are missing. This occurs when: - No authentication token is provided in the request - The provided token is invalid, expired, or malformed - The token format doesn't match expected patterns  To resolve this error, ensure you're including a valid root key in the Authorization header. Status code `401`.
  * [`ForbiddenErrorResponse`](./src/unkey/py/errors/forbiddenerrorresponse.py): Error response when the provided credentials are valid but lack sufficient permissions for the requested operation. This occurs when: - The root key doesn't have the required permissions for this endpoint - The operation requires elevated privileges that the current key lacks - Access to the requested resource is restricted based on workspace settings  To resolve this error, ensure your root key has the necessary permissions or contact your workspace administrator. Status code `403`.
  * [`InternalServerErrorResponse`](./src/unkey/py/errors/internalservererrorresponse.py): Error response when an unexpected error occurs on the server. This indicates a problem with Unkey's systems rather than your request.  When you encounter this error: - The request ID in the response can help Unkey support investigate the issue - The error is likely temporary and retrying may succeed - If the error persists, contact Unkey support with the request ID. Status code `500`.
  * [`NotFoundErrorResponse`](./src/unkey/py/errors/notfounderrorresponse.py): Error response when the requested resource cannot be found. This occurs when: - The specified resource ID doesn't exist in your workspace - The resource has been deleted or moved - The resource exists but is not accessible with current permissions  To resolve this error, verify the resource ID is correct and that you have access to it. Status code `404`. *

<details><summary>Less common errors (11)</summary>

<br />

**Network errors:**
* [`httpx.RequestError`](https://www.python-httpx.org/exceptions/#httpx.RequestError): Base class for request errors.
    * [`httpx.ConnectError`](https://www.python-httpx.org/exceptions/#httpx.ConnectError): HTTP client was unable to make a request to a server.
    * [`httpx.TimeoutException`](https://www.python-httpx.org/exceptions/#httpx.TimeoutException): HTTP request timed out.


**Inherit from [`UnkeyError`](./src/unkey/py/errors/unkeyerror.py)**:
* [`ConflictErrorResponse`](./src/unkey/py/errors/conflicterrorresponse.py): Error response when the request conflicts with the current state of the resource. This occurs when: - Attempting to create a resource that already exists - Modifying a resource that has been changed by another operation - Violating unique constraints or business rules  To resolve this error, check the current state of the resource and adjust your request accordingly. Status code `409`. Applicable to 3 of 38 methods.*
* [`GoneErrorResponse`](./src/unkey/py/errors/goneerrorresponse.py): Error response when the requested resource has been soft-deleted and is no longer available. This occurs when: - The resource has been marked as deleted but still exists in the database - The resource is intentionally unavailable but could potentially be restored - The resource cannot be restored through the API or dashboard  To resolve this error, contact support if you need the resource restored. Status code `410`. Applicable to 2 of 38 methods.*
* [`PreconditionFailedErrorResponse`](./src/unkey/py/errors/preconditionfailederrorresponse.py): Error response when one or more conditions specified in the request headers are not met. This typically occurs when: - Using conditional requests with If-Match or If-None-Match headers - The resource version doesn't match the expected value - Optimistic concurrency control detects a conflict  To resolve this error, fetch the latest version of the resource and retry with updated conditions. Status code `412`. Applicable to 1 of 38 methods.*
* [`UnprocessableEntityErrorResponse`](./src/unkey/py/errors/unprocessableentityerrorresponse.py): Error response when the request is syntactically valid but cannot be processed due to semantic constraints or resource limitations. This occurs when: - A query exceeds execution time limits - A query uses more memory than allowed - A query scans too many rows - A query result exceeds size limits  The request syntax is correct, but the operation cannot be completed due to business rules or resource constraints. Review the error details for specific limitations and adjust your request accordingly. Status code `422`. Applicable to 1 of 38 methods.*
* [`TooManyRequestsErrorResponse`](./src/unkey/py/errors/toomanyrequestserrorresponse.py): Error response when the client has sent too many requests in a given time period. This occurs when you've exceeded a rate limit or quota for the resource you're accessing.  The rate limit resets automatically after the time window expires. To avoid this error: - Implement exponential backoff when retrying requests - Cache results where appropriate to reduce request frequency - Check the error detail message for specific quota information - Contact support if you need a higher quota for your use case. Status code `429`. Applicable to 1 of 38 methods.*
* [`ServiceUnavailableErrorResponse`](./src/unkey/py/errors/serviceunavailableerrorresponse.py): Error response when a required service is temporarily unavailable. This indicates that the service exists but cannot be reached or is not responding.  When you encounter this error: - The service is likely experiencing temporary issues - Retrying the request after a short delay may succeed - If the error persists, the service may be undergoing maintenance - Contact Unkey support if the issue continues. Status code `503`. Applicable to 1 of 38 methods.*
* [`ResponseValidationError`](./src/unkey/py/errors/responsevalidationerror.py): Type mismatch between the response data and the expected Pydantic model. Provides access to the Pydantic validation error via the `cause` attribute.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `server_url: str` optional parameter when initializing the SDK client instance. For example:
```python
from unkey.py import Unkey


with Unkey(
    server_url="https://api.unkey.com",
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.analytics.get_verifications(query="SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY")

    # Handle response
    print(res)

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Python SDK makes API calls using the [httpx](https://www.python-httpx.org/) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with your own HTTP client instance.
Depending on whether you are using the sync or async version of the SDK, you can pass an instance of `HttpClient` or `AsyncHttpClient` respectively, which are Protocol's ensuring that the client has the necessary methods to make API calls.
This allows you to wrap the client with your own custom logic, such as adding custom headers, logging, or error handling, or you can just pass an instance of `httpx.Client` or `httpx.AsyncClient` directly.

For example, you could specify a header for every request that this sdk makes as follows:
```python
from unkey.py import Unkey
import httpx

http_client = httpx.Client(headers={"x-custom-header": "someValue"})
s = Unkey(client=http_client)
```

or you could wrap the client with your own custom logic:
```python
from unkey.py import Unkey
from unkey.py.httpclient import AsyncHttpClient
import httpx

class CustomClient(AsyncHttpClient):
    client: AsyncHttpClient

    def __init__(self, client: AsyncHttpClient):
        self.client = client

    async def send(
        self,
        request: httpx.Request,
        *,
        stream: bool = False,
        auth: Union[
            httpx._types.AuthTypes, httpx._client.UseClientDefault, None
        ] = httpx.USE_CLIENT_DEFAULT,
        follow_redirects: Union[
            bool, httpx._client.UseClientDefault
        ] = httpx.USE_CLIENT_DEFAULT,
    ) -> httpx.Response:
        request.headers["Client-Level-Header"] = "added by client"

        return await self.client.send(
            request, stream=stream, auth=auth, follow_redirects=follow_redirects
        )

    def build_request(
        self,
        method: str,
        url: httpx._types.URLTypes,
        *,
        content: Optional[httpx._types.RequestContent] = None,
        data: Optional[httpx._types.RequestData] = None,
        files: Optional[httpx._types.RequestFiles] = None,
        json: Optional[Any] = None,
        params: Optional[httpx._types.QueryParamTypes] = None,
        headers: Optional[httpx._types.HeaderTypes] = None,
        cookies: Optional[httpx._types.CookieTypes] = None,
        timeout: Union[
            httpx._types.TimeoutTypes, httpx._client.UseClientDefault
        ] = httpx.USE_CLIENT_DEFAULT,
        extensions: Optional[httpx._types.RequestExtensions] = None,
    ) -> httpx.Request:
        return self.client.build_request(
            method,
            url,
            content=content,
            data=data,
            files=files,
            json=json,
            params=params,
            headers=headers,
            cookies=cookies,
            timeout=timeout,
            extensions=extensions,
        )

s = Unkey(async_client=CustomClient(httpx.AsyncClient()))
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Resource Management [resource-management] -->
## Resource Management

The `Unkey` class implements the context manager protocol and registers a finalizer function to close the underlying sync and async HTTPX clients it uses under the hood. This will close HTTP connections, release memory and free up other resources held by the SDK. In short-lived Python programs and notebooks that make a few SDK method calls, resource management may not be a concern. However, in longer-lived programs, it is beneficial to create a single SDK instance via a [context manager][context-manager] and reuse it across the application.

[context-manager]: https://docs.python.org/3/reference/datamodel.html#context-managers

```python
from unkey.py import Unkey
def main():

    with Unkey(
        root_key="<YOUR_BEARER_TOKEN_HERE>",
    ) as unkey:
        # Rest of application here...


# Or when using async:
async def amain():

    async with Unkey(
        root_key="<YOUR_BEARER_TOKEN_HERE>",
    ) as unkey:
        # Rest of application here...
```
<!-- End Resource Management [resource-management] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass your own logger class directly into your SDK.
```python
from unkey.py import Unkey
import logging

logging.basicConfig(level=logging.DEBUG)
s = Unkey(debug_logger=logging.getLogger("unkey.py"))
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=unkey-py&utm_campaign=python)
