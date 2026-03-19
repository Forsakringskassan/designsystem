<script setup lang="ts">
import { FDefinitionList } from "..";

const exampleDefinitions = [
    { term: "Skulle ha jobbat", description: "8 timmar" },
    { term: "Vabbade", description: "8 timmar" },
    { term: "Omfattning", description: "100 procent" },
];
</script>
<template>
    <f-definition-list :definitions="exampleDefinitions" />
</template>
