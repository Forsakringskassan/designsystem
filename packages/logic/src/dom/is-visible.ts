/**
 * Check if an element is visible in the dom
 *
 * @public
 */
export function isVisible(element: HTMLElement): boolean {
    return Boolean(
        element.offsetWidth ||
            element.offsetHeight ||
            element.getClientRects().length,
    );
}
