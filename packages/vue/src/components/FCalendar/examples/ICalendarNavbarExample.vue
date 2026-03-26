<script lang="ts">
import { defineComponent, shallowRef } from "vue";
import { FDate } from "@fkui/date";
import { ICalendarNavbar } from "../../../internal-components";

export default defineComponent({
    components: {
        ICalendarNavbar,
    },
    data() {
        return {
            minDate: shallowRef(FDate.fromIso("2026-01-01")),
            maxDate: shallowRef(FDate.fromIso("2026-12-31")),
        };
    },
});
</script>

<template>
    <i-calendar-navbar v-model="minDate" :min-date :max-date />
    <i-calendar-navbar v-model="maxDate" :min-date :max-date :year-selector="true" />
</template>
