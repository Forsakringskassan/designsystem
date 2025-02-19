<script setup lang="ts">
import { ref } from "vue";
import { FDataTable, FTableColumn, FSortFilterDataset } from "../components";

const items = ref([
    {
        id: "1",
        start: "2022-04-10",
        end: "2022-04-25",
        level: "Sjukpenning",
        antal: "15",
        anteckning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: "2",
        start: "2022-05-06",
        end: "2022-05-10",
        level: "Lägstanivå",
        antal: "4",
        anteckning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: "3",
        start: "2022-05-20",
        end: "2022-05-31",
        level: "Sjukpenning",
        antal: "11",
        anteckning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
]);

const itemstwo = ref([
    {
        id: "1",
        start: "2022-04-10",
        end: "2022-04-25",
        level: "Sjukpenning",
        antal: "15",
        anteckning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: "2",
        start: "2022-05-06",
        end: "2022-05-10",
        level: "Lägstanivå",
        antal: "4",
        anteckning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: "3",
        start: "2022-05-20",
        end: "2022-05-31",
        level: "Sjukpenning",
        antal: "11",
        anteckning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
]);
</script>

<template>
    <div class="container">
        <button @click="console.log(items, itemstwo)">dsad</button>
        <f-data-table :rows="items" key-attribute="id">
            <template #caption> Föräldrapenning </template>
            <template #default="{ row }">
                <f-table-column name="level" title="Nivå" type="text">
                    {{ row.level }}
                </f-table-column>
                <f-table-column name="start" title="Från och med" type="text" expand>
                    <span class="nowrap">{{ row.start }}</span>
                </f-table-column>
                <f-table-column name="end" title="Till och med" type="text">
                    <span class="nowrap">{{ row.end }}</span>
                </f-table-column>
                <f-table-column name="antal" title="Antal dagar" type="numeric">
                    {{ row.antal }}
                </f-table-column>
                <f-table-column name="anteckning" title="Anteckning" type="text">
                    {{ row.anteckning }}
                </f-table-column>
            </template>
        </f-data-table>

        <f-data-table :rows="itemstwo">
            <template #caption> Föräldrapenning </template>
            <template #default="{ row }">
                <f-table-column name="level" title="Nivå" type="text">
                    {{ row.level }}
                </f-table-column>
                <f-table-column name="start" title="Från och med" type="text" expand>
                    <span class="nowrap">{{ row.start }}</span>
                </f-table-column>
                <f-table-column name="end" title="Till och med" type="text">
                    <span class="nowrap">{{ row.end }}</span>
                </f-table-column>
                <f-table-column name="antal" title="Antal dagar" type="numeric">
                    {{ row.antal }}
                </f-table-column>
                <f-table-column name="anteckning" title="Anteckning" type="text">
                    {{ row.anteckning }}
                </f-table-column>
            </template>
        </f-data-table>
    </div>
</template>
