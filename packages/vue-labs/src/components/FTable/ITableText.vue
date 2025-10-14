<script setup lang="ts" generic="T, K extends keyof T">
import { computed, onMounted, ref, useTemplateRef } from "vue";
import { type ValidityEvent, ValidationService, assertRef } from "@fkui/logic";
import { FIcon } from "@fkui/vue";
import { addInputValidators } from "./input-validators";
import { isAlphanumeric } from "./is-alphanumeric";
import { useStartStopEdit } from "./start-stop-edit";
import { type NormalizedTableColumnText } from "./table-column";

const { row, column } = defineProps<{
    row: T;
    column: NormalizedTableColumnText<T, K>;
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
    const value = column.label(row);
    return value.length > 0 ? value : undefined;
});
const tdElement = useTemplateRef("td");
const viewElement = useTemplateRef("view");
const inputElement = useTemplateRef("input");
const { stopEdit } = useStartStopEdit();

onMounted(() => {
    if (inputElement.value) {
        addInputValidators(inputElement.value, column.type);
        ValidationService.addValidatorsToElement(inputElement.value, column.validation);
    }
});

function onStartEdit(modelValue: string): void {
    if (inEdit.value) {
        return;
    }
    inEdit.value = true;
    assertRef(tdElement);
    assertRef(inputElement);

    const { width } = tdElement.value.getBoundingClientRect();
    model.value = modelValue;
    tdElement.value.style.setProperty("width", `${String(width)}px`);

    inputElement.value.focus();
}

function onStopEdit(options: { reason: "enter" | "escape" | "tab" | "shift-tab" }): void {
    const { reason } = options;
    inEdit.value = false;
    assertRef(inputElement);
    inputElement.value.tabIndex = -1;
    stopEdit(inputElement.value, reason);
}

function onClickCell(event: MouseEvent): void {
    assertRef(tdElement);

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
            <f-icon v-if="hasError" name="error" class="table-ng__editable__icon"></f-icon>
            <f-icon v-else name="pen" class="table-ng__editable__icon"></f-icon>
        </div>
    </td>
    <td v-else ref="td" tabindex="-1" :class="staticClasses">
        {{ column.value(row) }}
    </td>
</template>
