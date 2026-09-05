# V2AppsCreateAppRequestBody1

## Example Usage

```typescript
import { V2AppsCreateAppRequestBody1 } from "@unkey/api/models/components";

let value: V2AppsCreateAppRequestBody1 = {
  project: "proj_1234abcd",
  name: "Payments API",
  slug: "proj_1234abcd",
  git: {
    repository: "unkeyed/unkey",
    defaultBranch: "main",
  },
  oci: {
    image: "ghcr.io/acme/api:v1.2.3",
  },
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 | Example                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                                   | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>            | proj_1234abcd                                                                                                                               |
| `name`                                                                                                                                      | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Human-readable name for this app.                                                                                                           | Payments API                                                                                                                                |
| `slug`                                                                                                                                      | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>            | proj_1234abcd                                                                                                                               |
| `git`                                                                                                                                       | [components.AppGitCreateInput](../../models/components/appgitcreateinput.md)                                                                | :heavy_check_mark:                                                                                                                          | Configure Git as the app source. Provide `repository` to connect it during<br/>creation, or use an empty object to connect a repository later.<br/> |                                                                                                                                             |
| `oci`                                                                                                                                       | [components.AppOCI](../../models/components/appoci.md)                                                                                      | :heavy_minus_sign:                                                                                                                          | An app's OCI image source.                                                                                                                  |                                                                                                                                             |