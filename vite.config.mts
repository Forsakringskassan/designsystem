import * as path from "node:path";
import { vuePlugin } from "@forsakringskassan/vite-lib-config/vite";
import { defineTestConfig } from "@forsakringskassan/vitest-config";
import { defineConfig } from "vitest/config";

export default defineConfig({
    /**
     * Configuration for unit-tests.
     *
     * Each package defines the actual test configuration in the package
     * "vite.config.mts", this configuration only setups Vitest projects and the
     * reports (coverage and result).
     */
    test: defineTestConfig({
        projects: [
            "internal/*",
            "packages/*",

            /* ignored: these package use node native test runner */
            "!internal/publiccode",
            "!packages/design",
            "!packages/font-default",
            "!packages/logo-default",
            "!packages/theme-builder",
        ],
    }),

    /**
     * Configuration for Cypress E2E and Omponent tests.
     *
     * This configuration is only used when running component tests and not when
     * running builds, for builds see each package "vite.config.mts" file.
     */
    optimizeDeps: {
        entries: [
            "packages/{date,logic,vue,vue-labs}/src/**/*.{ts,vue}",
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
            "@fkui/vue-labs/cypress": path.resolve(
                "packages/vue-labs/src/cypress/index.ts",
            ),
            "@fkui/vue-labs": path.resolve("packages/vue-labs/src/index.ts"),
        },
    },
});
