<script lang="ts">
import { type PropType, defineComponent, inject, ref, shallowRef } from "vue";
import { DateFormat, FDate } from "@fkui/date";
import {
    type MaxDateValidatorConfig,
    type MinDateValidatorConfig,
    type PendingValidityEvent,
    type ValidationConfigUpdateDetail,
    type ValidatorConfigs,
    type ValidityEvent,
    ValidationService,
    alertScreenReader,
    parseDate,
    waitForScreenReader,
} from "@fkui/logic";
import { IPopup } from "../../internal-components/IPopup";
import { TranslationMixin } from "../../plugins";
import { getHTMLElementFromVueRef, getInputElement } from "../../utils";
import { FCalendar, FCalendarDay } from "../FCalendar";
import { FIcon } from "../FIcon";
import { FTextField } from "../FTextField";
import { getDisplayMonth } from "./get-display-month";
import { isDayEnabled } from "./is-day-enabled/is-day-enabled";
import { updateCalendarValue } from "./update-calendar-value";

export default defineComponent({
    name: "FDatepickerField",
    components: {
        FCalendar,
        IPopup,
        FTextField,
        FIcon,
        FCalendarDay,
    },
    mixins: [TranslationMixin],
    inheritAttrs: false,
    props: {
        /** Selected day.
         */
        modelValue: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * Initial month. Applies when no day is selected.
         * If unspecified, todays month will be shown when no day is selected.
         */
        initialMonth: {
            type: Object as PropType<FDate | undefined>,
            required: false,
            default: undefined,
        },
        /**
         * Highlight today.
         */
        highlightToday: {
            type: Boolean,
            required: false,
            /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
            default: true,
        },
        /**
         * Always display inline.
         */
        alwaysInline: {
            type: Boolean,
        },
        /**
         * Includes a year selector when enabled.
         */
        yearSelector: {
            type: Boolean,
            required: false,
        },
        /**
         * Set responsive width for label section.
         *
         * ```
         * label-width="md-9 lg-6"
         * ```
         */
        labelWidth: {
            type: String,
            required: false,
            default: "sm-12",
        },
        /**
         * Set responsive width for input section that wraps input element and icons.
         *
         * ```
         * input-width="md-6 lg-3"
         * ```
         */
        inputWidth: {
            type: String,
            required: false,
            default: "sm-12",
        },
        /**
         * Disables the date picker.
         */
        disabled: {
            type: Boolean,
            required: false,
        },
    },
    emits: [
        /**
         * Emitted when date changes.
         *
         * @type {string}
         */
        "change",
        /**
         * `v-model` event.
         * @type {string}
         */
        "update:modelValue",
    ],
    setup() {
        const defaultMinDate = FDate.now().addYears(-10);
        const defaultMaxDate = FDate.now().addYears(10);

        return {
            textFieldValue: ref<string>(""),
            textFieldTouched: ref<boolean>(false),
            textFieldValidityRevealed: ref<boolean>(false),
            textFieldTableMode: inject("textFieldTableMode", false) as boolean,
            componentTouched: ref<boolean>(false),
            calendarMonth: shallowRef<FDate>(getDisplayMonth(defaultMinDate, defaultMaxDate)),
            calendarValue: shallowRef<FDate | undefined>(undefined),
            isCalendarOpen: ref<boolean>(false),
            validationConfig: ref<ValidatorConfigs>({}),
            minDate: shallowRef<FDate>(defaultMinDate),
            maxDate: shallowRef<FDate>(defaultMaxDate),
            calendarInputs: ref<HTMLElement | null>(null),
        };
    },
    computed: {
        calendarButtonText(): string {
            const { calendarValue } = this;
            if (calendarValue?.isValid()) {
                const prettyDate = calendarValue.toString(DateFormat.FULL);
                const text = this.$t("fkui.datepicker-field.change", "Ändra datum");
                return `${text} ${prettyDate}`;
            } else {
                return this.$t("fkui.datepicker-field.choose", "Välj datum");
            }
        },
        popupClass(): string {
            return this.textFieldTableMode
                ? "datepicker-field__popup datepicker-field__table"
                : "datepicker-field__popup";
        },
    },
    watch: {
        modelValue: {
            async handler(value: string): Promise<void> {
                if (value !== this.textFieldValue) {
                    await this.updateTextFieldValue(value);
                    updateCalendarValue(this, value);
                }
            },
            immediate: true,
        },
    },
    mounted() {
        ValidationService.addValidatorsToElement(
            getInputElement(this),
            {
                date: {},
                dateFormat: {},
                minDate: { limit: this.minDate.toString() },
                maxDate: { limit: this.maxDate.toString() },
            },
            true,
        );
    },
    methods: {
        dateFormatter: parseDate,
        onValidityTextField({ detail }: CustomEvent<ValidityEvent>) {
            // if state cleared in ValidationService, reset state locally
            if (this.textFieldValidityRevealed && detail.validityMode === "INITIAL") {
                this.textFieldTouched = false;
                this.componentTouched = false;
            }

            // keep track if textfield have been touched
            if (!this.textFieldTouched && ["blur", "change"].includes(detail.nativeEvent)) {
                this.textFieldTouched = true;
            }

            if (this.isCalendarOpen) {
                alertScreenReader(detail.validationMessage, { assertive: true });
            }

            // keep track if textfield validity has been shown to user
            this.textFieldValidityRevealed = detail.validityMode !== "INITIAL";

            // return if error not aims be shown
            // return if error aims to be shown but textfield was never touched, indicating textfield was submitted
            // return if error aims to be shown and group has been touched
            if (detail.validityMode === "INITIAL" || !this.textFieldTouched || this.componentTouched) {
                return;
            }

            // hide validity by triggering pending-validity event
            // this event sets textfield ValidityMode to INITIAL
            const inputElement = getInputElement(this);
            const pendingValidityEvent = new CustomEvent<PendingValidityEvent>("pending-validity", {
                bubbles: false,
            });
            inputElement.dispatchEvent(pendingValidityEvent);
        },
        onChangeTextField(): void {
            updateCalendarValue(this, this.textFieldValue);
            this.$emit("update:modelValue", this.textFieldValue);
            this.$emit("change", this.textFieldValue);
        },
        onClickCalendarButton() {
            if (!this.isCalendarOpen) {
                this.calendarMonth = getDisplayMonth(this.minDate, this.maxDate, this.calendarValue, this.initialMonth);
            }

            this.isCalendarOpen = !this.isCalendarOpen;
        },
        onFocusoutTextFieldButton(e: FocusEvent) {
            if (this.componentTouched || this.$refs.component === null) {
                return;
            }

            const component = getHTMLElementFromVueRef(this.$refs.component);
            const relatedTarget = e.relatedTarget as Node;

            if (!component.contains(relatedTarget)) {
                this.componentTouched = true;
                const inputElement = getInputElement(this);
                ValidationService.setTouched(inputElement);
                /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
                ValidationService.validateElement(inputElement);
            }
        },
        async onSelectCalendarDay(date: FDate): Promise<void> {
            // Consider component touched when a date is selected.
            this.componentTouched = true;

            this.isCalendarOpen = !this.isDateEnabled(date);
            if (!this.isCalendarOpen) {
                getHTMLElementFromVueRef(this.$refs.calendarButton).focus();
            }

            this.$emit("update:modelValue", date.toString());
            this.$emit("change", date.toString());
            await this.updateTextFieldValue(date.toString());
            updateCalendarValue(this, date.toString());
        },
        onKeyupEsc(): void {
            this.isCalendarOpen = false;
            /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
            waitForScreenReader(() => {
                getHTMLElementFromVueRef(this.$refs.calendarButton).focus();
            });
        },
        onClickCloseCalendarButton(): void {
            this.isCalendarOpen = false;
            /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
            waitForScreenReader(() => {
                getHTMLElementFromVueRef(this.$refs.calendarButton).focus();
            });
        },
        onOpenPopup(): void {
            if (!this.isCalendarOpen) {
                return;
            }

            const popup = getHTMLElementFromVueRef(this.$refs.popup);
            const navMonth: HTMLElement | null = popup.querySelector(".calendar-navbar__month--title");
            if (navMonth) {
                navMonth.focus({ preventScroll: true });
            }
        },
        onClosePopup(): void {
            this.isCalendarOpen = false;
        },
        onValidationConfigUpdate(event: CustomEvent<ValidationConfigUpdateDetail>): void {
            this.validationConfig = event.detail.config;

            if (this.validationConfig.minDate) {
                const minDateConfig = this.validationConfig.minDate as Partial<MinDateValidatorConfig>;
                if (!minDateConfig.limit) {
                    throw new Error("MinDate validator must be set");
                }

                /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
                this.minDate = FDate.fromIso(minDateConfig.limit.toString());
            }

            if (this.validationConfig.maxDate) {
                const maxDateConfig = this.validationConfig.maxDate as Partial<MaxDateValidatorConfig>;
                if (!maxDateConfig.limit) {
                    throw new Error("MaxDate validator must be set");
                }

                /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
                this.maxDate = FDate.fromIso(maxDateConfig.limit.toString());
            }
        },
        isDateEnabled(day: FDate): boolean {
            return isDayEnabled(day, this.validationConfig);
        },
        isDaySelected(date: FDate): boolean {
            return this.calendarValue ? date.equals(this.calendarValue) : false;
        },
        highlightDay(date: FDate): boolean {
            return this.highlightToday && date.equals(FDate.now());
        },
        async updateTextFieldValue(newValue: string): Promise<void> {
            this.textFieldValue = newValue;
            await this.$nextTick();
            /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
            ValidationService.validateElement(getInputElement(this));
        },
    },
});
</script>

<template>
    <div ref="component" class="datepicker-field">
        <div ref="calendarInputs" @focusout="onFocusoutTextFieldButton">
            <f-text-field
                v-bind="$attrs"
                v-model="textFieldValue"
                maxlength="20"
                :disabled
                :formatter="dateFormatter"
                :label-width
                :input-width
                @component-validity="onValidityTextField"
                @change="onChangeTextField"
                @validation-config-update="onValidationConfigUpdate"
            >
                <!-- @slot **Optional** Slot for setting the label. Default value "Datum" -->
                <slot>{{ $t("fkui.datepicker-field.label", "Datum") }}</slot>

                <template v-if="$slots.tooltip" #tooltip>
                    <!-- @slot **Optional** Slot for tooltip. May only contain an {@link FTooltip}. -->
                    <slot name="tooltip"></slot>
                </template>

                <template #description="{ descriptionClass, formatDescriptionClass }">
                    <!-- @slot **Optional** Slot for displaying description. The contents are passed to the description-slot of {@link FLabel}. -->
                    <!--
                         @slot Optional slot for description. See {@link FLabel} for details.
                         @binding {string[]} description-class CSS classes for primary description content.
                         @binding {string[]} format-description-class CSS classes for format description.
                    -->
                    <slot name="description" :description-class :format-description-class></slot>
                </template>

                <template #error-message="{ hasError, validationMessage }">
                    <!--
                        @slot **Optional** Slot for error message(s). The contents are passed to the error message-slot of {@link FLabel}.
                        @binding {boolean} hasError Set to true when a validation error is present
                        @binding {string} validationMessage Descriptive validation error message for current error
                    -->
                    <slot name="error-message" v-bind="{ hasError, validationMessage }"></slot>
                </template>

                <template #input-right>
                    <button
                        ref="calendarButton"
                        :disabled
                        class="datepicker-field__button"
                        type="button"
                        :aria-expanded="isCalendarOpen ? 'true' : 'false'"
                        data-test="calendar-button"
                        @click="onClickCalendarButton()"
                    >
                        <f-icon name="calendar"></f-icon>
                        <span class="sr-only">{{ calendarButtonText }}</span>
                    </button>
                </template>
            </f-text-field>
        </div>

        <i-popup
            :is-open="isCalendarOpen"
            :anchor="calendarInputs"
            :inline="alwaysInline ? 'always' : undefined"
            :set-focus="false"
            @open="onOpenPopup"
            @close="onClosePopup"
        >
            <div ref="popup" :class="popupClass">
                <f-calendar
                    v-model="calendarMonth"
                    :tab-date="calendarValue"
                    :min-date
                    :max-date
                    :year-selector
                    @click="onSelectCalendarDay"
                    @keyup.esc.stop="onKeyupEsc"
                >
                    <template #default="{ date, isFocused }">
                        <f-calendar-day
                            :day="date"
                            :enabled="isDateEnabled(date)"
                            :focused="isFocused"
                            :highlight="highlightDay(date)"
                            :selected="isDaySelected(date)"
                        >
                        </f-calendar-day>
                    </template>
                </f-calendar>

                <div class="datepicker-field__close">
                    <!-- [html-validate-disable-next fkui/class-deprecated -- technical debt] -->
                    <button
                        class="button button--discrete button--discrete--black datepicker-field__close__button"
                        type="button"
                        @click="onClickCloseCalendarButton"
                        @keyup.esc.stop="onKeyupEsc"
                    >
                        <span>{{ $t("fkui.datepicker-field.close", "Stäng") }}</span>
                        <f-icon aria-hidden="true" class="button__icon" name="close" />
                    </button>
                </div>
            </div>
        </i-popup>
    </div>
</template>
