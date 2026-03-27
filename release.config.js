const config = require("@forsakringskassan/semantic-release-monorepo-config");

module.exports = {
    ...config,
    plugins: ["@fkui/semantic-release-publiccode", ...config.plugins],
};
