# RatelimitIdentifier

How requests are grouped for rate limiting. Exactly one of `remoteIp`,
`header`, `authenticatedSubject`, `path` or `principalField` must be set.


## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `remote_ip`                                                                      | [Optional[models.RemoteIPKey]](../models/remoteipkey.md)                         | :heavy_minus_sign:                                                               | Rate limit by the client's IP address.                                           |
| `header`                                                                         | [Optional[models.HeaderKey]](../models/headerkey.md)                             | :heavy_minus_sign:                                                               | Rate limit by the value of a request header.                                     |
| `authenticated_subject`                                                          | [Optional[models.AuthenticatedSubjectKey]](../models/authenticatedsubjectkey.md) | :heavy_minus_sign:                                                               | Rate limit by the authenticated subject (e.g. the verified key).                 |
| `path`                                                                           | [Optional[models.PathKey]](../models/pathkey.md)                                 | :heavy_minus_sign:                                                               | Rate limit by the request path.                                                  |
| `principal_field`                                                                | [Optional[models.PrincipalFieldKey]](../models/principalfieldkey.md)             | :heavy_minus_sign:                                                               | Rate limit by a field extracted from the authenticated principal.                |