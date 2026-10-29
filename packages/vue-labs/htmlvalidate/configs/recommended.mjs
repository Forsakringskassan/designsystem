import { defineConfig } from "html-validate";

export default defineConfig({
    plugins: ["html-validate-vue"],
    elements: ["html5", import.meta.resolve("../elements/elements.mjs")],
});
