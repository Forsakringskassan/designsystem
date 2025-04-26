const {
    Rule,
    classifyNodeText,
    TextClassification,
} = require("html-validate/node");
const { getDocumentationUrl } = require("./common");

/**
 * @param {import("html-validate").ElementReadyEvent} event
 * @returns {boolean}
 */
function isRelevant(event) {
    return event.target.is("f-interactive-table");
}

/**
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

class FInteractiveTableCheckboxDescription extends Rule {
    documentation() {
        return {
            description:
                "`#checkbox-description` slot must implemented and non-empty when `selectable` is enabled",
            url: getDocumentationUrl("/components/table-and-list/table.html"),
        };
    }

    setup() {
        this.on("element:ready", isRelevant, (event) => {
            const { target } = event;
            const selectable = target.getAttribute("selectable");
            if (!selectable) {
                return;
            }
            const slots = getSlots(target);
            const checkboxDescription = slots["#checkbox-description"];
            if (!checkboxDescription) {
                this.report({
                    node: target,
                    location: selectable.keyLocation,
                    message:
                        "#checkbox-description slot must be implemented when selectable is enabled",
                });
                return;
            }
            const textContent = classifyNodeText(checkboxDescription);
            if (textContent === TextClassification.EMPTY_TEXT) {
                this.report({
                    node: checkboxDescription,
                    location: checkboxDescription.location,
                    message:
                        "#checkbox-description cannot be empty when selectable is enabled",
                });
            }
        });
    }
}

module.exports = FInteractiveTableCheckboxDescription;
