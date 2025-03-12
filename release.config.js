const config = require("@forsakringskassan/semantic-release-monorepo-config");

module.exports = {
    ...config,
    plugins: [...config.plugins, "@fkui/semantic-release-publiccode"],
};
