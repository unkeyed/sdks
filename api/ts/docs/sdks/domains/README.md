# Domains

## Overview

Custom domain operations

### Available Operations

* [createDomain](#createdomain) - Create domain
* [deleteDomain](#deletedomain) - Delete domain
* [getDomain](#getdomain) - Get domain
* [listDomains](#listdomains) - List domains
* [verifyDomain](#verifydomain) - Verify domain

## createDomain

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

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="allowanceExceeded" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: apex

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="apex" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "payments",
    app: "payments-api",
    environment: "production",
    domain: "acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    domain: "acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: byId

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="byId" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "proj_1234abcd",
    app: "app_1234abcd",
    environment: "env_1234abcd",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "proj_1234abcd",
    app: "app_1234abcd",
    environment: "env_1234abcd",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: bySlug

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="bySlug" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "payments",
    app: "payments-api",
    environment: "production",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: domainConnect

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="domainConnect" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: domainExists

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="domainExists" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: environmentNotFound

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="environmentNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: internalError

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="internalError" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: invalidDomain

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="invalidDomain" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="invalidRootKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="keyDisabled" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: publicSuffix

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="publicSuffix" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimited

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="rateLimited" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```
### Example Usage: subdomain

<!-- UsageSnippet language="typescript" operationID="domains.createDomain" method="post" path="/v2/domains.createDomain" example="subdomain" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.createDomain({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsCreateDomain } from "@unkey/api/funcs/domainsCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsCreateDomain(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsCreateDomain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DomainsCreateDomainRequestBody](../../models/components/v2domainscreatedomainrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DomainsCreateDomainResponseBody](../../models/components/v2domainscreatedomainresponsebody.md)\>**

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

## deleteDomain

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

<!-- UsageSnippet language="typescript" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="byId" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.deleteDomain({
    domain: "dom_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsDeleteDomain } from "@unkey/api/funcs/domainsDeleteDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsDeleteDomain(unkey, {
    domain: "dom_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsDeleteDomain failed:", res.error);
  }
}

run();
```
### Example Usage: byName

<!-- UsageSnippet language="typescript" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="byName" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.deleteDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsDeleteDomain } from "@unkey/api/funcs/domainsDeleteDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsDeleteDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsDeleteDomain failed:", res.error);
  }
}

run();
```
### Example Usage: domainNotFound

<!-- UsageSnippet language="typescript" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="domainNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.deleteDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsDeleteDomain } from "@unkey/api/funcs/domainsDeleteDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsDeleteDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsDeleteDomain failed:", res.error);
  }
}

run();
```
### Example Usage: internalError

<!-- UsageSnippet language="typescript" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="internalError" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.deleteDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsDeleteDomain } from "@unkey/api/funcs/domainsDeleteDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsDeleteDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsDeleteDomain failed:", res.error);
  }
}

run();
```
### Example Usage: invalidIdentifier

<!-- UsageSnippet language="typescript" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="invalidIdentifier" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.deleteDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsDeleteDomain } from "@unkey/api/funcs/domainsDeleteDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsDeleteDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsDeleteDomain failed:", res.error);
  }
}

run();
```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="typescript" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="invalidRootKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.deleteDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsDeleteDomain } from "@unkey/api/funcs/domainsDeleteDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsDeleteDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsDeleteDomain failed:", res.error);
  }
}

run();
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="typescript" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="keyDisabled" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.deleteDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsDeleteDomain } from "@unkey/api/funcs/domainsDeleteDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsDeleteDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsDeleteDomain failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimited

<!-- UsageSnippet language="typescript" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="rateLimited" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.deleteDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsDeleteDomain } from "@unkey/api/funcs/domainsDeleteDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsDeleteDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsDeleteDomain failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="domains.deleteDomain" method="post" path="/v2/domains.deleteDomain" example="success" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.deleteDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsDeleteDomain } from "@unkey/api/funcs/domainsDeleteDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsDeleteDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsDeleteDomain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DomainsDeleteDomainRequestBody](../../models/components/v2domainsdeletedomainrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DomainsDeleteDomainResponseBody](../../models/components/v2domainsdeletedomainresponsebody.md)\>**

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

## getDomain

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

<!-- UsageSnippet language="typescript" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="byId" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.getDomain({
    domain: "dom_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsGetDomain } from "@unkey/api/funcs/domainsGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsGetDomain(unkey, {
    domain: "dom_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsGetDomain failed:", res.error);
  }
}

run();
```
### Example Usage: byName

<!-- UsageSnippet language="typescript" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="byName" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.getDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsGetDomain } from "@unkey/api/funcs/domainsGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsGetDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsGetDomain failed:", res.error);
  }
}

run();
```
### Example Usage: domainNotFound

<!-- UsageSnippet language="typescript" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="domainNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.getDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsGetDomain } from "@unkey/api/funcs/domainsGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsGetDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsGetDomain failed:", res.error);
  }
}

run();
```
### Example Usage: failed

<!-- UsageSnippet language="typescript" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="failed" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.getDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsGetDomain } from "@unkey/api/funcs/domainsGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsGetDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsGetDomain failed:", res.error);
  }
}

run();
```
### Example Usage: internalError

<!-- UsageSnippet language="typescript" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="internalError" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.getDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsGetDomain } from "@unkey/api/funcs/domainsGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsGetDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsGetDomain failed:", res.error);
  }
}

run();
```
### Example Usage: invalidIdentifier

<!-- UsageSnippet language="typescript" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="invalidIdentifier" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.getDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsGetDomain } from "@unkey/api/funcs/domainsGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsGetDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsGetDomain failed:", res.error);
  }
}

run();
```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="typescript" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="invalidRootKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.getDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsGetDomain } from "@unkey/api/funcs/domainsGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsGetDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsGetDomain failed:", res.error);
  }
}

run();
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="typescript" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="keyDisabled" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.getDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsGetDomain } from "@unkey/api/funcs/domainsGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsGetDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsGetDomain failed:", res.error);
  }
}

run();
```
### Example Usage: pending

<!-- UsageSnippet language="typescript" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="pending" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.getDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsGetDomain } from "@unkey/api/funcs/domainsGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsGetDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsGetDomain failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimited

<!-- UsageSnippet language="typescript" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="rateLimited" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.getDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsGetDomain } from "@unkey/api/funcs/domainsGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsGetDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsGetDomain failed:", res.error);
  }
}

run();
```
### Example Usage: verified

<!-- UsageSnippet language="typescript" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="verified" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.getDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsGetDomain } from "@unkey/api/funcs/domainsGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsGetDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsGetDomain failed:", res.error);
  }
}

run();
```
### Example Usage: verifiedThroughOwnership

<!-- UsageSnippet language="typescript" operationID="domains.getDomain" method="post" path="/v2/domains.getDomain" example="verifiedThroughOwnership" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.getDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsGetDomain } from "@unkey/api/funcs/domainsGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsGetDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsGetDomain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DomainsGetDomainRequestBody](../../models/components/v2domainsgetdomainrequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DomainsGetDomainResponseBody](../../models/components/v2domainsgetdomainresponsebody.md)\>**

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

## listDomains

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

<!-- UsageSnippet language="typescript" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="byIds" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.listDomains({
    project: "proj_1234abcd",
    app: "app_1234abcd",
    environment: "env_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsListDomains } from "@unkey/api/funcs/domainsListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsListDomains(unkey, {
    project: "proj_1234abcd",
    app: "app_1234abcd",
    environment: "env_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsListDomains failed:", res.error);
  }
}

run();
```
### Example Usage: bySlugs

<!-- UsageSnippet language="typescript" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="bySlugs" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.listDomains({
    project: "payments",
    app: "payments-api",
    environment: "production",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsListDomains } from "@unkey/api/funcs/domainsListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsListDomains(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsListDomains failed:", res.error);
  }
}

run();
```
### Example Usage: domainList

<!-- UsageSnippet language="typescript" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="domainList" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.listDomains({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsListDomains } from "@unkey/api/funcs/domainsListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsListDomains(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsListDomains failed:", res.error);
  }
}

run();
```
### Example Usage: empty

<!-- UsageSnippet language="typescript" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="empty" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.listDomains({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsListDomains } from "@unkey/api/funcs/domainsListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsListDomains(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsListDomains failed:", res.error);
  }
}

run();
```
### Example Usage: environmentNotFound

<!-- UsageSnippet language="typescript" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="environmentNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.listDomains({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsListDomains } from "@unkey/api/funcs/domainsListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsListDomains(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsListDomains failed:", res.error);
  }
}

run();
```
### Example Usage: internalError

<!-- UsageSnippet language="typescript" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="internalError" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.listDomains({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsListDomains } from "@unkey/api/funcs/domainsListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsListDomains(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsListDomains failed:", res.error);
  }
}

run();
```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="typescript" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="invalidRootKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.listDomains({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsListDomains } from "@unkey/api/funcs/domainsListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsListDomains(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsListDomains failed:", res.error);
  }
}

run();
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="typescript" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="keyDisabled" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.listDomains({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsListDomains } from "@unkey/api/funcs/domainsListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsListDomains(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsListDomains failed:", res.error);
  }
}

run();
```
### Example Usage: paginated

<!-- UsageSnippet language="typescript" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="paginated" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.listDomains({
    project: "payments",
    app: "payments-api",
    environment: "production",
    limit: 20,
    cursor: "dom_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsListDomains } from "@unkey/api/funcs/domainsListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsListDomains(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    limit: 20,
    cursor: "dom_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsListDomains failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimited

<!-- UsageSnippet language="typescript" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="rateLimited" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.listDomains({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsListDomains } from "@unkey/api/funcs/domainsListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsListDomains(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsListDomains failed:", res.error);
  }
}

run();
```
### Example Usage: search

<!-- UsageSnippet language="typescript" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="search" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.listDomains({
    project: "payments",
    app: "payments-api",
    environment: "production",
    search: "acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsListDomains } from "@unkey/api/funcs/domainsListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsListDomains(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    search: "acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsListDomains failed:", res.error);
  }
}

run();
```
### Example Usage: searchTooLong

<!-- UsageSnippet language="typescript" operationID="domains.listDomains" method="post" path="/v2/domains.listDomains" example="searchTooLong" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.listDomains({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsListDomains } from "@unkey/api/funcs/domainsListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsListDomains(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    cursor: "dom_1234abcd",
    search: "acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsListDomains failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DomainsListDomainsRequestBody](../../models/components/v2domainslistdomainsrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DomainsListDomainsResponseBody](../../models/components/v2domainslistdomainsresponsebody.md)\>**

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

## verifyDomain

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

<!-- UsageSnippet language="typescript" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="accepted" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.verifyDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsVerifyDomain } from "@unkey/api/funcs/domainsVerifyDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsVerifyDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsVerifyDomain failed:", res.error);
  }
}

run();
```
### Example Usage: alreadyVerified

<!-- UsageSnippet language="typescript" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="alreadyVerified" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.verifyDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsVerifyDomain } from "@unkey/api/funcs/domainsVerifyDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsVerifyDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsVerifyDomain failed:", res.error);
  }
}

run();
```
### Example Usage: byId

<!-- UsageSnippet language="typescript" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="byId" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.verifyDomain({
    domain: "dom_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsVerifyDomain } from "@unkey/api/funcs/domainsVerifyDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsVerifyDomain(unkey, {
    domain: "dom_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsVerifyDomain failed:", res.error);
  }
}

run();
```
### Example Usage: byName

<!-- UsageSnippet language="typescript" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="byName" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.verifyDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsVerifyDomain } from "@unkey/api/funcs/domainsVerifyDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsVerifyDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsVerifyDomain failed:", res.error);
  }
}

run();
```
### Example Usage: domainNotFound

<!-- UsageSnippet language="typescript" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="domainNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.verifyDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsVerifyDomain } from "@unkey/api/funcs/domainsVerifyDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsVerifyDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsVerifyDomain failed:", res.error);
  }
}

run();
```
### Example Usage: internalError

<!-- UsageSnippet language="typescript" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="internalError" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.verifyDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsVerifyDomain } from "@unkey/api/funcs/domainsVerifyDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsVerifyDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsVerifyDomain failed:", res.error);
  }
}

run();
```
### Example Usage: invalidIdentifier

<!-- UsageSnippet language="typescript" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="invalidIdentifier" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.verifyDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsVerifyDomain } from "@unkey/api/funcs/domainsVerifyDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsVerifyDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsVerifyDomain failed:", res.error);
  }
}

run();
```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="typescript" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="invalidRootKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.verifyDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsVerifyDomain } from "@unkey/api/funcs/domainsVerifyDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsVerifyDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsVerifyDomain failed:", res.error);
  }
}

run();
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="typescript" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="keyDisabled" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.verifyDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsVerifyDomain } from "@unkey/api/funcs/domainsVerifyDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsVerifyDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsVerifyDomain failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimited

<!-- UsageSnippet language="typescript" operationID="domains.verifyDomain" method="post" path="/v2/domains.verifyDomain" example="rateLimited" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.domains.verifyDomain({
    domain: "api.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { domainsVerifyDomain } from "@unkey/api/funcs/domainsVerifyDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await domainsVerifyDomain(unkey, {
    domain: "api.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainsVerifyDomain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DomainsVerifyDomainRequestBody](../../models/components/v2domainsverifydomainrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DomainsVerifyDomainResponseBody](../../models/components/v2domainsverifydomainresponsebody.md)\>**

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