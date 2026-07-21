# KeyLocation

Where to look for the API key on incoming requests. Exactly one of
`bearer`, `header` or `queryParam` must be set.

## Example Usage

```typescript
import { KeyLocation } from "@unkey/api/models/components";

let value: KeyLocation = {
  bearer: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `bearer`                                                                             | [components.BearerTokenLocation](../../models/components/bearertokenlocation.md)     | :heavy_minus_sign:                                                                   | Extract the key from the `Authorization Bearer` header.                              |
| `header`                                                                             | [components.HeaderKeyLocation](../../models/components/headerkeylocation.md)         | :heavy_minus_sign:                                                                   | Extract the key from a custom header.                                                |
| `queryParam`                                                                         | [components.QueryParamKeyLocation](../../models/components/queryparamkeylocation.md) | :heavy_minus_sign:                                                                   | Extract the key from a query parameter.                                              |