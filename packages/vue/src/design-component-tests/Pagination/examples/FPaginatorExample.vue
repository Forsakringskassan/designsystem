<script setup lang="ts">
import { FDataTable, FPagination, FPaginator, FTableColumn } from "@fkui/vue";

import { persons } from "./person-data";

async function fetchData(first: number, last: number) {
    await new Promise((resolve) => setTimeout(resolve, 0));
    return persons.slice(first, last);
}
</script>
<template>
    <f-pagination :items-length="persons.length" :items-per-page="10" :fetch-data>
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
            <f-paginator :current-page :number-of-pages :number-of-pages-to-show="9" />
        </template>
    </f-pagination>
</template>

