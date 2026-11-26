<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { type NormalizedTableColumnRadio } from "./columns";
import { type FTableCellApi } from "./f-table-api";
import { isVisible } from "./is-visible";

const { column, row } = defineProps<{
    column: NormalizedTableColumnRadio<T, K>;
    row: T;
}>();

const inputElement = useTemplateRef("input");
const ariaLabel = computed(() => {
    const value = column.label(row);
    return value.length > 0 ? value : undefined;
});

const visible = computed((): boolean => isVisible(column.visible, row));

function onChange(_e: Event): void {
    assertRef(inputElement);
    column.update(row, inputElement.value.checked, !inputElement.value.checked);
}

const expose: FTableCellApi = { tabstopEl: inputElement };
defineExpose(expose);
</script>

<template>
    <td class="table-ng__cell table-ng__cell--radio">
        <input
            v-if="visible"
            ref="input"
            type="radio"
            :checked="Boolean(column.checked(row))"
            :aria-label
            tabindex="-1"
            @change="onChange"
        />
    </td>
</template>
