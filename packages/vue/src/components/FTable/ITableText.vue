<script setup lang="ts" generic="T">
import { ref, useTemplateRef } from "vue";
import { assertRef, focus } from "@fkui/logic";
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

function onStartEdit(): void {
    assertRef(tdElement);
    assertRef(inputElement);

    const { width } = tdElement.value.getBoundingClientRect();
    model.value = column.value(row);
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
    if (event.target === viewElement.value) {
        onStartEdit();
    }
}

function onViewingKeydown(event: KeyboardEvent): void {
    if (isAlphanumeric(event) || event.key === "Enter") {
        event.stopPropagation();
        onStartEdit();
    }
}

function onEditingKeydown(event: KeyboardEvent): void {
    assertRef(viewElement);
    assertRef(inputElement);

    event.stopPropagation();

    if (event.key === "Enter") {
        column.update(row, model.value);
        onStopEdit({ reason: "enter" });
    }

    if (event.key === "Escape") {
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
        </div>
    </td>
    <td v-else>
        {{ column.value(row) }}
    </td>
</template>
