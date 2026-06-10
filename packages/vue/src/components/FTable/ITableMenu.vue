<script setup lang="ts" generic="T">
import { computed, ref, useTemplateRef } from "vue";
import { type ContextMenuItem, FContextMenu } from "../FContextMenu";
import { FIcon } from "../FIcon";
import { type TableColumnMenuActionLabel } from "./columns/menu";
import { type FTableCellApi } from "./f-table-api";
import { type NormalizedTableColumnMenu } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnMenu<T>;
    row: T;
}>();

const buttonRef = useTemplateRef("button");
const expose: FTableCellApi = { tabstopEl: buttonRef };
const isOpen = ref(false);

function resolveLabel(label: TableColumnMenuActionLabel<T>, row: T): string {
    return typeof label === "function" ? label(row) : label;
}

/* augment actions with a unique key */
const actions = computed(() => {
    const resolvedActions = typeof column.actions === "function" ? column.actions(row) : column.actions;

    return resolvedActions.map((it, index) => {
        return { ...it, label: resolveLabel(it.label, row), key: `item-${String(index + 1)}` };
    });
});

/* generate a structure suitable for FContextMenu */
const menuitems = computed((): ContextMenuItem[] => {
    return actions.value.map((it): ContextMenuItem => {
        return { label: it.label, icon: it.icon ?? undefined, key: it.key };
    });
});

function onToggle(event: MouseEvent): void {
    /* prevent FTable from activating the cell (which moves the focus back to
     * the cell instead of the context menu) */
    event.stopPropagation();
    isOpen.value = !isOpen.value;
}

function onClose(): void {
    isOpen.value = false;
}

function onFocusout(event: FocusEvent): void {
    const relatedTarget = event.relatedTarget;
    const validTarget = event.relatedTarget && event.relatedTarget instanceof HTMLElement;
    const inPopup = validTarget && Boolean(event.relatedTarget.closest(".popup"));
    const isOwnButton = relatedTarget === buttonRef.value;
    if (inPopup || isOwnButton) {
        return;
    }
    isOpen.value = false;
}

function onSelect(key: string): void {
    const action = actions.value.find((it) => it.key === key);
    action?.onClick(row);
}

defineExpose(expose);
</script>

<template>
    <td class="table-ng__cell table-ng__cell--button" :class="{ 'table-ng__cell--menu-open': isOpen }">
        <button ref="button" class="icon-button" type="button" tabindex="-1" aria-haspopup="menu" @click="onToggle">
            <f-icon name="bars"></f-icon>
            <span class="sr-only">{{ column.text(row) }}</span>
        </button>
        <f-context-menu
            :is-open
            :items="menuitems"
            :anchor="buttonRef ?? undefined"
            @close="onClose"
            @select="onSelect"
            @focusout="onFocusout"
        ></f-context-menu>
    </td>
</template>
