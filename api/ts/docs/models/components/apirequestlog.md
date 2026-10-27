# ApiRequestLog

One request that the Unkey API served for your workspace.

## Example Usage

```typescript
import { ApiRequestLog } from "@unkey/api/models/components";

let value: ApiRequestLog = {
  requestId: "req_1234abcd",
  time: 1792021850123,
  host: "api.unkey.com",
  method: "POST",
  path: "/v2/keys.updateKey",
  status: 404,
  latencyMs: 38,
  requestHeaders: [
    "Content-Type: application/json",
    "Authorization: [REDACTED]",
  ],
  requestBody: "{\"keyId\":\"key_1234abcd\",\"name\":\"Payments\"}",
  responseHeaders: [
    "Content-Type: application/json",
  ],
  responseBody:
    "{\"meta\":{\"requestId\":\"req_1234abcd\"},\"error\":{\"status\":404}}",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `requestId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | The ID that the Unkey API returned in `meta.requestId` for this request.        | req_1234abcd                                                                    |
| `time`                                                                          | *number*                                                                        | :heavy_check_mark:                                                              | When the Unkey API received the request, in Unix milliseconds.                  | 1792021850123                                                                   |
| `host`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The host the request was sent to.                                               | api.unkey.com                                                                   |
| `method`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | The HTTP method of the request.                                                 | POST                                                                            |
| `path`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The path of the request.                                                        | /v2/keys.updateKey                                                              |
| `status`                                                                        | *number*                                                                        | :heavy_check_mark:                                                              | The HTTP status of the response.                                                | 404                                                                             |
| `latencyMs`                                                                     | *number*                                                                        | :heavy_check_mark:                                                              | How long the Unkey API took to serve the request, in milliseconds.              | 38                                                                              |
| `requestHeaders`                                                                | *string*[]                                                                      | :heavy_check_mark:                                                              | Request headers as `Name: value` strings. Credential headers show `[REDACTED]`. | [<br/>"Content-Type: application/json",<br/>"Authorization: [REDACTED]"<br/>]   |
| `requestBody`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | The request body. Secret values are redacted.                                   | {"keyId":"key_1234abcd","name":"Payments"}                                      |
| `responseHeaders`                                                               | *string*[]                                                                      | :heavy_check_mark:                                                              | Response headers as `Name: value` strings.                                      | [<br/>"Content-Type: application/json"<br/>]                                    |
| `responseBody`                                                                  | *string*                                                                        | :heavy_check_mark:                                                              | The response body. Secret values are redacted.                                  | {"meta":{"requestId":"req_1234abcd"},"error":{"status":404}}                    |