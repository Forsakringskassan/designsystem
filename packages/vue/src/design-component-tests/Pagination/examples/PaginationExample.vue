<script lang="ts">
import { defineComponent } from "vue";
import {
    FCheckboxField,
    FFieldset,
    FList,
    FNumericTextField,
    FPaginateDataset,
    FPaginator,
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
                FFieldset,
                FList,
                FNumericTextField,
                FPaginateDataset,
                FPaginator,
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
            return /* HTML */ `<f-paginator
                ${this.numberOfPagesToShow}
                navigator-label="Navigate between persons"
            />`;
        },
        template(): string {
            return /* HTML */ `
                <f-paginate-dataset ${this.items} ${this.itemsPerPage}>
                    <template #default="{ items: currentPageItems }">
                        ${this.headerPaginator}
                        <f-list :items="currentPageItems" key-attribute="id">
                            <template #default="{ item }">
                                <h6>{{ item.firstName }} {{ item.lastName }} ({{item.id}})</h6>
                            </template>
                        </f-list>
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
