<div align="center">
    <h1 align="center">@unkey/nextjs</h1>
    <h5>`@unkey/nextjs` the official SDK for Next.js. Just use it in your route handlers a direct and type-safe method to verify API keys.</h5>
</div>

<div align="center">
  <a href="https://www.unkey.com/docs/libraries/ts/nextjs">Documentation</a>
</div>
<br/>

## Installation

```bash
npm install @unkey/nextjs
```

## Quickstart

Protecting API routes is as simple as wrapping them with the `withUnkey` handler:

```ts
import { NextRequestWithUnkeyContext, withUnkey } from "@unkey/nextjs";

export const POST = withUnkey(
  async (req) => {
    // Process the request here
    // You have access to the verification response using `req.unkey`
    console.log(req.unkey);

    return new Response("Your API key is valid!");
  },
  {
    rootKey: process.env.UNKEY_ROOT_KEY!, // Required: Your Unkey root key
  },
);
```

**Note:** You need to provide your Unkey root key for key verification. Get your root key from the [Unkey dashboard](https://app.unkey.com/settings/root-keys).

## Configuration Options

You can customize how withUnkey processes incoming requests by passing configuration options:

### Required Configuration

- `rootKey`: Your Unkey root key (required for API authentication)

### Optional Configuration

- `tags`: Array of tags to filter keys during verification
- `permissions`: Required permissions for the key to be valid
- `getKey`: Custom function to extract the key from the request
- `handleInvalidKey`: Custom handler for invalid keys
- `onError`: Custom error handler

## `getKey`

By default, withUnkey will look for a bearer token located in the `authorization` header. If you want to customize this, you can do so by passing a getter in the configuration object:

```ts
export const GET = withUnkey(
  async (req) => {
    // ...
  },
  {
    rootKey: process.env.UNKEY_ROOT_KEY!,
    getKey: (req) => new URL(req.url).searchParams.get("key"),
  },
);
```

## `tags` and `permissions`

You can require specific tags or permissions for key verification:

```ts
export const GET = withUnkey(
  async (req) => {
    // ...
  },
  {
    rootKey: process.env.UNKEY_ROOT_KEY!,
    tags: ["api", "production"],
    permissions: "read:data",
  },
);
```

## `onError`

You can specify custom error handling. By default errors will be logged to the console, and `withUnkey` will return a NextResponse with status 500.

```ts
export const GET = withUnkey(
  async (req) => {
    // ...
  },
  {
    rootKey: process.env.UNKEY_ROOT_KEY!,
    onError: async (req, err) => {
      await analytics.trackEvent(`Error ${err.statusCode}: ${err.message}`);
      return new NextResponse("Unkey error", { status: 500 });
    },
  },
);
```

## `handleInvalidKey`

Specify what to do if Unkey reports that your key is invalid.

```ts
export const GET = withUnkey(
  async (req) => {
    // ...
  },
  {
    rootKey: process.env.UNKEY_ROOT_KEY!,
    handleInvalidKey: (req, res) => {
      return new Response("Unauthorized", { status: 401 });
    },
  },
);
```

### Documentation

[Read the full documentation](https://www.unkey.com/docs/libraries/ts/nextjs)
