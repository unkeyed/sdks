# V2PortalCreateSessionKeyCreationPermissions

Permissions created keys must or may carry. Every slug must already exist in
the portal's project.



## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `Required`                                      | []`string`                                      | :heavy_minus_sign:                              | Permission slugs attached to every created key. | [<br/>"documents.read"<br/>]                    |
| `Allowed`                                       | []`string`                                      | :heavy_minus_sign:                              | Permission slugs the end user may opt into.     | [<br/>"documents.write"<br/>]                   |