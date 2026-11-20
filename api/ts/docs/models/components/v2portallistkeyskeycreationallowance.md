# V2PortalListKeysKeyCreationAllowance

## Example Usage

```typescript
import { V2PortalListKeysKeyCreationAllowance } from "@unkey/api/models/components";

let value: V2PortalListKeysKeyCreationAllowance = {
  required: [
    "documents.read",
  ],
  allowed: [
    "documents.write",
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `required`                       | *string*[]                       | :heavy_check_mark:               | Attached to every created key.   | [<br/>"documents.read"<br/>]     |
| `allowed`                        | *string*[]                       | :heavy_check_mark:               | The end user may opt into these. | [<br/>"documents.write"<br/>]    |