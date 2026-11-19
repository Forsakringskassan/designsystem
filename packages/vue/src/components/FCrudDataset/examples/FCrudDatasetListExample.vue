<script setup lang="ts">
import { ref } from "vue";
import { type FruitData, fruits as initialFruits } from "./fruit-data";
import { FButton, FCrudDataset, FList, FStaticField, FTextField, FTextareaField } from "@fkui/vue";

const fruits = ref<FruitData[]>(initialFruits);

// Förpopulera ett objekt med värden
function beforeCreate(): FruitData {
    return {
        id: String(getMaxId() + 1),
        name: "",
        origin: "",
        description: "",
    };
}

function getMaxId(): number {
    return fruits.value.reduce((max, item) => {
        return Math.max(max, Math.trunc(Number(item.id)));
    }, 0);
}

function saveModel(row: FruitData): void {
    console.log("Post model to backend", row);
}
</script>

<template>
    <f-crud-dataset
        v-model="fruits"
        data-test="f-crud-dataset-list-example"
        :before-create
        @created="saveModel"
        @updated="saveModel"
        @deleted="saveModel"
    >
        <template #default="{ updateItem, deleteItem }">
            <f-list :items="fruits" element-id="example" key-attribute="id" selectable>
                <template #default="{ item }">
                    <h3>{{ item.name }}</h3>
                    <p>
                        Land:
                        <em> {{ item.origin }} </em>
                        <br />
                        Beskrivning:
                        <em> {{ item.description }} </em>
                    </p>
                    <div class="button-group">
                        <f-button
                            align-text
                            icon-left="pen"
                            size="medium"
                            variant="tertiary"
                            class="button-group__item"
                            @click="updateItem(item)"
                        >
                            Ändra <span class="sr-only">{{ item.name }}</span>
                        </f-button>
                        <f-button
                            align-text
                            icon-left="trashcan"
                            size="medium"
                            variant="tertiary"
                            class="button-group__item"
                            @click="deleteItem(item)"
                        >
                            Ta bort <span class="sr-only">{{ item.name }}</span>
                        </f-button>
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
