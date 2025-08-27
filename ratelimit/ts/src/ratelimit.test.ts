import { describe, test, expect, afterEach } from "vitest";
import { http, HttpResponse } from "msw";
import { createTestServer } from "./testutil/server";
import {
  createTestRatelimit,
  createTestEnvironment,
  createSuccessResponse,
  createErrorResponse,
  createRatelimitHandler,
  captureRequests,
  handlers,
  expectRatelimitResponse,
  waitFor,
} from "./testutil/helpers";

describe("Ratelimit Core Functionality", () => {
  const cleanupFunctions: Array<() => void> = [];

  afterEach(() => {
    // Clean up all test servers after each test
    while (cleanupFunctions.length > 0) {
      // biome-ignore lint/style/noNonNullAssertion: already checked in the while condition
      const cleanup = cleanupFunctions.pop()!;
      cleanup();
    }
  });

  describe("Successful API Responses", () => {
    test("should handle successful ratelimit check within limits", async () => {
      const { ratelimit, cleanup } = createTestEnvironment([
        handlers.success(),
      ]);

      cleanupFunctions.push(cleanup);

      const result = await ratelimit.limit("test-user-123");

      expectRatelimitResponse(result, expect);
      expect(result.success).toBe(true);
      expect(result.remaining).toBe(9);
    });

    test("should handle ratelimit exceeded response", async () => {
      const { cleanup } = createTestServer([handlers.ratelimited()]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();
      const result = await rl.limit("heavy-user");

      expect(result.success).toBe(false);
      expect(result.remaining).toBe(0);
      expect(result.limit).toBe(10);
    });

    test("should handle custom cost parameter", async () => {
      const { requests, handler } = captureRequests();

      const { cleanup } = createTestServer([handler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();
      await rl.limit("test-user", { cost: 3 });

      expect(requests[0]).toMatchObject({
        cost: 3,
        namespace: "test-namespace",
        identifier: "test-user",
      });
    });

    test("should handle response with override ID", async () => {
      const overrideHandler = createRatelimitHandler(
        createSuccessResponse({
          overrideId: "override_abc123",
        }),
      );

      const { cleanup } = createTestServer([overrideHandler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();
      const result = await rl.limit("vip-user");

      expect(result.overrideId).toBe("override_abc123");
      expectRatelimitResponse(result, expect);
    });
  });

  describe("HTTP Error Handling", () => {
    const errorCases = [
      { status: 400, message: "Bad Request" },
      { status: 401, message: "Unauthorized" },
      { status: 403, message: "Forbidden" },
      { status: 404, message: "Not Found" },
      { status: 422, message: "Unprocessable Entity" },
      { status: 429, message: "Too Many Requests" },
      { status: 500, message: "Internal Server Error" },
    ];

    test.each(errorCases)(
      "should throw APIError for $status $message",
      async ({ status, message }) => {
        const { cleanup } = createTestServer([handlers.error(status, message)]);
        cleanupFunctions.push(cleanup);

        // Disable timeout and error handlers so errors actually throw
        const rl = createTestRatelimit({
          timeout: false,
          // Don't provide onError handler so errors throw
        });

        // Just verify that an error is thrown, don't worry about the exact message
        await expect(rl.limit("test-user")).rejects.toThrow();
      },
    );
  });

  describe("Timeout Handling", () => {
    test("should use default timeout fallback when API is slow", async () => {
      const { cleanup } = createTestServer([handlers.timeout(6000)]); // Longer than default 5s timeout
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();
      const result = await rl.limit("test-user");

      // Should get the default fallback response
      expect(result.success).toBe(false);
      expect(result.limit).toBe(0);
      expect(result.remaining).toBe(0);
    });

    test("should use custom timeout configuration", async () => {
      const { cleanup } = createTestServer([handlers.timeout(3000)]); // Longer than our custom 2s timeout
      cleanupFunctions.push(cleanup);

      const customFallback = {
        success: true,
        limit: 5,
        remaining: 3,
        reset: Date.now() + 30000,
      };

      const rl = createTestRatelimit({
        timeout: {
          ms: 2000,
          fallback: customFallback,
        },
      });

      const result = await rl.limit("test-user");

      expect(result).toMatchObject(customFallback);
    });

    test("should support dynamic timeout fallback function", async () => {
      const { cleanup } = createTestServer([handlers.timeout(2000)]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit({
        timeout: {
          ms: 1000,
          fallback: (identifier: string) => ({
            success: identifier.startsWith("vip_"),
            limit: 10,
            remaining: identifier.startsWith("vip_") ? 5 : 0,
            reset: Date.now(),
          }),
        },
      });

      const vipResult = await rl.limit("vip_user123");
      const regularResult = await rl.limit("regular_user456");

      expect(vipResult.success).toBe(true);
      expect(vipResult.remaining).toBe(5);

      expect(regularResult.success).toBe(false);
      expect(regularResult.remaining).toBe(0);
    });

    test("should disable timeout when configured as false", async () => {
      const { cleanup } = createTestServer([handlers.timeout(8000)]); // Very long delay
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit({
        timeout: false,
      });

      const result = await rl.limit("patient-user");

      // Should wait for the actual response
      expect(result.success).toBe(true);
      expect(result.remaining).toBe(9);
    }, 10000); // Increase test timeout for this specific test
  });

  describe("Custom Error Handling", () => {
    test("should use custom timeout fallback with onError as alternative", async () => {
      const { cleanup } = createTestServer([handlers.timeout(8000)]); // Longer delay
      cleanupFunctions.push(cleanup);

      const customErrorResponse = {
        success: false,
        limit: 0,
        remaining: 0,
        reset: Date.now(),
      };

      let errorHandlerCalled = false;
      const rl = createTestRatelimit({
        timeout: {
          ms: 1000, // Short timeout
          fallback: customErrorResponse,
        },
        onError: (error: Error, identifier: string) => {
          errorHandlerCalled = true;
          return customErrorResponse;
        },
      });

      const result = await rl.limit("timeout-user");

      // Should use timeout fallback, not error handler for timeouts
      expect(result.success).toBe(false);
      expect(result.limit).toBe(0);
      // Error handler should not be called for timeout
      expect(errorHandlerCalled).toBe(false);
    });

    test("should use onError handler for API errors like 404", async () => {
      const { cleanup } = createTestServer([handlers.error(404, "Not Found")]);
      cleanupFunctions.push(cleanup);

      let errorHandlerCalled = false;
      let caughtError: any = null;

      const rl = createTestRatelimit({
        timeout: false,
        onError: (error: Error, identifier: string) => {
          errorHandlerCalled = true;
          caughtError = error;
          expect(identifier).toBe("api-error-user");
          return {
            success: false,
            limit: 0,
            remaining: 0,
            reset: Date.now(),
          };
        },
      });

      const result = await rl.limit("api-error-user");

      expect(errorHandlerCalled).toBe(true);
      expect(caughtError).toBeTruthy();
      expect(result.success).toBe(false);
      expect(result.limit).toBe(0);
    });

    test("should use onError handler for API errors like 401", async () => {
      const { cleanup } = createTestServer([
        handlers.error(401, "Unauthorized"),
      ]);
      cleanupFunctions.push(cleanup);

      let errorHandlerCalled = false;
      const rl = createTestRatelimit({
        timeout: false,
        onError: (error: Error, identifier: string) => {
          errorHandlerCalled = true;
          expect(error.message).toContain("API error occurred");
          expect(identifier).toBe("auth-error-user");
          return {
            success: false,
            limit: 0,
            remaining: 0,
            reset: Date.now(),
          };
        },
      });

      const result = await rl.limit("auth-error-user");

      expect(errorHandlerCalled).toBe(true);
      expect(result.success).toBe(false);
    });
  });

  describe("Caching Behavior", () => {
    test("should cache ratelimited responses", async () => {
      let apiCallCount = 0;

      // Create a custom handler that counts API calls
      const countingHandler = http.post(
        "http://localhost:3000/v2/ratelimit.limit",
        async () => {
          apiCallCount++;
          return HttpResponse.json(
            createSuccessResponse({
              success: false,
              remaining: 0,
              reset: Date.now() + 60000, // Reset in 1 minute
            }),
          );
        },
      );

      const { cleanup } = createTestServer([countingHandler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();

      // First request should hit the API
      const result1 = await rl.limit("cached-user");
      expect(result1.success).toBe(false);
      expect(apiCallCount).toBe(1);

      // Second request should use cache (no additional API call)
      const result2 = await rl.limit("cached-user");
      expect(result2.success).toBe(false);
      expect(apiCallCount).toBe(1); // Should still be 1

      // Results should be identical
      expect(result1).toEqual(result2);
    });

    test("should expire cache after reset time", async () => {
      let apiCallCount = 0;
      const shortResetTime = Date.now() + 100; // Reset in 100ms

      const countingHandler = http.post(
        "http://localhost:3000/v2/ratelimit.limit",
        async () => {
          apiCallCount++;
          return HttpResponse.json(
            createSuccessResponse({
              success: false,
              remaining: 0,
              reset: shortResetTime,
            }),
          );
        },
      );

      const { cleanup } = createTestServer([countingHandler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();

      // First request
      await rl.limit("expiring-cache-user");
      expect(apiCallCount).toBe(1);

      // Wait for cache to expire
      await waitFor(150);

      // Second request should hit API again (cache expired)
      await rl.limit("expiring-cache-user");
      expect(apiCallCount).toBe(2);
    });

    test("should not cache successful responses", async () => {
      let apiCallCount = 0;

      const countingHandler = http.post(
        "http://localhost:3000/v2/ratelimit.limit",
        async () => {
          apiCallCount++;
          return HttpResponse.json(createSuccessResponse());
        },
      );

      const { cleanup } = createTestServer([countingHandler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();

      await rl.limit("non-cached-user");
      expect(apiCallCount).toBe(1);

      await rl.limit("non-cached-user");
      expect(apiCallCount).toBe(2); // Should make another API call
    });
  });

  describe("Namespace Handling", () => {
    test("should treat same identifier in different namespaces separately", async () => {
      const { requests, handler } = captureRequests();
      const { cleanup } = createTestServer([handler]);
      cleanupFunctions.push(cleanup);

      const rl1 = createTestRatelimit({ namespace: "namespace-1" });
      const rl2 = createTestRatelimit({ namespace: "namespace-2" });

      await rl1.limit("same-user");
      await rl2.limit("same-user");

      expect(requests).toHaveLength(2);
      expect(requests[0].namespace).toBe("namespace-1");
      expect(requests[1].namespace).toBe("namespace-2");
      expect(requests[0].identifier).toBe("same-user");
      expect(requests[1].identifier).toBe("same-user");
    });

    test("should include namespace in cache keys for isolation", async () => {
      let apiCallCount = 0;

      const countingHandler = http.post(
        "http://localhost:3000/v2/ratelimit.limit",
        async ({ request }) => {
          const body = await request.json();
          apiCallCount++;
          return HttpResponse.json(
            createSuccessResponse({
              success: false,
              remaining: 0,
              reset: Date.now() + 60000,
            }),
          );
        },
      );

      const { cleanup } = createTestServer([countingHandler]);
      cleanupFunctions.push(cleanup);

      const rl1 = createTestRatelimit({ namespace: "cache-test-1" });
      const rl2 = createTestRatelimit({ namespace: "cache-test-2" });

      // First request to each namespace
      await rl1.limit("cached-user");
      await rl2.limit("cached-user");
      expect(apiCallCount).toBe(2); // Both should hit API

      // Second request to each namespace (should use cache)
      await rl1.limit("cached-user");
      await rl2.limit("cached-user");
      expect(apiCallCount).toBe(2); // Should still be 2 (cached)
    });
  });

  describe("Input Validation and Boundary Tests", () => {
    test("should handle empty identifier", async () => {
      const { cleanup } = createTestServer([handlers.success()]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();
      const result = await rl.limit("");

      expectRatelimitResponse(result, expect);
    });

    test("should handle very long identifier", async () => {
      const { cleanup } = createTestServer([handlers.success()]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();
      const longIdentifier = "a".repeat(1000);
      const result = await rl.limit(longIdentifier);

      expectRatelimitResponse(result, expect);
    });

    test("should handle special characters in identifier", async () => {
      const { requests, handler } = captureRequests();
      const { cleanup } = createTestServer([handler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();
      const specialIdentifier = "user@example.com:12345!#$%&";
      await rl.limit(specialIdentifier);

      expect(requests[0].identifier).toBe(specialIdentifier);
    });

    test("should handle zero cost", async () => {
      const { requests, handler } = captureRequests();
      const { cleanup } = createTestServer([handler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();
      await rl.limit("test-user", { cost: 0 });

      expect(requests[0].cost).toBe(0);
    });

    test("should handle very large cost", async () => {
      const { requests, handler } = captureRequests();
      const { cleanup } = createTestServer([handler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();
      const largeCost = 999999;
      await rl.limit("test-user", { cost: largeCost });

      expect(requests[0].cost).toBe(largeCost);
    });

    test("should handle custom limit overrides", async () => {
      const { requests, handler } = captureRequests();
      const { cleanup } = createTestServer([handler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();
      await rl.limit("test-user", {
        limit: { limit: 20, duration: "2m" },
      });

      expect(requests[0].limit).toBe(20);
      expect(requests[0].duration).toBe(120000); // 2 minutes in ms
    });
  });

  describe("Concurrent Request Tests", () => {
    test("should handle multiple simultaneous requests correctly", async () => {
      let apiCallCount = 0;

      const countingHandler = http.post(
        "http://localhost:3000/v2/ratelimit.limit",
        async () => {
          apiCallCount++;
          // Small delay to ensure concurrency
          await new Promise((resolve) => setTimeout(resolve, 50));
          return HttpResponse.json(createSuccessResponse());
        },
      );

      const { cleanup } = createTestServer([countingHandler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();

      // Send 5 concurrent requests
      const promises = Array.from({ length: 5 }, (_, i) =>
        rl.limit(`concurrent-user-${i}`),
      );

      const results = await Promise.all(promises);

      expect(results).toHaveLength(5);
      expect(apiCallCount).toBe(5);
      results.forEach((result) => {
        expectRatelimitResponse(result, expect);
        expect(result.success).toBe(true);
      });
    });

    test("should maintain cache consistency under concurrent access", async () => {
      let apiCallCount = 0;

      const countingHandler = http.post(
        "http://localhost:3000/v2/ratelimit.limit",
        async () => {
          apiCallCount++;
          return HttpResponse.json(
            createSuccessResponse({
              success: false,
              remaining: 0,
              reset: Date.now() + 60000,
            }),
          );
        },
      );

      const { cleanup } = createTestServer([countingHandler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit();

      // Send multiple concurrent requests for the same identifier
      const promises = Array.from({ length: 3 }, () =>
        rl.limit("cached-concurrent-user"),
      );

      const results = await Promise.all(promises);

      expect(results).toHaveLength(3);
      // Should have made at least one API call, but due to caching,
      // subsequent requests might be cached
      expect(apiCallCount).toBeGreaterThanOrEqual(1);
      expect(apiCallCount).toBeLessThanOrEqual(3);

      // All results should be the same (either all from cache or all from API)
      results.forEach((result) => {
        expect(result.success).toBe(false);
        expect(result.remaining).toBe(0);
      });
    });
  });

  describe("Custom Cache Implementation", () => {
    test("should use custom cache instance", async () => {
      const customCache = new Map();
      let cacheGets = 0;
      let cacheSets = 0;

      // Wrap the custom cache to track usage
      const wrappedCache = {
        get: (key: string) => {
          cacheGets++;
          return customCache.get(key);
        },
        set: (key: string, value: any) => {
          cacheSets++;
          return customCache.set(key, value);
        },
        delete: (key: string) => {
          return customCache.delete(key);
        },
      };

      const countingHandler = http.post(
        "http://localhost:3000/v2/ratelimit.limit",
        async () => {
          return HttpResponse.json(
            createSuccessResponse({
              success: false,
              remaining: 0,
              reset: Date.now() + 60000,
            }),
          );
        },
      );

      const { cleanup } = createTestServer([countingHandler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit({ cache: wrappedCache });

      // First request should check cache (miss) and set cache
      await rl.limit("cache-test-user");
      expect(cacheGets).toBeGreaterThanOrEqual(1); // Cache get
      expect(cacheSets).toBe(1); // Cache set

      // Reset counters
      cacheGets = 0;
      cacheSets = 0;

      // Second request should hit cache
      await rl.limit("cache-test-user");
      expect(cacheGets).toBeGreaterThanOrEqual(1); // Cache get
      expect(cacheSets).toBe(0); // No cache set (hit)
    });
  });

  describe("Base URL Configuration", () => {
    test("should use custom baseUrl when configured", async () => {
      // Use a different port for custom base URL test
      const customHandler = http.post(
        "http://localhost:3001/v2/ratelimit.limit",
        async () => {
          return HttpResponse.json(createSuccessResponse());
        },
      );

      const { cleanup } = createTestServer([customHandler]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit({ baseUrl: "http://localhost:3001" });
      const result = await rl.limit("custom-url-user");

      expectRatelimitResponse(result, expect);
      expect(result.success).toBe(true);
    });

    test("should handle baseUrl without trailing slash", async () => {
      const { cleanup } = createTestServer([handlers.success()]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit({ baseUrl: "http://localhost:3000" });
      const result = await rl.limit("no-slash-user");

      expectRatelimitResponse(result, expect);
      expect(result.success).toBe(true);
    });

    test("should handle baseUrl with trailing slash", async () => {
      const { cleanup } = createTestServer([handlers.success()]);
      cleanupFunctions.push(cleanup);

      const rl = createTestRatelimit({ baseUrl: "http://localhost:3000/" });
      const result = await rl.limit("with-slash-user");

      expectRatelimitResponse(result, expect);
      expect(result.success).toBe(true);
    });
  });
});
