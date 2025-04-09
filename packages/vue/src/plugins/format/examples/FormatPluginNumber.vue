<script setup>
const number = 123456789.1234;
const stringNumber = "123456789.1234";
const precisionNumber = {
    number: 123456789.1234,
    decimals: 2,
};
</script>

<template>
    <p v-format:number="number"></p>
    <p v-format:number="stringNumber"></p>
    <p v-format:number="precisionNumber"></p>
</template>
