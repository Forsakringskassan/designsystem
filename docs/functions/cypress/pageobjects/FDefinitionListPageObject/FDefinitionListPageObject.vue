<script setup lang="ts">
import { type FDefinitionListItem, FDefinitionList } from "@fkui/vue";

const definitions: FDefinitionListItem[] = [
    { term: "Skulle ha jobbat", definition: "8 timmar" },
    { term: "Vabbade", definition: "8 timmar" },
    { term: "Omfattning", definition: "100 procent" },
];
</script>

<template>
    <f-definition-list v-test="'my-definition-list'" :definitions />
</template>
