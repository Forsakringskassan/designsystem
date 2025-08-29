<script setup lang="ts">
import { inject, nextTick, onMounted, ref, useTemplateRef } from "vue";
import { assertRef, assertSet } from "@fkui/logic";
import { FTableCell } from ".";

const { title } = defineProps<{ title: string }>();

const editing = ref(false);
const viewValue = ref("");
const editRef = useTemplateRef("edit");

const startEdit: ((focusElement: HTMLElement) => void) | undefined = inject("startEdit");
const stopEdit: ((reason: "enter" | "escape" | "tab" | "shift-tab" | "blur") => void) | undefined = inject("stopEdit");

onMounted(() => {
    if (!editRef.value) {
        return; // when column is rendered, no template refs exist
    }

    viewValue.value = "Välj";
});

async function onCellDoubleClick(): Promise<void> {
    editing.value = true;
    await nextTick();
    assertSet(startEdit);
    assertRef(editRef);
    startEdit(editRef.value);
}

async function onCellKeyDown(e: KeyboardEvent): Promise<void> {
    if (e.code === "Enter") {
        editing.value = true;
        await nextTick();
        assertSet(startEdit);
        assertRef(editRef);
        startEdit(editRef.value);
    }
}

async function submit(): Promise<void> {
    viewValue.value = editRef.value?.value ?? "";
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
</script>

<template>
    <f-table-cell :title @dblclick.stop="onCellDoubleClick" @keydown="onCellKeyDown">
        <div v-show="!editing">{{ viewValue }}</div>
        <select
            v-show="editing"
            ref="edit"
            name="select"
            @click.prevent
            @dblclick.prevent
            @keydown.stop="onEditKeyDown"
            @focusout="onEditBlur"
        >
            <option value="Välj">Välj</option>
            <option value="Hund">Hund</option>
            <option value="Katt">Katt</option>
            <option value="Hamster">Hamster</option>
            <option value="Papegoja">Papegoja</option>
            <option value="Spindel">Spindel</option>
            <option value="Guldfisk">Guldfisk</option>
        </select>
    </f-table-cell>
</template>

<style lang="scss">
.input {
    border: none;
    background: inherit;
}
</style>
