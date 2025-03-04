<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>

<template>
    <p>Count is {{ count }}</p>
    <button type="button" @click="count++">Increase</button>
</template>
