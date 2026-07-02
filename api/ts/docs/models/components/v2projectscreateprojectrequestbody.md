# V2ProjectsCreateProjectRequestBody

## Example Usage

```typescript
import { V2ProjectsCreateProjectRequestBody } from "@unkey/api/models/components";

let value: V2ProjectsCreateProjectRequestBody = {
  name: "Payments Service",
  slug: "proj_1234abcd",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Human-readable name for this project.<br/>Use a descriptive name like 'Payments Service' to identify its purpose.<br/>   | Payments Service                                                                                                         |
| `slug`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/> | proj_1234abcd                                                                                                            |