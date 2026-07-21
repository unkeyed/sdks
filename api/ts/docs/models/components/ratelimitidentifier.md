# RatelimitIdentifier

How requests are grouped for rate limiting. Exactly one of `remoteIp`,
`header`, `authenticatedSubject`, `path` or `principalField` must be set.

## Example Usage

```typescript
import { RatelimitIdentifier } from "@unkey/api/models/components";

let value: RatelimitIdentifier = {
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