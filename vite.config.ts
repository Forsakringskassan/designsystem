/* This file is used by Cypress only, see `packages/vue/vite.config.ts` for the actual config */
import path from "node:path";
import { defineConfig } from "vite";
import { vuePlugin } from "@forsakringskassan/vite-lib-config/vite";

export default defineConfig({
    optimizeDeps: {
        entries: ["packages/*/src/**/*.{ts,vue}", "cypress/**/*.{ts,vue}"],
        include: [
            "@fkui/logic",
            "@fkui/test-utils",
            "@fkui/vue",
            "@fkui/vue-labs",
            "dayjs",
            "lodash",
            "vue",
            "vue-router",
        ],
    },
    plugins: [vuePlugin()],
    resolve: {
        alias: {
            /* enable vue with runtime compiler */
            vue: "vue/dist/vue.esm-bundler.js",

            /* alias packages to source folders instead of compiled versions */
            "@fkui/vue/pageobject": path.resolve(
                "packages/vue/src/pageobject/index.ts",
            ),
            "@fkui/vue": "packages/vue/src/index.ts",
            "@fkui/vue-labs": "packages/vue-labs/src/index.ts",
        },
    },
});
