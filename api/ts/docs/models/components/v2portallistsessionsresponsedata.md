# V2PortalListSessionsResponseData

## Example Usage

```typescript
import { V2PortalListSessionsResponseData } from "@unkey/api/models/components";

let value: V2PortalListSessionsResponseData = {
  externalId: "user_123",
  sessions: [
    {
      id: "ps_1234abcd",
      status: "active",
      createdAt: 1704067200000,
      expiresAt: 1704153600000,
      scopes: [
        "keys:read",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `externalId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | The end user's identifier, as passed to `portal.createSession`.                                    | user_123                                                                                           |
| `sessions`                                                                                         | [components.V2PortalListSessionsSession](../../models/components/v2portallistsessionssession.md)[] | :heavy_check_mark:                                                                                 | The end user's revocable sessions, newest first.                                                   |                                                                                                    |