<script lang="ts">
import { defineComponent } from "vue";
import {
    FCheckboxField,
    FFieldset,
    FList,
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
            showInteractiveListWithCheckboxes: false,
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
                FPaginateDataset,
                FPaginator,
                FSelectField,
                FTableColumn,
            };
        },
        livedata(): object {
            return {
                rows: persons,
                selectedRows: [],
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
            return this.fetchDataDynamically
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
        numberOfRows(): number {
            return persons.length;
        },
        paginator(): string {
            return /* HTML */ `<f-paginator
                ${this.numberOfPagesToShow}
                navigator-label="Navigate between persons"
            />`;
        },
        screenreaderTemplate(): string {
            return this.showInteractiveListWithCheckboxes /* HTML */
                ? `<template #screenreader="{ item }">
                      Person {{ item.name }} ({{item.id}})
                  </template>`
                : ``;
        },
        selectable(): string {
            return this.showInteractiveListWithCheckboxes ? `selectable` : ``;
        },
        vModel(): string {
            return this.showInteractiveListWithCheckboxes ? `v-model="selectedRows"` : ``;
        },
        template(): string {
            return /* HTML */ `
                <f-paginate-dataset ${this.items} ${this.itemsPerPage}>
                    <template #default="{ items: currentPageItems }">
                        ${this.headerPaginator}
                        <f-list
                            ${this.vModel}
                            :items="currentPageItems"
                            key-attribute="id"
                            ${this.selectable}
                        >
                            <template #default="{ item }">
                                <h6>{{ item.name }} ({{item.id}})</h6>
                            </template>
                            ${this.screenreaderTemplate}
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
        <f-select-field id="numberOfItemsPerPage" v-model="numberOfItemsPerPage">
            <template #label>Antal objekt per sida</template>
            <template #description="{ descriptionClass }">
                <span :class="descriptionClass">Maximalt antal objekt per sida</span>
            </template>
            <option v-for="option in numberOfRows" :key="option" :value="option">
                {{ option }}
            </option>
        </f-select-field>
        <f-fieldset name="alternatives" show-details="when-selected">
            <template #label>Alternativ</template>
            <f-checkbox-field v-model="showInteractiveListWithCheckboxes" :value="true">
                Visa interaktiv lista med kryssrutor
                <template #details>
                    Stöder paginering med <kbd>Page Up</kbd> och <kbd>Page Down</kbd>.
                </template>
            </f-checkbox-field>
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
