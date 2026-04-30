<script setup lang="ts">
import { ref } from "vue";
import { FButton, FSortFilterDataset, useDatasetRef, useModal } from "@fkui/vue";
import { FTable, defineTableColumns, removeDatasetRows } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
    pris?: number;
    kommentar?: string;
    sorter?: Row[];
}

const lander = [
    "",
    "Colombia",
    "Costa Rica",
    "Dominikanska republiken",
    "Ecuador",
    "Frankrike",
    "Italien",
    "Spanien",
    "Sverige",
    "Sydafrika",
];

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "namn",
    },
    {
        type: "select",
        options: lander,
        header: "Land",
        label: () => `Val av land`,
        key: "land",
    },
    {
        type: "text:currency",
        header: "Pris",
        key: "pris",
    },
    {
        type: "text",
        editable: true,
        label: (row) => `Kommentar till ${row.namn}`,
        header: "Kommentar",
        key: "kommentar",
    },
]);

const rows = useDatasetRef<Row>(
    [
        {
            namn: "Apelsin",
            land: "",
            kommentar: "",
            sorter: [
                { namn: "Navelina", land: "Spanien", pris: 28.73 },
                { namn: "Navel (Navels)", land: "Spanien", pris: 18 },
                { namn: "Ekologiska Navels", land: "Spanien", pris: 46.63 },
                { namn: "Tarocco (Blodapelsin)", land: "Italien", pris: 35 },
                { namn: "Moro (Blodapelsin)", land: "Italien", pris: 32 },
                { namn: "Valencia (Juiceapelsin)", land: "Sydafrika", pris: 22 },
            ],
        },
        {
            namn: "Äpple",
            land: "",
            kommentar: "Säsongsvariationer förekommer",
            sorter: [
                { namn: "Ingrid Marie", land: "Sverige", pris: 29.9 },
                { namn: "Aroma", land: "Sverige", pris: 32.5 },
                { namn: "Royal Gala", land: "Italien", pris: 24.95 },
                { namn: "Granny Smith", land: "Frankrike", pris: 28 },
                { namn: "Pink Lady", land: "Italien", pris: 42 },
            ],
        },
        {
            namn: "Banan",
            land: "",
            kommentar: "Säljs oftast per kilo",
            sorter: [
                { namn: "Cavendish", land: "Ecuador", pris: 21.9 },
                { namn: "Ekologiska Bananer", land: "Dominikanska republiken", pris: 28.5 },
                { namn: "Fairtrade Bananer", land: "Colombia", pris: 26 },
                { namn: "Plantain (Kokbanan)", land: "Costa Rica", pris: 35 },
                { namn: "Babybanan", land: "Ecuador", pris: 45 },
            ],
        },
    ],
    "sorter",
);

const sortableAttributes = { namn: "Frukt" };
const valdaRader = ref([]);
const { confirmModal } = useModal();

async function onRemoveSelectedRows(): Promise<void> {
    if (valdaRader.value.length === 0) {
        return;
    }

    const confirmed = await confirmModal({
        heading: "Ta bort frukt(er)",
        content: "Är du säker att du vill ta bort valda frukt(er)?",
        confirm: "Ja, ta bort",
        dismiss: "Nej, behåll",
    });

    if (confirmed) {
        removeDatasetRows(rows, valdaRader);
    }
}
</script>

<template>
    <f-sort-filter-dataset :data="rows" :sortable-attributes>
        <template #header>
            <f-button
                data-id="remove-selected-button"
                variant="tertiary"
                icon-left="trashcan"
                size="small"
                @click="onRemoveSelectedRows"
            >
                Ta bort valda frukter
            </f-button>
        </template>
        <template #default="{ sortFilterResult }">
            <f-table
                ref="table"
                v-model:selected-rows="valdaRader"
                :rows="sortFilterResult"
                :columns
                striped
                selectable="multi"
            >
                <template #caption><span class="sr-only">Fruktexempel</span></template>
            </f-table>
        </template>
    </f-sort-filter-dataset>
</template>
