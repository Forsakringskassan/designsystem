<script setup lang="ts">
import { ref } from "vue";
import { FIcon, useDetailsPanel } from "@fkui/vue";
import FGrid from "../FGrid.vue";
import FGridCell from "../FGridCell.vue";
import FGridTextField from "../FGridTextField.vue";

const rows = ref([
    {
        id: "foo",
        foo: "Kalle",
        bar: "Anka",
        baz: [
            { id: "banan", foo: "Gul", bar: "Banan" },
            { id: "äpple", foo: "Grönt", bar: "Äpple" },
        ],
    },
    {
        id: "bar",
        foo: "Musse",
        bar: "Pigg",
        baz: [
            { id: "melon", foo: "Grön", bar: "Melon" },
            { id: "citron", foo: "Gul", bar: "Citron" },
        ],
    },
]);

const name = "awesome-panel";
const panel = useDetailsPanel(name);

function openPanel(): void {
    panel.open({
        name: "Kalle Anka",
    });
}
</script>

<template>
    <f-grid :rows expandable-attribute="baz">
        <template #default="{ row }">
            <!-- <f-grid-cell :focusable="false" class="checkbox">
                <template #default="{ active }">
                    <input
                        v-focus="active"
                        type="checkbox"
                        aria-label="shortcut"
                        class="checkbox__input"
                    />
                    <label class="checkbox__label">{{ row.foo }}</label>
                </template>
            </f-grid-cell> -->
            <!-- <f-grid-cell :focusable="false" class="">
                <template #default="{ active }">
                    <input v-focus="active" type="date" aria-label="shortcut" class="" />
                    <label class="checkbox__label">{{ row.foo }}</label>
                </template>
            </f-grid-cell> -->
            <f-grid-cell>
                {{ row.id }}
            </f-grid-cell>
            <f-grid-text-field v-model="row.foo"></f-grid-text-field>
            <!-- <f-grid-text-field v-model="row.bar" type="date"></f-grid-text-field> -->
            <f-grid-cell>
                {{ row.bar }}
            </f-grid-cell>
            <!-- <f-grid-cell>{{ row.bar }}</f-grid-cell>
            <f-grid-cell :focusable="false">
                <template #default="{ active }">
                    <button
                        v-focus="active"
                        aria-label="shortcut"
                        type="button"
                        class="shortcut"
                        @click="openPanel()"
                    >
                        <f-icon class="button__icon" name="pen"></f-icon>
                    </button>
                </template>
            </f-grid-cell> -->
        </template>
    </f-grid>
</template>

<style>
.shortcut {
    margin: 0;
    padding: 0;
    background: inherit;
    border: 0;
}
</style>
