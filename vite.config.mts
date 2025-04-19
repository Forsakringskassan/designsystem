/* This file is used by Cypress only, see `packages/vue/vite.config.ts` for the actual config */
import * as path from "node:path";
import { defineConfig } from "vite";
import { vuePlugin } from "@forsakringskassan/vite-lib-config/vite";

export default defineConfig({
    optimizeDeps: {
        entries: [
            "packages/*/src/**/*.{ts,vue}",
            "cypress/**/*.{ts,vue}",
            "!**/*.spec.ts",
        ],
        include: ["dayjs", "lodash", "vue", "vue-router"],
    },
    plugins: [vuePlugin()],
    resolve: {
        alias: {
            /* enable vue with runtime compiler */
            vue: "vue/dist/vue.esm-bundler.js",

            /* alias packages to source folders instead of compiled versions */
            "@fkui/date": path.resolve("packages/date/src/index.ts"),
            "@fkui/logic": path.resolve("packages/logic/src/index.ts"),
            "@fkui/vue/cypress": path.resolve(
                "packages/vue/src/cypress/index.ts",
            ),
            "@fkui/vue": path.resolve("packages/vue/src/index.ts"),
            "@fkui/vue-labs": path.resolve("packages/vue-labs/src/index.ts"),
        },
    },
});
