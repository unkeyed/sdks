# V2AnalyticsGetVerificationsRequestBody

## Example Usage

```typescript
import { V2AnalyticsGetVerificationsRequestBody } from "@unkey/api/models/components";

let value: V2AnalyticsGetVerificationsRequestBody = {
  query:
    "SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                       | *string*                                                                                                      | :heavy_check_mark:                                                                                            | SQL query to execute against your analytics data.<br/>Only SELECT queries are allowed.<br/>                   | SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY |