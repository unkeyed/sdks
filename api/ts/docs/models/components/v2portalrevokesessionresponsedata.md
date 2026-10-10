# V2PortalRevokeSessionResponseData

## Example Usage

```typescript
import { V2PortalRevokeSessionResponseData } from "@unkey/api/models/components";

let value: V2PortalRevokeSessionResponseData = {
  sessionsRevoked: 2,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `sessionsRevoked`                                                                                                           | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | How many live sessions were revoked. Zero when the end user had none,<br/>including when an earlier call already revoked them.<br/> | 2                                                                                                                           |