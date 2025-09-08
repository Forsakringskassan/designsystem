<script setup lang="ts">
import { h, ref } from "vue";
import { FTable } from "@fkui/vue-labs";
import { formatNumber } from "@fkui/logic";
import { defineTableColumns } from "../table-column";

const selectFieldOptions = ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"];

interface Row {
    id: number;
    animal?: string;
    level: string;
    start: string;
    end: string;
    expandableRows?: Row[];
    expandableContent?: Array<{
        id: string;
        content: string;
    }>;
    aktiv?: boolean;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "ID",
        key: "id",
    },
    {
        type: "text",
        header: "Animal",
        key: "animal",
    },
]);

const rows = ref<Row[]>([
    {
        id: 1,
        animal: "Nicky",
        level: "Talby",
        start: "2024-09-30",
        end: "2024-09-17",
        aktiv: false,
    },
    {
        id: 2,
        animal: "Jaynell",
        level: "Partlett",
        start: "2025-07-29",
        end: "2024-11-28",
        aktiv: true,
    },
    {
        id: 3,
        animal: "Maurizio",
        level: "Kinman",
        start: "2024-09-30",
        end: "2025-04-29",
        aktiv: false,
    },
    {
        id: 4,
        animal: "Harbert",
        level: "Knee",
        start: "2025-02-26",
        end: "2024-12-05",
        aktiv: false,
    },
    {
        id: 5,
        animal: "Kevyn",
        level: "Eversley",
        start: "2024-12-09",
        end: "2024-09-24",
        aktiv: false,
    },
    {
        id: 6,
        animal: "Sharl",
        level: "Maccrea",
        start: "2024-10-20",
        end: "2025-04-01",
        aktiv: false,
    },
    {
        id: 7,
        animal: "Aeriell",
        level: "Pizey",
        start: "2024-12-20",
        end: "2025-02-08",
        aktiv: false,
    },
    {
        id: 8,
        animal: "Rubina",
        level: "Clilverd",
        start: "2025-02-20",
        end: "2025-07-11",
        aktiv: true,
    },
    {
        id: 9,
        animal: "Oneida",
        level: "Clears",
        start: "2025-01-24",
        end: "2025-04-18",
        aktiv: false,
    },
    {
        id: 10,
        animal: "Odetta",
        level: "Picott",
        start: "2025-06-01",
        end: "2024-12-17",
        aktiv: false,
    },
    {
        id: 11,
        animal: "Shayne",
        level: "Grainge",
        start: "2025-03-01",
        end: "2025-01-05",
        aktiv: false,
    },
    {
        id: 12,
        animal: "Brnaba",
        level: "Brownbridge",
        start: "2025-05-14",
        end: "2024-11-25",
        aktiv: false,
    },
    {
        id: 13,
        animal: "Jim",
        level: "Snowsill",
        start: "2025-03-21",
        end: "2025-07-01",
        aktiv: false,
    },
    {
        id: 14,
        animal: "Germayne",
        level: "Coneron",
        start: "2025-07-14",
        end: "2024-10-23",
        aktiv: true,
    },
    {
        id: 15,
        animal: "Patience",
        level: "Sharples",
        start: "2025-08-03",
        end: "2025-04-07",
        aktiv: true,
    },
]);
const mySelectedRows = ref<Row[]>([rows.value[0]]);

function onButtonClick(id: string): void {
    alert(`Du klickade på rad med id ${id}`);
}
</script>

<template>
    <button type="button" class="button button--secondary">Interagerbart element före</button>
    <f-table v-model="mySelectedRows" :rows :columns key-attribute="id" striped paginerated>
    </f-table>
    <button type="button" class="button button--secondary">Interagerbart element efter</button>
</template>

<style>
body {
    padding: 1rem;
}

.icon-button {
    margin: 0;
    padding: 0;
    background: inherit;
    border: 0;
    cursor: pointer;
}

.level-2 {
    margin-left: 0.5rem;
}

.level-3 {
    padding-left: 1rem;
}

.bar {
    background: hotpink;
}
</style>
