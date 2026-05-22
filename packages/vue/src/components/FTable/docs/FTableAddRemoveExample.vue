<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import {
    FButton,
    FTable,
    defineTableColumns,
    removeDatasetRows,
    useDatasetRef,
    useModal,
} from "@fkui/vue";

const tableRef = useTemplateRef("table");
const { confirmModal } = useModal();

interface Row {
    namn: string;
    land: string;
}

const rows = useDatasetRef<Row>([
    {
        namn: "Apelsin",
        land: "Spanien",
    },
    {
        namn: "Banan",
        land: "Columbia",
    },
    {
        namn: "Äpple",
        land: "Sverige",
    },
    {
        namn: "Päron",
        land: "Italien",
    },
]);

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "namn",
    },
    {
        type: "text",
        header: "Land",
        key: "land",
    },
    {
        type: "button",
        header: "Åtgärd",
        icon: "trashcan",
        text() {
            return "Ta bort";
        },
        onClick: onRemoveRow,
    },
]);

const nextFruit = ref(5);

function onAddRow(): void {
    rows.value.push({
        namn: `Frukt ${nextFruit.value++}`,
        land: "Okänt",
    });
}

async function onRemoveRow(row: Row): Promise<void> {
    assertRef(tableRef);

    const confirmed = await confirmModal({
        heading: "Ta bort frukt",
        content: `Är du säker att du vill ta bort ${row.namn}?`,
        confirm: "Ja, ta bort",
        dismiss: "Nej, behåll",
    });

    if (confirmed) {
        tableRef.value.withTabstopBehaviour("row-removal", () => {
            removeDatasetRows(rows, row);
        });
    }
}
</script>

<template>
    <f-table ref="table" :rows :columns>
        <template #caption>Lägg till och ta bort rad i tabell</template>
    </f-table>

    <f-button variant="secondary" data-test="add-row-button" @click="onAddRow">
        Lägg till rad
    </f-button>
</template>
