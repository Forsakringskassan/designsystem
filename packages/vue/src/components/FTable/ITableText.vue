<script setup lang="ts" generic="T">
import { ref, useTemplateRef } from "vue";
import { assertRef, focus } from "@fkui/logic";
import { type NormalizedTableColumnTextField } from "./table-column";
import { useStartStopEdit } from "./start-stop-edit";

const { row, column } = defineProps<{
    row: T;
    column: NormalizedTableColumnTextField<T>;
}>();

const value = ref("");
const tdElement = useTemplateRef("td");
const viewElement = useTemplateRef("view");
const inputElement = useTemplateRef("input");
const { startEdit, stopEdit } = useStartStopEdit();

function onClickCell(event: MouseEvent): void {
    assertRef(inputElement);

    if (event.target === viewElement.value) {
        value.value = column.value(row);

        //focus(inputElement.value);
        startEdit(inputElement.value);
    }
}

function onViewingKeydown(event: KeyboardEvent): void {
    assertRef(inputElement);

    if (isAlphanumeric(event) || event.key === "Enter") {
        event.stopPropagation();
        value.value = column.value(row);

        //focus(inputElement.value);
        startEdit(inputElement.value);
    }
}

function onEditingKeydown(event: KeyboardEvent): void {
    event.stopPropagation();

    if (event.key === "Enter") {
        focus(tdElement.value);
        column.update(row, value.value);
        stopEdit("enter");
    }

    if (event.key === "Escape") {
        focus(tdElement.value);
        stopEdit("escape");
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

function isAlphanumeric({ key, ctrlKey, metaKey }: KeyboardEvent): boolean {
    // using the fact that special keys have a name with length > 1
    // ignores ctrl, meta key combinations
    return key.length === 1 && !ctrlKey && !metaKey;
}
</script>

<template>
    <td v-if="column.editable" ref="td" tabindex="-1" class="asdf" @click.stop="onClickCell" @keydown="onKeydown">
        <div v-if="column.editable" class="table-textfield-cell">
            <span ref="view" class="table-textfield-cell__view">{{ column.value(row) }}</span>
            <input
                ref="input"
                v-model="value"
                class="foobar table-textfield-cell__edit"
                type="text"
                maxlength="40"
                tabindex="-1"
            />
        </div>
    </td>
    <td v-else>
        {{ column.value(row) }}
    </td>
</template>

<style lang="scss">
td {
    padding: 0 !important;
}

.table-textfield-cell {
    display: flex;
    border: 1px solid hotpink;

    &:focus-within {
        .table-textfield-cell__view {
            display: none;
        }

        .table-textfield-cell__edit {
            flex: 1 0 auto;
            width: auto;
        }
    }
}

.table-textfield-cell__view {
    flex: 1 1 auto;
}

.table-textfield-cell__edit {
    flex: 0 1 0px;
    width: 0px;
    border: none;
    padding: 0;
}
</style>
