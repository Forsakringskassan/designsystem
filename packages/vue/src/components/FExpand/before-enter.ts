import { openedStyle, transitionStyle } from "./styles";

/**
 * Prepares the element for the enter transition.
 *
 * If the element is initially visible, it is set directly to its final
 * open state without animating. This handles the case where the element
 * is initially rendered as expanded.
 *
 * If the element is hidden, it is set to `height: 0px` ready to animate open.
 *
 * @param element - The element to transition.
 * @internal
 */
export function beforeEnterTransition(element: Element): void {
    const skipTransition = getComputedStyle(element).display !== "none";
    const htmlElement = element as HTMLElement;
    Object.assign(htmlElement.style, transitionStyle);
    if (skipTransition) {
        Object.assign(htmlElement.style, openedStyle);
    } else {
        htmlElement.style.height = "0px";
    }
}
