# PrincipalFieldKey

Rate limit by a field extracted from the authenticated principal.

## Example Usage

```typescript
import { PrincipalFieldKey } from "@unkey/api/models/components";

let value: PrincipalFieldKey = {
  path: "/var/spool",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `path`             | *string*           | :heavy_check_mark: | N/A                |