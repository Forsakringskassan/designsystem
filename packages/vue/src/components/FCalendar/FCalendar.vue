<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { FDate } from "@fkui/date";
import ICalendarNavbar from "../../internal-components/calendar/ICalendarNavbar.vue";
import ICalendarMonth from "../../internal-components/calendar/ICalendarMonth.vue";

export default defineComponent({
    name: "FCalendar",
    components: {
        ICalendarNavbar,
        ICalendarMonth,
    },
    props: {
        /**
         * Active month.
         * @model
         */
        modelValue: {
            type: Object as PropType<FDate>,
            required: true,
        },
        /**
         * Date to set tabindex on when component gains focus.
         *
         * Consumers can update this related to active month.
         * If undefined, the first day of the month will gain focus.
         */
        tabDate: {
            type: Object as PropType<FDate | undefined>,
            required: false,
            default: undefined,
        },
        /**
         * Min date.
         */
        minDate: {
            type: Object as PropType<FDate>,
            required: true,
        },
        /**
         * Max date.
         */
        maxDate: {
            type: Object as PropType<FDate>,
            required: true,
        },
    },
    emits: ["click", "update:modelValue"],
    methods: {
        onClickDay(date: FDate): void {
            /**
             * `click` event. Emitted when a calendar day is clicked.
             * @event click
             * @type {FDate}
             */
            this.$emit("click", date);
        },
        onChangeMonth(date: FDate): void {
            /**
             * `v-model` event. Emitted when changing to a different month in the calendar.
             * @event update:modelValue
             * @type {FDate}
             */
            this.$emit("update:modelValue", date);
        },
    },
});
</script>

<template>
    <div class="calendar__wrapper">
        <i-calendar-navbar
            :model-value="modelValue"
            :min-date="minDate"
            :max-date="maxDate"
            @update:model-value="onChangeMonth"
        ></i-calendar-navbar>

        <i-calendar-month
            :model-value="modelValue"
            :min-date="minDate"
            :max-date="maxDate"
            :tab-date="tabDate"
            @click="onClickDay"
            @update:model-value="onChangeMonth"
        >
            <template #default="{ date, focused }">
                <!--
                @slot Slot for calendar day.
                @binding {FDate} date The date object for the current day.
                @binding {boolean} is-focused Indicates whether the current day is focused.
                -->
                <slot :date="date" :is-focused="focused"></slot>
            </template>
        </i-calendar-month>
    </div>
</template>
