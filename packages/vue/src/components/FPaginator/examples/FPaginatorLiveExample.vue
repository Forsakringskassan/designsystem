<script lang="ts">
import { defineComponent } from "vue";
import {
    FDataTable,
    FFieldset,
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
    components: { FFieldset, FRadioField, LiveExample },
    data() {
        return {
            numberOfPagesOptions: [5, 6, 7, 8, 9],
            numberOfPagesToShowAtMost: null as number | null,
        };
    },
    computed: {
        components(): object {
            return {
                FDataTable,
                FFieldset,
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
        numberOfPagesToShow(): string {
            return /* HTML */ this.numberOfPagesToShowAtMost
                ? `:number-of-pages-to-show="${this.numberOfPagesToShowAtMost.toString()}"`
                : ``;
        },
        template(): string {
            return /* HTML */ `
                <f-pagination :items="rows">
                    <template #default="{ items: currentPageItems, currentPage, numberOfPages }">
                        <f-data-table :rows="currentPageItems">
                            <template #default="{ row }">
                                <f-table-column title="ID" type="numeric">
                                    {{ row.id }}
                                </f-table-column>
                                <f-table-column title="Name" type="text">
                                    {{ row.firstName }} {{ row.lastName }}
                                </f-table-column>
                            </template>
                        </f-data-table>
                        <f-paginator :current-page :number-of-pages ${this.numberOfPagesToShow} />
                    </template>
                </f-pagination>
            `;
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata>
        <f-fieldset name="numberOfPages" horizontal>
            <template #label>Antal sidor att visa</template>
            <template #description="{ descriptionClass }">
                <span :class="descriptionClass">
                    Det maximala antalet sidor som kan visas samtidigt.
                </span>
            </template>
            <f-radio-field v-model="numberOfPagesToShowAtMost" :value="null">Ej valt</f-radio-field>
            <f-radio-field
                v-for="option in numberOfPagesOptions"
                :key="option"
                v-model="numberOfPagesToShowAtMost"
                :value="option"
            >
                {{ option }}
            </f-radio-field>
        </f-fieldset>
    </live-example>
</template>
