interface LabelOptions {
    hasRadiobutton: boolean;
    hasCheckbox: boolean;
    chip: boolean;
    contentClass: string;
}

/**
 * @internal
 */
export function* contentClasses(options: LabelOptions): Generator<string> {
    const { hasRadiobutton, hasCheckbox, contentClass } = options;

    yield "fieldset__content";

    if (hasRadiobutton) {
        yield "radio-button-group__content";
    }

    if (hasCheckbox) {
        yield "checkbox-group__content";
    }

    yield contentClass;
}
