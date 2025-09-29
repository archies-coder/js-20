import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.test.{js,ts}"],
    reporters: ["default"],
    coverage: {
      provider: "v8",
      reportsDirectory: "coverage",
      reporter: ["text", "html"],
    },
  },
});
