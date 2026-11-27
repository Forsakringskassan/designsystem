<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { type PropType, type ShallowRef, defineComponent } from "vue";
import { FDate, range } from "@fkui/date";
import { alertScreenReader, focus } from "@fkui/logic";
import { TranslationMixin } from "../../plugins";
import { getHTMLElementFromVueRef } from "../../utils";
import ICalendarMonthGrid from "./ICalendarMonthGrid.vue";
import { getDayStep, isDayStepKey } from "./get-day-step";
import { getDayTabindex } from "./get-day-tabindex";
import { getMessage } from "./get-message";

export default defineComponent({
    name: "ICalendarMonth",
    components: {
        ICalendarMonthGrid,
    },
    /* eslint-disable-next-line sonarjs/no-vue-mixins -- technical debt */
    mixins: [TranslationMixin],
    props: {
        /**
         * Active month.
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
    emits: {
        click(_date: FDate) {
            return true;
        },
        "update:modelValue"(_date: FDate) {
            return true;
        },
        selecting(_days: string[]) {
            return true;
        },
        select(_days: string[]) {
            return true;
        },
    },
    data() {
        return {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion -- poc
            mouseDown: "" as ShallowRef<FDate> | "",
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion -- poc
            mouseOver: "" as ShallowRef<FDate> | "",
            shift: false,
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion -- poc
            navigateDown: "" as ShallowRef<FDate> | "",
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion -- poc
            lastFocusedDay: "" as ShallowRef<FDate> | "",
        };
    },
    methods: {
        onClickDay(date: FDate, event: MouseEvent): void {
            if (this.lastFocusedDay && event.shiftKey) {
                const days = this.getSelection(this.lastFocusedDay, date, event.shiftKey);
                this.$emit("select", days);
            } else {
                this.$emit("select", [date.toString()]);
            }

            this.lastFocusedDay = date;

            this.$emit("click", date);
        },
        onMouseDown(date: FDate, event: MouseEvent): void {
            if (event.button === 0) {
                this.mouseDown = date;
                this.mouseOver = date;
                this.$emit("selecting", [date.toString()]);
            } else {
                this.mouseDown = "";
                this.mouseOver = "";
                this.$emit("selecting", []);
            }
        },
        onMouseUp(date: FDate): void {
            if (this.mouseDown && !date.equals(this.mouseDown)) {
                const days = this.getSelection(this.mouseDown, date, false);
                this.$emit("select", days);
            }

            this.mouseDown = "";
            this.mouseOver = "";
        },
        onMouseOver(date: FDate): void {
            if (!this.mouseDown) {
                return;
            }

            this.mouseOver = date;
            const days = this.getSelection(this.mouseDown, date, false);
            this.$emit("selecting", days);
        },
        onMouseLeaveComponent() {
            this.mouseDown = "";
            this.mouseOver = "";
            this.$emit("selecting", []);
        },
        async onKeydownDay(date: FDate, event: KeyboardEvent): Promise<void> {
            if (event.code === "Enter" || event.code === "Space") {
                event.preventDefault();
                this.$emit("click", date);
                return;
            }

            if (this.mouseDown && this.mouseOver && this.shift !== event.shiftKey) {
                this.shift = event.shiftKey;
                const days = this.getSelection(this.mouseDown, this.mouseOver, event.shiftKey);
                this.$emit("selecting", days);
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

            if (event.shiftKey) {
                if (!this.navigateDown) {
                    this.navigateDown = date;
                }

                const days = this.getSelection(this.navigateDown, navigatedDay, true);
                this.$emit("selecting", days);
            } else {
                this.navigateDown = "";
                this.$emit("selecting", []);
            }

            this.$emit("update:modelValue", navigatedMonth);

            if (navigatedDay.month !== date.month) {
                await this.$nextTick(); // required for refs to be updated when navigating to another month
            }

            this.$forceUpdate(); // required for provided data to be updated
            const navigatedDayRef = this.$refs[navigatedDay.toString()];
            if (!navigatedDayRef) {
                return;
            }

            const navigatedDayElement = getHTMLElementFromVueRef(navigatedDayRef);
            focus(navigatedDayElement);
        },
        onKeyupDay(date: FDate, event: KeyboardEvent): void {
            if (!(this.navigateDown && event.key === "Shift")) {
                return;
            }

            const days = this.getSelection(this.navigateDown, date, true);
            this.navigateDown = "";
            this.$emit("select", days);
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
        getSelection(a: FDate, b: FDate, shiftKey: boolean): string[] {
            let start: FDate, end: FDate;
            const minWeekDay = Math.min(a.weekDay, b.weekDay);
            const maxWeekDay = Math.max(a.weekDay, b.weekDay);

            if (a.isBefore(b)) {
                start = a;
                end = b;
            } else {
                start = b;
                end = a;
            }

            if (shiftKey) {
                const days = range(start, end);
                return Array.from(days, (day) => day.toString());
            }

            let selectionStart: FDate, selectionEnd: FDate;
            if (end.weekDay < start.weekDay) {
                const diff = start.weekDay - end.weekDay;

                selectionStart = start.addDays(-diff);
                if (selectionStart.month < start.month) {
                    selectionStart = start.startOfMonth();
                }

                selectionEnd = end.addDays(diff);
                if (selectionEnd.month > end.month) {
                    selectionEnd = end.endOfMonth();
                }
            } else {
                selectionStart = start;
                selectionEnd = end;
            }

            const days = range(selectionStart, selectionEnd);
            return (
                Array.from(days)
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison -- poc
                    .filter((day) => day.weekDay >= minWeekDay && day.weekDay <= maxWeekDay)
                    .map((day) => day.toString())
            );
        },
    },
});
</script>

<template>
    <i-calendar-month-grid :value="modelValue" @mouseleave="onMouseLeaveComponent">
        <template #default="{ date }">
            <div
                :ref="date.toString()"
                role="gridcell"
                class="calendar-month__button"
                data-test="select-day-button"
                :data-date="date.toString()"
                :tabindex="getTabindex(date)"
                @click.stop.prevent="onClickDay(date, $event)"
                @mousedown="onMouseDown(date, $event)"
                @mouseup="onMouseUp(date)"
                @mouseover="onMouseOver(date)"
                @keydown="onKeydownDay(date, $event)"
                @keyup="onKeyupDay(date, $event)"
            >
                <!--
                    @slot Slot for rendering of day content.
                    @binding {FDate} date The date object for the current day.
                    @binding {boolean} is-focused Indicates whether the current day is focused.
                -->
                <slot :date :is-focused="isDayFocused(date)"></slot>
            </div>
        </template>
    </i-calendar-month-grid>
</template>
