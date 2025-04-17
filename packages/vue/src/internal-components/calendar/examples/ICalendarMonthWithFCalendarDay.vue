<script lang="ts">
import { defineComponent, shallowRef } from "vue";
import { ICalendarMonth, FCalendarDay } from "@fkui/vue";
import { FDate } from "@fkui/date";

export default defineComponent({
    name: "ICalendarMonthWithFCalendarDayExample",
    components: {
        ICalendarMonth,
        FCalendarDay,
    },
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
        <template #default="{ date, isFocused }">
            <f-calendar-day :day="date" :focused="isFocused"> </f-calendar-day>
        </template>
    </i-calendar-month>
</template>
