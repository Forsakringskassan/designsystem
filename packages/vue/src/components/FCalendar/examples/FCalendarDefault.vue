<script>
import { defineComponent } from "vue";
import { FDate } from "@fkui/date";
import { FCalendar, FCalendarDay } from "@fkui/vue";

export default defineComponent({
    name: "FCalendarDefault",
    components: {
        FCalendar,
        FCalendarDay,
    },
    data() {
        return {
            month: FDate.fromIso("2022-10-01"),
            min: FDate.fromIso("2020-01-01"),
            max: FDate.fromIso("2029-01-30"),
        };
    },
});
</script>

<template>
    <f-calendar v-model="month" :min-date="min" :max-date="max">
        <template #default="{ date, isFocused }">
            <f-calendar-day :day="date" :focused="isFocused"> </f-calendar-day>
        </template>
    </f-calendar>
</template>
