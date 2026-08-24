# ~~Identifier~~

Deprecated. Accepted for compatibility with old clients. Use
`identifiers` with one entry. Responses always return `identifiers`.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `RemoteIP`                                                                                | [*components.RemoteIPKey](../../models/components/remoteipkey.md)                         | :heavy_minus_sign:                                                                        | Rate limit by the client's IP address.                                                    |
| `Header`                                                                                  | [*components.HeaderKey](../../models/components/headerkey.md)                             | :heavy_minus_sign:                                                                        | Rate limit by the value of a request header.                                              |
| `AuthenticatedSubject`                                                                    | [*components.AuthenticatedSubjectKey](../../models/components/authenticatedsubjectkey.md) | :heavy_minus_sign:                                                                        | Rate limit by the authenticated subject (e.g. the verified key).                          |
| `Path`                                                                                    | [*components.PathKey](../../models/components/pathkey.md)                                 | :heavy_minus_sign:                                                                        | Rate limit by the request path.                                                           |
| `PrincipalField`                                                                          | [*components.PrincipalFieldKey](../../models/components/principalfieldkey.md)             | :heavy_minus_sign:                                                                        | Rate limit by a field extracted from the authenticated principal.                         |