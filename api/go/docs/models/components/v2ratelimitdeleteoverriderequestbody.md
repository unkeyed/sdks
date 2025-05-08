# V2RatelimitDeleteOverrideRequestBody

Deletes an existing override.


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `NamespaceID`                                                                   | **string*                                                                       | :heavy_minus_sign:                                                              | The id of the namespace. Either namespaceId or namespaceName must be provided   |
| `NamespaceName`                                                                 | **string*                                                                       | :heavy_minus_sign:                                                              | The name of the namespace. Either namespaceId or namespaceName must be provided |
| `Identifier`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | Identifier of the override to delete                                            |