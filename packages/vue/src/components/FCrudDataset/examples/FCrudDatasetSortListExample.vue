<script lang="ts">
import { defineComponent } from "vue";
import {
    FCrudButton,
    FCrudDataset,
    FList,
    FSortFilterDataset,
    FStaticField,
    FTextField,
    FTextareaField,
} from "@fkui/vue";
import { type FruitData, fruits } from "./fruit-data";

export default defineComponent({
    components: {
        FCrudButton,
        FCrudDataset,
        FList,
        FSortFilterDataset,
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
    },
});
</script>

<template>
    <f-crud-dataset v-model="fruits" :before-create="beforeCreate">
        <template #default>
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
                                    <f-crud-button action="modify" :item="item" icon />
                                </div>
                                <div class="col col--sm-1">
                                    <f-crud-button action="delete" :item="item" icon />
                                </div>
                            </div>
                        </template>
                    </f-list>
                </template>
            </f-sort-filter-dataset>
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
            Vill du verkligen ta bort frukten "{{ item.name }}" med ID {{ item.id }}
        </template>
    </f-crud-dataset>
</template>
