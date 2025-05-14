<script lang="ts">
import { defineComponent } from "vue";
import { FCrudDataset, FTextField, FInteractiveTable, FTableButton, FTableColumn } from "@fkui/vue";
import { type FruitData, fruits } from "./fruit-data";

export default defineComponent({
    name: "ExampleApp",
    components: {
        FCrudDataset,
        FTextField,
        FInteractiveTable,
        FTableButton,
        FTableColumn,
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
        <template #default="{ updateItem }">
            <f-interactive-table :rows="fruits" key-attribute="id">
                <template #caption> <b>Frukter</b> </template>
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
                    <f-table-column title="Åtgärd" shrink type="action">
                        <f-table-button icon="pen" label @click="updateItem(row)">
                            Ändra <span class="sr-only"> {{ row.name }} </span>
                        </f-table-button>
                    </f-table-column>
                </template>
            </f-interactive-table>
        </template>
        <template #modify="{ item }">
            <f-text-field
                v-model="item.name"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                type="text"
            >
                Namn
            </f-text-field>
        </template>
    </f-crud-dataset>
</template>
