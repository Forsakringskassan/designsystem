<script setup lang="ts">
import { inject, ref, type Ref, useTemplateRef, watchEffect, nextTick, defineProps, computed } from "vue";
import { isAlphanumeric, isTableCell, handleViewKeyDown } from "./logic";

const { type = "text" } = defineProps<{ type?: string }>();

const activeRowIndex = inject<Ref<number>>("activeRowIndex");
const activeCellIndex = inject<Ref<number>>("activeCellIndex");
const lastRowIndex = inject<Ref<number>>("lastRowIndex");
const lastCellIndex = inject<Ref<number>>("lastCellIndex");

const tdRef = useTemplateRef("td");
const inputRef = useTemplateRef("input");
const active = ref(false);
const editing = ref(false);

const model = defineModel({ type: String });
const editValue: Ref<string | undefined> = ref("");

watchEffect(() => {
    if (!isTableCell(tdRef.value)) {
        return;
    }

    active.value =
        activeCellIndex?.value === tdRef.value.cellIndex &&
        activeRowIndex?.value === tdRef.value.parentElement.rowIndex;

    if (active.value) {
        if (!editing.value) {
            tdRef.value?.focus();
        }
    } else {
        editing.value = false;
    }
});

async function handleNonEditKeydown(e: KeyboardEvent): Promise<void> {
    if (e.code === "Enter") {
        e.preventDefault();
        editValue.value = model.value;
        editing.value = true;
        await nextTick();

        if (inputRef.value) {
            inputRef.value.focus();
        }
    } else if (isAlphanumeric(e.keyCode)) {
        editing.value = true;
        await nextTick();

        if (inputRef.value) {
            inputRef.value.focus();
        }
    } else {
        handleViewKeyDown(e, activeCellIndex, activeRowIndex, lastCellIndex?.value, lastRowIndex?.value);
    }
}

async function handleEditKeydown(e: KeyboardEvent): Promise<void> {
    if (
        activeCellIndex === undefined ||
        activeRowIndex === undefined ||
        lastCellIndex === undefined ||
        lastRowIndex === undefined
    ) {
        return;
    }

    if (!isTableCell(tdRef.value)) {
        return;
    }

    if (e.code === "Escape") {
        e.preventDefault();
        editing.value = false;
        editValue.value = "";
        await nextTick();
        tdRef.value?.focus();
    } else if (e.code === "Tab") {
        e.preventDefault();
        model.value = editValue.value;
        editValue.value = "";
        editing.value = false;
        await nextTick();

        if (activeCellIndex.value === lastCellIndex.value && activeRowIndex.value === lastRowIndex.value) {
            tdRef.value?.focus();
        } else if (activeCellIndex.value === lastCellIndex.value) {
            activeCellIndex.value = 0;
            activeRowIndex.value = tdRef.value?.parentElement.rowIndex + 1;
        } else {
            activeCellIndex.value = tdRef.value?.cellIndex + 1;
            activeRowIndex.value = tdRef.value?.parentElement.rowIndex;
        }
    } else if (e.code === "Enter") {
        e.preventDefault();
        model.value = editValue.value;
        editValue.value = "";
        editing.value = false;
        await nextTick();

        if (activeRowIndex.value !== lastRowIndex.value) {
            activeCellIndex.value = tdRef.value?.cellIndex;
            activeRowIndex.value = tdRef.value?.parentElement.rowIndex + 1;
        } else {
            tdRef.value?.focus();
        }
    }
}

async function onKeydown(e: KeyboardEvent): Promise<void> {
    if (!editing.value) {
        handleNonEditKeydown(e);
    } else {
        handleEditKeydown(e);
    }
}

async function onClick(): Promise<void> {
    if (activeCellIndex === undefined || activeRowIndex === undefined) {
        return;
    }

    if (!isTableCell(tdRef.value)) {
        return;
    }

    if (!editing.value) {
        editing.value = true;
        editValue.value = model.value;
        await nextTick();
        activeCellIndex.value = tdRef.value.cellIndex;
        activeRowIndex.value = tdRef.value.parentElement.rowIndex;

        if (inputRef && inputRef.value) {
            inputRef.value.focus();
        }
    }
}

async function onBlur(): Promise<void> {
    if (editing.value) {
        model.value = editValue.value;
        editValue.value = "";
        editing.value = false;
    }
}

const tdTabindex = computed(() => {
    if (editing.value) {
        return undefined;
    }

    return active.value ? 0 : -1;
});
</script>

<template>
    <td ref="td" :tabindex="tdTabindex" class="table__column" @keydown="onKeydown" @click="onClick">
        <template v-if="editing">
            <input ref="input" v-model="editValue" maxlength="40" tabindex="0" class="cell" :type @blur="onBlur" />
        </template>
        <template v-else> {{ model }}</template>
    </td>
</template>

<style lang="scss">
.cell {
    border: none;
    background: inherit;
}
</style>
