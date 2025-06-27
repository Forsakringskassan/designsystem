<script setup lang="ts">
import { inject, nextTick, onMounted, ref, useTemplateRef } from "vue";
import { assertRef, assertSet, isAlphanumeric, type ValidityEvent } from "@fkui/logic";
import { FTableCell } from ".";

const { title } = defineProps<{ title: string }>();

const editing = ref(false);
const viewValue = ref("");
const startEdit: ((focusElement: HTMLElement) => void) | undefined = inject("startEdit");
const stopEdit: ((reason: "enter" | "escape" | "tab" | "shift-tab" | "blur") => void) | undefined = inject("stopEdit");
const editRef = useTemplateRef("edit");
const inputRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
    // when column is rendered, no template refs exist
    if (!editRef.value) {
        return;
    }

    inputRef.value = editRef.value.querySelector("input");

    if (!inputRef.value) {
        throw new Error("expected input");
    }

    viewValue.value = inputRef.value?.value ?? "";
});

async function onCellDoubleClick(): Promise<void> {
    editing.value = true;
    await nextTick();
    assertRef(inputRef);

    if (inputRef.value.type === "text") {
        inputRef.value.selectionStart = inputRef.value.value.length;
    }

    assertSet(startEdit);
    startEdit(inputRef.value);
}

async function onCellKeyDown(e: KeyboardEvent): Promise<void> {
    if (isAlphanumeric(e) || e.code === "Enter") {
        editing.value = true;
        await nextTick();
        assertRef(inputRef);
        assertSet(startEdit);
        startEdit(inputRef.value);
    }
}

async function submit(): Promise<void> {
    viewValue.value = inputRef.value?.value ?? "";
    editing.value = false;
    await nextTick();
}

async function cancel(): Promise<void> {
    editing.value = false;
    await nextTick();
}

async function onEditKeyDown(e: KeyboardEvent): Promise<void> {
    assertSet(stopEdit);

    if (e.code === "Escape") {
        e.preventDefault();
        cancel();
        stopEdit("escape");
    } else if (e.code === "Enter" || e.code === "NumpadEnter") {
        e.preventDefault();
        submit();
        stopEdit("enter");
    } else if (e.code === "Tab") {
        e.preventDefault();
        submit();
        stopEdit(e.shiftKey ? "shift-tab" : "tab");
    }
}

function onEditBlur(): void {
    if (editing.value) {
        submit();
        assertSet(stopEdit);
        stopEdit("blur");
    }
}

const isValid = ref(true);
function onValidity(e: CustomEvent<ValidityEvent>): void {
    isValid.value = e.detail.isValid;
}
</script>

<template>
    <f-table-cell :title @dblclick.stop="onCellDoubleClick" @keydown="onCellKeyDown">
        <div v-show="!editing" ref="view" class="view">{{ viewValue }}</div>
        <div
            v-show="editing"
            ref="edit"
            @click.prevent
            @dblclick.prevent
            @keydown.stop="onEditKeyDown"
            @component-validity="onValidity"
            @focusout="onEditBlur"
        >
            <slot></slot>
        </div>
    </f-table-cell>
</template>

<style lang="scss">
.input {
    border: none;
    background: inherit;
}
.view {
    pointer-events: none;
    user-select: none;
}
</style>
