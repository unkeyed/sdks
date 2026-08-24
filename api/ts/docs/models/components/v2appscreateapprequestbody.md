# V2AppsCreateAppRequestBody

## Example Usage

```typescript
import { V2AppsCreateAppRequestBody } from "@unkey/api/models/components";

let value: V2AppsCreateAppRequestBody = {
  project: "proj_1234abcd",
  name: "Payments API",
  slug: "proj_1234abcd",
  git: {
    repository: "unkeyed/unkey",
    defaultBranch: "main",
  },
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 | Example                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                                   | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>            | proj_1234abcd                                                                                                                               |
| `name`                                                                                                                                      | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Human-readable name for this app.<br/>Use a descriptive name like 'Payments API' to identify its purpose.<br/>                              | Payments API                                                                                                                                |
| `slug`                                                                                                                                      | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>            | proj_1234abcd                                                                                                                               |
| `git`                                                                                                                                       | [components.AppGitCreateInput](../../models/components/appgitcreateinput.md)                                                                | :heavy_minus_sign:                                                                                                                          | Connect a GitHub repository to the app on creation. Omit to create the app<br/>without a repository and connect one later with apps.updateApp.<br/> |                                                                                                                                             |