<script setup lang="ts">
import { ref } from "vue";
import { FTable, FPagination, FTablePaginator } from "@fkui/vue-labs";
import { defineTableColumns } from "@fkui/vue-labs";
import { type PersonData, persons } from "./person-data";

const columns = defineTableColumns<PersonData>([
    {
        type: "text",
        header: "ID",
        key: "id",
    },
    {
        type: "text",
        header: "First name",
        key: "firstName",
    },
    {
        type: "text",
        header: "Last name",
        key: "lastName",
    },
]);

const rows = ref(persons);
</script>

<template>
    <f-pagination :items="rows">
        <template #default="{ items: currentPageItems, currentPage, numberOfPages }">
            <f-table :rows="currentPageItems" :columns key-attribute="id" striped>
                <template #footer>
                    <f-table-paginator :number-of-pages :current-page />
                </template>
            </f-table>
        </template>
    </f-pagination>
</template>
