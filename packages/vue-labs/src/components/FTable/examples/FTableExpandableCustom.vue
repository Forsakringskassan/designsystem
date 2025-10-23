<script setup lang="ts">
import { h, ref } from "vue";
import { formatNumber } from "@fkui/logic";
import { FButton, FCard } from "@fkui/vue";
import { FTable } from "@fkui/vue-labs";
import { defineTableColumns } from "../table-column";

const selectFieldOptions = ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"];

interface Row {
    id: string;
    animal?: string;
    level: string;
    start: string;
    end: string;
    antal: string;
    expandableContent?: Array<{
        id: string;
        content: string;
    }>;
    aktiv?: boolean;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Oformaterad text",
        value(row) {
            /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
            return String(row.antal);
        },
    },
    {
        type: "checkbox",
        header: "Kryssruta",
        key: "aktiv",
        label: (row) => `Välj rad ${row.id}`,
        editable: true,
    },
    {
        type: "text",
        header: "Formatterad text",
        label: (row) => `Text för rad ${row.id}`,
        value(row) {
            return formatNumber(row.antal) ?? "";
        },
        editable: true,
    },

    {
        type: "text",
        header: "Redigerbar text",
        editable: true,
        key: "level",
        label: (row) => `Text för rad ${row.id}`,
        value(row) {
            return row.level;
        },
        update(row, newValue) {
            row.level = newValue;
        },
        validation: {
            required: {},
            maxLength: { length: 5 },
        },
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
        href: "#",
        value() {
            return "Länktext";
        },
    },
    {
        header: "Dropplista",
        type: "select",
        key: "animal",
        label: (row) => `Djur för rad ${row.id}`,
        options: selectFieldOptions,
        editable: true,
    },
    {
        header: "Render function",
        render() {
            return h("td", { id: "foo", class: "bar" }, ["👻"]);
        },
    },
    // {
    //     header: "Custom component",
    //     type: "render",
    //     render() {
    //         return XTableChip;
    //     },
    // },
]);

const rows = ref<Row[]>([
    {
        id: "1",
        animal: "Katt",
        level: "Föräldrapenning",
        start: "2022-04-11",
        end: "2022-04-20",
        antal: "10000",
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
    <button type="button" class="button button--secondary">Interagerbart element före</button>
    <f-table :rows :columns key-attribute="id" striped expandable-attribute="expandableContent">
        <template #expandable="{ row }">
            <f-card>
                <template #header="{ headingSlotClass }">
                    <h3 :class="headingSlotClass">{{ row.id }}</h3>
                </template>
                <template #default>
                    <p>{{ row!.content }}</p>
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
