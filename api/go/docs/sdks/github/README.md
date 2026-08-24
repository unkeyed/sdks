# Github

## Overview

GitHub App installation operations

### Available Operations

* [InstallApp](#installapp) - Install GitHub App

## InstallApp

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

<!-- UsageSnippet language="go" operationID="github.installApp" method="post" path="/v2/github.installApp" example="success" -->
```go
package main

import(
	"context"
	"os"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"log"
)

func main() {
    ctx := context.Background()

    s := unkey.New(
        unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
    )

    res, err := s.Github.InstallApp(ctx)
    if err != nil {
        log.Fatal(err)
    }
    if res.V2GithubInstallAppResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ctx`                                                    | [context.Context](https://pkg.go.dev/context#Context)    | :heavy_check_mark:                                       | The context to use for the request.                      |
| `opts`                                                   | [][operations.Option](../../models/operations/option.md) | :heavy_minus_sign:                                       | The options for this request.                            |

### Response

**[*operations.GithubInstallAppResponse](../../models/operations/githubinstallappresponse.md), error**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| apierrors.BadRequestErrorResponse      | 400                                    | application/json                       |
| apierrors.UnauthorizedErrorResponse    | 401                                    | application/json                       |
| apierrors.ForbiddenErrorResponse       | 403                                    | application/json                       |
| apierrors.TooManyRequestsErrorResponse | 429                                    | application/problem+json               |
| apierrors.InternalServerErrorResponse  | 500                                    | application/json                       |
| apierrors.APIError                     | 4XX, 5XX                               | \*/\*                                  |