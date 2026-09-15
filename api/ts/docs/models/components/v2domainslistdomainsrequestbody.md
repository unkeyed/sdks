# V2DomainsListDomainsRequestBody

Filter domains within a workspace. All filters are optional and combine with AND. Each resource
filter matches its ID or slug directly, even when its parent filters are omitted. A missing
resource or a resource that does not match the other filters produces an empty list.


## Example Usage

```typescript
import { V2DomainsListDomainsRequestBody } from "@unkey/api/models/components";

let value: V2DomainsListDomainsRequestBody = {
  project: "proj_1234abcd",
  app: "proj_1234abcd",
  environment: "proj_1234abcd",
  cursor: "dom_1234abcd",
  search: "acme.com",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                          | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Match domains whose project ID or slug equals this value. This filter does not require<br/>an app or environment filter.<br/>      | proj_1234abcd                                                                                                                      |
| `app`                                                                                                                              | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Match domains whose app ID or slug equals this value. This filter does not require a<br/>project or environment filter.<br/>       | proj_1234abcd                                                                                                                      |
| `environment`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Match domains whose environment ID or slug equals this value. This filter does not require<br/>a project or app filter.<br/>       | proj_1234abcd                                                                                                                      |
| `limit`                                                                                                                            | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The maximum number of domains one response contains.<br/>A small limit makes the response smaller, but makes more requests necessary.<br/> |                                                                                                                                    |
| `cursor`                                                                                                                           | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The pagination cursor from the response that came before.<br/>Send it to get the next page when that response has `hasMore: true`.<br/> | dom_1234abcd                                                                                                                       |
| `search`                                                                                                                           | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Free-form text to filter domains. Returns domains whose ID or name contains the search string. Matching is case-insensitive.       | acme.com                                                                                                                           |