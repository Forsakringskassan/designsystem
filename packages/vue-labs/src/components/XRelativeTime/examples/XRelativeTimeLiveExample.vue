<script setup lang="ts">
import { computed, ref } from "vue";
import { FBadge, FCheckboxField, FSelectField } from "@fkui/vue";
import { XRelativeTime } from "@fkui/vue-labs";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";

const sekunder = 1_000;
const minuter = 60_000;
const timmar = 3600_000;
const dagar = 86400_000;
const månader = 2592000_000;

const now = Date.now();
const time = {
    Sekunder: now - 9 * sekunder,
    Minuter: now - 42 * minuter,
    Timmar: now - 5 * timmar,
    Dagar: now - 12 * dagar,
    Månader: now - 2 * månader,
};

const entries = Object.entries(time);
const timestamp = ref(entries[0][1]);
const components = {
    XRelativeTime,
};
const template = computed(() => {
    return createElement("x-relative-time", {
        ":timestamp": timestamp.value,
        ":reference": now,
    });
});
</script>

<template>
    <live-example :components :template>
        <f-select-field v-model="timestamp">
            <template #label> Tid </template>
            <option v-for="[label, value] of entries" :key="label" :value>{{ label }}</option>
        </f-select-field>
    </live-example>
</template>
