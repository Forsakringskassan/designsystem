<script setup lang="ts">
import { computed, ref } from "vue";
import { FButton, FCheckboxField, FFieldset, FInteractiveTable, FNumericTextField, FTableColumn } from "@fkui/vue";
// eslint-disable-next-line import/no-extraneous-dependencies -- demo only
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
}

const length = ref(10);
const width = ref(10);
const showTable = ref(false);
const showOldTable = ref(false);
const customClass = ref(true);

const rows = computed((): Row[] => {
    const n = Math.max(0, Math.floor(length.value));
    return Array.from({ length: n }, (_, i) => ({ id: String(i + 1) }));
});

const columns = computed(() => {
    const n = Math.max(0, Math.floor(width.value));
    return defineTableColumns<Row>(
        Array.from({ length: n }, (_, i) => ({
            type: "text",
            header: `Col ${i + 1}`,
            key: "id",
            editable: true,
            value(row) {
                return `${row.id}:${i + 1}`;
            },
        })),
    );
});

const tableClass = computed(() => {
    if (customClass.value) {
        return "table-class";
    } else {
        return undefined;
    }
});

function onClick(): void {
    showTable.value = !showTable.value;
}
</script>

<template>
    <div class="row">
        <div class="col col--md-3">
            <f-numeric-text-field v-model="length">
                <template #default> Antal rader </template>
            </f-numeric-text-field>
        </div>
        <div class="col col--md-3">
            <f-numeric-text-field v-model="width">
                <template #default> Antal kolumner </template>
            </f-numeric-text-field>
        </div>
        <div class="col col--md-3">
            <f-fieldset id="krysset" name="krysset">
                <template #label> Layout </template>
                <template #default>
                    <f-checkbox-field v-model="customClass" :value="true"> table-layout: fixed </f-checkbox-field>
                </template>
            </f-fieldset>
        </div>
    </div>
    <div class="row">
        <div class="col col--md-3">
            <f-button type="button" @click="onClick">Toggel new table</f-button>
        </div>
        <div class="col col--md-3">
            <f-button type="button" @click="showOldTable = !showOldTable">Toggel old table</f-button>
        </div>
    </div>
    <div v-if="showTable" class="row">
        <div class="col col--md-12">
            <f-table :rows :columns striped :class="tableClass"> <template #caption>New</template> </f-table>
        </div>
    </div>

    <div v-if="showOldTable" class="row">
        <div class="col col--md-12">
            <f-interactive-table :rows key-attribute="id" striped :class="tableClass">
                <template #caption>Old</template>
                <template #default="{ row }">
                    <f-table-column
                        v-for="(col, index) in columns"
                        :key="index"
                        :title="`Col ${index + 1}`"
                        type="text"
                    >
                        {{ `${row.id}:${index + 1}` }}
                    </f-table-column>
                </template>
            </f-interactive-table>
        </div>
    </div>
</template>
<style>
.table-class {
    table-layout: fixed;
}
</style>
