/**
 * @internal
 */
export interface ComboboxSelectors {
    input: string;
    button: string;
    dropdown: string;
    options: string;
    activeOption: string;
}

/**
 * @internal
 */
export function setupComboboxSelectors(
    rootSelector?: string,
): ComboboxSelectors {
    const prefix = rootSelector ? `${rootSelector} ` : "";
    const withRoot = (it: string): string => `${prefix} ${it}`;

    return {
        input: withRoot("input"),
        button: withRoot("button"),
        dropdown: withRoot(".combobox__listbox"),
        options: withRoot(".combobox__listbox__option"),
        activeOption: withRoot(".combobox__listbox__option--highlight"),
    };
}
