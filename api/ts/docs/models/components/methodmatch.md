# MethodMatch

Matches when the request method is one of the listed methods.

## Example Usage

```typescript
import { MethodMatch } from "@unkey/api/models/components";

let value: MethodMatch = {
  methods: [
    "POST",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `methods`                                                                      | [components.MethodMatchMethod](../../models/components/methodmatchmethod.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |