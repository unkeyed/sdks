# V2PortalExchangeCodeResponseData

## Example Usage

```typescript
import { V2PortalExchangeCodeResponseData } from "@unkey/api/models/components";

let value: V2PortalExchangeCodeResponseData = {
  accessToken: "pat_xyz789abc123",
  expiresAt: 1711386400000,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `accessToken`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | The portal access token. Store this as an httpOnly cookie for subsequent portal requests.<br/> | pat_xyz789abc123                                                                           |
| `expiresAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | Unix timestamp in milliseconds when the access token expires (24 hours from creation).<br/> | 1711386400000                                                                              |