<script setup lang="ts">
import { type Dataset } from "../../../utils";
import { type PersonData, persons } from "./pagination-data";
import {
    FPaginateDataset,
    FPaginator,
    FTable,
    defineTableColumns,
    toDataset,
    useDatasetRef,
} from "@fkui/vue";

const rows = useDatasetRef<PersonData>(persons);
const columns = defineTableColumns<PersonData>([
    { type: "text:number", decimals: 0, header: "ID", key: "id" },
    { type: "text", header: "Name", key: "name" },
]);

async function fetchData(first: number, last: number): Promise<Dataset<PersonData>> {
    await new Promise((resolve) => setTimeout(resolve, 0));
    return toDataset(persons.slice(first, last), rows.value);
}
</script>
<template>
    <f-paginate-dataset :items-length="persons.length" :items-per-page="10" :fetch-data>
        <template #default="{ items: currentPageItems, currentPage, numberOfPages }">
            <f-table :rows="currentPageItems" :columns>
                <template #caption>Persons</template>
            </f-table>
            <f-paginator :current-page :number-of-pages :number-of-pages-to-show="9" />
        </template>
    </f-paginate-dataset>
</template>
