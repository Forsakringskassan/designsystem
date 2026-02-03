<script setup lang="ts" generic="T, K extends keyof T">
import { type Ref, computed, nextTick, ref, useTemplateRef } from "vue";
import { ElementIdService, assertRef, assertSet } from "@fkui/logic";
import { FIcon, IComboboxDropdown } from "@fkui/vue";
import { useStartStopEdit } from "./start-stop-edit";
import { type NormalizedTableColumnSelect } from "./table-column";

const { row, column } = defineProps<{
    row: T;
    column: NormalizedTableColumnSelect<T, K>;
}>();

// Editing in progress
const editing = ref(false);
const editRef = useTemplateRef("edit");

const { stopEdit } = useStartStopEdit();

const viewValue = ref(column.selected(row));

const ariaLabel = computed(() => {
    const value = column.label(row);
    return value.length > 0 ? value : undefined;
});

const dropdownId = ElementIdService.generateElementId();
const dropdownIsOpen = ref(false);
const activeOptionId = ElementIdService.generateElementId();
const activeOption: Ref<string | null> = ref(null);

async function onCellKeyDown(e: KeyboardEvent): Promise<void> {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
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
            e.preventDefault();
            await selectDropdownOption(activeOption.value ?? viewValue.value);
            await stopEdit(editRef.value, "enter");
            break;
        case "Tab":
            e.preventDefault();
            closeDropdown();
            await stopEdit(editRef.value, e.shiftKey ? "shift-tab" : "tab");
            break;
        case "ArrowDown":
            e.preventDefault();
            setNextOption();
            break;
        case "ArrowUp":
            e.preventDefault();
            setPreviousOption();
            break;
        case "Space":
            // Prevent default scrolling with space while editing dropdown.
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
</script>

<template>
    <td
        v-if="column.editable(row)"
        class="table-ng__cell table-ng__cell--select"
        tabindex="-1"
        @keydown="onCellKeyDown"
        @click.stop="onCellClick"
    >
        <div v-show="!editing" class="table-ng__editable">
            <span class="table-ng__editable__text">{{ viewValue }}</span>
            <f-icon name="arrow-down" class="table-ng__editable__icon"></f-icon>
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
            @click.stop
            @dblclick.prevent
            @keydown.stop="onEditKeyDown"
            @focusout="(e) => onEditBlur(e)"
        >
            <span class="table-ng__editable__text">{{ viewValue }}</span>
            <f-icon name="arrow-down" class="table-ng__editable__icon--active"></f-icon>
        </div>

        <i-combobox-dropdown
            v-show="editing"
            :id="dropdownId"
            :is-open="dropdownIsOpen"
            :options="column.options"
            :active-option
            :active-option-id
            :input-node="editRef as HTMLInputElement"
            @select="selectDropdownOption"
            @close="onDropdownClose"
        ></i-combobox-dropdown>
    </td>
    <td v-else tabindex="-1" class="table-ng__cell table-ng__cell--static">
        {{ column.selected(row) }}
    </td>
</template>
