import { type Slot } from "vue";
import { type ValidatableHTMLElement } from "@fkui/logic";
import { ComponentUnmountEvent, type ComponentValidityEvent } from "../types";
import { renderSlotText } from "./render-slot-text";

/**
 * Extracts plain text from given slot.
 * Supports only a flat structure of elements, e.g.
 * `<template v-slot:label>An <b>element</b> in the text</template>`
 * will return "An element in the text."
 *
 * @public
 * @deprecated Use `renderSlotText` instead.
 * @param slot - slot to extract text from
 */
export function getTextFromScopedSlot(slot: Slot): string {
    return renderSlotText(slot) ?? "";
}

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
