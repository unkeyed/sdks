import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    testTimeout: 10000, // 10 second default timeout
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: ["src/testutil/**", "dist/**", "node_modules/**", "*.config.*"],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
    },
  },
});
