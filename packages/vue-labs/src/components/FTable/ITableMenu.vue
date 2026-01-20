<script setup lang="ts" generic="T">
import { computed, ref, useTemplateRef } from "vue";
import { type ContextMenuItem, FContextMenu, FIcon } from "@fkui/vue";
import { type FTableCellApi } from "./f-table-api";
import { type NormalizedTableColumnMenu } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnMenu<T>;
    row: T;
}>();

const buttonRef = useTemplateRef("button");
const expose: FTableCellApi = { tabstopEl: buttonRef };
const isOpen = ref(false);

/* augment actions with a unique key */
const actions = computed(() => {
    return column.actions.map((it, index) => {
        return { ...it, key: `item-${String(index + 1)}` };
    });
});

/* generate a structure suitable for FContextMenu */
const menuitems = computed((): ContextMenuItem[] => {
    return actions.value.map((it): ContextMenuItem => {
        return { label: it.label, icon: it.icon ?? undefined, key: it.key };
    });
});

const renderButton = computed(() => {
    return column.enabled(row);
});

function onOpen(event: MouseEvent): void {
    /* prevent FTable from activaging the cell (which moves the focus back to
     * the cell instead of the context menu) */
    event.stopPropagation();

    isOpen.value = true;
}

function onClose(): void {
    isOpen.value = false;
}

function onSelect(key: string): void {
    const action = actions.value.find((it) => it.key === key);
    action?.onClick(row);
}

defineExpose(expose);
</script>

<template>
    <td v-if="renderButton" class="table-ng__cell table-ng__cell--button">
        <button ref="button" class="icon-button" type="button" tabindex="-1" aria-haspopup="menu" @click="onOpen">
            <f-icon name="bars"></f-icon>
            <span class="sr-only">{{ column.text(row) }}</span>
        </button>
        <f-context-menu
            :is-open
            :items="menuitems"
            :anchor="buttonRef ?? undefined"
            @close="onClose"
            @select="onSelect"
        ></f-context-menu>
    </td>
    <td v-else tabindex="-1" class="table-ng__cell"></td>
</template>
