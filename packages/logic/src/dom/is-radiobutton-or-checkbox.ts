/**
 * Check if element is of type radiobutton or checkbox
 *
 * @public
 */
export function isRadiobuttonOrCheckbox(
    element: Element,
): element is HTMLInputElement {
    return (
        element instanceof HTMLInputElement &&
        (element.type === "radio" || element.type === "checkbox")
    );
}
