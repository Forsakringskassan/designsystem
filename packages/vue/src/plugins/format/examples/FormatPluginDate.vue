<script setup>
import { FDate } from "@fkui/date";

const myDate = "20250408";
const dateRange = {
    from: "20250101",
    to: "20251231",
};

const myFDate = FDate.fromIso("2025-01-01");
const myFDateRange = {
    from: myFDate,
    to: myFDate.addDays(100),
};
</script>

<template>
    <p v-format:date="myDate"></p>
    <p v-format:date-long="myDate"></p>
    <p v-format:date-full="myDate"></p>
    <p v-format:date-range="dateRange"></p>
    <p v-format:date-full="myFDate"></p>
    <p v-format:date-range="myFDateRange"></p>
</template>
