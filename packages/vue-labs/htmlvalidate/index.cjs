const { definePlugin } = require("html-validate");
const pkg = require("../package.json");
const configs = require("./configs");

module.exports = definePlugin({
    name: pkg.name,
    configs,
});
