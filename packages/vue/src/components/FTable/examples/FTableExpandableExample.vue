<script setup lang="ts">
import { h, ref } from "vue";
import { FTable } from "@fkui/vue";
import { formatNumber } from "@fkui/logic";
import { defineTableColumns } from "../table-column";
import XTableChip from "./XTableChip.vue";

interface Row {
    id: string;
    animal?: string;
    level: string;
    start: string;
    end: string;
    antal: string;
    expandableRows: Row[];
    aktiv?: boolean;
}

const selectFieldOptions = ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"];

const columns = defineTableColumns<Row>([
    {
        type: "checkbox",
        header: "Kryssruta",
        key: "aktiv",
    },
    {
        type: "text",
        header: "Text",
        key: "id",
    },
    {
        type: "text",
        header: "Formatterad text",
        value(row) {
            return formatNumber(row.antal) ?? "";
        },
    },
    {
        type: "text",
        header: "Redigerbar text",
        editable: true,
        key: "level",
    },
    {
        type: "button",
        header: "Knapp",
        icon: "trashcan",
        value(row) {
            return `Ta bort ${row.id}`;
        },
        onClick(row) {
            onButtonClick(row.id);
        },
    },
    {
        header: "Länk",
        type: "anchor",
        href: "http://www.vecka.nu",
        value() {
            return "Länktext";
        },
    },
    {
        header: "Dropplista",
        type: "select",
        key: "animal",
        options: selectFieldOptions,
    },
    {
        header: "Render function",
        render() {
            return h("td", { id: "foo", class: "bar" }, ["👻"]);
        },
    },
    {
        header: "Custom component",
        render() {
            return XTableChip;
        },
    },
]);

const rows = ref([
    {
        id: "1",
        animal: "Katt",
        level: "Föräldrapenning",
        start: "2022-04-11",
        end: "2022-04-20",
        antal: "10000",
        expandableRows: [
            {
                id: "1a",
                level: "Sjukpenningsnivå",
                start: "2022-04-18",
                end: "2022-04-20",
                antal: "30000",
            },
            {
                id: "1b",
                level: "Lägstanivå",
                start: "2022-04-16",
                end: "2022-04-17",
                antal: "20000",
            },
            {
                id: "1c",
                level: "Sjukpenningsnivå",
                start: "2022-04-11",
                end: "2022-04-15",
                antal: "50000",
            },
        ],
        expandableContent: [
            {
                id: "1a",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
    {
        id: "2",
        animal: "Spindel",
        level: "Tillfällig föräldrapenning",
        start: "2022-05-02",
        end: "2022-05-04",
        antal: "30000",
        expandableRows: [
            {
                id: "2a",
                level: "Heldag",
                start: "2022-05-02",
                end: "2022-05-04",
                antal: "30000",
            },
        ],
        expandableContent: [
            {
                id: "2a",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
    {
        id: "3",
        animal: "Hamster",
        level: "Föräldrapenning",
        start: "2022-05-16",
        end: "2022-05-27",
        antal: "11000",
        expandableRows: [
            {
                id: "3a",
                level: "Sjukpenningsnivå",
                start: "2022-05-23",
                end: "2022-05-27",
                antal: "40000",
            },
            {
                id: "3b",
                level: "Lägstanivå",
                start: "2022-05-21",
                end: "2022-05-22",
                antal: "20000",
            },
            {
                id: "3c",
                level: "Sjukpenningsnivå",
                start: "2022-05-16",
                end: "2022-05-20",
                antal: "50000",
            },
        ],
        expandableContent: [
            {
                id: "3a",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
]);

function onButtonClick(id: string): void {
    alert(`Du klickade på rad med id ${id}`);
}
</script>

<template>
    <f-table :rows :columns key-attribute="id" striped expandable-attribute="expandableRows">
    </f-table>
    <pre>{{ rows }}</pre>
</template>

<style>
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
