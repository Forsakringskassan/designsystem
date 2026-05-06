/**
 * Animates the element from its current height to `height: 0px`.
 *
 * Forces a reflow before animating to ensure the browser registers the
 * pinned height set in `beforeLeaveTransition` as a distinct starting state.
 *
 * Calls `done` when the CSS transition completes to notify Vue that the
 * leave transition has finished, which triggers `onAfterLeave`.
 *
 * @param element - The element to transition.
 * @param done - Vue's callback to signal that the transition has completed.
 * @internal
 */
export function leaveTransition(element: Element, done: () => void): void {
    const htmlElement = element as HTMLElement;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- "force reflow"-trick
    getComputedStyle(htmlElement).height;
    requestAnimationFrame(() => {
        htmlElement.style.height = "0px";
        htmlElement.addEventListener("transitionend", done, { once: true });
    });
}
