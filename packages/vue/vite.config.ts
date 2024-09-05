import { defineConfig } from "@forsakringskassan/vite-lib-config/vite";

export default defineConfig({
    fk: {
        enableBanner: false,
    },
    resolve: {
        alias: {
            "@fkui/vue": "src/index.ts",
        },
    },
});
