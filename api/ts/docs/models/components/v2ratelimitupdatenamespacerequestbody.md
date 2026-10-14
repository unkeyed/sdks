# V2RatelimitUpdateNamespaceRequestBody

## Example Usage

```typescript
import { V2RatelimitUpdateNamespaceRequestBody } from "@unkey/api/models/components";

let value: V2RatelimitUpdateNamespaceRequestBody = {
  namespace: "rlns_1234abcd",
  name: "email.outbound",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `namespace`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | The namespace to rename. Pass the namespace ID (`rlns_...`) or its current name.<br/>   | rlns_1234abcd                                                                           |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | The new name of the namespace, unique within your workspace. Names are case-sensitive.<br/> | email.outbound                                                                          |