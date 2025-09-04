<script setup lang="ts" generic="T">
import { nextTick, type Ref, ref, useTemplateRef, watchEffect } from "vue";
import { assertRef, assertSet, ElementIdService } from "@fkui/logic";
import { IComboboxDropdown } from "../../internal-components";
import { useStartStopEdit } from "./start-stop-edit";
import { NormalizedTableColumnSelect } from "./table-column";

// Props
// const { modelValue, options, title } = defineProps<{
//     modelValue: string;
//     options: string[];
//     title: string;
// }>();

const { row, column } = defineProps<{
    row: T;
    column: NormalizedTableColumnSelect<T>;
}>();

// Editing in progress
const editing = ref(false);
const editRef = useTemplateRef("edit");

const { startEdit, stopEdit } = useStartStopEdit();

const viewValue = ref(column.value(row));

async function onCellDoubleClick(): Promise<void> {
    editing.value = true;
    await nextTick();
    assertSet(startEdit);
    assertRef(editRef);
    startEdit(editRef.value);
}

async function onCellKeyDown(e: KeyboardEvent): Promise<void> {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        startEditing(e);
    }
}

async function onCellClick(e: MouseEvent): Promise<void> {
    if (editing.value) {
        return;
    }
    startEditing(e);
}

async function startEditing(e: UIEvent): Promise<void> {
    e.preventDefault();
    editing.value = true;
    await nextTick();
    assertSet(startEdit);
    assertRef(editRef);
    startEdit(editRef.value);
    openSelected("first");
}

async function onDropdownSelect(value: string): Promise<void> {
    close();
    submit();
    viewValue.value = value;
    assertSet(stopEdit);
    stopEdit("enter");
}

function onDropdownClose(): void {
    assertSet(stopEdit);
    stopEdit("escape");
}

const dropdownId = ElementIdService.generateElementId();
const dropdownIsOpen = ref(false);
const activeOptionId = ElementIdService.generateElementId();
const activeOption: Ref<string | null> = ref(null);

// activeOption trigger: sets input aria-activedescendant
watchEffect(async () => {
    if (!editRef.value) {
        return;
    }

    if (activeOption.value) {
        editRef.value.setAttribute("aria-activedescendant", activeOptionId);
    } else {
        editRef.value.removeAttribute("aria-activedescendant");
    }
});

async function openSelected(fallback: null | "first" | "last" = null): Promise<void> {
    dropdownIsOpen.value = true;
    await nextTick();

    if (viewValue.value) {
        activeOption.value = viewValue.value;
    } else if (fallback === "first") {
        activeOption.value = column.options[0];
    } else if (fallback === "last") {
        activeOption.value = column.options[column.options.length - 1];
    } else {
        activeOption.value = null;
    }

    editRef.value?.focus();
}

function close(): void {
    dropdownIsOpen.value = false;
    activeOption.value = null;
}

function setNextOption(): void {
    if (activeOption.value) {
        const index = column.options.indexOf(activeOption.value);

        if (index === column.options.length - 1) {
            activeOption.value = column.options[0];
        } else {
            activeOption.value = column.options[index + 1];
        }
    } else {
        activeOption.value = column.options[0];
    }
}

function setPreviousOption(): void {
    if (activeOption.value) {
        const index = column.options.indexOf(activeOption.value);

        if (index === 0) {
            activeOption.value = column.options[column.options.length - 1];
        } else {
            activeOption.value = column.options[index - 1];
        }
    } else {
        activeOption.value = column.options[column.options.length - 1];
    }
}

async function onEditKeyDown(e: KeyboardEvent): Promise<void> {
    assertSet(stopEdit);

    switch (e.code) {
        case "Escape":
            e.preventDefault();
            cancel();
            stopEdit("escape");
            break;
        case "Enter":
        case "NumpadEnter":
            e.preventDefault();
            submit();
            if (activeOption.value) {
                viewValue.value = activeOption.value;
            }
            close();
            stopEdit("enter");
            break;
        case "Tab":
            e.preventDefault();
            cancel();
            stopEdit(e.shiftKey ? "shift-tab" : "tab");
            break;
        case "ArrowDown":
            e.preventDefault();
            if (dropdownIsOpen.value) {
                setNextOption();
            } else {
                openSelected("first");
            }
            break;
        case "ArrowUp":
            e.preventDefault();
            if (dropdownIsOpen.value) {
                setPreviousOption();
            } else {
                openSelected("last");
            }
            break;
        default:
            break;
    }
}

async function onEditBlur(): Promise<void> {
    if (editing.value) {
        dropdownIsOpen.value = false;
        editing.value = false;
        await nextTick();
        assertSet(stopEdit);
        stopEdit("blur");
    }
}

async function submit(): Promise<void> {
    editing.value = false;
    await nextTick();
}

function cancel(): void {
    assertSet(stopEdit);
    stopEdit("escape");
}
</script>

<template>
    <td tabindex="-1" @dblclick.stop="onCellDoubleClick" @keydown="onCellKeyDown" @click.stop="onCellClick">
        <div v-show="!editing">{{ viewValue }}</div>
        <div
            v-show="editing"
            ref="edit"
            role="combobox"
            tabindex="0"
            aria-expanded
            :aria-controls="dropdownId"
            aria-autocomplete="list"
            @click.stop
            @dblclick.prevent
            @keydown.stop="onEditKeyDown"
            @focusout="onEditBlur"
        >
            {{ viewValue }}
        </div>

        <i-combobox-dropdown
            v-show="editing"
            id="dropdownId"
            :is-open="dropdownIsOpen"
            :options="column.options"
            :active-option
            :active-option-id
            :input-node="editRef as HTMLInputElement"
            @select="onDropdownSelect"
            @close="onDropdownClose"
        ></i-combobox-dropdown>
    </td>
</template>

<style lang="scss">
.input {
    border: none;
    background: inherit;
}
</style>
