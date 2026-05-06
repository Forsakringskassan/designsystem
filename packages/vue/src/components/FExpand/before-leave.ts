import { transitionStyle } from "./styles";

/**
 * Prepares the element for the leave transition.
 *
 * Pins the current height as an explicit pixel value so the browser has a
 * starting point to animate from, since `height: auto` cannot be transitioned.
 *
 * Forces a reflow to ensure the browser registers the pinned height before
 * the leave transition starts.
 *
 * Applies `transitionStyle` to ensure the CSS transition is set regardless
 * of how the element reached its open state, for example if it was initially
 * rendered as expanded and never went through the enter transition.
 *
 * @param element - The element to prepare.
 * @internal
 */
export function beforeLeaveTransition(element: Element): void {
    const htmlElement = element as HTMLElement;
    htmlElement.style.height = getComputedStyle(htmlElement).height;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- "force reflow"-trick
    getComputedStyle(htmlElement).height;
    Object.assign(htmlElement.style, transitionStyle);
}
