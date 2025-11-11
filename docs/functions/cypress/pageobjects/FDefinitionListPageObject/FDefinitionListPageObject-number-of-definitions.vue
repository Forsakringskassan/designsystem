<script setup lang="ts">
import { type FDefinitionListItem, FDefinitionList } from "@fkui/vue";

const oneDefinition: FDefinitionListItem[] = [{ term: "Omfattning", description: "100 procent" }];

const threeDefinitions: FDefinitionListItem[] = [
    { term: "Skulle ha jobbat", description: "8 timmar" },
    { term: "Vabbade", description: "8 timmar" },
    { term: "Omfattning", description: "100 procent" },
];
</script>

<template>
    <f-definition-list v-test="'my-definition-list-one-definition'" :definitions="oneDefinition" />

    <f-definition-list v-test="'my-definition-list-three-definitions'" :definitions="threeDefinitions" />
</template>
