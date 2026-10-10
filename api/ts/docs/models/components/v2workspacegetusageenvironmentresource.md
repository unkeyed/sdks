# V2WorkspaceGetUsageEnvironmentResource

An environment. `slug` is omitted when the environment was deleted.

## Example Usage

```typescript
import { V2WorkspaceGetUsageEnvironmentResource } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageEnvironmentResource = {
  id: "env_1234abcd",
  slug: "production",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *string*              | :heavy_check_mark:    | The environment id.   | env_1234abcd          |
| `slug`                | *string*              | :heavy_minus_sign:    | The environment slug. | production            |