<!-- Start SDK Example Usage [usage] -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: "UNKEY_ROOT_KEY",
});

async function run() {
  const result = await unkey.ratelimit.limit({
    namespace: "sms.sign_up",
    duration: 711276,
    identifier: "<value>",
    limit: 581877,
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->