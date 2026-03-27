import { type ValidatableHTMLElement } from "@fkui/logic";

/**
 * @public
 */
export function getInputElement(vm: { $el: Element }): ValidatableHTMLElement {
    const inputElement = vm.$el.querySelector("input");

    if (!inputElement) {
        const id = vm.$el.id;
        const tag = vm.$el.tagName.toLowerCase();
        throw new Error(
            `Could not find input element from element "${tag}#${id}"`,
        );
    }

    return inputElement;
}
