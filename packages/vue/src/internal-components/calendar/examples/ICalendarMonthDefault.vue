<script lang="ts">
import { defineComponent, shallowRef } from "vue";
import { ICalendarMonth } from "@fkui/vue";
import { FDate } from "@fkui/date";

export default defineComponent({
    name: "ICalendarMonthDefaultExample",
    components: { ICalendarMonth },
    data() {
        return {
            month: shallowRef(FDate.fromIso("2022-10-01")),
            minDate: shallowRef(FDate.fromIso("2020-01-01")),
            maxDate: shallowRef(FDate.fromIso("2029-01-30")),
        };
    },
    methods: {
        onClick(date: FDate) {
            alert(`Du klickade på dag ${date.day}`);
        },
    },
});
</script>

<template>
    <i-calendar-month v-model="month" :min-date="minDate" :max-date="maxDate" @click="onClick">
        <template #default="{ date }">{{ date.day }}</template>
    </i-calendar-month>
</template>
