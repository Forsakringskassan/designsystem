/**
 * Remove listener for each item in the list of elements
 *
 * @public
 */
export function removeFocusListener(
    elements: HTMLElement[],
    listener: ((event: Event) => unknown) | (() => unknown),
): void {
    for (const element of elements) {
        element.removeEventListener("focus", listener);
    }
}
