<script setup lang="ts" generic="T, K extends keyof T">
import { computed, ref, useTemplateRef } from "vue";
import { useTranslate } from "@fkui/vue";
import ITableCheckbox from "./ITableCheckbox.vue";
import ITableRadio from "./ITableRadio.vue";
import { type NormalizedTableColumnCheckbox, type NormalizedTableColumnRadio } from "./table-column";

const { selectable, row, state } = defineProps<{
    selectable: "single" | "multi";
    row: T;
    state: boolean;
}>();

const emit = defineEmits<{ toggle: [row: T] }>();

const childRef = useTemplateRef("child");
const tabstopEl = computed(() => childRef.value?.tabstopEl);
defineExpose({ tabstopEl });

const $t = useTranslate();

const multiSelectColumn: NormalizedTableColumnCheckbox<T, K> = {
    type: "checkbox",
    id: Symbol("multi-select"),
    header: ref("selectable"),
    description: ref(null),
    sortable: null,
    component: ITableCheckbox,
    label() {
        /** Screen reader text for checkbox in multi select table row. */
        return $t("fkui.table.selectable.checkbox", "Välj rad");
    },
    value() {
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
    component: ITableRadio,
    label() {
        /** Screen reader text for radio button in single select table row. */
        return $t("fkui.table.selectable.radio", "Välj rad");
    },
    value() {
        return state;
    },
    update() {
        emit("toggle", row);
    },
};
</script>

<template>
    <i-table-checkbox
        v-if="selectable === 'multi'"
        ref="child"
        :row
        :column="multiSelectColumn"
        class="table-ng__cell--select"
    ></i-table-checkbox>
    <i-table-radio
        v-if="selectable === 'single'"
        ref="child"
        :row
        :column="singleSelectColumn"
        class="table-ng__cell--select"
    ></i-table-radio>
</template>
