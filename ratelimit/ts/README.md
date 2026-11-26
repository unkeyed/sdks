<div align="center">
    <h1 align="center">@unkey/ratelimit</h1>
    <h5>@unkey/ratelimit is a library for fast global ratelimiting in serverless functions.</h5>
</div>

<div align="center">
  <a href="https://www.unkey.com/docs/libraries/ts/ratelimit">Documentation</a>
</div>
<br/>

## Installation

```bash
npm install @unkey/ratelimit
```

## Quickstart

1.  Configure your ratelimiter:

```ts
import { Ratelimit } from "@unkey/ratelimit";

const unkey = new Ratelimit({
  rootKey: process.env.UNKEY_ROOT_KEY,
  namespace: "my-app",
  limit: 10,
  duration: "30s",
  async: true,
});
```

2.  Use it:

```ts
async function handler(request) {
  const identifier = request.getUserId(); // or IP or anything else you want

  const ratelimit = await unkey.limit(identifier);
  if (!ratelimit.allowed) {
    return new Response("try again later", { status: 429 });
  }

  // handle the request here
}
```

## Making it Bullet Proof

To ensure reliability, you can configure timeout and error handling:

```ts
import { Ratelimit } from "@unkey/ratelimit";

const fallback = (identifier: string) => ({
  allowed: true,
  limit: 0,
  remaining: 0,
  retryAfter: 0,
});

const unkey = new Ratelimit({
  // ... standard configuration
  timeout: {
    ms: 3000, // only wait 3s at most before returning the fallback
    fallback,
  },
  onError: (err, identifier) => {
    console.error(`${identifier} - ${err.message}`);
    return fallback(identifier);
  },
});
```

## API Overview

Create a new instance for ratelimiting by providing the necessary configuration.

```ts
new Ratelimit(config: RatelimitConfig)
```

Check whether a specific identifier is currently allowed to do something or if they have currently exceeded their limit.

```ts
.limit(identifier: string, opts: LimitOptions): Promise<RatelimitResponse>
```

## Upgrading from v2

v3 uses the `/v3/ratelimit.limit` endpoint of `@unkey/api` v3.

- `success` is now `allowed`.
- `reset` (a unix timestamp) is now `retryAfter`: the milliseconds to wait until the same cost fits. It is `0` when the request is allowed. Update your `timeout.fallback` and `onError` responses.
- Usage decays continuously instead of resetting at fixed window edges. `remaining` grows back over time.
- `duration` must be between 10 seconds and 24 hours. Unkey rejects other durations.
- v3 keeps separate counters from v2. Identifiers start with no usage after you upgrade, and instances that still run v2 count separately during a rollout.
- A new `record` option sets when a request counts its cost: `IF_ALLOWED` (default), `ALWAYS`, or `NEVER`.

### Documentation

[Read the full documentation](https://www.unkey.com/docs/libraries/ts/ratelimit)
