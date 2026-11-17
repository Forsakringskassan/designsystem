import { Rule } from "html-validate/node";
import { getDocumentationUrl } from "./common.mjs";

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

/**
 * All the ways the removed `is-open` prop can be written.
 */
const isOpenAttributes = ["is-open", "isopen"].flatMap((name) => [
    name,
    `:${name}`,
    `v-bind:${name}`,
]);

export class NoTemplateModal extends Rule {
    /**
     * @param {string | undefined} context
     */
    documentation(context) {
        if (context === "is-open") {
            return {
                description:
                    "The `is-open` prop has been removed. Modals are always open when rendered and closed by being unmounted. Remove the prop and open the modal using API (`openModal()` or `useModal()`).",
                url: getDocumentationUrl("/components/fmodal.html"),
            };
        }
        return {
            description:
                "The template method of using modals is no longer supported. Modals need to be the root element in a Vue component and opened using API.",
            url: getDocumentationUrl("/components/fmodal.html"),
        };
    }

    setup() {
        this.on("element:ready", isRelevant, (event) => {
            const { target } = event;
            const modalType = target.tagName;

            /* html-validate-vue exposes bound attributes both with and without
             * the binding prefix so only report the first match */
            const isOpen = isOpenAttributes
                .map((name) => target.getAttribute(name))
                .find(Boolean);
            if (isOpen) {
                this.report({
                    node: target,
                    context: "is-open",
                    location: isOpen.keyLocation,
                    message: `"is-open" has been removed from ${modalType}, modals are always open when rendered. Open the modal with openModal() or useModal() instead.`,
                });
            }

            const { parent } = target;
            if (isDocumentRoot(parent) || isSFCTemplateRoot(parent)) {
                return;
            }

            this.report({
                message: `${modalType} must be root element.`,
            });
        });
    }
}
