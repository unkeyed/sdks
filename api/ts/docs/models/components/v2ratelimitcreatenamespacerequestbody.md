# V2RatelimitCreateNamespaceRequestBody

## Example Usage

```typescript
import { V2RatelimitCreateNamespaceRequestBody } from "@unkey/api/models/components";

let value: V2RatelimitCreateNamespaceRequestBody = {
  name: "email.outbound",
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 | Example                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                      | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | The name of the namespace, unique within your workspace. Names are case-sensitive.<br/>Pass it as `namespace` to `ratelimit.limit` and the override endpoints.<br/> | email.outbound                                                                                                                                              |