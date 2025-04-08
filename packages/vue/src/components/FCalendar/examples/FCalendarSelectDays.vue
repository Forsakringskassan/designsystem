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
            min: FDate.fromIso("2020-10-01"),
            max: FDate.fromIso("2029-12-31"),
            selected: [],
        };
    },
    methods: {
        onSelectDay(date) {
            const dateString = date.toString();
            if (this.selected.includes(dateString)) {
                this.selected.splice(this.selected.indexOf(dateString), 1);
            } else {
                this.selected.push(dateString);
            }
        },
        isSelected(date) {
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
