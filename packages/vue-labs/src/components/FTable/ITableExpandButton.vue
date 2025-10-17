<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FIcon } from "@fkui/vue";
import { type FTableActivateCellEvent } from "./events";

const { isExpandable, isExpanded, rowKey } = defineProps<{
    isExpandable?: boolean;
    isExpanded?: boolean;
    rowKey: string;
}>();

const emit = defineEmits<{
    toggle: [key: string];
}>();

const expandableRef = useTemplateRef("expandable");
const toggleIcon = computed(() => (isExpanded ? "arrow-down" : "arrow-right"));
const expandLabel = computed(() => (isExpanded ? "Stäng rad" : "Expandera rad"));

function onActivateCell(e: CustomEvent<FTableActivateCellEvent>): void {
    assertRef(expandableRef);
    expandableRef.value.tabIndex = 0;

    if (e.detail.focus) {
        expandableRef.value.focus();
    }
}
</script>

<template>
    <td v-if="isExpandable" class="table-ng__cell table-ng__cell--expand" @table-activate-cell="onActivateCell">
        <button
            ref="expandable"
            tabindex="-1"
            :aria-label="expandLabel"
            :aria-expanded="isExpanded"
            type="button"
            @click="emit('toggle', rowKey)"
        >
            <f-icon class="button__icon" :name="toggleIcon"></f-icon>
        </button>
    </td>
    <td v-else ref="expandable" tabindex="-1" class="table-ng__cell" @table-activate-cell="onActivateCell"></td>
</template>
