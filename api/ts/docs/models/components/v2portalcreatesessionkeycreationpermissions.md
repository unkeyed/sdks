# V2PortalCreateSessionKeyCreationPermissions

Permissions created keys must or may carry. Every slug must already exist in
the portal's project.


## Example Usage

```typescript
import { V2PortalCreateSessionKeyCreationPermissions } from "@unkey/api/models/components";

let value: V2PortalCreateSessionKeyCreationPermissions = {
  required: [
    "documents.read",
  ],
  allowed: [
    "documents.write",
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `required`                                      | *string*[]                                      | :heavy_minus_sign:                              | Permission slugs attached to every created key. | [<br/>"documents.read"<br/>]                    |
| `allowed`                                       | *string*[]                                      | :heavy_minus_sign:                              | Permission slugs the end user may opt into.     | [<br/>"documents.write"<br/>]                   |