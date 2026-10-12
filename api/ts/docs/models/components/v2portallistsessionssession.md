# V2PortalListSessionsSession

## Example Usage

```typescript
import { V2PortalListSessionsSession } from "@unkey/api/models/components";

let value: V2PortalListSessionsSession = {
  id: "ps_1234abcd",
  status: "active",
  createdAt: 1704067200000,
  expiresAt: 1704153600000,
  scopes: [
    "keys:read",
  ],
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The session id.                                                                                                     | ps_1234abcd                                                                                                         |
| `status`                                                                                                            | [components.V2PortalListSessionsSessionStatus](../../models/components/v2portallistsessionssessionstatus.md)        | :heavy_check_mark:                                                                                                  | `pending` when the portal URL was created but not opened yet. `active`<br/>when the end user opened it.<br/>        | active                                                                                                              |
| `createdAt`                                                                                                         | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | When the session was created, in Unix milliseconds.                                                                 | 1704067200000                                                                                                       |
| `expiresAt`                                                                                                         | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | When the session stops working, in Unix milliseconds. For a `pending`<br/>session this is when its portal URL expires.<br/> | 1704153600000                                                                                                       |
| `scopes`                                                                                                            | *string*[]                                                                                                          | :heavy_check_mark:                                                                                                  | The capabilities the session was created with.                                                                      | [<br/>"keys:read"<br/>]                                                                                             |