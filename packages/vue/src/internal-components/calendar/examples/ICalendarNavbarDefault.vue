<script lang="ts">
import { defineComponent, shallowRef } from "vue";
import { ICalendarNavbar } from "@fkui/vue";
import { FDate } from "@fkui/date";

export default defineComponent({
    name: "ICalendarMonthDefaultExample",
    components: { ICalendarNavbar },
    data() {
        return {
            month: shallowRef(FDate.fromIso("2022-10-01")),
            minDate: shallowRef(FDate.fromIso("2020-01-01")),
            maxDate: shallowRef(FDate.fromIso("2029-01-30")),
        };
    },
});
</script>

<template>
    <i-calendar-navbar v-model="month" :min-date="minDate" :max-date="maxDate"> </i-calendar-navbar>
</template>
