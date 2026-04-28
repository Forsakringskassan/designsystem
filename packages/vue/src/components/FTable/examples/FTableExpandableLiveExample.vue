<script setup lang="ts">
import { computed, ref } from "vue";
import { FCheckboxField, FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";

interface Row {
    namn: string;
    land: string;
    nested?: Row[];
}

const data: Row[] = [
    {
        namn: "Apelsin",
        land: "Spanien",
    },
    {
        namn: "Banan",
        land: "Columbia",
    },
    {
        namn: "Äpple",
        land: "",
        nested: [
            {
                namn: "Aroma",
                land: "Sverige",
            },
            {
                namn: "Ingrid Marie",
                land: "Sverige",
            },
            {
                namn: "Pink Lady",
                land: "Italien",
            },
        ],
    },
];

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "namn",
    },
    {
        type: "text",
        header: "Land",
        key: "land",
    },
]);

const rows = useDatasetRef(data, "nested");
const useCustom = ref(false);

const components = {
    FTable,
};

const livedata = {
    rows,
    columns,
};

const customSlot = computed(() => {
    if (!useCustom.value) {
        return [];
    }
    return [
        createElement("template", { "#expandable": "{ row }" }, [
            "\n",
            createElement("pre", ["{{ row }}"]),
            "\n",
        ]),
    ];
});

const template = computed(() => {
    return createElement("f-table", { ":rows": true, ":columns": true }, customSlot.value);
});
</script>

<template>
    <live-example :components :template :livedata>
        <f-checkbox-field v-model="useCustom" :value="true"> Valfritt innehåll </f-checkbox-field>
    </live-example>
</template>
