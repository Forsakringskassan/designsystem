<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { type FTableCellApi } from "./f-table-api";
import { type NormalizedTableColumnRadio } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnRadio<T, K>;
    row: T;
}>();

const emit = defineEmits<{
    radioChecked: [];
}>();

const inputElement = useTemplateRef("input");
const ariaLabel = computed(() => {
    const value = column.label(row);
    return value.length > 0 ? value : undefined;
});

function onChange(): void {
    assertRef(inputElement);
    const checked = inputElement.value.checked;
    column.update(row, checked, !checked);

    if (checked) {
        emit("radioChecked");
    }
}

const expose: FTableCellApi = { tabstopEl: inputElement };
defineExpose(expose);
</script>

<template>
    <td class="table-ng__cell table-ng__cell--radio">
        <input
            ref="input"
            type="radio"
            :checked="Boolean(column.checked(row))"
            :aria-label
            tabindex="-1"
            @change="onChange"
        />
    </td>
</template>
