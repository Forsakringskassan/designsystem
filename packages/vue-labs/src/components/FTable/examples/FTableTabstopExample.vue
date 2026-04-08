<script setup lang="ts">
import { useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns, removeRow } from "@fkui/vue-labs";

const tableRef = useTemplateRef("table");

const expandableAttribute = "expandableRows";
const keyAttribute = "foo";

interface Row {
    foo: string;
    bar: string;
    expandableRows?: Row[];
}

const rows = useDatasetRef<Row>(
    [
        {
            foo: "1",
            bar: "alpha",
            expandableRows: [
                { foo: "1_1", bar: "alpha_sub1" },
                { foo: "1_2", bar: "alpha_sub2" },
            ],
        },
        {
            foo: "2",
            bar: "beta",
            expandableRows: [
                { foo: "2_1", bar: "beta_sub1" },
                { foo: "2_2", bar: "beta_sub2" },
            ],
        },
        {
            foo: "3",
            bar: "gamma",
            expandableRows: [
                { foo: "3_1", bar: "gamma_sub1" },
                { foo: "3_2", bar: "gamma_sub2" },
                { foo: "3_3", bar: "gamma_sub3" },
            ],
        },
    ],
    "expandableRows",
);

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "foo",
        key: "foo",
    },
    {
        type: "button",
        header: "remove",
        icon: "trashcan",
        text(row) {
            return row.bar;
        },
        onClick(row: Row) {
            onRemoveRow(row);
        },
    },
]);

function onRemoveRow(row: Row): void {
    assertRef(tableRef);

    tableRef.value.withTabstopBehaviour("row-removal", () => {
        rows.value = removeRow(rows.value, row, "expandableRows");
    });
}
</script>

<template>
    <f-table ref="table" :rows :columns :key-attribute />
</template>
