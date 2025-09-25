<script lang="ts">
import { defineComponent } from "vue";
import { FDate } from "@fkui/date";
import { FCalendar, FCalendarDay } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import FCheckboxField from "../../FCheckboxField/FCheckboxField.vue";

export default defineComponent({
    name: "FCalendarLiveExample",
    components: {
        LiveExample,
        FCheckboxField,
    },
    data() {
        return {
            enableYearSelector: false,
        };
    },
    computed: {
        livedata(): object {
            return {
                month: FDate.fromIso("2022-10-01"),
                min: FDate.fromIso("2020-01-01"),
                max: FDate.fromIso("2029-01-30"),
            };
        },
        components(): object {
            return {
                FCalendar,
                FCalendarDay,
            };
        },
        template(): string {
            return /* HTML */ `
                <f-calendar v-model="month" :min-date="min" :max-date="max" ${this.yearSelector}>
                    <template #default="{ date, isFocused }">
                        <f-calendar-day :day="date" :focused="isFocused" />
                    </template>
                </f-calendar>
            `;
        },
        yearSelector(): string {
            return this.enableYearSelector ? "year-selector" : "";
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata>
        <f-checkbox-field v-model="enableYearSelector" :value="true">
            Visa årsväljare
        </f-checkbox-field>
    </live-example>
</template>
