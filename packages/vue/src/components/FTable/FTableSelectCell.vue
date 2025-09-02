<script setup lang="ts">
import { inject, nextTick, type Ref, ref, useTemplateRef, watchEffect } from "vue";
import { assertRef, assertSet, ElementIdService } from "@fkui/logic";
import { IComboboxDropdown } from "../../internal-components";
import { useStartStopEdit } from "./start-stop-edit";

const { title } = defineProps<{ title: string }>();

const editing = ref(false);
const viewValue = ref("tre");
const editRef = useTemplateRef("edit");

const { startEdit, stopEdit } = useStartStopEdit();

const dropdownOptions = ref(["ett", "två", "tre"]);

async function onCellKeyDown(e: KeyboardEvent): Promise<void> {
    if (e.code === "Enter") {
        e.preventDefault();
        editing.value = true;
        await nextTick();
        assertSet(startEdit);
        assertRef(editRef);
        startEdit(editRef.value);
        openSelected("first");
    }
}

async function cancel(): Promise<void> {
    editing.value = false;
    await nextTick();
    close();
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
        activeOption.value = dropdownOptions.value[0];
    } else if (fallback === "last") {
        activeOption.value = dropdownOptions.value[dropdownOptions.value.length - 1];
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
        const index = dropdownOptions.value.indexOf(activeOption.value);

        if (index === dropdownOptions.value.length - 1) {
            activeOption.value = dropdownOptions.value[0];
        } else {
            activeOption.value = dropdownOptions.value[index + 1];
        }
    } else {
        activeOption.value = dropdownOptions.value[0];
    }
}

function setPreviousOption(): void {
    if (activeOption.value) {
        const index = dropdownOptions.value.indexOf(activeOption.value);

        if (index === 0) {
            activeOption.value = dropdownOptions.value[dropdownOptions.value.length - 1];
        } else {
            activeOption.value = dropdownOptions.value[index - 1];
        }
    } else {
        activeOption.value = dropdownOptions.value[dropdownOptions.value.length - 1];
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

async function onCellClick(e: MouseEvent): Promise<void> {
    if (editing.value === true) {
        return;
    }

    editing.value = true;
    await nextTick();
    assertSet(startEdit);
    assertRef(editRef);
    startEdit(editRef.value);
}

function onEditBlur(): void {
    if (editing.value) {
        submit();
        assertSet(stopEdit);
        stopEdit("blur");
    }
}

async function submit(): Promise<void> {
    editing.value = false;
    await nextTick();
}
</script>

<template>
    <td tabindex="-1" @keydown="onCellKeyDown" @click.stop="onCellClick">
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
            :options="dropdownOptions"
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
