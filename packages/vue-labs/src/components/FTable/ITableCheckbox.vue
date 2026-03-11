<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { FIcon } from "@fkui/vue";
import { type FTableCellApi } from "./f-table-api";
import { type NormalizedTableColumnCheckbox } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnCheckbox<T, K>;
    row: T;
}>();

const targetElement = useTemplateRef("target");
const ariaLabel = computed(() => {
    const value = column.label(row);
    return value.length > 0 ? value : undefined;
});

const checked = computed(() => {
    return Boolean(column.checked(row));
});

function onChange(e: Event): void {
    const checked = (e.target as HTMLInputElement).checked;
    column.update(row, checked, !checked);
}

const expose: FTableCellApi = { tabstopEl: targetElement };
defineExpose(expose);
</script>

<template>
    <td v-if="column.editable(row)" class="table-ng__cell table-ng__cell--checkbox">
        <input ref="target" :checked type="checkbox" :aria-label tabindex="-1" @change="onChange" />
    </td>
    <td v-else ref="target" tabindex="-1" class="table-ng__cell table-ng__cell--checkbox">
        <f-icon v-if="checked" :aria-label name="success"></f-icon>
        <span v-else class="sr-only">{{ ariaLabel }}</span>
    </td>
</template>
