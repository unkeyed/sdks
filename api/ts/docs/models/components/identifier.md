# ~~Identifier~~

Deprecated. Accepted for compatibility with old clients. Use
`identifiers` with one entry. Responses always return `identifiers`.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { Identifier } from "@unkey/api/models/components";

let value: Identifier = {
  remoteIp: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `remoteIp`                                                                               | [components.RemoteIpKey](../../models/components/remoteipkey.md)                         | :heavy_minus_sign:                                                                       | Rate limit by the client's IP address.                                                   |
| `header`                                                                                 | [components.HeaderKey](../../models/components/headerkey.md)                             | :heavy_minus_sign:                                                                       | Rate limit by the value of a request header.                                             |
| `authenticatedSubject`                                                                   | [components.AuthenticatedSubjectKey](../../models/components/authenticatedsubjectkey.md) | :heavy_minus_sign:                                                                       | Rate limit by the authenticated subject (e.g. the verified key).                         |
| `path`                                                                                   | [components.PathKey](../../models/components/pathkey.md)                                 | :heavy_minus_sign:                                                                       | Rate limit by the request path.                                                          |
| `principalField`                                                                         | [components.PrincipalFieldKey](../../models/components/principalfieldkey.md)             | :heavy_minus_sign:                                                                       | Rate limit by a field extracted from the authenticated principal.                        |