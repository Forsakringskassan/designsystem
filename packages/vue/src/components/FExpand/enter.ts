import { transitionStyle } from "./styles";

/**
 * Animates the element from `height: 0px` to its `desiredHeight`.
 *
 * Measures `desiredHeight` by temporarily setting `height: auto` before animating.
 * Resets to `height: auto` after completion so the element grows naturally with its content.
 *
 * @param element - The element to transition.
 * @param done - Vue's callback to signal that the transition has completed.
 * @internal
 */
export function enterTransition(element: Element, done: () => void): void {
    if (!(element instanceof HTMLElement)) {
        return;
    }
    element.style.height = "auto";
    const desiredHeight = getComputedStyle(element).height;
    element.style.height = "0px";
    Object.assign(element.style, transitionStyle);
    // Force redraw
    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions -- technical debt, there should be a better way */
    getComputedStyle(element).height;
    setTimeout(() => {
        element.style.height = desiredHeight;
        element.addEventListener(
            "transitionend",
            () => {
                element.style.height = "auto";
                done();
            },
            { once: true },
        );
    });
}
