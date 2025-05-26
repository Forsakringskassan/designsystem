<script setup lang="ts">
import { type PropType, computed, onMounted, ref, useTemplateRef, watch } from "vue";
import { ElementIdService } from "@fkui/logic";
import { FTableInjected } from "./FTableInterface";
import { FTableColumnType, FTableColumnSize, FTableColumnSort, isTableColumnType } from "./FTableColumnData";

const { renderColumns, setVisibilityColumn, addColumn } = FTableInjected();

const hasMounted = ref(false);
const isHeader = ref(false);

const id = ElementIdService.generateElementId("column");
const el = useTemplateRef("element");

defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    /**
     * Unique (per-table) identifier. Typically set to the row
     * property displayed but any unique string can be used.
     *
     * Only required when used with `FSortFilterDataset`.
     */
    name: {
        type: String,
        default: undefined,
    },
    /**
     * When enabled controls column visibility (default `true`)
     *
     * Should be used instead of `v-if` or `v-show`.
     */
    visible: {
        type: Boolean,
        default: true,
    },
    /**
     * When enabled this cell will be a row header (`<th>` as opposed to
     * `<td>`).
     */
    rowHeader: {
        type: Boolean,
        required: false,
        default: false,
    },
    /**
     * Text to show in column header. In order to force newlines use `\n`.
     */
    title: {
        type: String,
        required: true,
    },
    /**
     * Additional column description.
     */
    description: {
        type: String,
        required: false,
        default: "",
    },
    /**
     * Set this column to shrink as small as possible.
     *
     * Cannot be combined with `expand`
     */
    shrink: {
        type: Boolean,
        required: false,
        default: false,
    },
    /**
     * Set this column to expand as large as possible.
     *
     * Cannot be combined with `shrink`
     *
     * Default if neither `expand` or `shrink` is set.
     */
    expand: {
        type: Boolean,
        required: false,
        default: false,
    },
    /**
     * Type of data the rows contains.
     *
     * Applies proper alignment and some styling (e.g. "numeric" uses fixed
     * width numbers).
     *
     * Can be one of the following values:
     *
     * - `"text"`: regular text data (default)
     * - `"date"`: date (should be YYYY-MM-DD)
     * - `"numeric"`: numeric data
     * - `"action"`: buttons to perform actions on row
     */
    type: {
        type: String as PropType<"text" | "date" | "numeric" | "action">,
        required: false,
        default: FTableColumnType.TEXT,
        validator(value: string) {
            return isTableColumnType(value);
        },
    },
});

const classes = computed(() => {
    return ["table__column", `table__column--${props.type}`];
});

const scope = computed(() => {
    return props.rowHeader ? "row" : null;
});

const tagName = computed(() => {
    if (props.rowHeader) {
        return "th";
    } else {
        return "td";
    }
});

/**
 * Always render element until `onMounted` finished to determine if it's a header.
 */
const renderElement = computed(() => {
    const shouldRender = !isHeader.value && renderColumns.value && props.visible;
    return !hasMounted.value || shouldRender;
});

watch(
    () => props.visible,
    () => {
        setVisibilityColumn(id, props.visible);
    },
);

onMounted(() => {
    if (props.shrink && props.expand) {
        throw new Error("Table cannot have both shrink and expand enabled at the same time");
    }

    const size = props.shrink ? FTableColumnSize.SHRINK : FTableColumnSize.EXPAND;

    isHeader.value = isTableHeader();
    if (isHeader.value) {
        addColumn({
            name: props.name,
            title: props.title,
            description: props.description || undefined,
            id,
            size,
            type: props.type as FTableColumnType,
            visible: props.visible,
            sortable: false,
            sort: FTableColumnSort.UNSORTED,
        });
    }

    hasMounted.value = true;
});

function isTableHeader(): boolean {
    if (!el.value || !(el.value instanceof HTMLElement)) {
        return false;
    }
    const closest = el.value.closest("thead, tbody");
    return closest?.tagName === "THEAD";
}
</script>

<template>
    <component :is="tagName" v-if="renderElement" ref="element" :class="classes" :scope="scope" v-bind="$attrs">
        <template v-if="renderColumns">
            <!-- @slot Content to be rendered in table cell. -->
            <slot></slot>
            <!-- Extra space between columns for screen reader. Otherwise it can sometimes read two numbers as one longer number.
            For example a table with | 2 | 200 | can be read as 2200 in some languages.
            -->
            <span class="sr-only">&nbsp;</span>
        </template>
    </component>
</template>
