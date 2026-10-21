import { afterEach, describe, expect, test, vi } from "vitest";
import { CloudflareStore } from "./cloudflare";

const zoneId = "023e105f4ecef8ad9ca31a8372d0c353";
const domain = "cache.example.com";
const apiKey = "cf-api-token";

describe("CloudflareStore.remove", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  test("purges https://api.cloudflare.com/client/v4/zones/{zoneId}/purge_cache", async () => {
    vi.stubGlobal("caches", {
      default: {
        delete: vi.fn(async () => true),
      },
    });

    const fetchMock = vi.fn(async (_url: string) => ({
      body: { cancel: async () => undefined },
    }));
    vi.stubGlobal("fetch", fetchMock);

    const store = new CloudflareStore({
      domain,
      zoneId,
      cloudflareApiKey: apiKey,
      cacheBuster: "v1",
    });

    const result = await store.remove("namespace", "my-key");

    expect(result).toEqual({ val: undefined });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0]?.[0]).toBe(
      "https://api.cloudflare.com/client/v4/zones/023e105f4ecef8ad9ca31a8372d0c353/purge_cache",
    );
  });
});
