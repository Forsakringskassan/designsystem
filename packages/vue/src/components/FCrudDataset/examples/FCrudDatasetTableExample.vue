<script lang="ts">
import { defineComponent } from "vue";
import {
    FCrudDataset,
    FCrudButton,
    FInteractiveTable,
    FTableColumn,
    FTextField,
    FTextareaField,
} from "@fkui/vue";
import { type FruitData, fruits } from "./fruit-data";

export default defineComponent({
    components: {
        FCrudDataset,
        FCrudButton,
        FInteractiveTable,
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
                    <f-table-column title="Åtgärd" type="action" shrink>
                        <f-crud-button action="modify" :item="row" icon />
                        <f-crud-button action="delete" :item="row" icon />
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
            ID {{ item.id }}
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

        <template #delete="{ item }">
            Vill du verkligen radera fruken "{{ item.name }}" med ID {{ item.id }}
        </template>
    </f-crud-dataset>
</template>
