# DeploymentError

## Example Usage

```typescript
import { DeploymentError } from "@unkey/api/models/components";

let value: DeploymentError = {
  code: "no_schedulable_regions",
  step: "deploying",
  message:
    "No schedulable regions configured. Please configure at least one schedulable region before deploying.",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                            | [components.DeploymentErrorCode](../../models/components/deploymenterrorcode.md)                                  | :heavy_check_mark:                                                                                                | The reason a deployment failed. `unknown` means Unkey could not classify the<br/>failure; see `message` for details.<br/> | no_schedulable_regions                                                                                            |
| `step`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The pipeline step that failed (e.g. `building`, `deploying`, `starting`).<br/>                                    | deploying                                                                                                         |
| `message`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Human-readable description of why the deployment failed. For programmatic<br/>handling, use `code`.<br/>          | No schedulable regions configured. Please configure at least one schedulable region before deploying.             |