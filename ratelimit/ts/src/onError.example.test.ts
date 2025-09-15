import { test, expect } from "vitest";
import { Ratelimit } from "../src/ratelimit";

test("auth errors use the fallback", async () => {
  let onErrorCalled = 0;

  const unkey = new Ratelimit({
    rootKey: "this_key_does_not_exist",
    namespace: "test",
    limit: 10,
    duration: "60s",
    onError: (_error, _identifier) => {
      // console.error(_error)
      onErrorCalled++;

      return {
        success: true,
        limit: 10,
        remaining: 10,
        reset: 999,
      };
    },
  });

  const res = await unkey.limit("test");

  expect(res).toEqual({
    success: true,
    limit: 10,
    remaining: 10,
    reset: 999,
  });
  expect(onErrorCalled).toBe(1);
});
