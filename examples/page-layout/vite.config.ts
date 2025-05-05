import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    // If use default absolute paths then:
    // - HTML-Validate will throw allowed-links error on absolute paths.
    // - File won't be found since searching from root of public and not /examples/page-layout/.
    base: "./",
    plugins: [vue()],
    build: {
        minify: false,
    },
});
