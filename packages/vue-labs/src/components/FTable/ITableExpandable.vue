<script setup lang="ts">
import { useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { type FTableActivateCellEvent } from "./events";

const { colspan } = defineProps<{
    colspan: number;
}>();

const rootRef = useTemplateRef("root");

function onActivateCell(e: CustomEvent<FTableActivateCellEvent>): void {
    assertRef(rootRef);
    rootRef.value.tabIndex = 0;

    if (e.detail.focus) {
        rootRef.value.focus();
    }
}
</script>

<template>
    <td ref="root" class="table-ng__custom-expandable" :colspan tabindex="-1" @table-activate-cell="onActivateCell">
        <slot></slot>
    </td>
</template>
