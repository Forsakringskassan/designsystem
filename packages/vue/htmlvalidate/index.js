const { definePlugin } = require("html-validate");
const pkg = require("../package.json");
const configs = require("./configs");
const rules = require("./rules");

module.exports = definePlugin({
    name: pkg.name,
    configs,
    rules,
});
