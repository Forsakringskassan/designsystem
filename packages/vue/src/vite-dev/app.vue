<script setup lang="ts">
import { ref } from "vue";
import { FTextField2 } from "../components";

const namn = ref("World");
</script>

<template>
    <f-text-field2 v-model="namn"> Namn </f-text-field2>
</template>
