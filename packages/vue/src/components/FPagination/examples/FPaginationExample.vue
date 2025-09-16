<script setup lang="ts">
import { ref } from "vue";
import { FDataTable, FInteractiveTable, FPagination, FPaginator, FTableColumn } from "@fkui/vue";
import { persons } from "./person-data";

const rows = ref(persons);

async function fetchData(first: number, last: number) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return rows.value.slice(first, last);
}
</script>

<template>
    <f-pagination :items="rows">
        <template #default="{ items: currentPageItems, currentPage, numberOfPages }">
            <f-data-table :rows="currentPageItems">
                <template #caption>:items = "rows"</template>
                <template #default="{ row }">
                    <f-table-column title="ID" type="numeric">{{ row.id }}</f-table-column>
                    <f-table-column title="First name" type="text">
                        {{ row.firstName }}
                    </f-table-column>
                    <f-table-column title="Last name" type="text">
                        {{ row.lastName }}
                    </f-table-column>
                </template>
            </f-data-table>
            <f-paginator :number-of-pages :current-page />
        </template>
    </f-pagination>

    <f-pagination :items-length="rows.length" :fetch-data :items-per-page="7">
        <template #default="{ items: currentPageItems, currentPage, numberOfPages }">
            <f-interactive-table :show-active="false" :rows="currentPageItems">
                <template #caption>:items-length="rows.length" :fetch-data</template>
                <template #default="{ row }">
                    <f-table-column title="ID" type="numeric">{{ row.id }}</f-table-column>
                    <f-table-column title="First name" type="text">
                        {{ row.firstName }}
                    </f-table-column>
                    <f-table-column title="Last name" type="text">
                        {{ row.lastName }}
                    </f-table-column>
                </template>
            </f-interactive-table>
            <f-paginator :number-of-pages :current-page />
        </template>
    </f-pagination>
</template>
