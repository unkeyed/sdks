# LoggingPolicy

Adds request data to the log entries of matching requests. The gateway
always records a basic log entry for every request: method, host, path,
status, and latency. Each capture setting is a separate opt-in: request
headers, response headers, request body, response body, and query data.
The policy's `match` expressions select the requests. A policy without
`match` expressions matches every request. If more than one enabled
logging policy matches a request, the gateway combines their settings.
The gateway always redacts the `Authorization` header and configured key
locations before it stores headers or query data.

## Example Usage

```typescript
import { LoggingPolicy } from "@unkey/api/models/components";

let value: LoggingPolicy = {
  requestHeaders: true,
  responseHeaders: true,
  requestBody: true,
  responseBody: true,
  query: true,
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `requestHeaders`                                                                                                                             | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | Capture request headers, the user agent, and the client IP. The user<br/>agent and client IP are included because they identify the client.  |
| `responseHeaders`                                                                                                                            | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | Capture response headers.                                                                                                                    |
| `requestBody`                                                                                                                                | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | Capture the request body, up to the capture limit.                                                                                           |
| `responseBody`                                                                                                                               | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | Capture the response body, up to the capture limit.                                                                                          |
| `query`                                                                                                                                      | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | Capture the query string and query parameters. Query data is a<br/>separate opt-in because URLs can contain secrets, for example<br/>`?api_key=...`. |