<script setup lang="ts">
import { inject, ref, type Ref, useTemplateRef, watchEffect } from "vue";

const activeRowIndex = inject<Ref<number>>("activeRowIndex");
const activeCellIndex = inject<Ref<number>>("activeCellIndex");
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
    console.log("onkeydown", e);

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
        activeCellIndex.value = el.cellIndex - 1;
        activeRowIndex.value = el.parentElement.rowIndex;
    }

    if (e.code === "ArrowRight") {
        e.preventDefault();

        activeCellIndex.value = el.cellIndex + 1;
        activeRowIndex.value = el.parentElement.rowIndex;
    }

    if (e.code === "ArrowUp") {
        e.preventDefault();

        activeCellIndex.value = el.cellIndex;
        activeRowIndex.value = el.parentElement.rowIndex - 1;
    }

    if (e.code === "ArrowDown") {
        e.preventDefault();

        activeCellIndex.value = el.cellIndex;
        activeRowIndex.value = el.parentElement.rowIndex + 1;
    }
}
</script>

<template>
    <td ref="td" tabindex="0" class="table__column" style="border: solid red 1px" @keydown="onKeydown">
        <slot v-bind="{ active }"></slot>
    </td>
</template>
