interface LabelOptions {
    hasRadiobutton: boolean;
    hasCheckbox: boolean;
    chip: boolean;
    labelClass: string;
}

/**
 * @internal
 */
export function* labelClasses(options: LabelOptions): Generator<string> {
    const { labelClass } = options;

    yield "fieldset__label";
    yield labelClass;
}
