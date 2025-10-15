<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FIcon, IFlex, IFlexItem } from "@fkui/vue";
import { type FTableActivateCellEvent } from "./events";
import { type NormalizedTableColumn } from "./table-column";

const { column, sortEnabled, sortOrder } = defineProps<{
    column: NormalizedTableColumn<T, K>;
    sortEnabled: boolean;
    sortOrder: "unsorted" | "ascending" | "descending";
}>();

const emit = defineEmits<{
    toggleSortOrder: [sortable: string];
}>();

const thElement = useTemplateRef("th");

const sortIconClass = computed(() => {
    return {
        "table-ng__column__sort-icon": true,
        "table-ng__column__sort-icon--discrete": sortOrder === "unsorted",
    };
});

const sortIcon = computed(() => {
    switch (sortOrder) {
        case "unsorted":
            return "sort";
        case "ascending":
            return "caret-up";
        case "descending":
            return "caret-down";
        default:
            return "";
    }
});

function onActivateCell(e: CustomEvent<FTableActivateCellEvent>): void {
    assertRef(thElement);
    thElement.value.tabIndex = 0;

    if (e.detail.focus) {
        thElement.value.focus();
    }
}

function onClickCell(): void {
    if (!column.sortable || !sortEnabled) {
        return;
    }

    emit("toggleSortOrder", String(column.sortable));
}

function onKeydownCell(e: KeyboardEvent): void {
    if (e.key === "Enter") {
        e.preventDefault();
        onClickCell();
    }
}
</script>

<template>
    <th
        ref="th"
        class="table-ng__column"
        tabindex="-1"
        @keydown="onKeydownCell"
        @click.stop="onClickCell"
        @table-activate-cell="onActivateCell"
    >
        <i-flex gap="1x">
            <i-flex-item shrink>
                {{ column.header }}
            </i-flex-item>
            <i-flex-item v-if="sortEnabled" shrink align="center">
                <f-icon :name="sortIcon" :class="sortIconClass"></f-icon>
            </i-flex-item>
        </i-flex>
        <div v-if="column.description.value" class="table-ng__column__description">
            {{ column.description }}
        </div>
    </th>
</template>
