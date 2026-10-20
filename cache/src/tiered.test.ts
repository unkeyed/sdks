import { describe, expect, test } from "vitest";
import type { Context } from "./context";
import { type Entry, MemoryStore, type Store } from "./stores";
import { TieredStore } from "./tiered";

const namespace = "namespace";
const key = "key";

class TestContext implements Context {
  public promises: Promise<unknown>[] = [];
  public waitUntil(p: Promise<unknown>) {
    this.promises.push(p);
  }
  public awaitAll() {
    return Promise.all(this.promises);
  }
}

describe("backfill", () => {
  test("writes the same entry to the faster tier", async () => {
    const ctx = new TestContext();
    const fast = new MemoryStore<string, string>({ persistentMap: new Map() });
    const slow = new MemoryStore<string, string>({ persistentMap: new Map() });
    const entry: Entry<string> = {
      value: "v",
      freshUntil: Date.now() + 1000,
      staleUntil: Date.now() + 2000,
    };
    await slow.set(namespace, key, entry);

    const tiered = new TieredStore(ctx, [fast, slow]);
    const res = await tiered.get(namespace, key);
    expect(res.val).toEqual(entry);
    await ctx.awaitAll();

    const backfilled = await fast.get(namespace, key);
    expect(backfilled.val).toEqual(entry);
  });

  test("a throwing faster tier set does not fail get", async () => {
    const ctx = new TestContext();
    const entry: Entry<string> = {
      value: "v",
      freshUntil: Date.now() + 1000,
      staleUntil: Date.now() + 2000,
    };
    const fast: Store<string, string> = {
      name: "broken",
      get: async () => ({ val: undefined }),
      set: async () => {
        throw new Error("boom");
      },
      remove: async () => ({ val: undefined }),
    };
    const slow = new MemoryStore<string, string>({ persistentMap: new Map() });
    await slow.set(namespace, key, entry);

    const tiered = new TieredStore(ctx, [fast, slow]);
    const res = await tiered.get(namespace, key);
    expect(res.err).toBeUndefined();
    expect(res.val).toEqual(entry);
    await expect(ctx.awaitAll()).resolves.toBeDefined();
  });
});

