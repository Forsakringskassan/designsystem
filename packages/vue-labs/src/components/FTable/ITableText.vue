<script setup lang="ts" generic="T, K extends keyof T">
import { computed, onMounted, ref, useTemplateRef, watchEffect } from "vue";
import { type ValidityEvent, ValidationService, assertRef } from "@fkui/logic";
import { FIcon, IPopupError } from "@fkui/vue";
import { useElementHover, useFocusWithin } from "@vueuse/core";
import { type PopupError } from "./PopupEror";
import { addInputValidators } from "./input-validators";
import { isAlphanumeric } from "./is-alphanumeric";
import { useStartStopEdit } from "./start-stop-edit";
import { type NormalizedTableColumnText } from "./table-column";

const {
    row,
    column,
    activeErrorAnchor = undefined,
} = defineProps<{
    row: T;
    column: NormalizedTableColumnText<T, K>;
    activeErrorAnchor?: HTMLElement;
}>();

const emit = defineEmits<{
    onError: [error: PopupError];
    closeError: [error: PopupError];
}>();

const model = ref("");
const inEdit = ref(false);

const validity = ref<Pick<ValidityEvent, "isValid" | "validationMessage" | "validityMode">>({
    isValid: true,
    validationMessage: "",
    validityMode: "INITIAL",
});
const hasError = computed(() => validity.value.validityMode === "ERROR");
const divClasses = computed(() => {
    return {
        "table-ng__editable": true,
        "table-ng__editable__numeric": column.tnum,
    };
});

const wrapperClasses = computed(() => {
    return {
        "table-ng__cell": true,
        "table-ng__cell--text": true,
        "table-ng__cell--valid": !hasError.value,
        "table-ng__cell--error": hasError.value,
        "table-ng__cell--align-left": column.align === "left",
        "table-ng__cell--align-right": column.align === "right",
    };
});

const staticClasses = computed(() => {
    return {
        "table-ng__cell": true,
        "table-ng__cell--static": true,
        "table-ng__cell--align-left": column.align === "left",
        "table-ng__cell--align-right": column.align === "right",
    };
});
const inputClasses = computed(() => {
    return {
        foobar: true,
        "table-ng__textedit": true,
    };
});
const ariaLabel = computed(() => {
    let value = column.label(row);

    if (hasError.value) {
        value = `${value} ${validity.value.validationMessage}`;
    }

    return value.length > 0 ? value : undefined;
});

const tdElement = useTemplateRef("td");
const viewElement = useTemplateRef("view");
const inputElement = useTemplateRef("input");
const penElement = useTemplateRef("pen");
const { stopEdit } = useStartStopEdit();
const isHovered = useElementHover(tdElement, { delayEnter: 200 });
const { focused } = useFocusWithin(tdElement);

const openPopupError = computed(() => {
    if (!tdElement.value) {
        return false;
    }
    return tdElement.value === activeErrorAnchor;
});

onMounted(() => {
    if (inputElement.value) {
        addInputValidators(inputElement.value, column.type);
        ValidationService.addValidatorsToElement(inputElement.value, column.validation);
    }
});

watchEffect(() => {
    if (hasError.value) {
        emit("onError", {
            anchor: tdElement.value ?? undefined,
            arrowAnchor: penElement.value ?? undefined,
            message: validity.value.validationMessage,
            hasFocus: focused.value,
            hasHover: isHovered.value,
            inEdit: inEdit.value,
        });
    } else {
        emit("closeError", {
            anchor: tdElement.value ?? undefined,
            arrowAnchor: penElement.value ?? undefined,
            message: validity.value.validationMessage,
            hasFocus: focused.value,
            hasHover: isHovered.value,
            inEdit: inEdit.value,
        });
    }
});

function onStartEdit(modelValue: string): void {
    if (inEdit.value) {
        return;
    }
    inEdit.value = true;
    assertRef(tdElement);
    assertRef(inputElement);

    /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call -- technical debt */
    const { width } = tdElement.value.getBoundingClientRect();
    model.value = modelValue;
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
    tdElement.value.style.setProperty("width", `${String(width)}px`);

    inputElement.value.tabIndex = 0;
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
    inputElement.value.focus();
}

function onStopEdit(options: { reason: "enter" | "escape" | "tab" | "shift-tab" }): void {
    const { reason } = options;
    inEdit.value = false;
    assertRef(inputElement);
    inputElement.value.tabIndex = -1;
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
    stopEdit(inputElement.value, reason);
}

function onClickCell(event: MouseEvent): void {
    assertRef(tdElement);

    /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
    if (tdElement.value.contains(event.target as Node)) {
        const value = column.value(row);
        onStartEdit(value);
    }
}

function onViewingKeydown(event: KeyboardEvent): void {
    if (isAlphanumeric(event)) {
        event.stopPropagation();
        onStartEdit("");
    }

    if (event.key === "Enter") {
        event.stopPropagation();
        const value = column.value(row);
        onStartEdit(value);
    }
}

function onEditingKeydown(event: KeyboardEvent): void {
    assertRef(viewElement);
    assertRef(inputElement);

    event.stopPropagation();

    if (event.key === "Enter") {
        event.preventDefault();
        const oldValue = column.value(row);
        const newValue = model.value;
        column.update(row, newValue, oldValue);
        model.value = "";
        onStopEdit({ reason: "enter" });
    }

    if (event.key === "Escape") {
        event.preventDefault();
        model.value = "";
        onStopEdit({ reason: "escape" });
    }

    if (event.key === "Tab") {
        event.preventDefault();
        const oldValue = column.value(row);
        const newValue = model.value;
        column.update(row, newValue, oldValue);
        model.value = "";
        onStopEdit({ reason: event.shiftKey ? "shift-tab" : "tab" });
    }
}

function onKeydown(event: KeyboardEvent): void {
    const editing = document.activeElement === inputElement.value;

    if (editing) {
        onEditingKeydown(event);
    } else {
        onViewingKeydown(event);
    }
}

function onBlur(): void {
    inEdit.value = false;
    assertRef(tdElement);
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
    tdElement.value.style.removeProperty("width");
    const isDirty = model.value !== "";
    if (isDirty) {
        const oldValue = column.value(row);
        const newValue = model.value;
        column.update(row, newValue, oldValue);
    }
}

function onValidity(event: CustomEvent<ValidityEvent>): void {
    const { isValid, validationMessage, validityMode } = event.detail;
    validity.value = { isValid, validationMessage, validityMode };
}
</script>

<template>
    <td
        v-if="column.editable(row)"
        ref="td"
        tabindex="-1"
        :class="wrapperClasses"
        @click.stop="onClickCell"
        @keydown="onKeydown"
    >
        <div :class="divClasses">
            <div v-if="column.align === 'right'" ref="pen">
                <f-icon name="pen" class="table-ng__editable__icon"></f-icon>
            </div>
            <span ref="view" class="table-ng__editable__text">{{ column.value(row) }}</span>
            <input
                ref="input"
                v-model="model"
                :class="inputClasses"
                type="text"
                maxlength="40"
                tabindex="-1"
                :aria-label
                @blur="onBlur"
                @validity="onValidity"
            />
            <div v-if="column.align === 'left'" ref="pen">
                <f-icon name="pen" class="table-ng__editable__icon"></f-icon>
            </div>
        </div>
        <i-popup-error
            :anchor="tdElement"
            :is-open="openPopupError"
            :error-message="validity.validationMessage"
            :arrow-anchor="penElement"
            layout="f-table"
        ></i-popup-error>
    </td>
    <td v-else ref="td" tabindex="-1" :class="staticClasses">
        {{ column.value(row) }}
    </td>
</template>
