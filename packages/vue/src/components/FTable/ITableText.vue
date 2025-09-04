<script setup lang="ts" generic="T">
import { computed, onMounted, ref, useTemplateRef } from "vue";
import { assertRef, focus, ValidationService, type ValidityEvent } from "@fkui/logic";
import { FIcon } from "../FIcon";
import { type NormalizedTableColumnText } from "./table-column";
import { useStartStopEdit } from "./start-stop-edit";

const { row, column } = defineProps<{
    row: T;
    column: NormalizedTableColumnText<T>;
}>();

const model = ref("");
const validity = ref<Pick<ValidityEvent, "isValid" | "validationMessage" | "validityMode">>({
    isValid: true,
    validationMessage: "",
    validityMode: "INITIAL",
});
const hasError = computed(() => validity.value.validityMode === "ERROR");
const wrapperClasses = computed(() => {
    return {
        "table-ng__cell": true,
        "table-ng__cell--text": true,
        "table-ng__cell--valid": !hasError.value,
        "table-ng__cell--error": hasError.value,
    };
});
const inputClasses = computed(() => {
    return {
        foobar: true,
        "table-ng__textedit": true,
    };
});
const tdElement = useTemplateRef("td");
const viewElement = useTemplateRef("view");
const inputElement = useTemplateRef("input");
const { startEdit, stopEdit } = useStartStopEdit();

onMounted(() => {
    if (inputElement.value) {
        ValidationService.addValidatorsToElement(inputElement.value, column.validation);
    }
});

function onStartEdit(modelValue: string): void {
    assertRef(tdElement);
    assertRef(inputElement);

    const { width } = tdElement.value.getBoundingClientRect();
    model.value = modelValue;
    tdElement.value.style.setProperty("width", `${width}px`);

    //focus(inputElement);
    startEdit(inputElement.value);
}

function onStopEdit(options: { reason: "enter" | "escape" }): void {
    const { reason } = options;

    focus(tdElement.value);
    stopEdit(reason);
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
        const oldValue = column.value(row);
        const newValue = model.value;
        column.update(row, newValue, oldValue);
        model.value = "";
        onStopEdit({ reason: "enter" });
    }

    if (event.key === "Escape") {
        model.value = "";
        onStopEdit({ reason: "escape" });
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

function isAlphanumeric({ key, ctrlKey, metaKey }: KeyboardEvent): boolean {
    // using the fact that special keys have a name with length > 1
    // ignores ctrl, meta key combinations
    return key.length === 1 && !ctrlKey && !metaKey;
}
</script>

<template>
    <td
        v-if="column.editable"
        ref="td"
        tabindex="-1"
        :class="wrapperClasses"
        @click.stop="onClickCell"
        @keydown="onKeydown"
    >
        <div v-if="column.editable" class="table-ng__textwrapper">
            <span ref="view" class="table-ng__textview">{{ column.value(row) }}</span>
            <input
                ref="input"
                v-model="model"
                :class="inputClasses"
                type="text"
                maxlength="40"
                tabindex="-1"
                @blur="onBlur"
                @validity="onValidity"
            />
            <f-icon v-if="hasError" name="error" class="table-ng__texticon"></f-icon>
            <f-icon v-else name="pen" class="table-ng__texticon"></f-icon>
        </div>
    </td>
    <td v-else tabindex="-1" class="table-ng__cell table-ng__cell--static">
        {{ column.value(row) }}
    </td>
</template>
