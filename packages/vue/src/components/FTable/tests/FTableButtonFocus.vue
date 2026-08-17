<script setup lang="ts" generic="T, K extends keyof T">
import { useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { useModal } from "@fkui/vue";
import { FTable } from "@fkui/vue";
import { defineTableColumns, removeDatasetRows, useDatasetRef } from "@fkui/vue";

interface Row {
    namn: string;
}

const tableRef = useTemplateRef("table");
const { confirmModal } = useModal();

const rows = useDatasetRef<Row>([{ namn: "Apelsin" }, { namn: "Banan" }, { namn: "Äpple" }]);

const columns = defineTableColumns<Row>([
    { type: "text", header: "Frukt", key: "namn" },
    {
        type: "button",
        header: "Åtgärd",
        icon: "trashcan",
        text() {
            return "Ta bort";
        },
        onClick(row) {
            void onRemoveRow(row);
        },
    },
]);

async function onRemoveRow(row: Row): Promise<void> {
    assertRef(tableRef);
    const confirmed = await confirmModal({
        heading: "Ta bort frukt",
        content: `Är du säker?`,
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
        <template #caption>Lägg till och ta bort rad</template>
    </f-table>
</template>
