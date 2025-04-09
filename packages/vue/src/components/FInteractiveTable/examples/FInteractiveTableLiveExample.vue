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
    name: "FDataTableLiveExample",
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
            isSelectable: true,
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
                        expandableRows: [
                            {
                                id: "1a",
                                level: "Sjukpenningsnivå",
                                start: "2022-04-18",
                                end: "2022-04-20",
                                antal: "3",
                            },
                            {
                                id: "1b",
                                level: "Lägstanivå",
                                start: "2022-04-16",
                                end: "2022-04-17",
                                antal: "2",
                            },
                            {
                                id: "1c",
                                level: "Sjukpenningsnivå",
                                start: "2022-04-11",
                                end: "2022-04-15",
                                antal: "5",
                            },
                        ],
                        expandableContent: [
                            {
                                id: "1a",
                                content: "Anledning: Tar hand om barnet",
                            },
                        ],
                    },
                    {
                        id: "2",
                        level: "Tillfällig föräldrapenning",
                        start: "2022-05-02",
                        end: "2022-05-04",
                        antal: "3",
                        expandableRows: [
                            {
                                id: "2a",
                                level: "Heldag",
                                start: "2022-05-02",
                                end: "2022-05-04",
                                antal: "3",
                            },
                        ],
                        expandableContent: [
                            {
                                id: "2a",
                                content: "Anledning: Tar hand om barnet",
                            },
                        ],
                    },
                    {
                        id: "3",
                        level: "Föräldrapenning",
                        start: "2022-05-16",
                        end: "2022-05-27",
                        antal: "11",
                        expandableRows: [
                            {
                                id: "3a",
                                level: "Sjukpenningsnivå",
                                start: "2022-05-23",
                                end: "2022-05-27",
                                antal: "4",
                            },
                            {
                                id: "3b",
                                level: "Lägstanivå",
                                start: "2022-05-21",
                                end: "2022-05-22",
                                antal: "2",
                            },
                            {
                                id: "3c",
                                level: "Sjukpenningsnivå",
                                start: "2022-05-16",
                                end: "2022-05-20",
                                antal: "5",
                            },
                        ],
                        expandableContent: [
                            {
                                id: "3a",
                                content: "Anledning: Tar hand om barnet",
                            },
                        ],
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
        selectable(): string {
            return this.isSelectable ? "selectable" : "";
        },
        expandable(): string {
            const expandableType = this.hasCustomExpandContent
                ? "expandableContent"
                : "expandableRows";
            return this.isExpandable ? `expandable-attribute="${expandableType}"` : "";
        },
        expandableSlot(): string {
            const template = /* HTML */ `
                <template #expandable="{ expandableRow }"> {{ expandableRow.content }} </template>
            `;
            return this.isExpandable && this.hasCustomExpandContent ? template : "";
        },
        empty(): string {
            const template = /* HTML */ `<template #empty>
                Det finns inga aktuella utbetalningar.
            </template>`;
            return this.isEmpty && this.hasCustomEmptyText ? template : "";
        },
        actions(): string {
            const actions = /* HTML */ `
                <f-table-column title="Åtgärd" type="action" shrink>
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
                    ${this.selectable}
                    ${this.expandable}
                    key-attribute="id"
                >
                    <template #caption> ${this.caption} </template>
                    <template #default="{ row }">
                        <f-table-column title="Nivå" ${this.rowHeader} type="text">
                            {{ row.level }}
                        </f-table-column>
                        <f-table-column
                            title="Från och med"
                            ${this.rowDescription}
                            type="text"
                            expand
                        >
                            <span v-format:date="row.start"></span>
                        </f-table-column>
                        <f-table-column title="Till och med" ${this.rowDescription} type="text">
                            <span v-format:date="row.end"></span>
                        </f-table-column>
                        <f-table-column title="Antal dagar" type="numeric">
                            {{ row.antal }}
                        </f-table-column>
                        ${this.actions}
                    </template>
                    ${this.expandableSlot}
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
        <f-checkbox-field v-model="isSelectable" :value="true"> Valbara rader </f-checkbox-field>
        <f-checkbox-field v-model="isExpandable" :value="true">
            Expanderbara rader
        </f-checkbox-field>
        <f-fieldset v-if="isExpandable" name="radio-expandable-type">
            <template #label> Typ av expanderat innehåll </template>
            <f-radio-field v-model="hasCustomExpandContent" :value="false">
                Tabellrad
            </f-radio-field>
            <f-radio-field v-model="hasCustomExpandContent" :value="true">
                Valfritt innehåll
            </f-radio-field>
        </f-fieldset>
        <f-checkbox-field v-model="hasHover" :value="true"> Hover </f-checkbox-field>
        <f-checkbox-field v-model="isStriped" :value="true"> Zebrarandig </f-checkbox-field>
        <f-checkbox-field v-model="hasActions" :value="true"> Åtgärdsknappar </f-checkbox-field>
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
