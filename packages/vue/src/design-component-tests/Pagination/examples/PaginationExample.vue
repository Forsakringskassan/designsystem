<script lang="ts">
import { defineComponent } from "vue";
import {
    FCheckboxField,
    FDataTable,
    FFieldset,
    FInteractiveTable,
    FNumericTextField,
    FPaginateDataset,
    FPaginator,
    FRadioField,
    FSelectField,
    FTableColumn,
} from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { persons } from "./pagination-data";

export default defineComponent({
    name: "PaginationExample",
    components: {
        FCheckboxField,
        FFieldset,
        FNumericTextField,
        FRadioField,
        FSelectField,
        LiveExample,
    },
    data() {
        return {
            componentType: "dataTable",
            fetchDataDynamically: false,
            numberOfItemsPerPage: 10,
            numberOfPagesOptions: [5, 6, 7, 8, 9],
            numberOfPagesToShowAtMost: null as number | null,
            showPaginator: true,
            showPaginatorInHeader: false,
            showPaginatorInFooter: true,
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
                FPaginateDataset,
                FPaginator,
                FRadioField,
                FSelectField,
                FTableColumn,
            };
        },
        livedata(): object {
            return {
                rows: persons,
            };
        },
        livemethods(): object {
            return {
                async fetchData(first: number, last: number) {
                    await new Promise((resolve) => setTimeout(resolve, 3000));
                    return persons.slice(first, last);
                },
            };
        },
        component(): string {
            return this.componentType === "dataTable" ? `f-data-table` : `f-interactive-table`;
        },
        componentAttributes(): string {
            return this.componentType === "interactiveTable" ? `:show-active="false"` : ``;
        },
        footerPaginator(): string {
            return this.showPaginatorInFooter ? this.paginator : ``;
        },
        headerPaginator(): string {
            return this.showPaginatorInHeader ? this.paginator : ``;
        },
        items(): string {
            return /* HTML */ this.fetchDataDynamically
                ? `:items-length="rows.length" :fetch-data`
                : `:items="rows"`;
        },
        itemsPerPage(): string {
            return `:itemsPerPage="${this.numberOfItemsPerPage.toString()}"`;
        },
        numberOfPagesToShow(): string {
            return /* HTML */ this.numberOfPagesToShowAtMost
                ? `:number-of-pages-to-show="${this.numberOfPagesToShowAtMost.toString()}"`
                : ``;
        },
        paginator(): string {
            return /* HTML */ `<f-paginator ${this.numberOfPagesToShow} />`;
        },
        template(): string {
            return /* HTML */ `
                <f-paginate-dataset ${this.items} ${this.itemsPerPage}>
                    <template #default="{ items: currentPageItems }">
                        ${this.headerPaginator}
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
                        ${this.footerPaginator}
                    </template>
                </f-paginate-dataset>
            `;
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata :livemethods>
        <f-fieldset name="component" show-details="when-selected">
            <template #label>Komponent</template>
            <f-radio-field v-model="componentType" value="dataTable">Datatabell</f-radio-field>
            <f-radio-field v-model="componentType" value="interactiveTable">
                Interaktiv tabell
                <template #details>
                    Stöder paginering med <kbd>Page Up</kbd> och <kbd>Page Down</kbd>.
                </template>
            </f-radio-field>
        </f-fieldset>
        <f-numeric-text-field v-model="numberOfItemsPerPage">
            <template #default>Antal objekt per sida</template>
            <template #description="{ descriptionClass }">
                <span :class="descriptionClass">Maximalt antal objekt per sida</span>
            </template>
        </f-numeric-text-field>
        <f-fieldset name="alternatives" show-details="when-selected">
            <template #label>Alternativ</template>
            <f-checkbox-field v-model="fetchDataDynamically" :value="true">
                Hämta data dynamiskt
                <template #details>Sker med fördröjning om 3 sekunder.</template>
            </f-checkbox-field>
            <f-checkbox-field v-model="showPaginatorInHeader" :value="true">
                Visa paginator i sidhuvud
            </f-checkbox-field>
            <f-checkbox-field v-model="showPaginatorInFooter" :value="true">
                Visa paginator i sidfot
            </f-checkbox-field>
        </f-fieldset>
        <f-select-field id="numberOfPages" v-model="numberOfPagesToShowAtMost">
            <template #label>Antal sidor att visa</template>
            <template #description="{ descriptionClass }">
                <span :class="descriptionClass">
                    Det maximala antalet sidor som kan visas samtidigt.
                </span>
            </template>
            <option :value="null">Standardvärde</option>
            <option v-for="option in numberOfPagesOptions" :key="option" :value="option">
                {{ option }}
            </option>
        </f-select-field>
    </live-example>
</template>
