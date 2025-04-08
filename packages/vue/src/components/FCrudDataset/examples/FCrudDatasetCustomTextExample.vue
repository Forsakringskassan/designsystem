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
    name: "ExampleApp",
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
        :before-create="beforeCreate"
        add-new-modal-header="Lägg till ny frukt"
        modify-modal-header="Ändra land"
        delete-modal-header="Vill du ta bort frukten?"
        @created="saveModel"
        @updated="saveModel"
        @deleted="saveModel"
    >
        <template #default>
            <f-list :items="fruits" element-id="example" key-attribute="id">
                <template #default="{ item }">
                    <div class="row">
                        <div class="col col--lg-7 col--md-6">
                            <h3>{{ item.name }}</h3>
                            <p>
                                Land:
                                <em> {{ item.origin }} </em>
                                <br />
                                Beskrivning:
                                <em> {{ item.description }} </em>
                                <br />
                            </p>
                        </div>
                        <div class="col col--lg-5 col--md-6">
                            <div class="row row--align-end">
                                <div class="col">
                                    <f-crud-button action="modify" :item="item" icon label />
                                </div>
                                <div class="col">
                                    <f-crud-button action="delete" :item="item" icon label />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template #screenreader="{ item }"> Frukt ID {{ item.id }} </template>
            </f-list>
        </template>
        <template #add-button> Lägg till ny <span class="sr-only"> frukt </span> </template>
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
            Vill du verkligen ta bort frukten "{{ item.name }}" med ID {{ item.id }}
        </template>
    </f-crud-dataset>
</template>
