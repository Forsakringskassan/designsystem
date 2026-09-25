<script setup lang="ts">
import { useTemplateRef } from "vue";
import { ValidationService } from "@fkui/logic";
import { FButton, FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    id: number;
    name: string;
    email: string;
}

const rows = useDatasetRef<Row>([
    {
        id: 1,
        name: "Pippi Långstrump",
        email: "pippi.långstrump.mail.se",
    },
    {
        id: 2,
        name: "Tommy",
        email: "tommy@mail.se",
    },
    {
        id: 3,
        name: "Annika",
        email: "annika.skrev.fel",
    },
]);

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name",
        editable: true,
    },
    {
        type: "text:email",
        header: "E-post",
        key: "email",
        editable: true,
    },
]);

const table = useTemplateRef("table");

async function validate(): Promise<void> {
    await ValidationService.validateAllElements("all");

    const invalidCell = document.querySelector<HTMLTableCellElement>('[aria-invalid="true"]');

    if (!invalidCell) {
        return;
    }

    const row = invalidCell.parentElement as HTMLTableRowElement;

    table.value?.focusCell(row.rowIndex, invalidCell.cellIndex);
}
</script>

<template>
    <f-table ref="table" :rows :columns>
        <template #caption>Programmatisk fokusering </template>
    </f-table>

    <f-button size="medium" variant="primary" @click="validate"> Skicka </f-button>
</template>
