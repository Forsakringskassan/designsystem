<script setup lang="ts">
import { ref } from "vue";
import { type FruitData, fruits as initialFruits } from "./fruit-data";
import { useFruitCrud } from "./use-fruit-crud";
import { FButton, FCrudDataset, FList, FSortFilterDataset } from "@fkui/vue";

const fruits = ref<FruitData[]>(initialFruits);
const { onAdd, onEdit, onRemove } = useFruitCrud(fruits);
</script>

<template>
    <f-crud-dataset v-model="fruits" :on-add :on-edit :on-remove>
        <template #default="{ updateItem, deleteItem }">
            <f-sort-filter-dataset
                :data="fruits"
                :sortable-attributes="{
                    name: 'Namn',
                    origin: 'Land',
                }"
            >
                <template #default="{ sortFilterResult }">
                    <f-list :items="sortFilterResult" key-attribute="id">
                        <template #default="{ item }">
                            <h3>{{ item.name }}</h3>
                            <div class="row">
                                <div class="col col--lg-10">
                                    Land:
                                    <em> {{ item.origin }} </em>
                                    <br />
                                    Beskrivning:
                                    <em> {{ item.description }} </em>
                                    <br />
                                </div>
                                <div class="col col--sm-1">
                                    <f-button
                                        icon-left="pen"
                                        size="small"
                                        variant="tertiary"
                                        @click="updateItem(item)"
                                    >
                                        Ändra <span class="sr-only">{{ item.name }}</span>
                                    </f-button>
                                </div>
                                <div class="col col--sm-1">
                                    <f-button
                                        icon-left="trashcan"
                                        size="small"
                                        variant="tertiary"
                                        @click="deleteItem(item)"
                                    >
                                        Ta bort <span class="sr-only">{{ item.name }}</span>
                                    </f-button>
                                </div>
                            </div>
                        </template>
                    </f-list>
                </template>
            </f-sort-filter-dataset>
        </template>
    </f-crud-dataset>
</template>
