const { Rule } = require("html-validate/node");
const { getDocumentationUrl } = require("./common");

/**
 * @typedef {import("html-validate/node").ElementReadyEvent} ElementReadyEvent
 */

/**
 *
 * @param {ElementReadyEvent} event
 */
function isRelevant(event) {
    const { target } = event;
    return target.is("svg") && target.classList.includes("icon");
}

class PreferFIcon extends Rule {
    documentation() {
        return {
            description:
                "Prefer using `<f-icon>` instead of directly using `<svg>`",
            url: getDocumentationUrl("/components/ficon.html"),
        };
    }

    setup() {
        this.on("element:ready", isRelevant, () => {
            this.report({
                message:
                    "Prefer using <f-icon> instead of directly using <svg>",
            });
        });
    }
}

module.exports = PreferFIcon;
