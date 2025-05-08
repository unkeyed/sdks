# BadRequestErrorDetails

## Example Usage

```typescript
import { BadRequestErrorDetails } from "@unkey/api/models/components";

let value: BadRequestErrorDetails = {
  detail: "Property foo is required but is missing.",
  instance: "https://example.com/error-log/abc123",
  status: 404,
  title: "<value>",
  type: "https://example.com/errors/example",
  errors: [
    {
      location: "<value>",
      message: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `detail`                                                                                                            | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A human-readable explanation specific to this occurrence of the problem.                                            | Property foo is required but is missing.                                                                            |
| `instance`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | A URI reference that identifies the specific occurrence of the problem.                                             | https://example.com/error-log/abc123                                                                                |
| `status`                                                                                                            | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP status code                                                                                                    | 404                                                                                                                 |
| `title`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A short, human-readable summary of the problem type. This value should not change between occurrences of the error. |                                                                                                                     |
| `type`                                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A URI reference to human-readable documentation for the error.                                                      | https://example.com/errors/example                                                                                  |
| `errors`                                                                                                            | [components.ValidationError](../../models/components/validationerror.md)[]                                          | :heavy_check_mark:                                                                                                  | Optional list of individual error details                                                                           |                                                                                                                     |