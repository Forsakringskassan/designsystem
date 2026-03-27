<script lang="ts">
import { defineComponent } from "vue";
import { FDate, Weekday } from "@fkui/date";
import { isEmpty } from "@fkui/logic";
import { type ComponentValidityEvent, FDatepickerField, FFieldset } from "@fkui/vue";

const MIN_DATE = FDate.now().addMonths(-1).toString();
const MAX_DATE = FDate.now().addMonths(1).toString();

export default defineComponent({
    components: { FDatepickerField, FFieldset },
    data() {
        return {
            fromDate: "",
            toDate: "",
            toMinLimit: MIN_DATE,
            Weekday,
            MIN_DATE,
            MAX_DATE,
        };
    },
    methods: {
        getMinToDate(validFromDate: boolean): string {
            if (isEmpty(this.fromDate) || !validFromDate) {
                return MIN_DATE;
            }
            return this.fromDate;
        },
        onValidityFromDate({ detail: { isValid } }: CustomEvent<ComponentValidityEvent>): void {
            this.toMinLimit = this.getMinToDate(isValid);
        },
    },
});
</script>

<template>
    <f-fieldset>
        <template #label> Anställningsperiod </template>
        <f-datepicker-field
            ref="fromDate"
            v-model="fromDate"
            v-validation.required.invalidWeekdays.minDate.maxDate="{
                invalidWeekdays: { days: [Weekday.SATURDAY, Weekday.SUNDAY] },
                minDate: {
                    limit: MIN_DATE,
                },
                maxDate: {
                    limit: MAX_DATE,
                },
            }"
            @component-validity="onValidityFromDate"
        >
            Från och med
        </f-datepicker-field>

        <f-datepicker-field
            v-model="toDate"
            v-validation.required.invalidWeekdays.minDate.maxDate="{
                invalidWeekdays: { days: [Weekday.SATURDAY, Weekday.SUNDAY] },
                minDate: {
                    limit: toMinLimit,
                },
                maxDate: {
                    limit: MAX_DATE,
                },
            }"
        >
            Till och med
        </f-datepicker-field>
    </f-fieldset>
</template>
