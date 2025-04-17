<script lang="ts">
import { FDate } from "@fkui/date";
import { alertScreenReader, focus } from "@fkui/logic";
import { defineComponent, type PropType } from "vue";
import { getHTMLElementFromVueRef } from "../../utils";
import { TranslationMixin } from "../../plugins";
import ICalendarMonthGrid from "./ICalendarMonthGrid.vue";
import { getDayStep, isDayStepKey } from "./get-day-step";
import { getDayTabindex } from "./get-day-tabindex";
import { getMessage } from "./get-message";

export default defineComponent({
    name: "ICalendarMonth",
    components: {
        ICalendarMonthGrid,
    },
    mixins: [TranslationMixin],
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
         * Date to focus on when component gains focus.
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
    emits: ["change", "click", "update:modelValue"],
    methods: {
        onClickDay(date: FDate): void {
            /**
             * `click` event.
             * @event click
             * @type {string}
             */
            this.$emit("click", date);
        },
        async onKeydownDay(date: FDate, event: KeyboardEvent): Promise<void> {
            if (event.code === "Enter" || event.code === "Space") {
                event.preventDefault();
                this.$emit("click", date);
                return;
            }

            if (!isDayStepKey(event)) {
                return;
            }

            event.preventDefault();
            const dayStep = getDayStep(event);
            const navigatedDay = date.addDays(dayStep);
            const navigatedMonth = navigatedDay.startOfMonth();

            const message = getMessage(this.$t, navigatedDay, this.minDate, this.maxDate);
            if (message) {
                alertScreenReader(message, { assertive: true });
                return;
            }

            /**
             * `v-model` event.
             * @event update:modelValue
             * @type {string}
             */
            this.$emit("update:modelValue", navigatedMonth);

            if (navigatedDay.month !== date.month) {
                await this.$nextTick(); // required for refs to be updated when navigating to another month
            }

            this.$forceUpdate(); // required for provided data to be updated
            const navigatedDayRef = this.$refs[navigatedDay.toString()];

            if (navigatedDayRef) {
                const navigatedDayElement = getHTMLElementFromVueRef(navigatedDayRef);
                focus(navigatedDayElement);
            }
        },
        isDayFocused(date: FDate): boolean {
            return document.activeElement === this.$refs[date.toString()];
        },
        getTabindex(date: FDate): 0 | -1 {
            let activeDate = undefined;

            if (document.activeElement instanceof HTMLElement) {
                const activeString = document.activeElement.dataset.date;
                activeDate = activeString ? FDate.fromIso(activeString) : undefined;
            }

            return getDayTabindex(date, activeDate, this.tabDate);
        },
    },
});
</script>

<template>
    <i-calendar-month-grid :value="modelValue">
        <template #default="{ date }">
            <div
                :ref="date.toString()"
                role="gridcell"
                class="calendar-month__button"
                data-test="select-day-button"
                :data-date="date.toString()"
                :tabindex="getTabindex(date)"
                @click.stop.prevent="onClickDay(date)"
                @keydown="onKeydownDay(date, $event)"
            >
                <!--
                    @slot Slot for rendering of day content.
                    @binding {FDate} date The date object for the current day.
                    @binding {boolean} is-focused Indicates whether the current day is focused.
                -->
                <slot :date="date" :is-focused="isDayFocused(date)"></slot>
            </div>
        </template>
    </i-calendar-month-grid>
</template>
