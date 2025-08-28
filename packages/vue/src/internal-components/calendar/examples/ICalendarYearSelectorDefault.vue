<script lang="ts">
import { defineComponent, shallowRef } from "vue";
import { FDate } from "@fkui/date";
import ICalendarYearSelector from "../ICalendarYearSelector.vue";

export default defineComponent({
    name: "ICalendarYearSelectorDefaultExample",
    components: { ICalendarYearSelector },
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
    <i-calendar-year-selector v-model="month" :min-date="minDate" :max-date="maxDate" />
</template>
