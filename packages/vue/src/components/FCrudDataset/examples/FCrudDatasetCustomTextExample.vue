<script setup lang="ts">
import { ref } from "vue";
import { type FruitData, fruits as initialFruits } from "./fruit-data";
import { useFruitCrud } from "./use-fruit-crud";
import { FButton, FCrudDataset, FList } from "@fkui/vue";

const fruits = ref<FruitData[]>(initialFruits);
const { onAdd, onEdit, onRemove } = useFruitCrud(fruits);
</script>

<template>
    <f-crud-dataset v-model="fruits" :on-add :on-edit :on-remove>
        <template #default="{ updateItem, deleteItem }">
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
                                    <f-button
                                        icon-left="pen"
                                        size="small"
                                        type="button"
                                        variant="tertiary"
                                        @click="updateItem(item)"
                                    >
                                        Ändra <span class="sr-only">{{ item.name }}</span>
                                    </f-button>
                                </div>
                                <div class="col">
                                    <f-button
                                        icon-left="trashcan"
                                        size="small"
                                        type="button"
                                        variant="tertiary"
                                        @click="deleteItem(item)"
                                    >
                                        Ta bort <span class="sr-only">{{ item.name }}</span>
                                    </f-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template #screenreader="{ item }"> Frukt ID {{ item.id }} </template>
            </f-list>
        </template>
        <template #add-button> Lägg till ny <span class="sr-only"> frukt </span> </template>
    </f-crud-dataset>
</template>
