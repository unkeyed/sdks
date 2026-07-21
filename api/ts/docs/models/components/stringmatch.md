# StringMatch

String matcher. Exactly one of `exact`, `prefix` or `regex` must be set.

## Example Usage

```typescript
import { StringMatch } from "@unkey/api/models/components";

let value: StringMatch = {
  prefix: "/api/",
  ignoreCase: true,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `exact`                                                                                                                 | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Matches when the input equals this value.                                                                               |
| `prefix`                                                                                                                | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Matches when the input starts with this value.                                                                          |
| `regex`                                                                                                                 | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Matches when the input satisfies this RE2 regular expression. Invalid<br/>patterns are rejected when the policy is created. |
| `ignoreCase`                                                                                                            | *boolean*                                                                                                               | :heavy_minus_sign:                                                                                                      | Compare case-insensitively. May accompany any match mode.                                                               |