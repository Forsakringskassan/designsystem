<script setup lang="ts" generic="T, K extends keyof T">
import { nextTick, type Ref, ref, useTemplateRef, watchEffect } from "vue";
import { assertRef, assertSet, ElementIdService } from "@fkui/logic";
import { IComboboxDropdown, FIcon } from "@fkui/vue";
import { useStartStopEdit } from "./start-stop-edit";
import { type NormalizedTableColumnSelect } from "./table-column";
import { type FTableActivateCellEvent } from "./events";

// Props
// const { modelValue, options, title } = defineProps<{
//     modelValue: string;
//     options: string[];
//     title: string;
// }>();

const { row, column } = defineProps<{
    row: T;
    column: NormalizedTableColumnSelect<T, K>;
}>();

// Editing in progress
const editing = ref(false);
const editRef = useTemplateRef("edit");

const { stopEdit } = useStartStopEdit();

const viewValue = ref(column.value(row));
const tdRef = useTemplateRef("td");

function onActivateCell(e: CustomEvent<FTableActivateCellEvent>): void {
    assertRef(tdRef);
    tdRef.value.tabIndex = 0;

    if (e.detail.focus) {
        tdRef.value.focus();
    }
}

/* eslint-disable-next-line @typescript-eslint/require-await -- technical debt */
async function onCellKeyDown(e: KeyboardEvent): Promise<void> {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        startEditing(e);
    }
}

/* eslint-disable-next-line @typescript-eslint/require-await -- technical debt */
async function onCellClick(e: MouseEvent): Promise<void> {
    if (editing.value) {
        return;
    }
    startEditing(e);
}

async function startEditing(e: UIEvent): Promise<void> {
    assertRef(editRef);
    e.preventDefault();
    editing.value = true;
    await nextTick();
    editRef.value.tabIndex = 0;
    editRef.value.focus();
    openSelected("first");
}

/* eslint-disable-next-line @typescript-eslint/require-await -- technical debt */
async function onDropdownSelect(value: string): Promise<void> {
    assertRef(editRef);
    assertSet(stopEdit);

    close();
    submit();
    viewValue.value = value;
    stopEdit(editRef.value, "enter");
}

function onDropdownClose(): void {
    assertRef(editRef);
    assertSet(stopEdit);
    stopEdit(editRef.value, "escape");
}

const dropdownId = ElementIdService.generateElementId();
const dropdownIsOpen = ref(false);
const activeOptionId = ElementIdService.generateElementId();
const activeOption: Ref<string | null> = ref(null);

// activeOption trigger: sets input aria-activedescendant
/* eslint-disable-next-line @typescript-eslint/require-await -- technical debt */
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

/* eslint-disable-next-line @typescript-eslint/require-await -- technical debt */
async function onEditKeyDown(e: KeyboardEvent): Promise<void> {
    assertRef(editRef);
    assertSet(stopEdit);

    switch (e.code) {
        case "Escape":
            e.preventDefault();
            cancel();
            stopEdit(editRef.value, "escape");
            break;
        case "Enter":
        case "NumpadEnter":
            e.preventDefault();
            submit();
            if (activeOption.value) {
                viewValue.value = activeOption.value;
            }
            close();
            stopEdit(editRef.value, "enter");
            break;
        case "Tab":
            e.preventDefault();
            cancel();
            stopEdit(editRef.value, e.shiftKey ? "shift-tab" : "tab");
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
        assertSet(stopEdit);
        assertRef(editRef);

        dropdownIsOpen.value = false;
        editing.value = false;
        await nextTick();
        stopEdit(editRef.value, "blur");
    }
}

async function submit(): Promise<void> {
    editing.value = false;
    await nextTick();
}

function cancel(): void {
    assertSet(stopEdit);
    assertRef(editRef);
    stopEdit(editRef.value, "escape");
}
</script>

<template>
    <td
        v-if="column.editable(row)"
        ref="td"
        class="table-ng__cell table-ng__cell--select"
        tabindex="-1"
        @keydown="onCellKeyDown"
        @click.stop="onCellClick"
        @table-activate-cell="onActivateCell"
    >
        <div v-show="!editing" class="table-ng__editable">
            <span class="table-ng__editable__text">{{ viewValue }}</span>
            <f-icon name="pen" class="table-ng__editable__icon"></f-icon>
        </div>
        <div
            v-show="editing"
            ref="edit"
            role="combobox"
            tabindex="-1"
            aria-expanded
            :aria-controls="dropdownId"
            aria-autocomplete="list"
            class="table-ng__editable"
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
    <td
        v-else
        ref="td"
        tabindex="-1"
        class="table-ng__cell table-ng__cell--static"
        @table-activate-cell="onActivateCell"
    >
        {{ column.value(row) }}
    </td>
</template>

<style lang="scss">
.input {
    border: none;
    background: inherit;
}
</style>
