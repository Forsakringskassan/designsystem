<script setup lang="ts" generic="T extends Record<string, any>, K extends keyof T">
import { computed, inject, provide, type Ref } from "vue";
import { guardRef, guardSet } from "@fkui/logic";
import { FIcon } from "../FIcon";
import ITableSet from "./ITableSet.vue";

const rowKey = inject<(value: T) => string>("rowKey");
guardSet(rowKey);

const expandableAttribute = inject<string>("expandableAttribute");

const {
    renderHeader = false,
    row,
    level = 1,
    setsize,
    posinset,
} = defineProps<{
    renderHeader?: boolean;
    row?: T;
    level?: number;
    setsize?: number;
    posinset?: number;
}>();

provide("renderHeader", renderHeader);

const expandedKeys = inject<Ref<string[]>>("expandedKeys");
guardRef(expandedKeys);
const isExpandableRow = computed(() => row && expandableAttribute && row[expandableAttribute]);
const key = row ? rowKey(row) : "";
const isExpanded = computed(() => isExpandableRow.value && expandedKeys.value.includes(key));
const toggleIcon = computed(() => (isExpanded.value ? "arrow-down" : "arrow-right"));
const ariaRowindexes = inject<Ref<string[]>>("ariaRowindexes");

guardRef(ariaRowindexes);
const ariaRowindex = computed(() => ariaRowindexes.value.indexOf(key) + 1);
const ariaLevel = expandableAttribute ? level : undefined;
const ariaSetsize = expandableAttribute ? setsize : undefined;
const ariaPosinset = expandableAttribute ? posinset : undefined;

function toggleExpanded(): void {
    guardRef(expandedKeys);
    const index = expandedKeys.value.indexOf(key);

    if (index < 0) {
        expandedKeys.value.push(key);
    } else {
        expandedKeys.value.splice(index, 1);
    }
}
</script>

<template>
    <template v-if="renderHeader">
        <tr class="table__row">
            <th v-if="expandableAttribute" tabindex="-1" class="table__column"></th>
            <slot></slot>
        </tr>
    </template>
    <template v-else>
        <tr class="table__row" :aria-rowindex :aria-level :aria-setsize :aria-posinset>
            <template v-if="expandableAttribute">
                <td v-if="isExpandableRow">
                    <button
                        aria-label="toggle"
                        type="button"
                        class="expander"
                        :class="`level-${level}`"
                        @click="toggleExpanded"
                    >
                        <f-icon class="button__icon" :name="toggleIcon"></f-icon>
                    </button>
                </td>
                <td v-else :class="`level-${level}`"></td>
            </template>

            <slot v-bind="{ row }"></slot>
        </tr>

        <i-table-set
            v-if="isExpanded && row && expandableAttribute"
            :set="row[expandableAttribute] as T[]"
            :level="level + 1"
        >
            <template #default="scope: { row: T }">
                <slot v-bind="scope"></slot>
            </template>
        </i-table-set>
    </template>
</template>

<style>
.expander {
    margin: 0;
    padding: 0;
    background: inherit;
    border: 0;
}

.level-2 {
    margin-left: 0.5rem;
}

.level-3 {
    padding-left: 1rem;
}
</style>
