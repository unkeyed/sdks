# PathMatch

Matches on the request path.

## Example Usage

```typescript
import { PathMatch } from "@unkey/api/models/components";

let value: PathMatch = {
  path: {
    prefix: "/api/",
    ignoreCase: true,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `path`                                                                   | [components.StringMatch](../../models/components/stringmatch.md)         | :heavy_check_mark:                                                       | String matcher. Exactly one of `exact`, `prefix` or `regex` must be set. | {<br/>"prefix": "/api/",<br/>"ignoreCase": true<br/>}                    |