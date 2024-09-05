<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-checkbox-field v-model="isStriped" :value="true"> Zebrarandig </f-checkbox-field>
        <f-checkbox-field v-model="hasRowHeader" :value="true"> Radrubriker </f-checkbox-field>
        <f-checkbox-field v-model="hasRowDescription" :value="true">
            Kolumnbeskrivnig
        </f-checkbox-field>
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

<script lang="ts">
import { defineComponent } from "vue";
import { FDataTable, FTableColumn, FCheckboxField, FRadioField, FFieldset } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FDataTableLiveExample",
    components: { LiveExample, FCheckboxField, FRadioField, FFieldset },
    data() {
        return {
            isEmpty: false,
            isStriped: false,
            hasRowHeader: false,
            hasRowDescription: false,
            hasCustomEmptyText: false,
            hasHiddenCaption: false,
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
                        start: "2022-04-10",
                        end: "2022-04-25",
                        level: "Sjukpenning",
                        antal: "15",
                    },
                    {
                        id: "2",
                        start: "2022-05-06",
                        end: "2022-05-10",
                        level: "Lägstanivå",
                        antal: "4",
                    },
                    {
                        id: "3",
                        start: "2022-05-20",
                        end: "2022-05-31",
                        level: "Sjukpenning",
                        antal: "11",
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
            return this.hasRowHeader ? `:row-header="true"` : "";
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
            const template = /* HTML */ `
                <template #empty> Det finns inga aktuella utbetalningar. </template>
            `;
            return this.isEmpty && this.hasCustomEmptyText ? template : "";
        },
        template(): string {
            return /* HTML */ `
                <f-data-table ${this.items} ${this.striped} key-attribute="id">
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
                    </template>
                    ${this.empty}
                </f-data-table>
            `;
        },
    },
});
</script>
