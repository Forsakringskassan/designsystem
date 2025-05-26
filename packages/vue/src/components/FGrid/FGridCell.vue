<script setup lang="ts">
import { computed, inject, ref, type Ref, useTemplateRef, watchEffect } from "vue";

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
    active.value =
        activeCellIndex?.value === el.value?.cellIndex && activeRowIndex?.value === el.value?.parentElement?.rowIndex;

    if (active.value) {
        if (focusable) {
            el.value?.focus();
        }

        emit("activate");
    }
});

function onKeydown(e: KeyboardEvent): void {
    const el =
        e.target.cellIndex !== undefined
            ? e.target
            : e.target.parentElement.cellIndex !== undefined
              ? e.target.parentElement
              : undefined;

    if (!el) {
        return;
    }

    if (e.code === "ArrowLeft") {
        e.preventDefault();
        if (el.cellIndex === 0) {
            return;
        }

        activeCellIndex.value = el.cellIndex - 1;
        activeRowIndex.value = el.parentElement.rowIndex;
    }

    if (e.code === "ArrowRight") {
        e.preventDefault();
        if (lastCellIndex?.value === el.cellIndex) {
            return;
        }

        activeCellIndex.value = el.cellIndex + 1;
        activeRowIndex.value = el.parentElement.rowIndex;
    }

    if (e.code === "ArrowUp") {
        e.preventDefault();

        if (el.parentElement.rowIndex === 1) {
            return;
        }

        activeCellIndex.value = el.cellIndex;
        activeRowIndex.value = el.parentElement.rowIndex - 1;
    }

    if (e.code === "ArrowDown") {
        e.preventDefault();

        if (lastRowIndex.value === el.parentElement.rowIndex) {
            return;
        }

        activeCellIndex.value = el.cellIndex;
        activeRowIndex.value = el.parentElement.rowIndex + 1;
    }

    if (e.code === "Home") {
        e.preventDefault();

        if (e.ctrlKey) {
            activeCellIndex.value = 0;
            activeRowIndex.value = 1;
        } else {
            activeCellIndex.value = 0;
            activeRowIndex.value = el.parentElement.rowIndex;
        }
    }

    if (e.code === "End") {
        e.preventDefault();

        if (e.ctrlKey) {
            activeCellIndex.value = lastCellIndex.value;
            activeRowIndex.value = lastRowIndex.value;
        } else {
            activeCellIndex.value = lastCellIndex.value;
            activeRowIndex.value = el.parentElement.rowIndex;
        }
    }
}

function onClick(): void {
    if (focusable) {
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
