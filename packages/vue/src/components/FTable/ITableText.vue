<script setup lang="ts" generic="T">
import { ref, useTemplateRef } from "vue";
import { assertRef, focus } from "@fkui/logic";
import { FIcon } from "../FIcon";
import { type NormalizedTableColumnText } from "./table-column";
import { useStartStopEdit } from "./start-stop-edit";

const { row, column } = defineProps<{
    row: T;
    column: NormalizedTableColumnText<T>;
}>();

const model = ref("");
const tdElement = useTemplateRef("td");
const viewElement = useTemplateRef("view");
const inputElement = useTemplateRef("input");
const { startEdit, stopEdit } = useStartStopEdit();

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
    if (isAlphanumeric(event)){
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
        class="table-ng__cell table-ng__cell--text"
        @click.stop="onClickCell"
        @keydown="onKeydown"
    >
        <div v-if="column.editable" class="table-ng__textwrapper">
            <span ref="view" class="table-ng__textview">{{ column.value(row) }}</span>
            <input
                ref="input"
                v-model="model"
                class="foobar table-ng__textedit"
                type="text"
                maxlength="40"
                tabindex="-1"
                @blur="onBlur"
            />
            <f-icon name="pen" class="table-ng__texticon"></f-icon>
        </div>
    </td>
    <td v-else tabindex="-1" class="table-ng__cell table-ng__cell--static">
        {{ column.value(row) }}
    </td>
</template>
