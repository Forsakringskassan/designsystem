<script setup lang="ts" generic="T, K extends keyof T">
import { type Ref, computed, nextTick, ref, useTemplateRef, watch, watchEffect } from "vue";
import { type ValidityEvent, ElementIdService, ValidationService, assertRef, assertSet } from "@fkui/logic";
import { useElementHover, useFocusWithin } from "@vueuse/core";
import { IComboboxDropdown, IPopupError } from "../../internal-components";
import { dispatchComponentValidityEvent } from "../../utils";
import { isVisible } from "./is-visible";
import { type PopupError } from "./popup-error";
import { useStartStopEdit } from "./start-stop-edit";
import { type NormalizedTableColumnSelect } from "./table-column";

const {
    row,
    column,
    activeErrorAnchor = undefined,
} = defineProps<{
    row: T;
    column: NormalizedTableColumnSelect<T, K>;
    activeErrorAnchor?: HTMLElement;
}>();

const emit = defineEmits<{
    onError: [error: PopupError];
    closeError: [PopupError];
}>();

const validationSelectId = ElementIdService.generateElementId();

// Editing in progress
const editing = ref(false);
const editRef = useTemplateRef("edit");

const validationSelectElement = useTemplateRef("validationSelect");
const tdElement = useTemplateRef("td");
const arrowAnchorElement = useTemplateRef("arrowAnchor");

const isHovered = useElementHover(tdElement, {
    delayEnter: 200,
});

const { focused } = useFocusWithin(tdElement);

const openPopupError = computed(() => {
    if (!tdElement.value || dropdownIsOpen.value) {
        return false;
    }

    return tdElement.value === activeErrorAnchor;
});

const wrapperClasses = computed(() => ({
    "table-ng__cell": true,
    "table-ng__cell--select": true,
    "table-ng__cell--valid": !hasError.value,
    "table-ng__cell--error": hasError.value,
}));

const { stopEdit } = useStartStopEdit();

const viewValue = ref(column.selected(row));

const cellId = ElementIdService.generateElementId();

const validity = ref<Pick<ValidityEvent, "isValid" | "validationMessage" | "validityMode">>({
    isValid: true,
    validationMessage: "",
    validityMode: "INITIAL",
});

const hasError = computed(() => validity.value.validityMode === "ERROR");

const viewModeAriaInvalid = computed(() => (!editing.value && hasError.value) || undefined);

const viewModeErrorMessage = computed(() =>
    !editing.value && hasError.value ? validity.value.validationMessage : undefined,
);

const ariaLabel = computed(() => {
    const value = column.label(row);
    return value.length > 0 ? value : undefined;
});

const dropdownId = ElementIdService.generateElementId();
const dropdownIsOpen = ref(false);
const activeOptionId = ElementIdService.generateElementId();
const activeOption: Ref<string | null> = ref(null);

const visible = computed((): boolean => isVisible(column.visible, row));
const options = computed(() => column.options(row));

async function onCellKeyDown(e: KeyboardEvent): Promise<void> {
    /* eslint-disable-next-line unicorn/prefer-includes-over-repeated-comparisons -- technical debt */
    if (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "Space") {
        await startEditing(e);
    }
}

async function onCellClick(e: MouseEvent): Promise<void> {
    if (editing.value) {
        return;
    }
    await startEditing(e);
}

async function startEditing(e: UIEvent): Promise<void> {
    assertRef(editRef);
    e.preventDefault();

    editing.value = true;
    await nextTick();
    editRef.value.tabIndex = 0;

    editRef.value.focus();
    await openDropdown();
}

async function selectDropdownOption(value: string): Promise<void> {
    assertRef(editRef);
    assertSet(stopEdit);

    const oldValue = viewValue.value;
    viewValue.value = value;
    column.update(row, value, oldValue);

    if (column.hasValidation && validationSelectElement.value) {
        await nextTick();
        await ValidationService.validateElement(validationSelectElement.value);
    }
    closeDropdown();
    await stopEdit(editRef.value, "enter");
}

async function onDropdownClose(): Promise<void> {
    assertSet(stopEdit);
    assertRef(editRef);

    closeDropdown();
    await stopEdit(editRef.value, "blur");
}

async function openDropdown(): Promise<void> {
    dropdownIsOpen.value = true;
    await nextTick();

    if (viewValue.value) {
        activeOption.value = viewValue.value;
    } else {
        activeOption.value = null;
    }

    assertRef(editRef);
    editRef.value.focus();
}

function closeDropdown(): void {
    dropdownIsOpen.value = false;
    editing.value = false;
    activeOption.value = null;
}

function setNextOption(): void {
    if (activeOption.value) {
        const index = options.value.indexOf(activeOption.value);

        if (index === options.value.length - 1) {
            activeOption.value = options.value[0];
        } else {
            activeOption.value = options.value[index + 1];
        }
    } else {
        activeOption.value = options.value[0];
    }
}

function setPreviousOption(): void {
    if (activeOption.value) {
        const index = options.value.indexOf(activeOption.value);

        if (index === 0) {
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
            activeOption.value = options.value.at(-1)!;
        } else {
            activeOption.value = options.value[index - 1];
        }
    } else {
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
        activeOption.value = options.value.at(-1)!;
    }
}

async function onEditKeyDown(e: KeyboardEvent): Promise<void> {
    assertRef(editRef);
    assertSet(stopEdit);

    switch (e.code) {
        case "Escape":
            e.preventDefault();
            closeDropdown();
            await stopEdit(editRef.value, "escape");
            break;
        case "Enter":
        case "NumpadEnter":
            /* eslint-disable-next-line unicorn/no-late-event-control -- false positive? */
            e.preventDefault();
            await selectDropdownOption(activeOption.value ?? viewValue.value);
            await stopEdit(editRef.value, "enter");
            break;
        case "Tab":
            /* eslint-disable-next-line unicorn/no-late-event-control -- false positive? */
            e.preventDefault();
            closeDropdown();
            await stopEdit(editRef.value, e.shiftKey ? "shift-tab" : "tab");
            break;
        case "ArrowDown":
            /* eslint-disable-next-line unicorn/no-late-event-control -- false positive? */
            e.preventDefault();
            setNextOption();
            break;
        case "ArrowUp":
            /* eslint-disable-next-line unicorn/no-late-event-control -- false positive? */
            e.preventDefault();
            setPreviousOption();
            break;
        case "Space":
            // Prevent default scrolling with space while editing dropdown.
            /* eslint-disable-next-line unicorn/no-late-event-control -- false positive? */
            e.preventDefault();
            break;
        default:
            break;
    }
}

async function onEditBlur(event: FocusEvent): Promise<void> {
    const validTarget = event.relatedTarget && event.relatedTarget instanceof HTMLElement;
    if (validTarget && event.relatedTarget.closest(".combobox__listbox")) {
        return;
    }

    assertSet(stopEdit);
    assertRef(editRef);
    closeDropdown();
    await nextTick();
    await stopEdit(editRef.value, "blur");
}

function onValidity(event: CustomEvent<ValidityEvent>): void {
    const { isValid, validationMessage, validityMode } = event.detail;

    validity.value = {
        isValid,
        validationMessage,
        validityMode,
    };

    assertRef(validationSelectElement);

    dispatchComponentValidityEvent(validationSelectElement.value, {
        ...event.detail,
        errorMessage: validationMessage,
        focusElementId: cellId,
    });
}

function onPendingValidity(): void {
    validity.value = {
        ...validity.value,
        validityMode: "INITIAL",
    };
}

watch(
    () => column.selected(row),
    (value) => {
        viewValue.value = value;
    },
);

watch(
    validationSelectElement,
    (element) => {
        if (!element || !column.hasValidation) {
            return;
        }

        ValidationService.addValidatorsToElement(element, column.validation);

        void nextTick().then(() => ValidationService.validateElement(element));
    },
    { flush: "post" },
);

watchEffect(() => {
    if (hasError.value) {
        emit("onError", {
            anchor: tdElement.value ?? undefined,
            arrowAnchor: arrowAnchorElement.value ?? undefined,
            message: validity.value.validationMessage,
            hasFocus: focused.value,
            hasHover: isHovered.value,
            inEdit: editing.value,
        });
    } else {
        emit("closeError", {
            anchor: tdElement.value ?? undefined,
            arrowAnchor: arrowAnchorElement.value ?? undefined,
            message: validity.value.validationMessage,
            hasFocus: focused.value,
            hasHover: isHovered.value,
            inEdit: editing.value,
        });
    }
});
</script>

<template>
    <td
        v-if="column.editable(row)"
        :id="cellId"
        ref="td"
        :class="wrapperClasses"
        :aria-invalid="viewModeAriaInvalid"
        tabindex="-1"
        @keydown="onCellKeyDown"
        @click.stop="onCellClick"
    >
        <template v-if="visible">
            <!--Temporary validation element for table select columns.
            Update when implementing SFKUI-8257
        -->
            <select
                :id="validationSelectId"
                ref="validationSelect"
                v-model="viewValue"
                tabindex="-1"
                aria-hidden="true"
                class="sr-only"
                @validity="onValidity"
                @pending-validity="onPendingValidity"
            >
                <option value="" disabled>Välj...</option>
                <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
            </select>
            <div v-show="!editing" class="table-ng__editable">
                <span class="table-ng__editable__text">{{ viewValue }}</span>

                <span ref="arrowAnchor" aria-hidden="true" />

                <span v-if="viewModeErrorMessage" class="sr-only">
                    {{ viewModeErrorMessage }}
                </span>
            </div>
            <div
                v-show="editing"
                ref="edit"
                role="combobox"
                tabindex="-1"
                :aria-expanded="dropdownIsOpen"
                :aria-controls="dropdownIsOpen ? dropdownId : undefined"
                :aria-activedescendant="dropdownIsOpen ? activeOptionId : undefined"
                aria-autocomplete="list"
                class="table-ng__editable"
                :aria-label
                :aria-invalid="hasError ? true : undefined"
                :aria-required="Boolean(column.validation.required)"
                @click.stop
                @dblclick.prevent
                @keydown.stop="onEditKeyDown"
                @focusout="(e) => onEditBlur(e)"
            >
                <span class="table-ng__editable__text">{{ viewValue }}</span>
            </div>

            <i-combobox-dropdown
                v-show="editing"
                :id="dropdownId"
                :is-open="dropdownIsOpen"
                :options
                :active-option
                :active-option-id
                :input-node="editRef as HTMLInputElement"
                @select="selectDropdownOption"
                @close="onDropdownClose"
            ></i-combobox-dropdown>

            <i-popup-error
                :anchor="tdElement"
                :is-open="openPopupError"
                :error-message="validity.validationMessage"
                :arrow-anchor="arrowAnchorElement"
                layout="f-table"
            ></i-popup-error>
        </template>
    </td>
    <td v-else tabindex="-1" class="table-ng__cell table-ng__cell--static">
        <div v-if="visible" class="table-ng__cell--static__text">{{ column.selected(row) }}</div>
    </td>
</template>
