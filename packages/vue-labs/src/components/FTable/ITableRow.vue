<script setup lang="ts" generic="T extends Record<string, unknown>, K extends keyof T">
import { computed, provide, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FIcon } from "@fkui/vue";
import { type FTableActivateCellEvent } from "./events";

const {
    renderHeader,
    ariaLevel = undefined,
    rowKey = "",
    isTreegrid,
    isExpandable,
    isExpanded,
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

const expandableRef = useTemplateRef("expandable");

provide("renderHeader", renderHeader);

const toggleIcon = computed(() => (isExpanded ? "arrow-down" : "arrow-right"));

function onActivateCell(e: CustomEvent<FTableActivateCellEvent>): void {
    assertRef(expandableRef);
    expandableRef.value.tabIndex = 0;

    if (e.detail.focus) {
        expandableRef.value.focus();
    }
}
</script>

<template>
    <template v-if="renderHeader">
        <tr class="table-ng__row">
            <th v-if="isTreegrid" tabindex="-1" class="table-ng__column"></th>
            <slot></slot>
        </tr>
    </template>
    <template v-else>
        <tr class="table-ng__row" :aria-level>
            <template v-if="isTreegrid">
                <td
                    v-if="isExpandable"
                    class="table-ng__cell table-ng__cell--expand"
                    @table-activate-cell="onActivateCell"
                >
                    <button ref="expandable" tabindex="-1" type="button" @click="emit('toggle', rowKey)">
                        <f-icon class="button__icon" :name="toggleIcon"></f-icon>
                    </button>
                </td>
                <td v-else ref="expandable" class="table-ng__cell" @table-activate-cell="onActivateCell"></td>
            </template>

            <slot></slot>
        </tr>
    </template>
</template>
