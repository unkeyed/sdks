# V2ProjectsUpdateProjectRequestBody

## Example Usage

```typescript
import { V2ProjectsUpdateProjectRequestBody } from "@unkey/api/models/components";

let value: V2ProjectsUpdateProjectRequestBody = {
  project: "proj_1234abcd",
  slug: "proj_1234abcd",
  name: "Payments Service",
  deleteProtection: true,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `project`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `slug`                                                                                                                   | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | New human-readable name for the project.<br/>Omit this field to leave the current name unchanged.<br/>                   | Payments Service                                                                                                         |
| `deleteProtection`                                                                                                       | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Enable or disable delete protection for the project.<br/>Omit this field to leave the current setting unchanged.<br/>    | true                                                                                                                     |