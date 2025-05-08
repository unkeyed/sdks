# ValidationError

## Example Usage

```typescript
import { ValidationError } from "@unkey/api/models/components";

let value: ValidationError = {
  location: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `location`                                                             | *string*                                                               | :heavy_check_mark:                                                     | Where the error occurred, e.g. 'body.items[3].tags' or 'path.thing-id' |
| `message`                                                              | *string*                                                               | :heavy_check_mark:                                                     | Error message text                                                     |
| `fix`                                                                  | *string*                                                               | :heavy_minus_sign:                                                     | A human-readable message describing how to fix the error.              |