<script setup lang="ts" generic="T extends Record<string, any>, K extends keyof T">
import { inject } from "vue";
import ITableRow from "./ITableRow.vue";

const rowKey = inject<(value: T) => string>("rowKey");

const { set, level = 1 } = defineProps<{
    set: T[];
    level?: number;
}>();
</script>

<template>
    <i-table-row
        v-for="(item, index) in set"
        :key="rowKey!(item)"
        :row="item"
        :level
        :setsize="set.length"
        :posinset="index + 1"
    >
        <template #default="scope">
            <slot v-bind="scope"></slot>
        </template>
    </i-table-row>
</template>
