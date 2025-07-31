# Unkey SDK

## Overview

Unkey API: Unkey's API provides programmatic access for all resources within our platform.


### Authentication
#
This API uses HTTP Bearer authentication with root keys. Most endpoints require specific permissions associated with your root key. When making requests, include your root key in the `Authorization` header:
```
Authorization: Bearer unkey_xxxxxxxxxxx
```

All responses follow a consistent envelope structure that separates operational metadata from actual data. This design provides several benefits:
- Debugging: Every response includes a unique requestId for tracing issues
- Consistency: Predictable response format across all endpoints
- Extensibility: Easy to add new metadata without breaking existing integrations
- Error Handling: Unified error format with actionable information

### Success Response Format:
```json
{
  "meta": {
    "requestId": "req_123456"
  },
  "data": {
    // Actual response data here
  }
}
```

The meta object contains operational information:
- `requestId`: Unique identifier for this request (essential for support)

The data object contains the actual response data specific to each endpoint.

### Paginated Response Format:
```json
{
  "meta": {
    "requestId": "req_123456"
  },
  "data": [
    // Array of results
  ],
  "pagination": {
    "cursor": "next_page_token",
    "hasMore": true
  }
}
```

The pagination object appears on list endpoints and contains:
- `cursor`: Token for requesting the next page
- `hasMore`: Whether more results are available

### Error Response Format:
```json
{
  "meta": {
    "requestId": "req_2c9a0jf23l4k567"
  },
  "error": {
    "detail": "The resource you are attempting to modify is protected and cannot be changed",
    "status": 403,
    "title": "Forbidden",
    "type": "https://unkey.com/docs/errors/unkey/application/protected_resource"
  }
}
```

Error responses include comprehensive diagnostic information:
- `title`: Human-readable error summary
- `detail`: Specific description of what went wrong
- `status`: HTTP status code
- `type`: Link to error documentation
- `errors`: Array of validation errors (for 400 responses)

This structure ensures you always have the context needed to debug issues and take corrective action.

### Available Operations
