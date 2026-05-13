# V2PortalExchangeSessionResponseData

## Example Usage

```typescript
import { V2PortalExchangeSessionResponseData } from "@unkey/api/models/components";

let value: V2PortalExchangeSessionResponseData = {
  token: "ps_xyz789abc123",
  expiresAt: 1711386400000,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `token`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | The browser session token. Store this as an httpOnly cookie for subsequent portal requests.<br/> | ps_xyz789abc123                                                                              |
| `expiresAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | Unix timestamp in milliseconds when the browser session expires (24 hours from creation).<br/> | 1711386400000                                                                                |