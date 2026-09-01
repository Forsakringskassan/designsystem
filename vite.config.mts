import * as path from "node:path";
import { vuePlugin } from "@forsakringskassan/vite-lib-config/vite";
import { defineTestConfig } from "@forsakringskassan/vitest-config";
import istanbul from "vite-plugin-istanbul";
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
        // Vitest coverage options
        coverage: {
            provider: "istanbul",
            include: ["**/src/**/*.ts", "**/src/**/*.vue"],
            exclude: ["node_modules", "cypress", "**/*.cy.ts", "**/*.spec.ts"],
            reportsDirectory: "coverage/vitest",
            reporter: ["lcov", "json"],
        },
    }),

    /**
     * Configuration for Cypress tests.
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
    plugins: [
        vuePlugin(),
        istanbul({
            include: ["**/*.ts", "**/*.vue"],
            exclude: ["node_modules", "cypress", "**/*.cy.ts", "**/*.spec.ts"],
            extension: [".ts", ".vue"],
            // Instrumentation should be active during Cypress component tests, VITE_COVERAGE to execute
            requireEnv: true,
        }),
    ],
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
