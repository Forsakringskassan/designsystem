import { definePlugin } from "html-validate";
import pkg from "../package.json" with { type: "json" };
import { configs } from "./configs/index.mjs";

export default definePlugin({
    name: pkg.name,
    configs,
});
