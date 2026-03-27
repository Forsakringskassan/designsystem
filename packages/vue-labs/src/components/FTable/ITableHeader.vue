<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FIcon, IFlex, IFlexItem } from "@fkui/vue";
import { isInputTypeNumber, isInputTypeText } from "./input-fields-config";
import {
    type NormalizedTableColumn,
    type NormalizedTableColumnNumber,
    type NormalizedTableColumnText,
} from "./table-column";

const { column, sortEnabled, sortOrder } = defineProps<{
    column: NormalizedTableColumn<T, K>;
    sortEnabled: boolean;
    sortOrder: "unsorted" | "ascending" | "descending";
}>();

const emit = defineEmits<{
    toggleSortOrder: [sortable: string];
}>();

const thElement = useTemplateRef("th");

const columnClasses = computed(() => {
    const size = column.size.value === "shrink" ? "table-ng__column--shrink" : "table-ng__column--grow";
    return ["table-ng__column", size];
});

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

const sortValue = computed(() => {
    switch (sortOrder) {
        case "ascending":
        case "descending":
            return sortOrder;
        default:
            return undefined;
    }
});

function isAlignableColumn(
    column: NormalizedTableColumn<T, K>,
): column is NormalizedTableColumnText<T, K> | NormalizedTableColumnNumber<T, K> {
    if (column.type === undefined) {
        return false;
    }

    return isInputTypeText(column.type) || isInputTypeNumber(column.type);
}

const alignment = computed(() => {
    return isAlignableColumn(column) ? column.align : "left";
});

function onClickCell(): void {
    assertRef(thElement);
    thElement.value.tabIndex = 0;

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
        :aria-sort="sortValue"
        :class="columnClasses"
        tabindex="-1"
        @keydown="onKeydownCell"
        @click.stop="onClickCell"
    >
        <i-flex gap="1x" :float="alignment">
            <i-flex-item shrink class="table-ng__column__title"> {{ column.header }} </i-flex-item>
            <i-flex-item v-if="sortEnabled" shrink align="center">
                <f-icon :name="sortIcon" :class="sortIconClass"></f-icon>
            </i-flex-item>
        </i-flex>
        <i-flex v-if="column.description.value" gap="1x" :float="alignment" class="table-ng__column__description">
            <i-flex-item shrink> {{ column.description }} </i-flex-item>
        </i-flex>
    </th>
</template>
