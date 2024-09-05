import { ValidationServiceInterface } from "./ValidationServiceInterface";

/**
 * @internal
 */
export function createFieldsetValidator(
    element: HTMLFieldSetElement,
    validationService: ValidationServiceInterface,
): void {
    /* eslint-disable-next-line no-new -- technical debt, this should be
     * refactored as to not rely of side-effects of the constructor */
    new FieldsetValidationHandler(element, validationService);
}

class FieldsetValidationHandler {
    private hasDocumentListener = false;
    private documentFocusInRef: ((event: Event) => void) | undefined =
        undefined;
    private element: HTMLFieldSetElement;
    private validationService: ValidationServiceInterface;

    public constructor(
        element: HTMLFieldSetElement,
        validationService: ValidationServiceInterface,
    ) {
        Object.assign(this);
        this.element = element;
        this.validationService = validationService;
        element.addEventListener("focusin", (event) => this.onFocusIn(event));
        // Handle checking of input by using keyboard (space)
        element.addEventListener("change", this.documentFocusIn.bind(this));

        Array.from(
            this.element.querySelectorAll<Element>(
                "input[type='checkbox'], input[type='radio']",
            ),
        )
            .filter(
                (childElement: Element) =>
                    childElement.closest("fieldset") === element,
            )
            .forEach((childElement: Element) => {
                childElement.setAttribute("required", "");
            });
    }

    private hasFocusableTarget(target: EventTarget | null): boolean {
        return target
            ? Array.from(this.element.querySelectorAll("input, label")).some(
                  (element) => element === target,
              )
            : false;
    }

    private onFocusIn(event: FocusEvent): void {
        // IE11 (not Chrome / FF) trigger focusin-event on legends and other elements inside the fieldset
        // So we need to check the event target, if it's focusable.
        if (
            this.hasFocusableTarget(event.target) &&
            !this.hasDocumentListener
        ) {
            this.documentFocusInRef = this.documentFocusIn.bind(this);
            document.addEventListener("focusin", this.documentFocusInRef);
            document.addEventListener("click", this.documentFocusInRef);
            this.hasDocumentListener = true;
        }
    }

    private documentFocusIn(event: Event): void {
        this.validationService.setTouched(this.element);
        const children = Array.from(this.element.querySelectorAll("input"));
        for (const childElement of children) {
            this.validationService.setTouched(childElement);
        }
        if (!this.hasFocusableTarget(event.target)) {
            this.removeEventListeners();
        } else if ((event.target as HTMLInputElement).checked) {
            this.validateFieldsetAndChildren();
        }
    }

    private removeEventListeners(): void {
        if (this.hasDocumentListener && this.documentFocusInRef) {
            document.removeEventListener("focusin", this.documentFocusInRef);
            document.removeEventListener("click", this.documentFocusInRef);
            this.hasDocumentListener = false;
            this.validateFieldsetAndChildren();
        }
    }

    private validateFieldsetAndChildren(): void {
        const validatableElements = document.querySelectorAll(
            `fieldset#${this.element.id}, #${this.element.id} input[type='checkbox'], #${this.element.id} input[type='radio']`,
        );

        validatableElements.forEach((element) => {
            if (element.id) {
                this.validationService.validateElement(element.id);
            }
        });
    }
}
