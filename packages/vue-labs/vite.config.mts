import path from "node:path";
import { defineConfig } from "@forsakringskassan/vite-lib-config/vite";
import { defineTestConfig } from "@forsakringskassan/vitest-config-jsdom";

export default defineConfig({
    fk: {
        enableBanner: false,
    },
    test: defineTestConfig({
        setupFiles: ["./vitest.setup.ts"],
    }),
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            "@fkui/vue-labs": path.resolve("src/index.ts"),
        },
    },
});
