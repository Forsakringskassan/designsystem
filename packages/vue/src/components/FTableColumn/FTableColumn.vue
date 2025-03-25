<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { ElementIdService } from "@fkui/logic";
import { FTableInjected, FTableInterface } from "./FTableInterface";
import { FTableColumnType, FTableColumnSize, FTableColumnSort, isTableColumnType } from "./FTableColumnData";

export default defineComponent({
    name: "FTableColumn",
    inheritAttrs: false,
    props: {
        /**
         * Unique (per-table) identifier.
         *
         * Typically set to the row property displayed but any unique string can
         * be used.
         */
        name: {
            type: String,
            required: true,
        },
        /**
         * If set to true, display the column, set to false to hide it.
         */
        visible: {
            type: Boolean,
            default: true,
        },
        /**
         * If `true` this cell will be a row header (`<th>` as opposed to
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
    },
    setup(): Omit<FTableInterface, "textFieldTableMode"> {
        const { renderColumns, setVisibilityColumn, addColumn } = FTableInjected();
        return { renderColumns, setVisibilityColumn, addColumn };
    },
    computed: {
        classes(): string[] {
            return ["table__column", `table__column--${this.type}`];
        },
        scope(): "row" | null {
            return this.rowHeader ? "row" : null;
        },
        tagName(): "td" | "th" {
            if (this.rowHeader) {
                return "th";
            } else {
                return "td";
            }
        },
    },
    watch: {
        visible: {
            handler: function () {
                this.setVisibilityColumn(this.name, this.visible);
            },
        },
    },
    created() {
        if (this.shrink && this.expand) {
            throw new Error("Table cannot have both shrink and expand enabled at the same time");
        }

        const size = this.shrink ? FTableColumnSize.SHRINK : FTableColumnSize.EXPAND;
        this.addColumn({
            name: this.name,
            title: this.title,
            description: this.description || undefined,
            id: ElementIdService.generateElementId("column"),
            size,
            type: this.type as FTableColumnType,
            visible: this.visible,
            sortable: false,
            sort: FTableColumnSort.UNSORTED,
        });
    },
});
</script>

<template>
    <component :is="tagName" v-if="renderColumns && visible" :class="classes" :scope="scope" v-bind="$attrs">
        <slot></slot>
        <!-- Extra space between columns for screen reader. Otherwise it can sometimes read two numbers as one longer number.
            For example a table with | 2 | 200 | can be read as 2200 in some languages.
         -->
        <span class="sr-only">&nbsp;</span>
    </component>
</template>
