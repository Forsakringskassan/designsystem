import { ElementIdService, isEmpty } from "@fkui/logic";
import {
    computed,
    nextTick,
    onMounted,
    ref,
    type Ref,
    type ShallowRef,
    watchEffect,
} from "vue";
import { useEventListener } from "../../composables";
import { useTranslate } from "../../plugins";
import { filterOptions } from "./filter-options";

const $t = useTranslate();

/**
 * @public
 */
export function useCombobox(
    inputRef: Readonly<ShallowRef<HTMLInputElement | null>>,
    options: Ref<string[] | undefined>,
    onOptionSelected?: (value: string) => void,
): {
    dropdownId: string;
    dropdownIsOpen: Readonly<Ref<boolean>>;
    dropdownOptions: Readonly<Ref<string[]>>;
    activeOptionId: string;
    activeOption: Readonly<Ref<string | null>>;
    toggleDropdown: () => void;
    selectOption: (value: string) => void;
    closeDropdown: () => void;
} {
    if (options.value === undefined) {
        return {
            dropdownId: "",
            dropdownIsOpen: ref(false),
            dropdownOptions: ref([]),
            activeOptionId: "",
            activeOption: ref(null),
            toggleDropdown() {
                /* do nothing */
            },
            selectOption() {
                /* do nothing */
            },
            closeDropdown() {
                /* do nothing */
            },
        };
    }

    useEventListener(inputRef, "click", onInputClick);
    useEventListener(inputRef, "focus", onInputFocus);
    useEventListener(inputRef, "keydown", onInputKeyDown);
    useEventListener(inputRef, "keyup", onInputKeyUp);

    const dropdownId = ElementIdService.generateElementId();
    const dropdownIsOpen = ref(false);
    const activeOptionId = ElementIdService.generateElementId();
    const activeOption: Ref<string | null> = ref(null);
    const filter = ref("");
    const selectMode = ref(false);
    const selectedOption: Ref<string | null> = ref(null);

    const dropdownOptions = computed(() => {
        return filterOptions(
            options.value ?? [],
            filter.value,
            selectMode.value,
        );
    });

    const hasOptions = computed(() => {
        return dropdownOptions.value.length > 0;
    });

    const hasMultipleOptions = computed(() => {
        return dropdownOptions.value.length > 1;
    });

    // dropdownIsOpen trigger: sets input aria-expanded, aria-controls
    watchEffect(() => {
        if (!inputRef.value) {
            return;
        }
        inputRef.value.setAttribute("aria-expanded", `${dropdownIsOpen.value}`);

        if (dropdownIsOpen.value) {
            inputRef.value.setAttribute("aria-controls", dropdownId);
        } else {
            inputRef.value.removeAttribute("aria-controls");
        }
    });

    // activeOption trigger: sets input aria-activedescendant
    watchEffect(async () => {
        if (!inputRef.value) {
            return;
        }

        if (activeOption.value) {
            inputRef.value.setAttribute(
                "aria-activedescendant",
                activeOptionId,
            );
        } else {
            inputRef.value.removeAttribute("aria-activedescendant");
        }
    });

    // selectMode, filter, options trigger: sets input aria-description
    watchEffect(() => {
        if (!inputRef.value) {
            return;
        }

        let description = selectMode.value
            ? `${$t("fkui.combobox.selected", "Valt förslag")} `
            : "";

        if (isEmpty(filter.value) || selectMode.value) {
            description += $t(
                "fkui.combobox.listDetails",
                `Det finns {{ count }} förslag. Använd uppåtpil och nedåtpil för att navigera bland förslagen.`,
                { count: options.value ? options.value.length : 0 },
            );
        } else if (hasOptions.value) {
            description += $t(
                "fkui.combobox.matchesListDetails",
                `Det finns {{ count }} förslag som matchar. Använd uppåtpil och nedåtpil för att navigera bland förslagen.`,
                { count: dropdownOptions.value.length },
            );
        } else {
            description = $t(
                "fkui.combobox.noMatchesListDetails",
                "Det finns inga förslag som matchar.",
            );
        }

        inputRef.value.setAttribute("aria-description", description);
    });

    onMounted(() => {
        if (!inputRef.value) {
            throw new Error("missing input ref");
        }

        filter.value = inputRef.value.value;
        inputRef.value.setAttribute("role", "combobox");
        inputRef.value.setAttribute("aria-autocomplete", "list");
    });

    return {
        dropdownId,
        dropdownIsOpen,
        dropdownOptions,
        activeOptionId,
        activeOption,
        toggleDropdown,
        selectOption,
        closeDropdown: close,
    };

    function selectOption(value: string): void {
        selectedOption.value = value;

        if (selectedOption.value) {
            close();
            filter.value = selectedOption.value;
            selectMode.value = true;

            if (onOptionSelected) {
                onOptionSelected(value);
            }
        }
    }

    async function openSelected(
        fallback: null | "first" | "last" = null,
    ): Promise<void> {
        if (hasOptions.value) {
            dropdownIsOpen.value = true;

            await nextTick();

            if (selectMode.value) {
                activeOption.value = filter.value;
            } else if (fallback === "first") {
                activeOption.value = dropdownOptions.value[0];
            } else if (fallback === "last") {
                activeOption.value =
                    dropdownOptions.value[dropdownOptions.value.length - 1];
            } else {
                activeOption.value = null;
            }

            inputRef.value?.focus();
        }
    }

    function close(): void {
        dropdownIsOpen.value = false;
        activeOption.value = null;
    }

    function toggleDropdown(): void {
        if (!dropdownIsOpen.value) {
            openSelected();
        } else {
            close();
        }
    }

    function setNextOption(): void {
        if (activeOption.value && hasMultipleOptions.value) {
            const index = dropdownOptions.value.indexOf(activeOption.value);

            if (index === dropdownOptions.value.length - 1) {
                activeOption.value = dropdownOptions.value[0];
            } else {
                activeOption.value = dropdownOptions.value[index + 1];
            }
        } else {
            activeOption.value = dropdownOptions.value[0];
        }
    }

    function setPreviousOption(): void {
        if (activeOption.value && hasMultipleOptions.value) {
            const index = dropdownOptions.value.indexOf(activeOption.value);

            if (index === 0) {
                activeOption.value =
                    dropdownOptions.value[dropdownOptions.value.length - 1];
            } else {
                activeOption.value = dropdownOptions.value[index - 1];
            }
        } else {
            activeOption.value =
                dropdownOptions.value[dropdownOptions.value.length - 1];
        }
    }

    function onInputClick(): void {
        toggleDropdown();
    }

    async function onInputFocus(): Promise<void> {
        await nextTick(); // wait for any formatting

        filter.value = inputRef.value?.value ?? "";
        selectMode.value = options.value
            ? options.value.includes(filter.value)
            : false;
    }

    async function onInputKeyDown(event: KeyboardEvent): Promise<void> {
        let flag = false;

        if (event.ctrlKey || event.shiftKey) {
            return;
        }

        switch (event.key) {
            case "Enter":
                if (dropdownIsOpen.value) {
                    if (activeOption.value) {
                        selectOption(activeOption.value);
                        flag = true;
                    }
                    close();
                } else {
                    openSelected();
                }

                break;

            case "Down":
            case "ArrowDown":
                if (dropdownIsOpen.value) {
                    setNextOption();
                } else {
                    openSelected("first");
                }

                flag = true;
                break;

            case "Up":
            case "ArrowUp":
                if (dropdownIsOpen.value) {
                    setPreviousOption();
                } else {
                    openSelected("last");
                }

                flag = true;
                break;

            case "Esc":
            case "Escape":
                if (dropdownIsOpen.value) {
                    close();
                }

                flag = true;
                break;

            case "Tab":
                if (dropdownIsOpen.value) {
                    close();
                }
                break;

            default:
                break;
        }

        if (flag) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    function onInputKeyUp(): void {
        if (!inputRef.value) {
            throw new Error("missing input ref");
        }

        if (filter.value === inputRef.value.value) {
            return;
        }

        filter.value = inputRef.value.value;
        activeOption.value = null;
        selectMode.value = false;

        if (!dropdownIsOpen.value) {
            openSelected();
        } else if (!hasOptions.value) {
            close();
        }
    }
}
