# V2AppsListAppsRequestBody

## Example Usage

```typescript
import { V2AppsListAppsRequestBody } from "@unkey/api/models/components";

let value: V2AppsListAppsRequestBody = {
  project: "proj_1234abcd",
  cursor: "app_1234abcd",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `limit`                                                                                                                  | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Maximum number of apps to return per request.<br/>Balance between response size and number of pagination calls needed.<br/> |                                                                                                                          |
| `cursor`                                                                                                                 | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Pagination cursor from a previous response to fetch the next page.<br/>Use when `hasMore: true` in the previous response.<br/> | app_1234abcd                                                                                                             |