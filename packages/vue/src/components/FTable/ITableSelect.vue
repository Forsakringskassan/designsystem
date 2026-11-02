<script setup lang="ts" generic="T, K extends keyof T">
import { computed, nextTick, ref, useTemplateRef, watch, watchEffect } from "vue";
import { type ValidityEvent, ElementIdService, ValidationService, assertRef } from "@fkui/logic";
import { useElementHover, useFocusWithin } from "@vueuse/core";
import { IPopupError } from "../../internal-components";
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

const selectId = ElementIdService.generateElementId();
const selectElement = useTemplateRef("select");

const tdElement = useTemplateRef("td");
const arrowAnchorElement = useTemplateRef("arrowAnchor");

const isHovered = useElementHover(tdElement, {
    delayEnter: 200,
});

const { focused } = useFocusWithin(tdElement);

const openPopupError = computed(() => {
    if (!tdElement.value) {
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

const viewModeAriaInvalid = computed(() => hasError.value || undefined);

const ariaLabel = computed(() => {
    const value = column.label(row);
    return value.length > 0 ? value : undefined;
});

const visible = computed((): boolean => isVisible(column.visible, row));

function onCellKeyDown(event: KeyboardEvent): void {
    if (event.target !== tdElement.value) {
        return;
    }

    if (!["Enter", "NumpadEnter", "Space"].includes(event.code)) {
        return;
    }

    const select = selectElement.value;
    if (!select) {
        return;
    }

    event.preventDefault();
    select.focus();
    select.showPicker();
}

function onCellClick(event: MouseEvent): void {
    if (event.target === selectElement.value) {
        return;
    }

    selectElement.value?.focus();
}

async function onSelectChange(event: Event): Promise<void> {
    const select = event.target as HTMLSelectElement;
    const value = select.value;
    const oldValue = column.selected(row);

    viewValue.value = value;
    if (value !== oldValue) {
        column.update(row, value, oldValue);
    }

    if (column.hasValidation) {
        await nextTick();
        await ValidationService.validateElement(select);
    }

    const cell = select.closest<HTMLTableCellElement>("td, th");

    if (cell) {
        await stopEdit(cell, "enter");
    }
}

function onValidity(event: CustomEvent<ValidityEvent>): void {
    const { isValid, validationMessage, validityMode } = event.detail;

    validity.value = {
        isValid,
        validationMessage,
        validityMode,
    };

    assertRef(selectElement);

    dispatchComponentValidityEvent(selectElement.value, {
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
    selectElement,
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
            inEdit: false,
        });
    } else {
        emit("closeError", {
            anchor: tdElement.value ?? undefined,
            arrowAnchor: arrowAnchorElement.value ?? undefined,
            message: validity.value.validationMessage,
            hasFocus: focused.value,
            hasHover: isHovered.value,
            inEdit: false,
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
            <div class="table-ng__select-wrapper">
                <select
                    :id="selectId"
                    ref="select"
                    v-model="viewValue"
                    tabindex="-1"
                    class="table-ng__editable"
                    :aria-label
                    :aria-invalid="hasError ? true : undefined"
                    :aria-required="Boolean(column.validation.required)"
                    @change="onSelectChange"
                    @validity="onValidity"
                    @pending-validity="onPendingValidity"
                >
                    <option v-for="option in column.options(row)" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
                <span ref="arrowAnchor" />
            </div>

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
