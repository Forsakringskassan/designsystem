<script lang="ts">
import { defineComponent, shallowRef } from "vue";
import { ICalendarMonthGrid } from "@fkui/vue";
import { FDate } from "@fkui/date";

export default defineComponent({
    name: "ICalendarMonthDefaultExample",
    components: { ICalendarMonthGrid },
    data() {
        return {
            month: shallowRef(FDate.fromIso("2022-10-01")),
        };
    },
});
</script>

<template>
    <i-calendar-month-grid :value="month"> </i-calendar-month-grid>
</template>
