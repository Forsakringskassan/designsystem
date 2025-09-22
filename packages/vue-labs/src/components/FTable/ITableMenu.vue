<script setup lang="ts" generic="T">
import { computed, nextTick, ref, useTemplateRef } from "vue";
import { assertSet } from "@fkui/logic";
import { type ContextMenuItem, FContextMenu, FIcon } from "@fkui/vue";
import { type NormalizedTableColumnMenu } from "./table-column";
import { type FTableActivateCellEvent } from "./events";

const { column, row } = defineProps<{
    column: NormalizedTableColumnMenu<T>;
    row: T;
}>();

const buttonElement = useTemplateRef("button");
const tdElement = useTemplateRef("td");
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

async function onActivateCell(e: CustomEvent<FTableActivateCellEvent>): Promise<void> {
    await nextTick();
    const element = buttonElement.value ?? tdElement.value;
    assertSet(element);
    element.tabIndex = 0;

    if (e.detail.focus) {
        element.focus();
    }
}

function onOpen(): void {
    setTimeout(() => {
        isOpen.value = true;
    }, 10);
}

function onClose(): void {
    isOpen.value = false;
}

function onSelect(key: string): void {
    const action = actions.value.find((it) => it.key === key);
    action?.onClick(row);
}
</script>

<template>
    <td v-if="renderButton" class="table-ng__cell table-ng__cell--button" @table-activate-cell="onActivateCell">
        <!-- [html-validate-disable-next text-content -- column header should be enough]-->
        <button ref="button" class="icon-button" type="button" tabindex="-1" aria-haspopup="menu" @click="onOpen">
            <f-icon name="bars"></f-icon>
        </button>
        <f-context-menu
            :is-open="isOpen"
            :items="menuitems"
            :anchor="buttonElement ?? undefined"
            @close="onClose"
            @select="onSelect"
        ></f-context-menu>
    </td>
    <td v-else ref="td" tabindex="-1" class="table-ng__cell" @table-activate-cell="onActivateCell"></td>
</template>
