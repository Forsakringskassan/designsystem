import { defineConfig } from "@forsakringskassan/vite-lib-config/vite";
import { defineTestConfig } from "@forsakringskassan/vitest-config-jsdom";

export default defineConfig({
    test: defineTestConfig({
        setupFiles: ["./vitest.setup.ts"],
    }),
});
