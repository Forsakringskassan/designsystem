<script setup lang="ts">
import { templateRef } from "@vueuse/core";
import { computed, inject, type Ref, ref, onMounted, provide } from "vue";

const activeRowIndex = inject<Ref<number>>("activeRowIndex");

const lastCellIndex = ref(0);
provide("lastCellIndex", lastCellIndex);

const trRef = templateRef("tr");

onMounted(() => {
    lastCellIndex.value = trRef.value?.cells.length - 1;
});

const classes = computed(() => {
    return trRef.value?.rowIndex === activeRowIndex?.value ? "table__row table__row__active" : "table__row";
});
</script>
<template>
    <tr ref="tr" :class="classes">
        <slot></slot>
    </tr>
</template>

<style lang="scss">
.table__row__active {
    // background: hotpink !important;
}
</style>
