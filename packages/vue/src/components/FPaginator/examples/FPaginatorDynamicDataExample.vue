<script setup lang="ts">
import { FDataTable, FPaginateDataset, FPaginator, FTableColumn } from "@fkui/vue";

import { persons } from "./pagination-data";

async function fetchData(first: number, last: number) {
    await new Promise((resolve) => setTimeout(resolve, 0));
    return persons.slice(first, last);
}
</script>
<template>
    <f-paginate-dataset :items-length="persons.length" :items-per-page="10" :fetch-data>
        <template #default="{ items: currentPageItems, currentPage, numberOfPages }">
            <f-data-table :rows="currentPageItems">
                <template #caption>Persons</template>
                <template #default="{ row }">
                    <f-table-column title="ID" type="numeric">
                        {{ row.id }}
                    </f-table-column>
                    <f-table-column title="Name" type="text">
                        {{ row.name }}
                    </f-table-column>
                </template>
            </f-data-table>
            <f-paginator
                v-test="'myPaginator'"
                :current-page
                :number-of-pages
                :number-of-pages-to-show="9"
            />
        </template>
    </f-paginate-dataset>
</template>
