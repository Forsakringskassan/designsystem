<script setup lang="ts" generic="T extends Record<string, unknown>, K extends keyof T">
import { computed, provide } from "vue";
import { FIcon } from "../FIcon";
import FTableCell from "./FTableCell.vue";

const {
    renderHeader = false,
    ariaLevel = undefined,
    rowKey = "",
    isTreegrid = false,
    isExpandable = false,
    isExpanded = false,
} = defineProps<{
    renderHeader?: boolean;
    rowKey?: string;
    ariaLevel?: number;
    isTreegrid?: boolean;
    isExpandable?: boolean;
    isExpanded?: boolean;
}>();

const emit = defineEmits<{
    toggle: [key: string];
}>();

provide("renderHeader", renderHeader);

const toggleIcon = computed(() => (isExpanded ? "arrow-down" : "arrow-right"));
</script>

<template>
    <template v-if="renderHeader">
        <tr class="table__row">
            <th v-if="isTreegrid" tabindex="-1" class="table__column"></th>
            <slot></slot>
        </tr>
    </template>
    <template v-else>
        <tr class="table__row" :aria-level>
            <template v-if="isTreegrid">
                <f-table-cell v-if="isExpandable" title="Expandera">
                    <button
                        aria-label="toggle"
                        type="button"
                        class="expander"
                        :class="`level-${ariaLevel}`"
                        @click="emit('toggle', rowKey)"
                    >
                        <f-icon class="button__icon" :name="toggleIcon"></f-icon>
                    </button>
                </f-table-cell>
                <td v-else :class="`level-${ariaLevel}`"></td>
            </template>

            <slot></slot>
        </tr>
    </template>
</template>

<style>
.expander {
    margin: 0;
    padding: 0;
    background: inherit;
    border: 0;
    cursor: pointer;
}

.level-2 {
    margin-left: 0.5rem;
}

.level-3 {
    padding-left: 1rem;
}
</style>
