<script setup lang="ts">
import { useTemplateRef } from "vue";
import { type FTableCellApi } from "./f-table-api";

const emit = defineEmits<{
    /**
     * Emitted when checkbox value changes.
     */
    change: [];
}>();

const selectAllRef = useTemplateRef("selectAll");

const expose: FTableCellApi = { tabstopEl: selectAllRef };
defineExpose(expose);
</script>

<template>
    <th scope="col" class="table-ng__column table-ng__column--selectable">
        <input
            ref="selectAll"
            type="checkbox"
            aria-label="select all"
            tabindex="-1"
            indeterminate
            @change="emit('change')"
        />
    </th>
</template>
