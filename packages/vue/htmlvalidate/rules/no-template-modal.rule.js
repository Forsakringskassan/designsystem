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
    return (
        target.is("f-modal") ||
        target.is("f-confirm-modal") ||
        target.is("f-form-modal")
    );
}

class NoTemplateModal extends Rule {
    documentation() {
        return {
            description:
                "The template method of using modals is deprecated. Modals need to be the root element in a Vue component and opened using API.",
            url: getDocumentationUrl("/components/fmodal.html"),
        };
    }

    setup() {
        this.on("element:ready", isRelevant, (event) => {
            if (event.target.parent.is("#document")) {
                return;
            }

            const modalType = event.target.tagName;
            this.report({
                message: `${modalType} must be root element.`,
            });
        });
    }
}

module.exports = NoTemplateModal;
