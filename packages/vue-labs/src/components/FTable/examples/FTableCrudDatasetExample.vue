<script setup lang="ts">
import { ref } from "vue";
import { FCrudDataset, FTextField, useDatasetRef } from "@fkui/vue";
import { type TableColumn, FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    name: string;
    description: string;
}

type CrudAction = (item: Row) => void;

const rows = useDatasetRef<Row>([
    {
        id: "1",
        name: "Ärende A",
        description: "Beskrivning för ärende A",
    },
    {
        id: "2",
        name: "Ärende B",
        description: "Beskrivning för ärende B",
    },
    {
        id: "3",
        name: "Ärende C",
        description: "Beskrivning för ärende C",
    },
]);

function getColumns(updateItem: CrudAction, deleteItem: CrudAction): Array<TableColumn<Row>> {
    return defineTableColumns<Row>([
        {
            type: "text",
            header: "Namn",
            key: "name",
        },
        {
            type: "text",
            header: "Beskrivning",
            key: "description",
            label: (row) => `Beskrivning för rad ${row.id}`,
        },
        {
            type: "menu",
            header: "Åtgärder",
            text(row) {
                return `Visa åtgärder för ${row.name}`;
            },
            actions: [
                {
                    label: "Ändra",
                    icon: "pen",
                    onClick(row) {
                        updateItem(row);
                    },
                },
                {
                    label: "Ta bort",
                    icon: "trashcan",
                    onClick(row) {
                        deleteItem(row);
                    },
                },
            ],
        },
    ]);
}

const nextId = ref(4);

function beforeCreate(): Row {
    const id = String(nextId.value);
    nextId.value += 1;
    return {
        id,
        name: "",
        description: "",
    };
}

function saveModel(row: Row): void {
    console.log("Post model to backend", row);
}
</script>

<template>
    <f-crud-dataset
        v-model="rows"
        :before-create
        @created="saveModel"
        @updated="saveModel"
        @deleted="saveModel"
    >
        <template #default="{ updateItem, deleteItem }">
            <f-table :rows :columns="getColumns(updateItem, deleteItem)" key-attribute="id">
                <template #caption> Exempeldata </template>
            </f-table>
        </template>

        <template #modify="{ item }">
            <f-text-field
                v-model="item.name"
                v-validation.maxLength="{ maxLength: { length: 32 } }"
                type="text"
            >
                Namn
            </f-text-field>

            <f-text-field
                v-model="item.description"
                v-validation.maxLength="{ maxLength: { length: 100 } }"
                type="text"
            >
                Beskrivning
            </f-text-field>

            ID {{ item.id }}
        </template>

        <template #add="{ item }">
            <f-text-field
                v-model="item.name"
                v-validation.maxLength="{ maxLength: { length: 32 } }"
                type="text"
            >
                Namn
            </f-text-field>

            <f-text-field
                v-model="item.description"
                v-validation.maxLength="{ maxLength: { length: 100 } }"
                type="text"
            >
                Beskrivning
            </f-text-field>
        </template>

        <template #delete="{ item }">
            Vill du verkligen ta bort "{{ item.name }}" med ID {{ item.id }}?
        </template>
    </f-crud-dataset>
</template>
