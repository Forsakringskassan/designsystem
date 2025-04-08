<script lang="ts">
import { defineComponent } from "vue";
import {
    FCrudDataset,
    FCrudButton,
    FList,
    FStaticField,
    FTextField,
    FTextareaField,
} from "@fkui/vue";
import { type FruitData, fruits } from "./fruit-data";

export default defineComponent({
    components: {
        FCrudDataset,
        FCrudButton,
        FList,
        FStaticField,
        FTextField,
        FTextareaField,
    },
    data() {
        return {
            fruits,
        };
    },
    methods: {
        // Förpopulera ett objekt med värden
        beforeCreate(): FruitData {
            return {
                id: String(this.getMaxId() + 1),
                name: "",
                origin: "",
                description: "",
            };
        },
        getMaxId() {
            return this.fruits.reduce((max, item) => {
                return Math.max(max, parseInt(item.id, 10));
            }, 0);
        },
        saveModel(row: FruitData) {
            console.log("Post model to backend", row);
        },
    },
});
</script>

<template>
    <f-crud-dataset
        v-model="fruits"
        data-test="f-crud-dataset-list-example"
        :before-create="beforeCreate"
        @created="saveModel"
        @updated="saveModel"
        @deleted="saveModel"
    >
        <template #default>
            <f-list :items="fruits" element-id="example" key-attribute="id" selectable>
                <template #default="{ item }">
                    <h3>{{ item.name }}</h3>
                    <div class="row">
                        <div class="col col--md-7">
                            <p>
                                Land:
                                <em> {{ item.origin }} </em>
                                <br />
                                Beskrivning:
                                <em> {{ item.description }} </em>
                                <br />
                            </p>
                        </div>
                        <div class="col col--md-5">
                            <ul class="button-list">
                                <li>
                                    <f-crud-button action="modify" :item="item" icon label />
                                </li>
                                <li>
                                    <f-crud-button action="delete" :item="item" icon label />
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
                <template #screenreader="{ item }"> Frukt ID {{ item.id }} </template>
            </f-list>
        </template>

        <template #add="{ item }">
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

        <template #modify="{ item }">
            <f-static-field v-model="item.name" type="text">
                <template #label> Namn </template>
                <template #default> {{ item.name }}</template>
            </f-static-field>
            <f-textarea-field
                v-model="item.origin"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                type="text"
            >
                Land
            </f-textarea-field>
        </template>

        <template #delete="{ item }">
            Vill du verkligen radera frukten "{{ item.name }}" med ID {{ item.id }}
        </template>
    </f-crud-dataset>
</template>
