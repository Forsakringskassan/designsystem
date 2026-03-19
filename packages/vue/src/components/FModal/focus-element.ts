/** @internal */
import { focus } from "@fkui/logic";

export function focusElement(element: HTMLElement, container: Element): void {
    if (elementIsRadioButton(element)) {
        focusRadioButtonGroup(element, container);
    } else {
        focus(element);
    }
}
/** @internal */
function focusRadioButtonGroup(
    element: HTMLInputElement,
    container: Element,
): void {
    const radioGroupInputs = container.querySelectorAll<HTMLInputElement>(
        `input[type="radio"][name="${element.name}"]`,
    );
    const checkedRadioButton = Array.from(radioGroupInputs).find(
        (inputEl) => inputEl.checked,
    );

    if (checkedRadioButton) {
        focus(checkedRadioButton);
    } else {
        focus(element);
    }
}

/** @internal */
function elementIsRadioButton(
    element: HTMLElement,
): element is HTMLInputElement {
    return isHTMLInputElement(element) && element.type === "radio";
}

/** @internal */
function isHTMLInputElement(element: HTMLElement): element is HTMLInputElement {
    return element instanceof HTMLInputElement;
}
