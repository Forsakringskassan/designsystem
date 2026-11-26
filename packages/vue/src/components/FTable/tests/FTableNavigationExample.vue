<script setup lang="ts">
import { useTemplateRef } from "vue";
import { computed, ref } from "vue";
import { assertRef } from "@fkui/logic";
import { FSelectField } from "@fkui/vue";
import { FTable, defineTableColumns, removeTableRows } from "@fkui/vue";

const tableRef = useTemplateRef("table");
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
    expandableContent?: ExpandableContent[];
    expandableRows?: TabstopRow[];
};

const sourceRows: ExpandableTabstopRow[] = [
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
];

const withoutExpandableRows = ref<ExpandableTabstopRow[]>(
    sourceRows.map(({ expandableRows, expandableContent, ...attrs }) => ({
        ...attrs,
    })),
);

const withExpandableRows = ref<ExpandableTabstopRow[]>(
    sourceRows.map(({ expandableContent, ...attrs }) => ({
        ...attrs,
    })),
);

const withExpandableContent = ref<ExpandableTabstopRow[]>(
    sourceRows.map(({ expandableRows, ...attrs }) => ({
        ...attrs,
    })),
);

const rows = computed(() => {
    if (expandableAttr.value === "expandableRows") {
        return withExpandableRows.value;
    }
    if (expandableAttr.value === "expandableContent") {
        return withExpandableContent.value;
    }
    return withoutExpandableRows.value;
});

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
    {
        type: "button",
        text() {
            return "Ta bort";
        },
        header: "remove",
        icon: "trashcan",
        onClick(row: ExpandableTabstopRow) {
            onRemoveRow(row);
        },
    },
]);

function onRemoveRow(row: ExpandableTabstopRow): void {
    assertRef(tableRef);

    tableRef.value.withTabstopBehaviour("row-removal", () => {
        removeTableRows(rows, row, expandableAttr);
    });
}
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
        :expandable-attribute="expandableAttr"
        key-attribute="id"
        striped
        selectable="multi"
    >
        <template #caption>Tabell</template>
        <template v-if="selectedValue === 'content'" #expandable="{ row }">
            {{ (row as any).content }}
        </template>
        <template #footer>Footer</template>
    </f-table>
</template>
