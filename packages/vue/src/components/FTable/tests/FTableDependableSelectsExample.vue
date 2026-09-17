<script setup lang="ts">
import { computed } from "vue";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    kategori: "Katter" | "Hundar";
    alternativ: string;
}

const rows = useDatasetRef<Row>([
    { kategori: "Katter", alternativ: "Findus" },
    { kategori: "Hundar", alternativ: "Båtsman" },
    { kategori: "Katter", alternativ: "Pelle Svanslös" },
]);

const optionsByCategory = {
    Katter: ["Findus", "Pelle Svanslös", "Katten Jansson"],
    Hundar: ["Båtsman", "Pluto", "Bluey"],
};

const columns = computed(() =>
    defineTableColumns<Row>([
        {
            type: "select",
            header: "Kategori",
            key: "kategori",
            options: ["Katter", "Hundar"],
            label(row) {
                return `Välj kategori för ${row.alternativ}`;
            },
        },
        {
            type: "select",
            header: "Alternativ",
            key: "alternativ",
            options: (row) => optionsByCategory[row.kategori],
            label(row) {
                return `Välj alternativ för ${row.alternativ}`;
            },
        },
    ]),
);
</script>

<template>
    <f-table :rows :columns>
        <template #caption>Två select-kolumner med beroenden</template>
    </f-table>
</template>
