# V2PortalCreateSessionKeyCreationRoles

Roles created keys must or may carry. Every role must already exist in the
portal's project.


## Example Usage

```typescript
import { V2PortalCreateSessionKeyCreationRoles } from "@unkey/api/models/components";

let value: V2PortalCreateSessionKeyCreationRoles = {
  required: [
    "reader",
  ],
  allowed: [
    "editor",
  ],
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `required`                                | *string*[]                                | :heavy_minus_sign:                        | Role names attached to every created key. | [<br/>"reader"<br/>]                      |
| `allowed`                                 | *string*[]                                | :heavy_minus_sign:                        | Role names the end user may opt into.     | [<br/>"editor"<br/>]                      |