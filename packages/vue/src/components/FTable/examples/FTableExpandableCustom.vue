<script setup lang="ts">
import { h, ref } from "vue";
import { FTable, FCard, FButton } from "@fkui/vue";
import { formatNumber } from "@fkui/logic";
import { defineTableColumns } from "../table-column";
import XTableChip from "./XTableChip.vue";

interface Row {
    id: string;
    level: string;
    start: string;
    end: string;
    antal: string;
    expandableRows: Row[];
    aktiv?: boolean;
}

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
        level: "Föräldrapenning",
        start: "2022-04-11",
        end: "2022-04-20",
        antal: "10000",
        expandableContent: [
            {
                id: "1a",
                content: "Anledning: Tar hand om barnet",
            },
            {
                id: "1b",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
    {
        id: "2",
        level: "Tillfällig föräldrapenning",
        start: "2022-05-02",
        end: "2022-05-04",
        antal: "30000",
        expandableContent: [
            {
                id: "2a",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
    {
        id: "3",
        level: "Föräldrapenning",
        start: "2022-05-16",
        end: "2022-05-27",
        antal: "11000",
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
    <f-table :rows :columns key-attribute="id" expandable-attribute="expandableContent">
        <template #expandable="{ row }">
            <f-card>
                <template #header="{ headingSlotClass }">
                    <h3 :class="headingSlotClass">{{ row.id }}</h3>
                </template>
                <template #default>
                    <p>{{ row.content }}</p>
                </template>
                <template #footer>
                    <div class="button-group">
                        <f-button
                            variant="tertiary"
                            align-text
                            class="button-group__item"
                            icon-left="trashcan"
                        >
                            Ta bort
                        </f-button>
                        <f-button
                            variant="tertiary"
                            align-text
                            class="button-group__item"
                            icon-left="pen"
                        >
                            Ändra
                        </f-button>
                    </div>
                </template>
            </f-card>
        </template>
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
