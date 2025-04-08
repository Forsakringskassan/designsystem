<script lang="ts">
import { defineComponent } from "vue";
import { FCrudDataset, FCrudButton, FTextField, FInteractiveTable, FTableColumn } from "@fkui/vue";
import { type FruitData, fruits } from "./fruit-data";

export default defineComponent({
    name: "ExampleApp",
    components: {
        FCrudDataset,
        FCrudButton,
        FTextField,
        FInteractiveTable,
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
        <template #default>
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
                        <f-crud-button action="modify" :item="row" icon label>
                            Ändra Namn
                        </f-crud-button>
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
