<script lang="ts">
import { defineComponent } from "vue";
import {
    FCheckboxField,
    FDataTable,
    FFieldset,
    FRadioField,
    FSelectField,
    FTableColumn,
    TableScroll,
} from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FDataTableLiveExample",
    components: { LiveExample, FCheckboxField, FRadioField, FSelectField, FFieldset },
    data() {
        return {
            isEmpty: false,
            isStriped: false,
            hasRowHeader: false,
            hasRowDescription: false,
            hasCustomEmptyText: false,
            hasHiddenCaption: false,
            emptyItems: [],
            scroll: "none" as TableScroll,
        };
    },
    computed: {
        livedata(): object {
            return {
                selectedItems: [],
                items: [
                    {
                        id: "1",
                        start: "2022-04-10",
                        end: "2022-04-25",
                        level: "Sjukpenning",
                        antal: "15",
                        anteckning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    },
                    {
                        id: "2",
                        start: "2022-05-06",
                        end: "2022-05-10",
                        level: "Lägstanivå",
                        antal: "4",
                        anteckning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    },
                    {
                        id: "3",
                        start: "2022-05-20",
                        end: "2022-05-31",
                        level: "Sjukpenning",
                        antal: "11",
                        anteckning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    },
                ],
            };
        },

        components(): object {
            return { FDataTable, FTableColumn };
        },
        items(): string {
            return this.isEmpty ? `:rows="[]"` : `:rows="items"`;
        },

        striped(): string {
            return this.isStriped ? "striped" : "";
        },
        rowHeader(): string {
            return this.hasRowHeader ? `row-header` : "";
        },
        rowDescription(): string {
            return this.hasRowDescription ? `description="(åååå-mm-dd)"` : "";
        },

        caption(): string {
            return this.hasHiddenCaption
                ? `<span class="sr-only">Föräldrapenning</span>`
                : "Föräldrapenning";
        },
        empty(): string {
            const template = /* HTML */ `<template #empty>
                Det finns inga aktuella utbetalningar.
            </template>`;
            return this.isEmpty && this.hasCustomEmptyText ? template : "";
        },
        template(): string {
            const scroll = this.scroll !== "none" ? `scroll="${this.scroll}"` : "";
            return /* HTML */ `
                <f-data-table ${this.items} ${this.striped} ${scroll} key-attribute="id">
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
                        <f-table-column title="Anteckning" type="text">
                            {{ row.anteckning }}
                        </f-table-column>
                    </template>
                    ${this.empty}
                </f-data-table>
            `;
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata>
        <f-checkbox-field v-model="isStriped" :value="true"> Zebrarandig </f-checkbox-field>
        <f-checkbox-field v-model="hasRowHeader" :value="true"> Radrubriker </f-checkbox-field>
        <f-checkbox-field v-model="hasRowDescription" :value="true">
            Kolumnbeskrivnig
        </f-checkbox-field>
        <f-checkbox-field v-model="hasHiddenCaption" :value="true"> Dold caption </f-checkbox-field>
        <f-checkbox-field v-model="isEmpty" :value="true"> Tom tabell </f-checkbox-field>
        <f-select-field v-model="scroll">
            <template #label> Skroll </template>
            <template #default>
                <option value="none">Inaktiv</option>
                <option value="horizontal">Horisontal</option>
                <option value="vertical">Vertikal</option>
                <option value="both">Båda</option>
            </template>
        </f-select-field>
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
