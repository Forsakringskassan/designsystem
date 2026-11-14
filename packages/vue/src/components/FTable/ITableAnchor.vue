<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { FIcon } from "../FIcon";
import { type FTableCellApi } from "./f-table-api";
import { isVisible } from "./is-visible";
import { type NormalizedTableColumnAnchor } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnAnchor<T, K>;
    row: T;
}>();

const targetElement = useTemplateRef("target");

const target = computed(() => {
    return column.target ?? "_blank";
});

const visible = computed((): boolean => isVisible(column.visible, row));

const expose: FTableCellApi = { tabstopEl: targetElement };
defineExpose(expose);
</script>

<template>
    <td v-if="column.text(row)" class="table-ng__cell table-ng__cell--anchor" @keydown.space.prevent>
        <a
            v-if="visible"
            ref="target"
            class="anchor anchor--block"
            :target="hasTarget"
            :href="column.href(row)"
            tabindex="-1"
        >
            <f-icon v-if="column.iconLeft" :name="column.iconLeft"></f-icon>
            {{ column.text(row) }}
            <f-icon v-if="column.iconRight" :name="column.iconRight"></f-icon>
        </a>
    </td>
    <td v-else ref="target" tabindex="-1" class="table-ng__cell"></td>
</template>
