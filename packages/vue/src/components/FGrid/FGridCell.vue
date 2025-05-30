<script setup lang="ts">
import { computed, inject, ref, type Ref, useTemplateRef, watchEffect } from "vue";
import { isTableCell, handleViewKeyDown } from "./logic";

const activeRowIndex = inject<Ref<number>>("activeRowIndex");
const activeCellIndex = inject<Ref<number>>("activeCellIndex");
const lastRowIndex = inject<Ref<number>>("lastRowIndex");
const lastCellIndex = inject<Ref<number>>("lastCellIndex");
const el = useTemplateRef("td");

const { focusable = true } = defineProps<{ focusable?: boolean }>();

const emit = defineEmits<{
    activate: [];
}>();

const active = ref(false);

watchEffect(() => {
    if (!isTableCell(el.value)) {
        return;
    }

    active.value =
        activeCellIndex?.value === el.value.cellIndex && activeRowIndex?.value === el.value.parentElement.rowIndex;

    if (active.value) {
        if (focusable) {
            el.value?.focus();
        }

        emit("activate");
    }
});

function onKeydown(e: KeyboardEvent): void {
    handleViewKeyDown(e, activeCellIndex, activeRowIndex, lastCellIndex?.value, lastRowIndex?.value);
}

function onClick(): void {
    if (!activeCellIndex || !activeRowIndex) {
        return;
    }

    if (focusable && isTableCell(el.value)) {
        activeCellIndex.value = el.value.cellIndex;
        activeRowIndex.value = el.value.parentElement.rowIndex;
        el.value?.focus();
    }
}

const tabindex = computed(() => {
    if (!focusable) {
        return undefined;
    }

    return active.value ? 0 : -1;
});
</script>

<template>
    <td ref="td" :tabindex class="table__column" @keydown="onKeydown" @click="onClick">
        <slot v-bind="{ active }"></slot>
    </td>
</template>
