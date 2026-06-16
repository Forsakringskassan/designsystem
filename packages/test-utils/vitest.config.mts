import { defineTestConfig } from "@forsakringskassan/vitest-config-jsdom";
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        ...defineTestConfig(),
        include: ["src/**/*.spec.ts"],
        exclude: ["/node_modules/", "**/*.jest.spec.ts"],
    },
});
