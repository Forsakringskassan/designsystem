<script setup lang="ts">
import { FDefinitionList } from "@fkui/vue";

const definitions = [
    { term: "Skulle ha jobbat", definition: "8 timmar" },
    { term: "Vabbade", definition: "8 timmar" },
    { term: "Omfattning", definition: "100 procent" },
];
</script>
<template>
    <f-definition-list :definitions />
</template>
