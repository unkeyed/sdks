# V2WorkspaceGetUsageResource

A project or app. `name` is omitted when the resource was deleted.

## Example Usage

```typescript
import { V2WorkspaceGetUsageResource } from "@unkey/api/models/components";

let value: V2WorkspaceGetUsageResource = {
  id: "proj_1234abcd",
  name: "Payments",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | The resource id.   | proj_1234abcd      |
| `name`             | *string*           | :heavy_minus_sign: | The resource name. | Payments           |