<script setup lang="ts">
import { computed, ref } from "vue";
import { FSelectField } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

const selectedValue = ref("");

const expandableByOption = {
    content: "expandableContent" as const,
    table: "expandableRows" as const,
} as const;

const expandableAttr = computed<"expandableContent" | "expandableRows" | undefined>(() => {
    return expandableByOption[selectedValue.value as keyof typeof expandableByOption];
});

interface TabstopRow {
    id: string;
    animal: string;
    sum: string;
}

interface ExpandableContent {
    id: string;
    content: string;
}

type ExpandableTabstopRow = TabstopRow & {
    expandableRows?: TabstopRow[];
    expandableContent?: ExpandableContent[];
};

const rows = ref([
    {
        id: "1",
        sum: "10000",
        animal: "Katt",
        expandableRows: [
            {
                id: "1a",
                sum: "11000",
                animal: "Huskatt",
            },
            {
                id: "1b",
                sum: "12000",
                animal: "Bengal",
            },
        ],
        expandableContent: [
            {
                id: "1a",
                content: "Anledning: Köpa kattmat",
            },
        ],
    },
    {
        id: "2",
        sum: "20000",
        animal: "Hund",
        expandableRows: [
            {
                id: "2a",
                sum: "21000",
                animal: "Labrador",
            },
        ],
        expandableContent: [
            {
                id: "2a",
                content: "Anledning: Gå ut och gå med hundarna",
            },
        ],
    },
    {
        id: "3",
        sum: "30000",
        animal: "Fågel",
        expandableRows: [
            {
                id: "3a",
                sum: "31000",
                animal: "Duva",
            },
            {
                id: "3b",
                sum: "32000",
                animal: "Koltrast",
            },
        ],
        expandableContent: [
            {
                id: "3a",
                content: "Anledning: Behöver mata fåglarna",
            },
        ],
    },
]);

const columns = defineTableColumns<ExpandableTabstopRow>([
    {
        type: "text",
        header: "Summa",
        key: "sum",
    },
    {
        type: "text",
        header: "animal",
        key: "animal",
    },
]);
</script>

<template>
    <f-select-field v-model="selectedValue">
        <template #label> Expanderbara rader </template>
        <option value="">Nej</option>
        <option value="content">Valbart innehåll</option>
        <option value="table">Tabellrad</option>
    </f-select-field>

    <f-table
        ref="table"
        :key="expandableAttr"
        :rows
        :columns
        key-attribute="id"
        striped
        selectable="multi"
        :expandable-attribute="expandableAttr"
    >
        <template #caption>Tabell</template>
        <template v-if="selectedValue === 'content'" #expandable="{ row }">{{ (row as any).content }}</template>
        <template #footer>Footer</template>
    </f-table>
</template>
