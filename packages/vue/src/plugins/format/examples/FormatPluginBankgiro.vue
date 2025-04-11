<script setup>
const bankgiro = "1234566";
</script>

<template>
    <p v-format:bankgiro="bankgiro"></p>
    <p v-format:bankgiro>1234566</p>
</template>
