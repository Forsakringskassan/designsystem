<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { FDate } from "@fkui/date";
import { focus } from "@fkui/logic";
import ICalendarNavbar from "../../internal-components/calendar/ICalendarNavbar.vue";
import ICalendarMonth from "../../internal-components/calendar/ICalendarMonth.vue";
import { getHTMLElementFromVueRef, getHTMLElementsFromVueRef } from "../../utils";

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
        /**
         * Includes a year selector when enabled.
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
            activeYear: NaN,
            displayYearSelectorAsOpen: false,
        };
    },
    computed: {
        currentYear(): number {
            return this.modelValue.year;
        },
        selectableYears(): number[] {
            const selectableYears = [];
            for (let year = this.minDate.year; year <= this.maxDate.year; year++) {
                selectableYears.push(year);
            }
            return selectableYears;
        },
    },
    methods: {
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
        async onUpdateDisplayYearSelectorAsOpen(showYearSelector: boolean): Promise<void> {
            this.displayYearSelectorAsOpen = showYearSelector;

            if (this.displayYearSelectorAsOpen) {
                await this.$nextTick();
                this.activeYear = this.currentYear;
                this.updateYearSelectorFocus();
            }
        },
        onYearSelectorKeyDown(event: KeyboardEvent): void {
            if (event.ctrlKey || !this.displayYearSelectorAsOpen) {
                return;
            }

            const firstYear = this.minDate.year;
            const lastYear = this.maxDate.year;

            switch (event.key) {
                case "ArrowUp":
                    event.preventDefault();
                    this.activeYear = this.activeYear === firstYear ? lastYear : --this.activeYear;
                    this.updateYearSelectorFocus();
                    break;
                case "ArrowDown":
                    event.preventDefault();
                    this.activeYear = this.activeYear === lastYear ? firstYear : ++this.activeYear;
                    this.updateYearSelectorFocus();
                    break;
                case "Enter":
                case " ":
                    event.preventDefault();
                    this.selectYear();
                    break;
                case "Tab":
                case "Escape":
                    event.preventDefault();
                    this.closeYearSelector();
                    break;
                default:
                    break;
            }
        },
        onClickSelectYear(year: number) {
            this.activeYear = year;
            this.selectYear();
        },
        updateYearSelectorFocus() {
            const index = this.selectableYears.indexOf(this.activeYear);
            const activeElement = getHTMLElementsFromVueRef(this.$refs.yearElements)[index];
            focus(activeElement);

            const wrapperElement = getHTMLElementFromVueRef(this.$refs.yearSelector);
            const wrapperHeight = wrapperElement.getBoundingClientRect().height;
            const activeElementHeight = activeElement.getBoundingClientRect().height;
            const centerPosition = activeElement.offsetTop - (wrapperHeight - activeElementHeight) / 2;

            // Scroll activeElement to center of wrapper.
            wrapperElement.scrollTo({ top: centerPosition, behavior: "instant" });
        },
        selectYear() {
            let selectedDate = this.modelValue.addYears(this.activeYear - this.currentYear);
            if (selectedDate.isBefore(this.minDate)) {
                selectedDate = this.minDate;
            } else if (selectedDate.isAfter(this.maxDate)) {
                selectedDate = this.maxDate;
            }
            this.onChangeDate(selectedDate);
            this.closeYearSelector();
        },
        closeYearSelector() {
            this.displayYearSelectorAsOpen = false;
            const calendarNavbar = getHTMLElementFromVueRef(this.$refs.calendarNavbar);
            const calenderNavbarButton = calendarNavbar.querySelector("button");
            focus(calenderNavbarButton);
        },
    },
});
</script>

<template>
    <div class="calendar__wrapper">
        <i-calendar-navbar
            ref="calendarNavbar"
            :model-value="modelValue"
            :min-date="minDate"
            :max-date="maxDate"
            :year-selector
            :display-year-selector-as-open
            @update:model-value="onChangeDate"
            @update:display-year-selector-as-open="onUpdateDisplayYearSelectorAsOpen"
        ></i-calendar-navbar>

        <div v-if="displayYearSelectorAsOpen" ref="yearSelector" class="calendar__year-selector">
            <!-- [html-validate-disable-next prefer-native-element] -->
            <ul
                role="listbox"
                class="calendar__year-selector__listbox"
                :aria-activedescendant="'yearSelector-' + activeYear"
            >
                <li
                    v-for="year in selectableYears"
                    :id="'yearSelector-' + year"
                    ref="yearElements"
                    :key="year"
                    role="option"
                    :tabindex="activeYear === year ? 0 : -1"
                    :aria-selected="activeYear === year ? 'true' : undefined"
                    class="calendar__year-selector__year"
                    :class="{ 'calendar__year-selector__year--highlight': activeYear === year }"
                    @keydown="onYearSelectorKeyDown"
                    @click.stop.prevent="onClickSelectYear(year)"
                >
                    {{ year }}
                </li>
            </ul>
        </div>

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
