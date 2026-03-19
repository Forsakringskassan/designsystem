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

/**
 * @internal
 * @param {import("html-validate").HtmlElement} element
 * @returns {string[]}
 */
function getSlots(element) {
    return Object.fromEntries(
        element.childElements
            .filter((it) => it.is("template"))
            .map((it) => {
                const key = it.attributes.find((jt) =>
                    jt.key.startsWith("#"),
                )?.key;
                return [key, it];
            }),
    );
}

module.exports = { getDocumentationUrl, getSlots };
