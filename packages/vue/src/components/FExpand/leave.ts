import { transitionStyle } from "./styles";

/**
 * Animates the element from its current height to `height: 0px`.
 *
 * Measures the current height by temporarily setting `height: auto` before animating.
 * Resets to `height: auto` after completion to restore the element for the next enter transition.
 *
 * @param element - The element to transition.
 * @param done - Vue's callback to signal that the transition has completed.
 * @internal
 */
export function leaveTransition(element: Element, done: () => void): void {
    if (!(element instanceof HTMLElement)) {
        return;
    }
    element.style.height = "auto";
    element.style.height = getComputedStyle(element).height;
    Object.assign(element.style, transitionStyle);
    setTimeout(() => {
        element.style.height = "0px";
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
