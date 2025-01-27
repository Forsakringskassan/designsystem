import { type ValidatableHTMLElement } from "@fkui/logic";
import { ComponentUnmountEvent, type ComponentValidityEvent } from "../types";

/**
 * Dispatch an ComponentValidityEvent to the given element.
 *
 * @public
 * @param element - the element to dispatch event to
 * @param detail - the event detail
 */
export function dispatchComponentValidityEvent(
    element: Element,
    detail: ComponentValidityEvent,
): void {
    element.dispatchEvent(
        new CustomEvent<ComponentValidityEvent>("component-validity", {
            detail,
            bubbles: true,
        }),
    );
}

/**
 * Dispatch an ComponentUnmountEvent to the given element.
 *
 * @internal
 * @param element - the element to dispatch event to
 */
export function dispatchComponentUnmountEvent(
    element: ValidatableHTMLElement,
): void {
    const event = new CustomEvent<ComponentUnmountEvent>("component-unmount", {
        detail: { elementId: element.id },
        bubbles: true,
    });
    element.dispatchEvent(event);
}
