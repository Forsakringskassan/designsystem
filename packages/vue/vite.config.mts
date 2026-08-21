import { defineConfig } from "@forsakringskassan/vite-lib-config/vite";
import { defineTestConfig } from "@forsakringskassan/vitest-config-jsdom";

export default defineConfig({
    test: defineTestConfig({
        setupFiles: [
            "@forsakringskassan/vitest-config-jsdom/setup",
            "./vitest.setup.ts",
        ],
    }),
});
