# V2PortalRevokeSessionRequestBody

## Example Usage

```typescript
import { V2PortalRevokeSessionRequestBody } from "@unkey/api/models/components";

let value: V2PortalRevokeSessionRequestBody = {
  portal: "proj_1234abcd",
  externalId: "user_123",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `portal`                                                                                                                                         | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Identifies a resource by either its unique ID or its slug.<br/>Accepts a prefixed ID (such as 'proj_' or 'app_') or a slug.<br/>                 | proj_1234abcd                                                                                                                                    |
| `externalId`                                                                                                                                     | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The end user's identifier in your system, as passed to<br/>`portal.createSession`. Every live session this end user holds on the<br/>portal is revoked.<br/> | user_123                                                                                                                                         |