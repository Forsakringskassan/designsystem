import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    // If use default absolute paths then:
    // - HTML-Validate will throw allowed-links error on absolute paths.
    // - File won't be found since searching from root of public and not /examples/<application>/.
    base: "./",
    plugins: [vue()],
    build: {
        minify: false,
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            "@fkui/table-tests-examples": path.resolve(
                __dirname,
                "../../packages/vue/src/components/FTable/tests/",
            ),
            "@fkui/table-docs-examples": path.resolve(
                __dirname,
                "../../packages/vue/src/components/FTable/docs/",
            ),
        },
    },
});
