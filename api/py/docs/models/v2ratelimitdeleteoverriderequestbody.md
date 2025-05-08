# V2RatelimitDeleteOverrideRequestBody

Deletes an existing override.


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `namespace_id`                                                                  | *Optional[str]*                                                                 | :heavy_minus_sign:                                                              | The id of the namespace. Either namespaceId or namespaceName must be provided   |
| `namespace_name`                                                                | *Optional[str]*                                                                 | :heavy_minus_sign:                                                              | The name of the namespace. Either namespaceId or namespaceName must be provided |
| `identifier`                                                                    | *str*                                                                           | :heavy_check_mark:                                                              | Identifier of the override to delete                                            |