# OpenapiPolicy

Validates matching requests against the app's uploaded OpenAPI spec. Has no
configuration of its own. If no spec has been uploaded for the deployment,
the policy is a no-op and requests pass through unvalidated.

## Example Usage

```typescript
import { OpenapiPolicy } from "@unkey/api/models/components";

let value: OpenapiPolicy = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |