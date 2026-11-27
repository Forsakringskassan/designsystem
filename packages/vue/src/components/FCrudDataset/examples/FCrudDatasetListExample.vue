<script setup lang="ts">
import { ref } from "vue";
import { type FruitData, fruits as initialFruits } from "./fruit-data";
import { useFruitCrud } from "./use-fruit-crud";
import { FButton, FCrudDataset, FList } from "@fkui/vue";

const fruits = ref<FruitData[]>(initialFruits);
const { onCreate, onUpdate, onDelete } = useFruitCrud(fruits);
</script>

<template>
    <f-crud-dataset
        v-model="fruits"
        :on-create
        :on-update
        :on-delete
        data-test="f-crud-dataset-list-example"
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
    </f-crud-dataset>
</template>
