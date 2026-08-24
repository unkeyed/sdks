# Domains

## Overview

Custom domain operations

### Available Operations

* [create_domain](#create_domain) - Create domain
* [delete_domain](#delete_domain) - Delete domain
* [get_domain](#get_domain) - Get domain
* [list_domains](#list_domains) - List domains
* [verify_domain](#verify_domain) - Verify domain

## create_domain

Attach a custom domain to an environment and start verifying it.

The domain is created in the `pending` state and does not serve traffic until verification succeeds. Verification runs in the background and polls DNS, so it is eventually consistent.

The response returns `dnsRecords`: every record needed to finish setup, already resolved for whether this domain is an apex or a subdomain. Create every entry exactly as given. One record establishes routing and one proves ownership, and both are needed: whether ownership can be inferred from the routing record depends on how your provider publishes it, and a name another workspace has already verified can only be claimed through the ownership record. Neither is knowable before the records exist.

When your DNS provider supports Domain Connect, the response also carries a `domainConnect` object; opening its `url` applies the same records at the provider in one step. The object is absent when the shortcut is unavailable.

Domains are unique per workspace, so the same name cannot be attached to two environments. Attaching a domain that already exists in your workspace returns a 409 conflict.

How many domains you may attach is set by your plan. Attaching one beyond that allowance returns a 403; upgrade the plan or remove a domain you no longer need.

**Important**: verification stops after 24 hours without the required DNS records, and the domain moves to `failed`.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.create_domain` (to attach domains to any environment)
- `environment.<environment_id>.create_domain` (to attach domains to a specific environment)


### Example Usage: allowanceExceeded

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="allowanceExceeded" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: apex

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="apex" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="payments", app="payments-api", environment="production", domain="acme.com")

    # Handle response
    print(res)

```
### Example Usage: byId

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="byId" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="proj_1234abcd", app="app_1234abcd", environment="env_1234abcd", domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: bySlug

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="bySlug" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="payments", app="payments-api", environment="production", domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: domainConnect

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="domainConnect" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: domainExists

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="domainExists" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: environmentNotFound

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="environmentNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: internalError

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="internalError" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: invalidDomain

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="invalidDomain" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="invalidRootKey" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: keyDisabled

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="keyDisabled" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: publicSuffix

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="publicSuffix" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: rateLimited

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="rateLimited" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: subdomain

<!-- UsageSnippet language="python" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="subdomain" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.create_domain(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", domain="api.acme.com")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                   | proj_1234abcd                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `app`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                   | proj_1234abcd                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `environment`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                   | proj_1234abcd                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `domain`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Fully qualified domain name to attach to the environment, without a scheme, port, or path.<br/>Must be unique across your entire workspace: the same name cannot be attached to two environments.<br/><br/>The name must sit under a registrable domain: 'api.acme.co.uk' is accepted, the public suffix<br/>'co.uk' itself is not. Internationalized names may be sent in Unicode or Punycode form; either<br/>way the domain is stored and returned in its canonical form, lowercase ASCII with Unicode labels<br/>Punycode encoded, and the DNS records in the response use that form.<br/> | api.acme.com                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Response

**[models.V2DomainsCreateDomainResponseBody](../../models/v2domainscreatedomainresponsebody.md)**

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

## delete_domain

Delete a custom domain from your workspace.

Address the domain by its id or by its name. Names are unique per workspace, so
`api.acme.com` is enough.

Unkey stops serving the domain. Later requests fail with a certificate error. The DNS
records at your provider stay in place.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.delete_domain` (to delete domains in any environment)
- `environment.<environment_id>.delete_domain` (to delete domains in a specific environment)


### Example Usage: byId

<!-- UsageSnippet language="python" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="byId" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.delete_domain(domain="dom_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: byName

<!-- UsageSnippet language="python" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="byName" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.delete_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: domainNotFound

<!-- UsageSnippet language="python" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="domainNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.delete_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: internalError

<!-- UsageSnippet language="python" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="internalError" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.delete_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: invalidIdentifier

<!-- UsageSnippet language="python" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="invalidIdentifier" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.delete_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="python" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="invalidRootKey" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.delete_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: keyDisabled

<!-- UsageSnippet language="python" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="keyDisabled" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.delete_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: rateLimited

<!-- UsageSnippet language="python" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="rateLimited" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.delete_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: success

<!-- UsageSnippet language="python" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="success" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.delete_domain(domain="api.acme.com")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                | Example                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `domain`                                                                                                                                                                                                                                                                                                                                                                                                                   | *str*                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                         | Identifies a domain by its Unkey ID or by its name. Pass a 'dom_'-prefixed ID, or a fully<br/>qualified domain name such as 'api.acme.com' without a scheme, port, or path. You can give an<br/>internationalized name in Unicode or Punycode form. Both forms address the same domain.<br/><br/>Domain names are unique per workspace, so the name alone addresses the domain. You do not<br/>need to supply a project, app, or environment.<br/> | api.acme.com                                                                                                                                                                                                                                                                                                                                                                                                               |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                  | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Response

**[models.V2DomainsDeleteDomainResponseBody](../../models/v2domainsdeletedomainresponsebody.md)**

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

## get_domain

Retrieve a custom domain and its verification status.

Address the domain by its id or by its name. Names are unique per workspace, so
`api.acme.com` is sufficient. You do not need to supply a project, app, or environment.

Use this endpoint to poll after `domains.createDomain`. Verification runs in the background
and checks DNS approximately each minute.

`status: verified` means the domain is verified. Unkey has configured routing and requested a
certificate. Each entry in `dnsRecords` has a `verified` flag. The flag shows which records
Unkey has read back, so you can see which records are still missing. Some providers hide a
record from DNS lookups, for example a proxied or flattened routing record. Such a record stays
`false` while it serves traffic. `verificationError` gives the reason for the last failed
attempt.

`dnsRecords` contains the same values that `domains.createDomain` returned. Use it to recover
the values without creating the domain again.

**Important**: verification stops 24 hours after the domain was created, and the status becomes
`failed`. The window starts at `createdAt`, not at the last attempt.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_domain` (to read domains in any environment)
- `environment.<environment_id>.read_domain` (to read domains in a specific environment)


### Example Usage: byId

<!-- UsageSnippet language="python" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="byId" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.get_domain(domain="dom_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: byName

<!-- UsageSnippet language="python" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="byName" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.get_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: domainNotFound

<!-- UsageSnippet language="python" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="domainNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.get_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: failed

<!-- UsageSnippet language="python" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="failed" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.get_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: internalError

<!-- UsageSnippet language="python" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="internalError" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.get_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: invalidIdentifier

<!-- UsageSnippet language="python" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="invalidIdentifier" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.get_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="python" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="invalidRootKey" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.get_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: keyDisabled

<!-- UsageSnippet language="python" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="keyDisabled" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.get_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: pending

<!-- UsageSnippet language="python" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="pending" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.get_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: rateLimited

<!-- UsageSnippet language="python" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="rateLimited" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.get_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: verified

<!-- UsageSnippet language="python" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="verified" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.get_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: verifiedThroughOwnership

<!-- UsageSnippet language="python" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="verifiedThroughOwnership" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.get_domain(domain="api.acme.com")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                | Example                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `domain`                                                                                                                                                                                                                                                                                                                                                                                                                   | *str*                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                         | Identifies a domain by its Unkey ID or by its name. Pass a 'dom_'-prefixed ID, or a fully<br/>qualified domain name such as 'api.acme.com' without a scheme, port, or path. You can give an<br/>internationalized name in Unicode or Punycode form. Both forms address the same domain.<br/><br/>Domain names are unique per workspace, so the name alone addresses the domain. You do not<br/>need to supply a project, app, or environment.<br/> | api.acme.com                                                                                                                                                                                                                                                                                                                                                                                                               |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                  | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Response

**[models.V2DomainsGetDomainResponseBody](../../models/v2domainsgetdomainresponsebody.md)**

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

## list_domains

List the custom domains attached to an environment and their verification status.

Results are paginated and sorted by their id. When `hasMore` is true, send the
returned `cursor` to get the next page. An environment with no domains returns an
empty array, not a 404.

`status: verified` means the domain is verified. Unkey has configured routing and requested a
certificate. Each domain includes its full `dnsRecords`. Each record has a `verified` flag.
The flag shows which records Unkey has read back, so you can see which records are still
missing without a second call. Some providers hide a record from DNS lookups, for example a
proxied or flattened routing record. Such a record stays `false` while it serves traffic.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_domain` (to read domains in any environment)
- `environment.<environment_id>.read_domain` (to read domains in a specific environment)


### Example Usage: byIds

<!-- UsageSnippet language="python" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="byIds" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.list_domains(project="proj_1234abcd", app="app_1234abcd", environment="env_1234abcd", limit=100, cursor="dom_1234abcd", search="acme.com")

    # Handle response
    print(res)

```
### Example Usage: bySlugs

<!-- UsageSnippet language="python" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="bySlugs" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.list_domains(project="payments", app="payments-api", environment="production", limit=100, cursor="dom_1234abcd", search="acme.com")

    # Handle response
    print(res)

```
### Example Usage: domainList

<!-- UsageSnippet language="python" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="domainList" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.list_domains(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", limit=100, cursor="dom_1234abcd", search="acme.com")

    # Handle response
    print(res)

```
### Example Usage: empty

<!-- UsageSnippet language="python" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="empty" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.list_domains(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", limit=100, cursor="dom_1234abcd", search="acme.com")

    # Handle response
    print(res)

```
### Example Usage: environmentNotFound

<!-- UsageSnippet language="python" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="environmentNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.list_domains(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", limit=100, cursor="dom_1234abcd", search="acme.com")

    # Handle response
    print(res)

```
### Example Usage: internalError

<!-- UsageSnippet language="python" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="internalError" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.list_domains(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", limit=100, cursor="dom_1234abcd", search="acme.com")

    # Handle response
    print(res)

```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="python" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="invalidRootKey" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.list_domains(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", limit=100, cursor="dom_1234abcd", search="acme.com")

    # Handle response
    print(res)

```
### Example Usage: keyDisabled

<!-- UsageSnippet language="python" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="keyDisabled" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.list_domains(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", limit=100, cursor="dom_1234abcd", search="acme.com")

    # Handle response
    print(res)

```
### Example Usage: paginated

<!-- UsageSnippet language="python" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="paginated" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.list_domains(project="payments", app="payments-api", environment="production", limit=20, cursor="dom_1234abcd", search="acme.com")

    # Handle response
    print(res)

```
### Example Usage: rateLimited

<!-- UsageSnippet language="python" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="rateLimited" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.list_domains(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", limit=100, cursor="dom_1234abcd", search="acme.com")

    # Handle response
    print(res)

```
### Example Usage: search

<!-- UsageSnippet language="python" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="search" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.list_domains(project="payments", app="payments-api", environment="production", limit=100, cursor="dom_1234abcd", search="acme.com")

    # Handle response
    print(res)

```
### Example Usage: searchTooLong

<!-- UsageSnippet language="python" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="searchTooLong" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.list_domains(project="proj_1234abcd", app="proj_1234abcd", environment="proj_1234abcd", limit=100, cursor="dom_1234abcd", search="acme.com")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                          | *str*                                                                                                                              | :heavy_check_mark:                                                                                                                 | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>   | proj_1234abcd                                                                                                                      |
| `app`                                                                                                                              | *str*                                                                                                                              | :heavy_check_mark:                                                                                                                 | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>   | proj_1234abcd                                                                                                                      |
| `environment`                                                                                                                      | *str*                                                                                                                              | :heavy_check_mark:                                                                                                                 | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>   | proj_1234abcd                                                                                                                      |
| `limit`                                                                                                                            | *Optional[int]*                                                                                                                    | :heavy_minus_sign:                                                                                                                 | The maximum number of domains one response contains.<br/>A small limit makes the response smaller, but makes more requests necessary.<br/> |                                                                                                                                    |
| `cursor`                                                                                                                           | *Optional[str]*                                                                                                                    | :heavy_minus_sign:                                                                                                                 | The pagination cursor from the response that came before.<br/>Send it to get the next page when that response has `hasMore: true`.<br/> | dom_1234abcd                                                                                                                       |
| `search`                                                                                                                           | *Optional[str]*                                                                                                                    | :heavy_minus_sign:                                                                                                                 | Free-form text to filter domains. Returns domains whose ID or name contains the search string. Matching is case-insensitive.       | acme.com                                                                                                                           |
| `retries`                                                                                                                          | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                                 | Configuration to override the default retry behavior of the client.                                                                |                                                                                                                                    |

### Response

**[models.V2DomainsListDomainsResponseBody](../../models/v2domainslistdomainsresponsebody.md)**

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

## verify_domain

Restart verification for a custom domain.

Address the domain by its ID or by its name. Names are unique per workspace, so
`api.acme.com` is enough.

Call this after you correct the DNS records of a domain that shows `failed`, or to give a
`pending` domain a new 24-hour verification period. The domain goes back to `pending` and
the 24-hour period starts again.

The endpoint returns when Unkey accepts the retry. Poll `domains.getDomain` for the result.

A domain that is already `verified` returns a 412.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.verify_domain` (to verify domains in any environment)
- `environment.<environment_id>.verify_domain` (to verify domains in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="python" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="accepted" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.verify_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: alreadyVerified

<!-- UsageSnippet language="python" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="alreadyVerified" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.verify_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: byId

<!-- UsageSnippet language="python" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="byId" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.verify_domain(domain="dom_1234abcd")

    # Handle response
    print(res)

```
### Example Usage: byName

<!-- UsageSnippet language="python" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="byName" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.verify_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: domainNotFound

<!-- UsageSnippet language="python" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="domainNotFound" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.verify_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: internalError

<!-- UsageSnippet language="python" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="internalError" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.verify_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: invalidIdentifier

<!-- UsageSnippet language="python" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="invalidIdentifier" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.verify_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="python" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="invalidRootKey" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.verify_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: keyDisabled

<!-- UsageSnippet language="python" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="keyDisabled" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.verify_domain(domain="api.acme.com")

    # Handle response
    print(res)

```
### Example Usage: rateLimited

<!-- UsageSnippet language="python" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="rateLimited" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.domains.verify_domain(domain="api.acme.com")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `domain`                                                                                                                                                                                                                                                                                                          | *str*                                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                | Identifies a domain by its name or by its ID. Send the fully qualified domain name, such as<br/>'api.acme.com', without a scheme, port, or path, or send the domain ID that<br/>domains.createDomain returns. You can send an internationalized name in Unicode or in<br/>Punycode form. Both forms address the same domain.<br/> | api.acme.com                                                                                                                                                                                                                                                                                                      |
| `retries`                                                                                                                                                                                                                                                                                                         | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                   |

### Response

**[models.V2DomainsVerifyDomainResponseBody](../../models/v2domainsverifydomainresponsebody.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.BadRequestErrorResponse         | 400                                    | application/json                       |
| errors.UnauthorizedErrorResponse       | 401                                    | application/json                       |
| errors.ForbiddenErrorResponse          | 403                                    | application/json                       |
| errors.NotFoundErrorResponse           | 404                                    | application/json                       |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.TooManyRequestsErrorResponse    | 429                                    | application/json                       |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |