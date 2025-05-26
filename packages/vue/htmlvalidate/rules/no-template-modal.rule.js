const { Rule } = require("html-validate/node");
const { getDocumentationUrl } = require("./common");

/**
 * @typedef {import("html-validate/node").ElementReadyEvent} ElementReadyEvent
 * @typedef {import("html-validate/node").HtmlElement} HtmlElement
 */

/**
 * @param {ElementReadyEvent} event
 * @returns {boolean}
 */
function isRelevant(event) {
    const { target } = event;
    return (
        target.is("f-modal") ||
        target.is("f-confirm-modal") ||
        target.is("f-form-modal")
    );
}

/**
 * Test if this element is the document root.
 *
 * @param {HtmlElement} node
 * @returns {boolean}
 */
function isDocumentRoot(node) {
    return node.isRootElement();
}

/**
 * Test if this element is the <template> element of a Vue SFC component.
 *
 * @param {HtmlElement} node
 * @returns {boolean}
 */
function isSFCTemplateRoot(node) {
    return node.is("template") && node.parent.isRootElement();
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
            const { parent } = event.target;
            if (isDocumentRoot(parent) || isSFCTemplateRoot(parent)) {
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
