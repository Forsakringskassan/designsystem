import { ValidatableHTMLElement } from "./ValidationServiceInterface";

/**
 * Resolves element type for a `ValidatableHTMLElement`.
 *
 * Input types other than text, radio, checkbox returns \"text\".
 * Fieldset returns \"radio\" or \"checkbox\" when it contains radio or checkbox elements.
 *
 * @internal
 */
export function getElementType(
    element: ValidatableHTMLElement | null,
): "text" | "radio" | "checkbox" | "select" | "textarea" | undefined {
    if (element instanceof HTMLInputElement) {
        return element.type === "checkbox"
            ? "checkbox"
            : element.type === "radio"
              ? "radio"
              : "text";
    } else if (element instanceof HTMLTextAreaElement) {
        return "textarea";
    } else if (element instanceof HTMLSelectElement) {
        return "select";
    } else if (element instanceof HTMLFieldSetElement) {
        return getElementType(
            element.querySelector<HTMLInputElement>(
                "input[type='checkbox'], input[type='radio']",
            ),
        );
    }
}
