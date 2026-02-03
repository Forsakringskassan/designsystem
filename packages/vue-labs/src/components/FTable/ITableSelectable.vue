<script setup lang="ts" generic="T, K extends keyof T">
import { computed, ref, useTemplateRef } from "vue";
import { useTranslate } from "@fkui/vue";
import ITableCheckbox from "./ITableCheckbox.vue";
import ITableRadio from "./ITableRadio.vue";
import { type FTableCellApi } from "./f-table-api";
import { type NormalizedTableColumnCheckbox, type NormalizedTableColumnRadio } from "./table-column";

const {
    selectable,
    row,
    state,
    level = 1,
} = defineProps<{
    selectable: "single" | "multi";
    row: T;
    state: boolean;
    level?: number;
}>();

const emit = defineEmits<{ toggle: [row: T] }>();

const expose: Partial<FTableCellApi> = {};
if (level === 1) {
    const childRef = useTemplateRef("child");
    expose.tabstopEl = computed(() => childRef.value?.tabstopEl ?? null);
}
defineExpose(expose);

const $t = useTranslate();

const multiSelectColumn: NormalizedTableColumnCheckbox<T, K> = {
    type: "checkbox",
    id: Symbol("multi-select"),
    header: ref("selectable"),
    description: ref(null),
    sortable: null,
    size: ref(null),
    component: ITableCheckbox,
    label() {
        /** Screen reader text for checkbox in multi select table row. */
        return $t("fkui.table.selectable.checkbox", "Välj rad");
    },
    checked() {
        return state;
    },
    editable() {
        return true;
    },
    update() {
        emit("toggle", row);
    },
};

const singleSelectColumn: NormalizedTableColumnRadio<T, K> = {
    type: "radio",
    id: Symbol("single-select"),
    header: ref("Välj en rad"),
    description: ref(null),
    sortable: null,
    size: ref(null),
    component: ITableRadio,
    label() {
        /** Screen reader text for radio button in single select table row. */
        return $t("fkui.table.selectable.radio", "Välj rad");
    },
    checked() {
        return state;
    },
    update() {
        emit("toggle", row);
    },
};
</script>

<template>
    <td v-if="level > 1" tabindex="-1" class="table-ng__cell"></td>
    <i-table-checkbox
        v-else-if="selectable === 'multi'"
        ref="child"
        :row
        :column="multiSelectColumn"
        class="table-ng__cell--selectable"
    ></i-table-checkbox>
    <i-table-radio
        v-else-if="selectable === 'single'"
        ref="child"
        :row
        :column="singleSelectColumn"
        class="table-ng__cell--selectable"
    ></i-table-radio>
</template>
