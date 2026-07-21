# V2ProjectsListProjectsRequestBody

## Example Usage

```typescript
import { V2ProjectsListProjectsRequestBody } from "@unkey/api/models/components";

let value: V2ProjectsListProjectsRequestBody = {
  cursor: "proj_1234abcd",
  search: "billing-service",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                               | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Maximum number of projects to return per request.<br/>Balance between response size and number of pagination calls needed.<br/>       |                                                                                                                                       |
| `cursor`                                                                                                                              | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Pagination cursor from a previous response to fetch the next page.<br/>Use when `hasMore: true` in the previous response.<br/>        | proj_1234abcd                                                                                                                         |
| `search`                                                                                                                              | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Free-form text to filter projects. Returns projects whose ID, name, or slug contains the search string. Matching is case-insensitive. | billing-service                                                                                                                       |