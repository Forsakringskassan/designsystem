<script lang="ts">
import { defineComponent } from "vue";
import {
    FCheckboxField,
    FDataTable,
    FFieldset,
    FInteractiveTable,
    FNumericTextField,
    FPagination,
    FPaginator,
    FRadioField,
    FTableColumn,
} from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { template } from "lodash";
import { persons } from "./person-data";

export default defineComponent({
    name: "FPaginationLiveExample",
    components: { FCheckboxField, FFieldset, FNumericTextField, FRadioField, LiveExample },
    data() {
        return {
            componentType: "dataTable",
            fetchDataDynamically: false,
            numberOfItemsPerPage: 10,
            showPaginator: true,
        };
    },
    computed: {
        components(): object {
            return {
                FCheckboxField,
                FDataTable,
                FFieldset,
                FInteractiveTable,
                FNumericTextField,
                FPagination,
                FPaginator,
                FRadioField,
                FTableColumn,
            };
        },
        livedata(): object {
            return {
                rows: persons,
            };
        },
        component(): string {
            return this.componentType === "dataTable" ? `f-data-table` : `f-interactive-table`;
        },
        componentAttributes(): string {
            return this.componentType === "interactiveTable" ? `:show-active="false"` : ``;
        },
        items(): string {
            return /* HTML */ this.fetchDataDynamically
                ? `:items-length="rows.length" :fetch-data`
                : `:items="rows"`;
        },
        itemsPerPage(): string {
            return `:itemsPerPage="${this.numberOfItemsPerPage.toString()}"`;
        },
        paginator(): string {
            return /* HTML */ this.showPaginator
                ? `<f-paginator :number-of-pages :current-page />`
                : ``;
        },
        template(): string {
            return /* HTML */ `
                <f-pagination ${this.items} ${this.itemsPerPage}>
                    <template #default="{ items: currentPageItems, currentPage, numberOfPages }">
                        <${this.component} ${this.componentAttributes} :rows="currentPageItems">
                            <template #default="{ row }">
                                <f-table-column title="ID" type="numeric">
                                    {{ row.id }}
                                </f-table-column>
                                <f-table-column title="Name" type="text">
                                    {{ row.firstName }} {{ row.lastName }}
                                </f-table-column>
                            </template>
                        </${this.component}>
                        ${this.paginator}
                    </template>
                </f-pagination>
            `;
        },
    },
    watch: {
        itemsPerPage(newValue) {
            this.numberOfItemsPerPage = Math.max(1, newValue);
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata>
        <f-fieldset name="component">
            <template #label>Komponent</template>
            <f-radio-field v-model="componentType" value="dataTable">Datatabell</f-radio-field>
            <f-radio-field v-model="componentType" value="interactiveTable">
                Interaktiv tabell (stöder paginering med <kbd>PgUp</kbd> och <kbd>PgDn</kbd>)
            </f-radio-field>
        </f-fieldset>
        <f-numeric-text-field v-model="numberOfItemsPerPage">
            <template #default>Antal objekt per sida (maximalt)</template>
        </f-numeric-text-field>
        <f-fieldset name="alternatives">
            <template #label>Alternativ</template>
            <f-checkbox-field v-model="fetchDataDynamically" :value="true">
                Hämta data dymaniskt (med fördröjning)
            </f-checkbox-field>
            <f-checkbox-field v-model="showPaginator" :value="true">
                Visa paginator
            </f-checkbox-field>
        </f-fieldset>
    </live-example>
</template>
