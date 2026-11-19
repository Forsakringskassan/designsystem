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
                                    <f-button
                                        icon-left="pen"
                                        size="small"
                                        type="button"
                                        variant="tertiary"
                                        @click="updateItem(item)"
                                    >
                                        Ändra <span class="sr-only">{{ item.name }}</span>
                                    </f-button>
                                </li>
                                <li>
                                    <f-button
                                        icon-left="trashcan"
                                        size="small"
                                        type="button"
                                        variant="tertiary"
                                        @click="deleteItem(item)"
                                    >
                                        Ta bort <span class="sr-only">{{ item.name }}</span>
                                    </f-button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
                <template #screenreader="{ item }"> Frukt ID {{ item.id }} </template>
            </f-list>
        </template>
    </f-crud-dataset>
</template>
