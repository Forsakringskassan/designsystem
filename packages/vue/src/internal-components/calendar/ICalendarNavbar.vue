<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { FDate } from "@fkui/date";
import { alertScreenReader } from "@fkui/logic";
import { FIcon } from "../../components/FIcon";
import { TranslationMixin } from "../../plugins";
import { isInvalidMonth } from "./is-invalid-month";
import { getMessage } from "./get-message";

export default defineComponent({
    name: "ICalendarNavbar",
    components: {
        FIcon,
    },
    mixins: [TranslationMixin],
    props: {
        /**
         * Focused month.
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
    },
    emits: ["change", "update:modelValue"],
    computed: {
        previousDisabled(): boolean {
            return isInvalidMonth(this.modelValue.addMonths(-1), this.minDate, this.maxDate);
        },
        nextDisabled(): boolean {
            return isInvalidMonth(this.modelValue.addMonths(1), this.minDate, this.maxDate);
        },
        previousValue(): FDate {
            return this.modelValue.addMonths(-1);
        },
        nextValue(): FDate {
            return this.modelValue.addMonths(1);
        },
        currentText(): string {
            return this.getDateText(this.modelValue);
        },
        previousSrText(): string {
            return this.$t("fkui.calendar-navbar.previous", "Föregående månad");
        },
        nextSrText(): string {
            return this.$t("fkui.calendar-navbar.next", "Nästa månad");
        },
        previousIconClasses(): Record<string, boolean> {
            return {
                "calendar-navbar__icon": true,
                "calendar-navbar__icon--disabled": this.previousDisabled,
            };
        },
        nextIconClasses(): Record<string, boolean> {
            return {
                "calendar-navbar__icon": true,
                "calendar-navbar__icon--disabled": this.nextDisabled,
            };
        },
    },
    methods: {
        onClickPreviousButton(): void {
            if (!this.previousDisabled) {
                /**
                 * V-model event.
                 * @event update:modelValue
                 * @param value
                 * @type {FDate}
                 */
                this.$emit("update:modelValue", this.previousValue);

                const previousMonth = this.getDateText(this.previousValue);
                const previousMonthText = this.$t("fkui.calendar-navbar.previous-month", "{{ previousMonth }} visas", {
                    previousMonth,
                });
                alertScreenReader(previousMonthText, { assertive: true });
                return;
            }

            const message = getMessage(this.$t, this.previousValue, this.minDate, this.maxDate);
            if (message) {
                alertScreenReader(message, { assertive: true });
            }
        },
        onClickNextButton(): void {
            if (!this.nextDisabled) {
                this.$emit("update:modelValue", this.nextValue);
                this.$emit("change", this.nextValue);

                const nextMonth = this.getDateText(this.nextValue);
                const nextMonthText = this.$t("fkui.calendar-navbar.next-month", "{{ nextMonth }} visas", {
                    nextMonth,
                });
                alertScreenReader(nextMonthText, { assertive: true });
                return;
            }

            const message = getMessage(this.$t, this.nextValue, this.minDate, this.maxDate);
            if (message) {
                alertScreenReader(message, { assertive: true });
            }
        },
        getDateText(value: FDate): string {
            return `${value.monthName} ${value.year}`;
        },
        isFocused(ref: string): boolean {
            return document.activeElement === this.$refs[ref];
        },
    },
});
</script>

<template>
    <div class="calendar-navbar">
        <div class="calendar-navbar__month" tabindex="-1">
            {{ currentText }}
        </div>

        <button
            ref="previousButton"
            class="calendar-navbar__arrow calendar-navbar__arrow--previous"
            type="button"
            :aria-disabled="previousDisabled"
            :aria-live="isFocused('previousButton') ? 'polite' : 'off'"
            @click.stop="onClickPreviousButton"
        >
            <span class="sr-only">
                {{ previousSrText }}
            </span>
            <f-icon :class="previousIconClasses" name="arrow-right"></f-icon>
        </button>

        <button
            ref="nextButton"
            class="calendar-navbar__arrow calendar-navbar__arrow--next"
            type="button"
            :aria-disabled="nextDisabled"
            :aria-live="isFocused('nextButton') ? 'polite' : 'off'"
            @click.stop="onClickNextButton"
        >
            <span class="sr-only">{{ nextSrText }}</span>
            <f-icon :class="nextIconClasses" name="arrow-right"></f-icon>
        </button>
    </div>
</template>
