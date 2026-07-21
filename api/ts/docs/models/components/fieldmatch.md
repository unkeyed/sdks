# FieldMatch

Matches a named request field (header or query parameter). Exactly one of
`present` or `value` must be set.

## Example Usage

```typescript
import { FieldMatch } from "@unkey/api/models/components";

let value: FieldMatch = {
  name: "<value>",
  value: {
    prefix: "/api/",
    ignoreCase: true,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `present`                                                                | *true*                                                                   | :heavy_minus_sign:                                                       | Matches when the field is present, regardless of value.                  |                                                                          |
| `value`                                                                  | [components.StringMatch](../../models/components/stringmatch.md)         | :heavy_minus_sign:                                                       | String matcher. Exactly one of `exact`, `prefix` or `regex` must be set. | {<br/>"prefix": "/api/",<br/>"ignoreCase": true<br/>}                    |