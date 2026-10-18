import { defineConfig } from "html-validate";

/* eslint-disable-next-line unicorn/no-top-level-side-effects -- false positive */
export default defineConfig({
    plugins: ["html-validate-vue"],
    elements: ["html5", import.meta.resolve("../elements/elements.mjs")],
});
