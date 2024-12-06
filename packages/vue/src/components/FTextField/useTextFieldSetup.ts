import { inject, ref, useTemplateRef } from "vue";
import { useCombobox } from "../../internal-components";
import { FormatFunction } from "./FormatFunction";
import { ParseFunction } from "./ParseFunction";

interface FTextFieldProps {
    id: string;
    inline: boolean;
    modelValue: string | number;
    type: string;
    formatter?: FormatFunction<unknown>;
    parser?: ParseFunction<unknown>;
    labelWidth: string;
    inputWidth: string;
    options?: string[];
}

export function useTextFieldSetup(props: FTextFieldProps): any {
    const inputNode = useTemplateRef<HTMLInputElement>("input");
    const textFieldTableMode = inject("textFieldTableMode", false) as boolean;

    const {
        dropdownId,
        dropdownIsOpen,
        dropdownOptions,
        activeOptionId,
        activeOption,
        selectedValue,
        toggleDropdown,
        closeDropdown,
    } = useCombobox(inputNode, props.options);

    return {
        viewValue: ref(""),
        textFieldTableMode,
        dropdownId,
        dropdownIsOpen,
        dropdownOptions,
        activeOptionId,
        activeOption,
        selectedValue,
        toggleDropdown,
        closeDropdown,
    };
}
