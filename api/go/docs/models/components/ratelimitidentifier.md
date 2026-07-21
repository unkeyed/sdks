# RatelimitIdentifier

How requests are grouped for rate limiting. Exactly one of `remoteIp`,
`header`, `authenticatedSubject`, `path` or `principalField` must be set.


## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `RemoteIP`                                                                                | [*components.RemoteIPKey](../../models/components/remoteipkey.md)                         | :heavy_minus_sign:                                                                        | Rate limit by the client's IP address.                                                    |
| `Header`                                                                                  | [*components.HeaderKey](../../models/components/headerkey.md)                             | :heavy_minus_sign:                                                                        | Rate limit by the value of a request header.                                              |
| `AuthenticatedSubject`                                                                    | [*components.AuthenticatedSubjectKey](../../models/components/authenticatedsubjectkey.md) | :heavy_minus_sign:                                                                        | Rate limit by the authenticated subject (e.g. the verified key).                          |
| `Path`                                                                                    | [*components.PathKey](../../models/components/pathkey.md)                                 | :heavy_minus_sign:                                                                        | Rate limit by the request path.                                                           |
| `PrincipalField`                                                                          | [*components.PrincipalFieldKey](../../models/components/principalfieldkey.md)             | :heavy_minus_sign:                                                                        | Rate limit by a field extracted from the authenticated principal.                         |