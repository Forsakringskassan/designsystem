<script setup lang="ts">
import { computed, ref, useTemplateRef } from "vue";
import {
    FCheckboxField,
    FFieldset,
    FSelectField,
    FTextField,
    findHTMLElementFromVueRef,
} from "@fkui/vue";
import { XSortFilterDatasetNg, matchPropertyValue, uniqueValues } from "@fkui/vue-labs";
import { type FruitData, fruits } from "./fruit-data";

const searchRef = useTemplateRef("search");
const actualElement = computed<HTMLInputElement | null>(() => {
    const searchEl = findHTMLElementFromVueRef(searchRef);
    return searchEl ? searchEl.querySelector("input") : null;
});

const flag = ref(true);
const country = ref<string | null>(null);
const availableCountries = uniqueValues(fruits, "origin");
const matchCountry = matchPropertyValue<FruitData>("origin");

function filter(value: FruitData[]): FruitData[] {
    const searchTerm = actualElement.value?.value.toLowerCase();
    return value.filter((it) => {
        if (flag.value && it.name === "Banan") {
            return false;
        }

        if (!matchCountry(it, country.value)) {
            return false;
        }
        if (searchTerm) {
            const name = it.name.toLowerCase();
            const description = it.description.toLowerCase();
            return name.includes(searchTerm) || description.includes(searchTerm);
        }
        return true;
    });
}
</script>

<template>
    <h2 id="frukter">Frukter</h2>
    <x-sort-filter-dataset-ng :data="fruits" :filter>
        <template #filter="{ update }">
            <div class="filters">
                <f-fieldset>
                    <template #label> Inställningar </template>
                    <template #default>
                        <f-checkbox-field
                            v-model="flag"
                            :value="true"
                            @update:model-value="update()"
                        >
                            <template #default>Bara goda frukter</template>
                        </f-checkbox-field>
                    </template>
                </f-fieldset>
                <f-select-field v-model="country" @update:model-value="update()">
                    <template #label>Land</template>
                    <template #default>
                        <option :value="null">-</option>
                        <option v-for="value in availableCountries" :key="value">
                            {{ value }}
                        </option>
                    </template>
                </f-select-field>
                <f-text-field ref="search" maxlength="40" @input="update">
                    <template #default> Sök </template>
                </f-text-field>
            </div>
        </template>
        <template #default="{ result }">
            <pre>{{ result }}</pre>
        </template>
    </x-sort-filter-dataset-ng>
</template>

<style>
.filters {
    @media (width > 640px) {
        display: flex;
        gap: 1rem;

        > * {
            flex: 0 1 auto;
        }

        .select-field {
            width: 20rem;
        }

        .text-field {
            width: 40rem;
        }

        label {
            white-space: nowrap;
        }
    }
}
</style>
