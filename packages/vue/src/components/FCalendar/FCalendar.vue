<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { FDate } from "@fkui/date";
import ICalendarNavbar from "../../internal-components/calendar/ICalendarNavbar.vue";
import ICalendarMonth from "../../internal-components/calendar/ICalendarMonth.vue";
import FList from "../FList/FList.vue";

export default defineComponent({
    name: "FCalendar",
    components: {
        FList,
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
        /**
         * Set to `true` if year selector should be enabled.
         */
        yearSelector: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: ["click", "update:modelValue"],
    data() {
        return {
            showYearSelector: false,
        };
    },
    computed: {
        selectableYears(): Array<{ yearDiff: number }> {
            const numberOfSelectableYears = 5;
            const selectableYears = [];
            for (let yearDiff = 0 - numberOfSelectableYears; yearDiff < numberOfSelectableYears; yearDiff++) {
                selectableYears.push({ yearDiff: yearDiff });
            }
            return selectableYears;
        },
    },

    methods: {
        getYearLabel(yearDiff: number): number {
            return this.modelValue.addYears(yearDiff).year;
        },
        onClickDay(date: FDate): void {
            /**
             * `click` event. Emitted when a calendar day is clicked.
             * @event click
             * @type {FDate}
             */
            this.$emit("click", date);
        },
        onChangeDate(date: FDate): void {
            /**
             * `v-model` event. Emitted when changing to a different month or year in the calendar.
             * @event update:modelValue
             * @type {FDate}
             */
            this.$emit("update:modelValue", date);
        },
        onUpdateShowYearSelector(showYearSelector: boolean): void {
            this.showYearSelector = showYearSelector;
        },
        onYearSelected(selectedYear: { yearDiff: number }): void {
            this.onUpdateShowYearSelector(false);
            this.onChangeDate(this.modelValue.addYears(selectedYear.yearDiff));
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
            :is-year-selector-open="showYearSelector"
            :year-selector="yearSelector"
            @update:model-value="onChangeDate"
            @update:show-year-selector="onUpdateShowYearSelector"
        ></i-calendar-navbar>

        <f-list
            v-if="showYearSelector"
            :items="selectableYears"
            selectable
            :checkbox="false"
            class="calendar__year-selector"
            @update:active="onYearSelected"
        >
            <template #default="{ item }">
                <h3>{{ getYearLabel(item.yearDiff) }}</h3>
            </template>
        </f-list>

        <i-calendar-month
            v-else
            :model-value="modelValue"
            :min-date="minDate"
            :max-date="maxDate"
            :tab-date="tabDate"
            @click="onClickDay"
            @update:model-value="onChangeDate"
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
