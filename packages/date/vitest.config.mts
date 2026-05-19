import { defineTestConfig } from "@forsakringskassan/vitest-config";
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: defineTestConfig({
        setupFiles: ["src/dayjs-setup.ts"],
    }),
});
