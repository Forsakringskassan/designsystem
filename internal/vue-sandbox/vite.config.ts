import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    // If use default absolute paths then:
    // - HTML-Validate will throw allowed-links error on absolute paths.
    // - File won't be found since searching from root of public and not /vue-sandbox/.
    base: "./",
    plugins: [vue()],
    optimizeDeps: {
        /**
         * Vite treats monorepo packages as sourcecode and performs no prebundling by default.
         * See https://vitejs.dev/guide/dep-pre-bundling.html#monorepos-and-linked-dependencies
         */
        include: ["@fkui/date", "@fkui/logic", "@fkui/vue"],
        force: false,
    },
});
