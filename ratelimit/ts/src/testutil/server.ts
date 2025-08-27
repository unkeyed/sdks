import { setupServer } from "msw/node";
import { type RequestHandler } from "msw";

/**
 * Create a new MSW server instance for testing
 * Each test should create its own server for better isolation
 * Server starts automatically and returns cleanup function
 */
export const createTestServer = (handlers: RequestHandler[] = []) => {
  const server = setupServer(...handlers);

  // Auto-start the server
  server.listen({ onUnhandledRequest: "error" });

  return {
    /**
     * Cleanup function to close the server
     */
    cleanup: () => {
      server.close();
    },
    /**
     * Use additional handlers for this test
     */
    use: server.use.bind(server),
    /**
     * Reset handlers to initial state
     */
    reset: server.resetHandlers.bind(server),
  };
};
