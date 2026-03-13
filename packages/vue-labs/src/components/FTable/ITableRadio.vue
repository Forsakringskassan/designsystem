<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef, watch } from "vue";
import { assertRef } from "@fkui/logic";
import { type FTableCellApi } from "./f-table-api";
import { type NormalizedTableColumnRadio } from "./table-column";
import { useTableRadioGroupManager } from "./table-radio-group-manager";

const {
    column,
    row,
    group = undefined,
} = defineProps<{
    column: NormalizedTableColumnRadio<T, K>;
    row: T;
    group?: string | symbol;
}>();

const inputElement = useTemplateRef("input");
const tableRadioGroupManager = useTableRadioGroupManager();
const ariaLabel = computed(() => {
    const value = column.label(row);
    return value.length > 0 ? value : undefined;
});
const checked = computed(() => Boolean(column.checked(row)));
const radioGroup = computed(() => tableRadioGroupManager.getRadioGroupName(group ?? column.id));

const radioId = Symbol("active-radio");

watch(
    () => tableRadioGroupManager.activeRadioIds[radioGroup.value],
    (activeRadioId) => {
        if (activeRadioId !== radioId && checked.value) {
            assertRef(inputElement);
            column.update(row, false, inputElement.value.checked);
        }
    },
);

function onChange(_e: Event): void {
    assertRef(inputElement);
    column.update(row, inputElement.value.checked, !inputElement.value.checked);
    tableRadioGroupManager.setActiveRadio(radioGroup.value, radioId);
}

const expose: FTableCellApi = { tabstopEl: inputElement };
defineExpose(expose);
</script>

<template>
    <td class="table-ng__cell table-ng__cell--radio">
        <input ref="input" type="radio" :name="radioGroup" :checked :aria-label tabindex="-1" @change="onChange" />
    </td>
</template>
