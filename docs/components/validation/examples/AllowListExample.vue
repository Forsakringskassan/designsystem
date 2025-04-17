<script setup lang="ts">
import { FTextField } from "@fkui/vue";
import { ref } from "vue";

const model = ref("");
</script>

<template>
    <f-text-field
        v-model="model"
        v-validation.allowList="{ allowList: { list: ['foo', 'bar', 'baz'] } }"
    >
        Fyll i en text (alternativ i lista: foo, bar, baz)</f-text-field
    >
</template>
