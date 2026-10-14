# V2RatelimitDeleteNamespaceRequestBody

## Example Usage

```typescript
import { V2RatelimitDeleteNamespaceRequestBody } from "@unkey/api/models/components";

let value: V2RatelimitDeleteNamespaceRequestBody = {
  namespace: "rlns_1234abcd",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `namespace`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | The namespace to delete. Pass the namespace ID (`rlns_...`) or its name.<br/> | rlns_1234abcd                                                             |