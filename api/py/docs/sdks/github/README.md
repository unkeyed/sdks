# Github

## Overview

GitHub App installation operations

### Available Operations

* [install_app](#install_app) - Install GitHub App

## install_app

Start installing the Unkey GitHub App for your workspace. Returns a GitHub
App install URL: open it in a browser to install the app and grant
repository access. After installation GitHub returns to Unkey, which binds
the installation to your workspace and lands you in the workspace settings.

Installation is workspace-wide and takes no parameters. Once installed, link
repositories to individual apps with the `git` field on `apps.createApp` and
`apps.updateApp`.

**Required Permissions**

Your root key must have the following permission:
- `workspace.*.install_github`


### Example Usage

<!-- UsageSnippet language="python" operationID="github.installApp" method="post" path="/v2/github.installApp" example="success" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.github.install_app()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.V2GithubInstallAppResponseBody](../../models/v2githubinstallappresponsebody.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |