<script setup lang="ts">
const bankgiro = "1234566";
</script>

<template>
    <p v-format:bankgiro="bankgiro"></p>
</template>
