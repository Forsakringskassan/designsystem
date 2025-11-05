<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import { type FTableCellApi } from "./f-table-api";

const { selectable, state } = defineProps<{ selectable: "single" | "multi"; state: boolean | "indeterminate" }>();

const emit = defineEmits<{
    /**
     * Emitted when checkbox value changes.
     */
    toggle: [];
}>();

const indeterminate = computed(() => state === "indeterminate");
const checked = computed(() => (state === "indeterminate" ? false : state));
const expose: Partial<FTableCellApi> = {};

if (selectable === "multi") {
    const inputRef = useTemplateRef("input");
    expose.tabstopEl = inputRef;
}

defineExpose(expose);
</script>

<template>
    <th scope="col" class="table-ng__column table-ng__column--selectable">
        <input
            v-if="selectable === 'multi'"
            ref="input"
            :checked
            :indeterminate
            type="checkbox"
            aria-label="select all"
            tabindex="-1"
            @change="emit('toggle')"
        />
    </th>
</template>
