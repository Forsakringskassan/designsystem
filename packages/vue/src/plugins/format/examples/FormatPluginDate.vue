<script setup>
const myDate = "20250408";
const dateRange = {
    from: "20250101",
    to: "20251231",
};
</script>

<template>
    <p v-format:date="myDate"></p>
    <p v-format:date-long="myDate"></p>
    <p v-format:date-full="myDate"></p>
    <p v-format:date-range="dateRange"></p>
</template>
