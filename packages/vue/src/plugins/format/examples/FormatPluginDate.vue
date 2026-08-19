<script setup lang="ts">
const myDate = "2025-01-01";
</script>

<template>
    <p v-format:date="myDate"></p>
    <p v-format:date-long="myDate"></p>
    <p v-format:date-full="myDate"></p>
</template>
