<script setup>
const orgnr = "9999999999";
</script>

<template>
    <p v-format:orgnr="orgnr"></p>
    <p v-format:orgnr>9999999999</p>
</template>
