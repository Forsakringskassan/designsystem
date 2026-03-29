import path from "node:path";
import {
    defaultPlugins,
    defineConfig,
} from "@forsakringskassan/vite-lib-config/vite";
import { PluginPure } from "rollup-plugin-pure";

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

    plugins: [
        ...defaultPlugins,
        PluginPure({
            functions: ["defineComponent"],
            sourcemap: true,
        }),
    ],
});
