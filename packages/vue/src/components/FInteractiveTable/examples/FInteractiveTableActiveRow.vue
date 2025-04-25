<script lang="ts">
import { defineComponent } from "vue";
import { FIcon, FInteractiveTable, FTableColumn, FCheckboxField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FInteractiveTableStyling",
    components: { LiveExample, FCheckboxField },
    data() {
        return {
            isStriped: false,
            hasRowDescription: false,
            hasCustomEmptyText: false,
            hasHiddenCaption: false,
            hasRowHeader: false,
            hasHover: false,
            showActiveRow: true,
        };
    },
    computed: {
        livedata(): object {
            return {
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
        showActive(): string {
            return this.showActiveRow ? "" : `:showActive="false"`;
        },
        template(): string {
            return /* HTML */ `
                <f-interactive-table
                    :rows="items"
                    ${this.striped}
                    ${this.hover}
                    ${this.showActive}
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
                    </template>
                </f-interactive-table>
            `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-checkbox-field v-model="showActiveRow" :value="true">Visa aktiv rad</f-checkbox-field>
    </live-example>
</template>
