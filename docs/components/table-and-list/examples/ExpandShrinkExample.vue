<script setup lang="ts">
import { computed, ref } from "vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { FDataTable, FTableColumn, FSelectField } from "@fkui/vue";

const a = ref("");
const b = ref("");
const c = ref("shrink");

const rows = [{ a: "lorem ipsum", b: "dolor sit amet", c: 4711 }];
const components = { FDataTable, FTableColumn };
const livedata = { rows };
const template = computed(() => {
    return /* HTML */ `
        <f-data-table :rows>
            <template #default="{ row }">
                <f-table-column
                    title="Kolumn A"
                    type="text"
                    v-format:text="row.a"
                    ${a.value}
                ></f-table-column>
                <f-table-column
                    title="Kolumn B"
                    type="text"
                    v-format:text="row.b"
                    ${b.value}
                ></f-table-column>
                <f-table-column
                    title="Kolumn C"
                    type="numeric"
                    v-format:number="row.c"
                    ${c.value}
                ></f-table-column>
            </template>
        </f-data-table>
    `;
});
</script>

<template>
    <live-example :template :components :livedata>
        <f-select-field v-model="a">
            <template #label> Kolumn A </template>
            <template #default>
                <option value="">Standard</option>
                <option value="expand">Expand</option>
                <option value="shrink">Shrink</option>
            </template>
        </f-select-field>
        <f-select-field v-model="b">
            <template #label> Kolumn B </template>
            <template #default>
                <option value="">Standard</option>
                <option value="expand">Expand</option>
                <option value="shrink">Shrink</option>
            </template>
        </f-select-field>
        <f-select-field v-model="c">
            <template #label> Kolumn C </template>
            <template #default>
                <option value="">Standard</option>
                <option value="expand">Expand</option>
                <option value="shrink">Shrink</option>
            </template>
        </f-select-field>
    </live-example>
</template>
