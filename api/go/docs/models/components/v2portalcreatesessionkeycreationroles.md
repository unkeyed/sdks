# V2PortalCreateSessionKeyCreationRoles

Roles created keys must or may carry. Every role must already exist in the
portal's project.



## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `Required`                                | []`string`                                | :heavy_minus_sign:                        | Role names attached to every created key. | [<br/>"reader"<br/>]                      |
| `Allowed`                                 | []`string`                                | :heavy_minus_sign:                        | Role names the end user may opt into.     | [<br/>"editor"<br/>]                      |