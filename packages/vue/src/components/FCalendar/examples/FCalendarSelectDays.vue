<script lang="ts">
import { defineComponent, shallowRef } from "vue";
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
            month: shallowRef(FDate.fromIso("2022-10-01")),
            min: shallowRef(FDate.fromIso("2020-10-01")),
            max: shallowRef(FDate.fromIso("2029-12-31")),
            selected: [] as string[],
        };
    },
    methods: {
        onSelectDay(date: FDate) {
            const dateString = date.toString();
            if (this.selected.includes(dateString)) {
                this.selected.splice(this.selected.indexOf(dateString), 1);
            } else {
                this.selected.push(dateString);
            }
        },
        isSelected(date: FDate) {
            return this.selected.find((it) => date.equals(it)) !== undefined;
        },
    },
});
</script>

<template>
    <div>
        <f-calendar v-model="month" :min-date="min" :max-date="max" @click="onSelectDay">
            <template #default="{ date, isFocused }">
                <f-calendar-day
                    data-test="multiple-days"
                    :day="date"
                    :focused="isFocused"
                    :selected="isSelected(date)"
                >
                </f-calendar-day>
            </template>
        </f-calendar>
        <span data-test="days-array"> Valda dagar: {{ selected }} </span>
    </div>
</template>
