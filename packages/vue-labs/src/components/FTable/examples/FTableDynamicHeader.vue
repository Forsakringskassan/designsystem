<script setup lang="ts">
import { ref } from "vue";
import { FTextField } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    value1: string;
    value2: string;
    value3: string;
}

const column1 = ref("Column 1");
const column2 = ref("Column 2");
const column3 = ref("Column 3");

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: column1,
        key: "value1",
    },
    {
        type: "text",
        header: column2,
        key: "value2",
    },
    {
        type: "text",
        header: column3,
        key: "value3",
    },
]);

const rows = ref<Row[]>([
    { value1: "Text 1", value2: "Text 2", value3: "Text 3" },
    { value1: "Text 4", value2: "Text 5", value3: "Text 6" },
    { value1: "Text 7", value2: "Text 8", value3: "Text 9" },
]);

const validation = {
    maxLength: { length: 25 },
};
</script>

<template>
    <f-text-field v-model="column1" v-test="'input-1'" v-validation.maxLength="validation">
        Column 1
    </f-text-field>
    <f-text-field v-model="column2" v-test="'input-2'" v-validation.maxLength="validation">
        Column 2
    </f-text-field>
    <f-text-field v-model="column3" v-test="'input-3'" v-validation.maxLength="validation">
        Column 3
    </f-text-field>
    <f-table :rows :columns> </f-table>
</template>
