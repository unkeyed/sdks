# Analytics

## Overview

Analytics query operations

### Available Operations

* [getRatelimits](#getratelimits) - Query rate limit data
* [getVerifications](#getverifications) - Query key verification data

## getRatelimits

Queries may reference only the five public rate limit analytics aliases: `ratelimits_v1`, `ratelimits_per_minute_v1`, `ratelimits_per_hour_v1`, `ratelimits_per_day_v1`, or `ratelimits_per_month_v1`. CTEs, subqueries, UNION, and EXCEPT are supported.
Queries are always restricted to the authenticated workspace. Wildcard analytics permission can read every namespace in that workspace; namespace-scoped permissions automatically restrict results to the permitted namespace IDs.
Workspace retention and query limits apply.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="analytics.getRatelimits" method="post" path="/v2/analytics.getRatelimits" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.analytics.getRatelimits({
    query: "SELECT namespace_id, COUNT(*) AS total FROM ratelimits_v1 WHERE namespace_id = 'rlns_123' GROUP BY namespace_id",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { analyticsGetRatelimits } from "@unkey/api/funcs/analyticsGetRatelimits.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await analyticsGetRatelimits(unkey, {
    query: "SELECT namespace_id, COUNT(*) AS total FROM ratelimits_v1 WHERE namespace_id = 'rlns_123' GROUP BY namespace_id",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsGetRatelimits failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2AnalyticsGetRatelimitsRequestBody](../../models/components/v2analyticsgetratelimitsrequestbody.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2AnalyticsGetRatelimitsResponseBody](../../models/components/v2analyticsgetratelimitsresponsebody.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestErrorResponse          | 400                                     | application/json                        |
| errors.UnauthorizedErrorResponse        | 401                                     | application/json                        |
| errors.ForbiddenErrorResponse           | 403                                     | application/json                        |
| errors.PreconditionFailedErrorResponse  | 412                                     | application/json                        |
| errors.UnprocessableEntityErrorResponse | 422                                     | application/json                        |
| errors.TooManyRequestsErrorResponse     | 429                                     | application/problem+json                |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.ServiceUnavailableErrorResponse  | 503                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## getVerifications

Execute custom SQL queries against your key verification analytics. CTEs, subqueries, UNION, and EXCEPT are supported.
Queries must use one of the five public aliases: `key_verifications_v1`, `key_verifications_per_minute_v1`, `key_verifications_per_hour_v1`, `key_verifications_per_day_v1`, or `key_verifications_per_month_v1`. Physical `default.*` table names are unsupported.
Queries are always restricted to the authenticated workspace. Wildcard analytics permission can read every API in that workspace; API-scoped permissions automatically restrict results to the permitted APIs.
For complete documentation including available tables, columns, data types, query examples, see the schema reference in the API documentation.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="analytics.getVerifications" method="post" path="/v2/analytics.getVerifications" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.analytics.getVerifications({
    query: "SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { analyticsGetVerifications } from "@unkey/api/funcs/analyticsGetVerifications.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await analyticsGetVerifications(unkey, {
    query: "SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsGetVerifications failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2AnalyticsGetVerificationsRequestBody](../../models/components/v2analyticsgetverificationsrequestbody.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2AnalyticsGetVerificationsResponseBody](../../models/components/v2analyticsgetverificationsresponsebody.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestErrorResponse          | 400                                     | application/json                        |
| errors.UnauthorizedErrorResponse        | 401                                     | application/json                        |
| errors.ForbiddenErrorResponse           | 403                                     | application/json                        |
| errors.UnprocessableEntityErrorResponse | 422                                     | application/json                        |
| errors.TooManyRequestsErrorResponse     | 429                                     | application/problem+json                |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.ServiceUnavailableErrorResponse  | 503                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |