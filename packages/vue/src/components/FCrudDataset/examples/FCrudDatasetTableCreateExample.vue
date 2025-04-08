<script lang="ts">
import { defineComponent } from "vue";
import { FCrudDataset, FDataTable, FTableColumn, FTextField, FTextareaField } from "@fkui/vue";
import { type FruitData, fruits } from "./fruit-data";

export default defineComponent({
    components: {
        FCrudDataset,
        FDataTable,
        FTableColumn,
        FTextField,
        FTextareaField,
    },
    data() {
        return {
            fruits,
        };
    },
    methods: {
        saveModel(row: FruitData) {
            console.log("Post model to backend", row);
        },
    },
});
</script>

<template>
    <f-crud-dataset v-model="fruits" @created="saveModel" @updated="saveModel" @deleted="saveModel">
        <template #default>
            <f-data-table :rows="fruits" key-attribute="id">
                <template #caption> <b>Rättigheter</b> </template>
                <template #default="{ row }">
                    <f-table-column title="Namn" type="text" shrink>
                        {{ row.name }}
                    </f-table-column>
                    <f-table-column title="Land" type="text" shrink>
                        {{ row.origin }}
                    </f-table-column>
                    <f-table-column title="Beskrivning" type="text" expand>
                        {{ row.description }}
                    </f-table-column>
                </template>
            </f-data-table>
        </template>
        <template #add="{ item }">
            <f-text-field
                v-model="item.id"
                v-validation.required.maxLength="{ maxLength: { length: 4 } }"
                type="text"
            >
                ID
            </f-text-field>
            <f-text-field
                v-model="item.name"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                type="text"
            >
                Namn
            </f-text-field>
            <f-text-field
                v-model="item.origin"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                type="text"
            >
                Land
            </f-text-field>
            <f-textarea-field v-model="item.description" v-validation.required>
                Beskrivning
            </f-textarea-field>
        </template>
    </f-crud-dataset>
</template>
