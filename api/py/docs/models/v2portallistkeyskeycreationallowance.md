# V2PortalListKeysKeyCreationAllowance


## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `required`                       | List[*str*]                      | :heavy_check_mark:               | Attached to every created key.   | [<br/>"documents.read"<br/>]     |
| `allowed`                        | List[*str*]                      | :heavy_check_mark:               | The end user may opt into these. | [<br/>"documents.write"<br/>]    |