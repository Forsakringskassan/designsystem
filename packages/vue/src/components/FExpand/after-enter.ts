import { openedStyle } from "./styles";

/**
 * Finalizes the enter transition by setting the element to its open state.
 *
 * Sets `height` to `auto` so the element can grow naturally if content
 * is added or removed after the transition completes.
 *
 * Clears the `display` style to hand control back to `v-show`.
 *
 * @param element - The element to finalize.
 * @internal
 */
export function afterEnterTransition(element: Element): void {
    const htmlElement = element as HTMLElement;
    Object.assign(htmlElement.style, openedStyle);
    htmlElement.style.display = "";
}
