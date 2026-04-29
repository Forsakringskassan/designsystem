<!-- <script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FButton, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns, removeRow } from "@fkui/vue-labs";

const tableRef = useTemplateRef("table");
const nextId = ref(4);
const selectedRows = ref<Row[]>([]);

function onRemoveRow(row: Row): void {
    assertRef(tableRef);

    tableRef.value.withTabstopBehaviour("row-removal", () => {
        rows.value = removeRow(rows.value, row, "expandableRows");
    });
}

function onRemoveSelectedRows(): void {
    rows.value = rows.value.filter((row) => !selectedRows.value.includes(row));
    selectedRows.value = [];
}

function onAddRow(): void {
    rows.value.push({
        id: String(nextId.value++),
        caseType: "",
        status: "Ny",
        start: "2026-04-15",
        end: "2024-04-22",
        amount: "0",
        expandableRows: [],
    });
}

interface Row {
    id: string;
    caseType: string;
    status: string;
    start: string;
    end: string;
    amount: string;
    expandableRows?: Row[];
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Ärendetyp",
        key: "caseType",
        editable: true,
        label: (row) => `Ärendetyp för rad ${row.id}`,
        validation: {
            required: {},
        },
    },
    {
        type: "select",
        header: "Status",
        key: "status",
        label: (row) => `Nivå för rad ${row.id}`,
        options: ["Pågående", "Godkänd", "Väntar", "Avslutad", "Ny"],
    },
    {
        type: "text:date",
        header: "Från och med",
        key: "start",
    },
    {
        type: "text:date",
        header: "Till och med",
        key: "end",
    },
    {
        type: "text:number",
        header: "Belopp",
        key: "amount",
        editable: true,
    },
    {
        type: "button",
        header: "Åtgärd",
        icon: "trashcan",
        size: "shrink",
        text() {
            return "Ta bort";
        },
        onClick(row) {
            onRemoveRow(row);
        },
    },
]);

const rows = useDatasetRef<Row>(
    [
        {
            id: "1",
            caseType: "Ansökan",
            status: "Pågående",
            start: "2022-04-11",
            end: "2022-04-20",
            amount: "10000",
            expandableRows: [
                {
                    id: "1a",
                    caseType: "Komplettering",
                    status: "Väntar",
                    start: "2022-04-18",
                    end: "2022-04-20",
                    amount: "3000",
                },
            ],
        },
        {
            id: "2",
            caseType: "Ändring",
            status: "Godkänd",
            start: "2022-05-02",
            end: "2022-05-04",
            amount: "30000",
            expandableRows: [
                {
                    id: "2a",
                    caseType: "Bekräftelse",
                    status: "Avslutad",
                    start: "2022-05-02",
                    end: "2022-05-04",
                    amount: "30000",
                },
            ],
        },
        {
            id: "3",
            caseType: "Utbetalning",
            status: "Avslutad",
            start: "2022-05-16",
            end: "2022-05-27",
            amount: "11000",
            expandableRows: [
                {
                    id: "3a",
                    caseType: "Justering",
                    status: "Godkänd",
                    start: "2022-05-23",
                    end: "2022-05-27",
                    amount: "4000",
                },
                {
                    id: "3b",
                    caseType: "Komplettering",
                    status: "Väntar",
                    start: "2022-05-21",
                    end: "2022-05-22",
                    amount: "2000",
                },
            ],
        },
    ],
    "expandableRows",
);
</script>

<template>
    <f-table
        ref="table"
        v-model:selected-rows="selectedRows"
        :rows
        :columns
        key-attribute="id"
        selectable="multi"
    >
        <template #caption>Utbetalningar</template>
    </f-table>

    <f-button variant="secondary" @click="onRemoveSelectedRows"> Ta bort markerade rader </f-button>
    <f-button variant="secondary" @click="onAddRow"> Lägg till rad </f-button>
</template> -->
