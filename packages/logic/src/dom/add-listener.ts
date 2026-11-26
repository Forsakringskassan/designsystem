/**
 * Add a listener to each item in the list of elements
 *
 * @public
 */
export function addFocusListener(
    elements: HTMLElement[],
    listener: ((event: Event) => unknown) | (() => unknown),
): void {
    for (const element of elements) {
        element.addEventListener("focus", listener);
    }
}
