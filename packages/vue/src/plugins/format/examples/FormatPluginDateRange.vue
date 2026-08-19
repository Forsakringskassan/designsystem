<script setup lang="ts">
import { FDate } from "@fkui/date";

const myFDate = FDate.fromIso("2025-01-01");
const myISORange = {
    from: myFDate,
    to: myFDate.addDays(365),
};
const myHumanRange = {
    from: myFDate,
    to: myFDate.addDays(365),
    format: "human",
};
</script>

<template>
    <p v-format:date-range="myISORange"></p>
    <p v-format:date-range="myHumanRange"></p>
</template>
