<div align="center">
    <h1 align="center">@unkey/hono</h1>
    <h5>Hono.js middleware for authenticating API keys</h5>
</div>

<div align="center">
  Inspired by <a href="https://www.openstatus.dev/blog/secure-api-with-unkey">openstatus.dev/blog/secure-api-with-unkey</a>
</div>
<br/>

## Installation

```bash
npm install @unkey/hono
```

## Quickstart

Here's a simple example of how to use the Unkey middleware in your Hono.js application:

```ts
import { Hono } from "hono";
import { UnkeyContext, unkey } from "@unkey/hono";

const app = new Hono<{ Variables: { unkey: UnkeyContext } }>();

app.use(
  "*",
  unkey({
    rootKey: process.env.UNKEY_ROOT_KEY!, // Your Unkey root key
  }),
);

app.get("/protected", (c) => {
  // Access the unkey response here to get metadata of the key etc
  const unkeyResponse = c.get("unkey");

  if (!unkeyResponse.data.valid) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  return c.json({
    message: "Access granted!",
    keyId: unkeyResponse.data.keyId,
  });
});
```

**Note:** You need to provide your Unkey root key for key verification. Get your root key from the [Unkey dashboard](https://app.unkey.com/settings/root-keys).

## Configuration Options

The `unkey` middleware accepts the following configuration options:

### Required Configuration

- `rootKey`: Your Unkey root key (required for API authentication)

### Optional Configuration

- `tags`: Array of tags to filter keys during verification
- `permissions`: Required permissions for the key to be valid
- `getKey`: Custom function to extract the key from the request
- `handleInvalidKey`: Custom handler for invalid keys
- `onError`: Custom error handler

## Advanced Usage

### Custom Key Extraction

By default, the middleware looks for a bearer token in the `Authorization` header. You can customize this:

```ts
app.use(
  "*",
  unkey({
    rootKey: process.env.UNKEY_ROOT_KEY!,
    getKey: (c) => c.req.query("api_key"), // Get key from query parameter
  }),
);
```

### Tags and Permissions

You can require specific tags or permissions for key verification:

```ts
app.use(
  "*",
  unkey({
    rootKey: process.env.UNKEY_ROOT_KEY!,
    tags: ["api", "production"],
    permissions: "read:data",
  }),
);
```

### Custom Invalid Key Handler

Handle invalid keys with custom logic:

```ts
app.use(
  "*",
  unkey({
    rootKey: process.env.UNKEY_ROOT_KEY!,
    handleInvalidKey: (c, result) => {
      return c.json({ error: "Invalid API key" }, 401);
    },
  }),
);
```

### Custom Error Handler

Handle API errors with custom logic:

```ts
app.use(
  "*",
  unkey({
    rootKey: process.env.UNKEY_ROOT_KEY!,
    onError: (c, err) => {
      console.error("Unkey error:", err.message);
      return c.json({ error: "Authentication service unavailable" }, 503);
    },
  }),
);
```

## Documentation

Check out the full docs at [unkey.com/docs/libraries/ts/hono](https://unkey.com/docs/libraries/ts/hono).
