<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { type ItemIdentifier, FIcon } from "@fkui/vue";
import { activateCell } from "./FTable.logic";
import { type FTableCellApi } from "./f-table-api";

const { isExpandable, isExpanded, rowKey } = defineProps<{
    isExpandable?: boolean;
    isExpanded?: boolean;
    rowKey: ItemIdentifier;
}>();

const emit = defineEmits<{
    toggle: [key: ItemIdentifier];
}>();

const expandableRef = useTemplateRef("expandable");
const toggleIcon = computed(() => (isExpanded ? "arrow-down" : "arrow-right"));
const expandLabel = computed(() => (isExpanded ? "Stäng rad" : "Expandera rad"));

function onClick(e: Event): void {
    e.stopPropagation();
    assertRef(expandableRef);
    activateCell(expandableRef.value, { focus: true });
    expandableRef.value.tabIndex = 0;

    emit("toggle", rowKey);
}

function onClickTd(e: Event): void {
    e.stopPropagation();
    assertRef(expandableRef);
    activateCell(expandableRef.value, { focus: true });
    expandableRef.value.click();
}

const expose: FTableCellApi = { tabstopEl: expandableRef };
defineExpose(expose);
</script>

<template>
    <td v-if="isExpandable" class="table-ng__cell table-ng__cell--expand" @click="onClickTd">
        <button
            ref="expandable"
            tabindex="-1"
            :aria-label="expandLabel"
            :aria-expanded="isExpanded"
            type="button"
            @click="onClick"
        >
            <f-icon class="button__icon" :name="toggleIcon"></f-icon>
        </button>
    </td>
    <td v-else ref="expandable" tabindex="-1" class="table-ng__cell table-ng__cell--expand"></td>
</template>
