<script setup lang="ts">
import { ref } from "vue";
import { useDetailsPanel, FIcon } from "@fkui/vue";
import FGrid from "../FGrid.vue";
import FGridCell from "../FGridCell.vue";
import FGridTextField from "../FGridTextField.vue";

const rows = ref([
    {
        id: 1,
        foo: "Kalle",
        bar: "2025-05-26",
        baz: [
            { id: 2, foo: "Gul", bar: "2024-12-31" },
            { id: 3, foo: "Grönt", bar: "1999-05-06" },
        ],
    },
    {
        id: 4,
        foo: "Musse",
        bar: "2025-01-02",
        baz: [
            { id: 5, foo: "Grön", bar: "1980-08-08" },
            { id: 6, foo: "Gul", bar: "1912-12-12" },
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
    <f-grid :rows>
        <template #default="{ row }">
            <f-grid-cell :focusable="false" class="checkbox">
                <template #default="{ active }">
                    <input
                        v-focus="active"
                        type="checkbox"
                        aria-label="shortcut"
                        class="checkbox__input"
                    />
                    <label class="checkbox__label">{{ row.foo }}</label>
                </template>
            </f-grid-cell>
            <f-grid-cell>
                {{ row.id }}
            </f-grid-cell>
            <f-grid-text-field v-model="row.foo"></f-grid-text-field>
            <f-grid-text-field v-model="row.bar" type="date"></f-grid-text-field>
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
            </f-grid-cell>
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
