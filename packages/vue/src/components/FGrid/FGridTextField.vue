<script setup lang="ts">
import { inject, ref, type Ref, useTemplateRef, watchEffect, nextTick, defineProps, computed } from "vue";

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
    active.value =
        activeCellIndex?.value === tdRef.value?.cellIndex &&
        activeRowIndex?.value === tdRef.value?.parentElement?.rowIndex;

    if (active.value) {
        if (!editing.value) {
            tdRef.value?.focus();
        }
    } else {
        editing.value = false;
    }
});

function isAlphanumeric(keyCode: number): boolean {
    return (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90);
}

async function handleNonEditKeydown(e: KeyboardEvent): Promise<void> {
    if (e.code === "ArrowLeft") {
        e.preventDefault();
        if (tdRef.value.cellIndex === 0) {
            return;
        }
        activeCellIndex.value = tdRef.value?.cellIndex - 1;
        activeRowIndex.value = tdRef.value?.parentElement.rowIndex;
    } else if (e.code === "ArrowRight") {
        e.preventDefault();

        if (lastCellIndex?.value === tdRef.value.cellIndex) {
            return;
        }

        activeCellIndex.value = tdRef.value?.cellIndex + 1;
        activeRowIndex.value = tdRef.value?.parentElement.rowIndex;
    } else if (e.code === "ArrowUp") {
        e.preventDefault();

        if (tdRef.value.parentElement.rowIndex === 1) {
            return;
        }

        activeCellIndex.value = tdRef.value?.cellIndex;
        activeRowIndex.value = tdRef.value?.parentElement.rowIndex - 1;
    } else if (e.code === "ArrowDown") {
        e.preventDefault();

        if (lastRowIndex.value === tdRef.value.parentElement.rowIndex) {
            return;
        }

        activeCellIndex.value = tdRef.value?.cellIndex;
        activeRowIndex.value = tdRef.value?.parentElement.rowIndex + 1;
    } else if (e.code === "Enter") {
        e.preventDefault();
        editValue.value = model.value;
        editing.value = true;
        await nextTick();
        inputRef.value.focus();
    } else if (isAlphanumeric(e.keyCode)) {
        editing.value = true;
        await nextTick();
        inputRef.value.focus();
    } else if (e.code === "Home") {
        e.preventDefault();

        if (e.ctrlKey) {
            activeCellIndex.value = 0;
            activeRowIndex.value = 1;
        } else {
            activeCellIndex.value = 0;
            activeRowIndex.value = tdRef.value?.parentElement.rowIndex;
        }
    } else if (e.code === "End") {
        e.preventDefault();

        if (e.ctrlKey) {
            activeCellIndex.value = lastCellIndex.value;
            activeRowIndex.value = lastRowIndex.value;
        } else {
            activeCellIndex.value = lastCellIndex.value;
            activeRowIndex.value = tdRef.value?.parentElement.rowIndex;
        }
    }
}

async function handleEditKeydown(e: KeyboardEvent): Promise<void> {
    // editing
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
    if (!editing.value) {
        editing.value = true;
        editValue.value = model.value;
        await nextTick();
        activeCellIndex.value = tdRef.value.cellIndex;
        activeRowIndex.value = tdRef.value.parentElement.rowIndex;
        inputRef.value.focus();
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
            <input ref="input" v-model="editValue" tabindex="0" class="cell" :type @blur="onBlur" />
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
