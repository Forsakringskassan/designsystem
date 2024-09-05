/**
 * Check if element is a form element
 *
 * Also see {@link isValidatableHTMLElement} for a similar function but
 * including HTMLFieldSetElement.
 *
 * @public
 * @param element - Element to test
 */
export function isValidatableFormElement(
    element: Element,
): element is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement {
    return (
        element instanceof HTMLInputElement ||
        element instanceof HTMLSelectElement ||
        element instanceof HTMLTextAreaElement
    );
}
