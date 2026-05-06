import { openedStyle, transitionStyle } from "./styles";

/**
 * Prepares the element for the enter transition.
 *
 * If `skipTransition` is `true`, the element is set directly to its final
 * open state without animating. This is used when the element is initially
 * rendered as expanded.
 *
 * If `skipTransition` is `false`, the element is set to `height: 0px` ready
 * to animate open.
 *
 * @param element - The element to transition.
 * @param skipTransition - Whether to skip the transition and set the final state directly.
 * @internal
 */
export function beforeEnterTransition(
    element: Element,
    skipTransition: boolean,
): void {
    const htmlElement = element as HTMLElement;
    Object.assign(htmlElement.style, transitionStyle);
    if (skipTransition) {
        Object.assign(htmlElement.style, openedStyle);
    } else {
        htmlElement.style.height = "0px";
    }
}
