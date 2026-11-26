import { defineTestConfig } from "@forsakringskassan/vitest-config-jsdom";
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: defineTestConfig({
        setupFiles: ["./setupFiles/mocks.js"],
    }),
});
