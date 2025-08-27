import { http, HttpResponse, delay } from "msw";
import { Ratelimit, type RatelimitConfig } from "../ratelimit";
import { createTestServer } from "./server";

// Test instance factory
export const createTestRatelimit = (config: Partial<RatelimitConfig> = {}) => {
  return new Ratelimit({
    baseUrl: "http://localhost:3000", // MSW will intercept this
    rootKey: "test-root-key",
    namespace: "test-namespace",
    limit: 10,
    duration: "1m",
    ...config,
  });
};

// Response factories
export const createSuccessResponse = (overrides = {}) => ({
  meta: {
    requestId: "req_test",
  },
  data: {
    success: true,
    limit: 10,
    remaining: 9,
    reset: Date.now() + 60000,
    ...overrides,
  },
});

export const createErrorResponse = (message: string, status = 400) => ({
  meta: {
    requestId: "req_test",
  },
  error: {
    title: getErrorTitle(status),
    detail: message,
    status: status,
    type: `https://unkey.com/docs/errors/${status}`,
    ...(status === 400 && {
      errors: [
        {
          path: ["request"],
          message: message,
        },
      ],
    }),
  },
});

const getErrorTitle = (status: number): string => {
  switch (status) {
    case 400:
      return "Bad Request";
    case 401:
      return "Unauthorized";
    case 403:
      return "Forbidden";
    case 404:
      return "Not Found";
    case 500:
      return "Internal Server Error";
    default:
      return "Error";
  }
};

// Handler factories
export const createRatelimitHandler = (
  response: any,
  options: { delay?: number; status?: number } = {},
) => {
  return http.post(
    "http://localhost:3000/v2/ratelimit.limit",
    async ({ request }) => {
      if (options.delay) await delay(options.delay);

      if (options.status && options.status >= 400) {
        return HttpResponse.json(response, { status: options.status });
      }

      return HttpResponse.json(response);
    },
  );
};

// Request capture utility
export const captureRequests = () => {
  const requests: any[] = [];

  const handler = http.post(
    "http://localhost:3000/v2/ratelimit.limit",
    async ({ request }) => {
      const body = await request.json();
      requests.push(body);
      return HttpResponse.json(createSuccessResponse());
    },
  );

  return { requests, handler };
};

// Custom matchers/assertions
export const expectRatelimitResponse = (result: any, expect: any) => {
  expect(result).toMatchObject({
    success: expect.any(Boolean),
    limit: expect.any(Number),
    remaining: expect.any(Number),
    reset: expect.any(Number),
  });
};

// Test utilities
export const waitFor = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Create a complete test environment with server and ratelimit instance
 * Server starts automatically
 */
export const createTestEnvironment = (
  handlers: any[] = [],
  config: Partial<RatelimitConfig> = {},
) => {
  const testServer = createTestServer(handlers);
  const ratelimit = createTestRatelimit(config);

  return {
    server: testServer,
    ratelimit,
    cleanup: testServer.cleanup,
  };
};

// Common handler collections
export const handlers = {
  success: () => createRatelimitHandler(createSuccessResponse()),

  ratelimited: () =>
    createRatelimitHandler(
      createSuccessResponse({
        success: false,
        remaining: 0,
      }),
    ),

  timeout: (delayMs = 6000) =>
    createRatelimitHandler(createSuccessResponse(), { delay: delayMs }),

  error: (status = 500, message = "Internal Server Error") =>
    createRatelimitHandler(createErrorResponse(message), { status }),

  networkError: () =>
    http.post("http://localhost:3000/v2/ratelimit.limit", () => {
      return HttpResponse.error();
    }),

  malformedResponse: () =>
    http.post("http://localhost:3000/v2/ratelimit.limit", () => {
      return new HttpResponse("invalid json{", {
        headers: { "Content-Type": "application/json" },
      });
    }),
};
