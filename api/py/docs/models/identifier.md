# ~~Identifier~~

Deprecated. Accepted for compatibility with old clients. Use
`identifiers` with one entry. Responses always return `identifiers`.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `remote_ip`                                                                      | [Optional[models.RemoteIPKey]](../models/remoteipkey.md)                         | :heavy_minus_sign:                                                               | Rate limit by the client's IP address.                                           |
| `header`                                                                         | [Optional[models.HeaderKey]](../models/headerkey.md)                             | :heavy_minus_sign:                                                               | Rate limit by the value of a request header.                                     |
| `authenticated_subject`                                                          | [Optional[models.AuthenticatedSubjectKey]](../models/authenticatedsubjectkey.md) | :heavy_minus_sign:                                                               | Rate limit by the authenticated subject (e.g. the verified key).                 |
| `path`                                                                           | [Optional[models.PathKey]](../models/pathkey.md)                                 | :heavy_minus_sign:                                                               | Rate limit by the request path.                                                  |
| `principal_field`                                                                | [Optional[models.PrincipalFieldKey]](../models/principalfieldkey.md)             | :heavy_minus_sign:                                                               | Rate limit by a field extracted from the authenticated principal.                |