# V2RatelimitDeleteOverrideRequestBody

Deletes an existing override.

## Example Usage

```typescript
import { V2RatelimitDeleteOverrideRequestBody } from "@unkey/api/models/components";

let value: V2RatelimitDeleteOverrideRequestBody = {
  identifier: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `namespaceId`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | The id of the namespace. Either namespaceId or namespaceName must be provided   |
| `namespaceName`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | The name of the namespace. Either namespaceId or namespaceName must be provided |
| `identifier`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | Identifier of the override to delete                                            |