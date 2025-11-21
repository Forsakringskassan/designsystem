const {
    Rule,
    TextClassification,
    classifyNodeText,
} = require("html-validate/node");
const { getDocumentationUrl, getSlots } = require("./common");

/**
 * @param {import("html-validate").ElementReadyEvent} event
 * @returns {boolean}
 */
function isRelevant(event) {
    return event.target.is("f-interactive-table");
}

class FInteractiveTableSelectableDescription extends Rule {
    documentation() {
        return {
            description:
                "`#selectable-description` slot must implemented and non-empty when `selectable` is enabled",
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
            const selectableDescription = slots["#selectable-description"];
            if (!selectableDescription) {
                this.report({
                    node: target,
                    location: selectable.keyLocation,
                    message:
                        "#selectable-description slot must be implemented when selectable is enabled",
                });
                return;
            }

            const textContent = classifyNodeText(selectableDescription);
            if (textContent === TextClassification.EMPTY_TEXT) {
                this.report({
                    node: selectableDescription,
                    location: selectableDescription.location,
                    message:
                        "#selectable-description cannot be empty when selectable is enabled",
                });
            }
        });
    }
}

module.exports = FInteractiveTableSelectableDescription;
