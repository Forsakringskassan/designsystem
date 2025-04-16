<script lang="ts">
import { defineComponent } from "vue";
import {
    FIcon,
    FInteractiveTable,
    FTableColumn,
    FCheckboxField,
    FRadioField,
    FFieldset,
} from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FInteractiveTableStyling",
    components: { LiveExample, FCheckboxField, FRadioField, FFieldset },
    data() {
        return {
            isEmpty: false,
            isStriped: false,
            hasRowDescription: false,
            hasCustomEmptyText: false,
            hasHiddenCaption: false,
            hasActions: false,
            hasRowHeader: false,
            isExpandable: false,
            hasCustomExpandContent: false,
            hasHover: false,
            emptyItems: [],
        };
    },
    computed: {
        livedata(): object {
            return {
                selectedItems: [],
                items: [
                    {
                        id: "1",
                        level: "Föräldrapenning",
                        start: "2022-04-11",
                        end: "2022-04-20",
                        antal: "10",
                    },
                    {
                        id: "2",
                        level: "Tillfällig föräldrapenning",
                        start: "2022-05-02",
                        end: "2022-05-04",
                        antal: "3",
                    },
                    {
                        id: "3",
                        level: "Föräldrapenning",
                        start: "2022-05-16",
                        end: "2022-05-27",
                        antal: "11",
                    },
                ],
            };
        },
        components(): object {
            return { FIcon, FInteractiveTable, FTableColumn };
        },
        items(): string {
            return this.isEmpty ? `:rows="[]"` : `:rows="items"`;
        },
        striped(): string {
            return this.isStriped ? "striped" : "";
        },
        rowHeader(): string {
            return this.hasRowHeader ? `:row-header="true"` : "";
        },
        rowDescription(): string {
            return this.hasRowDescription ? `description="(åååå-mm-dd)"` : "";
        },
        hover(): string {
            return this.hasHover ? "hover" : "";
        },
        caption(): string {
            return this.hasHiddenCaption
                ? `<span class="sr-only">Utbetalningar</span>`
                : "Utbetalningar";
        },
        expandable(): string {
            const expandableType = this.hasCustomExpandContent
                ? "expandableContent"
                : "expandableRows";
            return this.isExpandable ? `expandable-attribute="${expandableType}"` : "";
        },
        empty(): string {
            const template = /* HTML */ `<template #empty>
                Det finns inga aktuella utbetalningar.
            </template>`;
            return this.isEmpty && this.hasCustomEmptyText ? template : "";
        },
        actions(): string {
            const actions = /* HTML */ `
                <f-table-column name="actions" title="Åtgärd" type="action" shrink>
                    <button
                        aria-label="Redigera"
                        class="button button--tertiary button--small"
                        type="button"
                    >
                        <f-icon name="pen"></f-icon>
                    </button>
                    <button
                        aria-label="Ta bort"
                        class="button button--tertiary button--small"
                        type="button"
                    >
                        <f-icon name="trashcan"></f-icon>
                    </button>
                </f-table-column>
            `;
            return this.hasActions ? actions : "";
        },
        template(): string {
            return /* HTML */ `
                <f-interactive-table
                    ${this.items}
                    ${this.striped}
                    ${this.hover}
                    ${this.expandable}
                    key-attribute="id"
                >
                    <template #caption> ${this.caption} </template>
                    <template #default="{ row }">
                        <f-table-column name="level" title="Nivå" ${this.rowHeader} type="text">
                            {{ row.level }}
                        </f-table-column>
                        <f-table-column
                            name="start"
                            title="Från och med"
                            ${this.rowDescription}
                            type="text"
                            expand
                        >
                            {{ row.start }}
                        </f-table-column>
                        <f-table-column
                            name="end"
                            title="Till och med"
                            ${this.rowDescription}
                            type="text"
                        >
                            {{ row.end }}
                        </f-table-column>
                        <f-table-column name="antal" title="Antal dagar" type="numeric">
                            {{ row.antal }}
                        </f-table-column>
                        ${this.actions}
                    </template>
                    <template #checkbox-description> Välj denna rad </template>
                    ${this.empty}
                </f-interactive-table>
            `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-checkbox-field v-model="hasHover" :value="true"> Hover </f-checkbox-field>
        <f-checkbox-field v-model="isStriped" :value="true"> Zebrarandig </f-checkbox-field>
        <f-checkbox-field v-model="hasRowHeader" :value="true"> Radrubriker </f-checkbox-field>
        <f-checkbox-field v-model="hasHiddenCaption" :value="true"> Dold caption </f-checkbox-field>
        <f-checkbox-field v-model="isEmpty" :value="true"> Tom tabell </f-checkbox-field>
        <f-fieldset v-if="isEmpty" name="radio-empty-text">
            <template #label> Meddelande för tom tabell </template>
            <f-radio-field v-model="hasCustomEmptyText" :value="false">
                Standardmeddelande
            </f-radio-field>
            <f-radio-field v-model="hasCustomEmptyText" :value="true">
                Eget meddelande
            </f-radio-field>
        </f-fieldset>
    </live-example>
</template>
