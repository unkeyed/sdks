<!-- Start SDK Example Usage [usage] -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apis.createApi({
    name: "payment-service-production",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->