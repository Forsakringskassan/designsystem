import { inject, nextTick, type Ref, ref, useTemplateRef, toRef } from "vue";
import { useCombobox } from "../../internal-components";
import { type FormatFunction } from "./FormatFunction";
import { type ParseFunction } from "./ParseFunction";

/**
 * @public
 */
export interface TextFieldSetupProps {
    id: string;
    inline: boolean;
    modelValue: string | number | null;
    type: string;
    formatter?: FormatFunction<unknown>;
    parser?: ParseFunction<unknown>;
    labelWidth: string;
    inputWidth: string;
    options?: string[];
}

function setCursorAtEnd(input: HTMLInputElement): void {
    input.setSelectionRange(input.value.length, input.value.length);
}

/**
 * Setup logic used by `FTextField`.
 * Components extending `FTextField` reuse the same setup.
 *
 * @public
 */
export function useTextFieldSetup(props: TextFieldSetupProps): {
    textFieldTableMode: boolean;
    viewValue: Ref<string>;
    onOptionSelected: (value: string) => void;
    dropdownId: string;
    dropdownIsOpen: Readonly<Ref<boolean>>;
    dropdownOptions: Readonly<Ref<string[]>>;
    activeOptionId: string;
    activeOption: Readonly<Ref<string | null>>;
    toggleDropdown: () => void;
    selectOption: (value: string) => void;
    closeDropdown: () => void;
} {
    const inputNode = useTemplateRef<HTMLInputElement>("input");
    const textFieldTableMode = inject("textFieldTableMode", false) as boolean;
    const viewValue = ref("");

    async function onOptionSelected(value: string): Promise<void> {
        if (!inputNode.value) {
            return;
        }

        viewValue.value = value;
        await nextTick();

        inputNode.value.focus();
        setCursorAtEnd(inputNode.value);
    }

    const {
        dropdownId,
        dropdownIsOpen,
        dropdownOptions,
        activeOptionId,
        activeOption,
        toggleDropdown,
        selectOption,
        closeDropdown,
    } = useCombobox(inputNode, toRef(props, "options"), onOptionSelected);

    return {
        textFieldTableMode,
        viewValue,
        onOptionSelected,
        dropdownId,
        dropdownIsOpen,
        dropdownOptions,
        activeOptionId,
        activeOption,
        toggleDropdown,
        selectOption,
        closeDropdown,
    };
}
