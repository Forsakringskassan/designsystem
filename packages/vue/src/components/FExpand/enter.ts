import { transitionStyle } from "./styles";

/**
 * Animates the element from `height: 0px` to its natural height.
 *
 * Uses two nested `requestAnimationFrame` calls to ensure the browser
 * measures the natural height before starting the animation:
 * - First frame: measures natural height, then sets `height: 0px`
 * - Second frame: sets the measured height to trigger the CSS transition
 *
 * Calls `done` when the CSS transition completes to notify Vue that the
 * enter transition has finished, which triggers `onAfterEnter`.
 *
 * @param element - The element to transition.
 * @param done - Vue's callback to signal that the transition has completed.
 * @internal
 */
export function enterTransition(element: Element, done: () => void): void {
    const htmlElement = element as HTMLElement;
    Object.assign(htmlElement.style, transitionStyle);

    requestAnimationFrame(() => {
        const height = getComputedStyle(htmlElement).height;
        htmlElement.style.height = "0px";
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- "force reflow"-trick
        getComputedStyle(htmlElement).height;
        requestAnimationFrame(() => {
            htmlElement.style.height = height;
            htmlElement.addEventListener("transitionend", done, { once: true });
        });
    });
}
