<script lang="ts">
import { FDate } from "@fkui/date";
import { focus } from "@fkui/logic";
import { defineComponent, type PropType } from "vue";
import { getHTMLElementFromVueRef, getHTMLElementsFromVueRef } from "../../utils";

export default defineComponent({
    name: "ICalendarYearSelector",
    components: {},
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
        enabled: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: ["update:modelValue"],
    data() {
        return {
            activeYear: NaN,
            isYearSelectorOpen: false,
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
        onChangeDate(date: FDate): void {
            /**
             * `v-model` event. Emitted when changing to a different month or year in the calendar.
             * @event update:modelValue
             * @type {FDate}
             */
            this.$emit("update:modelValue", date);
        },
        async onUpdateShowYearSelector(showYearSelector: boolean): Promise<void> {
            this.isYearSelectorOpen = showYearSelector;

            if (this.isYearSelectorOpen) {
                await this.$nextTick();
                this.activeYear = this.currentYear;
                const index = this.selectableYears.indexOf(this.currentYear);
                const yearElements = getHTMLElementsFromVueRef(this.$refs.yearElements);
                const element = yearElements[index];
                focus(element);
            }
        },
        onYearSelectorKeyDown(event: KeyboardEvent): void {
            if (event.ctrlKey || !this.isYearSelectorOpen) {
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
            const element = getHTMLElementsFromVueRef(this.$refs.yearElements)[index];
            focus(element);
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
            this.isYearSelectorOpen = false;
            const calendarNavbar = getHTMLElementFromVueRef(this.$refs.calendarNavbar);
            const calenderNavbarButton = calendarNavbar.querySelector("button");
            focus(calenderNavbarButton);
        },
    },
});
</script>
<template>
    <!-- [html-validate-disable-next prefer-native-element] -->
    <ul role="listbox" class="combobox__listbox__list" :aria-activedescendant="'yearSelector-' + activeYear">
        <li
            v-for="year in selectableYears"
            :id="'yearSelector-' + year"
            ref="yearElements"
            :key="year"
            :tabindex="activeYear === year ? 0 : -1"
            :aria-selected="activeYear === year ? 'true' : undefined"
            class="combobox__listbox__option"
            :class="{ 'combobox__listbox__option--highlight': activeYear === year }"
            @keydown="onYearSelectorKeyDown"
            @click.stop.prevent="onClickSelectYear(year)"
        >
            {{ year }}
        </li>
    </ul>
</template>
