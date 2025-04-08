import path from "node:path";
import { defineConfig } from "@forsakringskassan/vite-lib-config/vite";

export default defineConfig({
    fk: {
        enableBanner: false,
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            "@fkui/vue": path.resolve("src/index.ts"),
        },
    },
});
