<script setup lang="ts">
import { FDefinitionList, type FDefinitionListItem } from "@fkui/vue";

const definitions: FDefinitionListItem[] = [
    { term: "Skulle ha jobbat", description: "8 timmar" },
    { term: "Vabbade", description: "8 timmar" },
    { term: "Omfattning", description: "100 procent" },
];
</script>

<template>
    <f-definition-list v-test="'my-definition-list-not-justified'" :definitions="definitions" :justified="false" />
    <f-definition-list v-test="'my-definition-list-justified'" :definitions="definitions" :justified="true" />
</template>
