/**
 * Check if an element is fully visible in the viewport
 *
 * @public
 */
export function isVisibleInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return Boolean(
        rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth),
    );
}
