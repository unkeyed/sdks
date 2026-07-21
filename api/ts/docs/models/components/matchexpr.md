# MatchExpr

A single request match expression. Exactly one of `path`, `method`,
`header` or `queryParam` must be set.

## Example Usage

```typescript
import { MatchExpr } from "@unkey/api/models/components";

let value: MatchExpr = {
  path: {
    path: {
      prefix: "/api/",
    },
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `path`                                                                                                      | [components.PathMatch](../../models/components/pathmatch.md)                                                | :heavy_minus_sign:                                                                                          | Matches on the request path.                                                                                |
| `method`                                                                                                    | [components.MethodMatch](../../models/components/methodmatch.md)                                            | :heavy_minus_sign:                                                                                          | Matches when the request method is one of the listed methods.                                               |
| `header`                                                                                                    | [components.FieldMatch](../../models/components/fieldmatch.md)                                              | :heavy_minus_sign:                                                                                          | Matches a named request field (header or query parameter). Exactly one of<br/>`present` or `value` must be set. |
| `queryParam`                                                                                                | [components.FieldMatch](../../models/components/fieldmatch.md)                                              | :heavy_minus_sign:                                                                                          | Matches a named request field (header or query parameter). Exactly one of<br/>`present` or `value` must be set. |