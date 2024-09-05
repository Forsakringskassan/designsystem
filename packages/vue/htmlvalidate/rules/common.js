const { homepage } = require("../../package.json");

/**
 * @internal
 * @param {string} path
 * @returns {string}
 */
function getDocumentationUrl(path) {
    if (path.startsWith("/")) {
        path = path.slice(1);
    }
    return `${homepage}${path}`;
}

module.exports = { getDocumentationUrl };
