# V2PortalCreateSessionResponseData

## Example Usage

```typescript
import { V2PortalCreateSessionResponseData } from "@unkey/api/models/components";

let value: V2PortalCreateSessionResponseData = {
  sessionId: "pst_abc123def456",
  url: "https://portal.unkey.com/?session=pst_abc123def456",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `sessionId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The short-lived session token ID. Valid for 15 minutes and can be exchanged once for a browser session.<br/> | pst_abc123def456                                                                                         |
| `url`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The full portal URL with the session parameter. Redirect the end user to this URL.<br/>                  | https://portal.unkey.com/?session=pst_abc123def456                                                       |