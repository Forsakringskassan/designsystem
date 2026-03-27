<script lang="ts">
import { defineComponent, shallowRef } from "vue";
import { FDate } from "@fkui/date";
import { ICalendarMonthGrid } from "@fkui/vue";

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
    <i-calendar-month-grid :value="month">
        <template #default="{ date }">{{ date.day }}</template>
    </i-calendar-month-grid>
</template>
