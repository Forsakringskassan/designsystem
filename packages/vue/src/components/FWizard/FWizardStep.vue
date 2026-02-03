<script lang="ts">
import { type PropType, defineComponent, getCurrentInstance } from "vue";
import { DomUtils } from "@fkui/logic";
import { IAnimateExpand, IFlex, IFlexItem } from "../../internal-components";
import { TranslationMixin } from "../../plugins";
import { type GroupValidityEvent } from "../../types";
import { getHTMLElementFromVueRef } from "../../utils";
import { FIcon } from "../FIcon";
import { type FValidationFormResult, FValidationForm } from "../FValidationForm";
import {
    type FWizardApi,
    type FWizardStepDefinition,
    type FWizardValidationCallback,
    FWizardApiInjected,
} from "./FWizardApi";

const SCROLL_DURATION = 500;

/**
 * Shared variable to keep track if another step has
 * initated a scrolling that is ongoing.
 * @see beforeAnimation-method .
 */
let ongoingScrollPromise: undefined | Promise<void> = undefined;

export default defineComponent({
    name: "FWizardStep",
    components: { IAnimateExpand, IFlex, IFlexItem, FValidationForm, FIcon },
    mixins: [TranslationMixin],
    inheritAttrs: true,
    props: {
        /**
         * The title of the wizard step.
         * This will be displayed as the step's header.
         */
        title: {
            type: String,
            required: true,
        },
        /**
         * Supply this function in order to run actions before navigating to the next step.
         *
         * It is possible to cancel the navigation by returning `BeforeNextAction.CANCEL`.
         * When cancelled, the consumer is responsible to indicate why this happened.
         *
         * Note that `FWizardStep` already checks validity of contained fields using `v-validation`
         * before allowing navigation to the next step.
         */
        beforeNext: {
            type: Function as PropType<FWizardValidationCallback>,
            required: false,
            default() {
                /* do nothing */
            },
        },
        /**
         * Supply this function in order to run actions before `FWizardStep` checks validity.
         *
         * `beforeValidation` is used by {@link FValidationForm}.
         *
         * It is possible to cancel the navigation by returning `BeforeNextAction.CANCEL`.
         * When cancelled, the consumer is responsible to indicate why this happened.
         */
        beforeValidation: {
            type: Function as PropType<FWizardValidationCallback>,
            required: false,
            default() {
                /* do nothing */
            },
        },
        /**
         * Include the error list component.
         */
        useErrorList: {
            type: Boolean,
            required: false,
            /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
            default: true,
        },
    },
    setup(): FWizardApi {
        return FWizardApiInjected();
    },
    data() {
        return {
            step: {} as FWizardStepDefinition,
            validity: { isValid: true, componentsWithError: [], componentCount: 0 } as GroupValidityEvent,
            isOpenedFirstTime: true,
            ignoreClick: false,
        };
    },
    computed: {
        defaultCurrentStepInformation(): string {
            return this.$t("fkui.wizard-step.current-step", `Steg {{ stepNumber }} av {{ totalSteps }}`, {
                stepNumber: this.stepNumber,
                totalSteps: this.totalSteps,
            });
        },
        formId(): string {
            return `${String(this.step.key)}-form`;
        },
        animationId(): string {
            return `${String(this.step.key)}-animation`;
        },
        isOpen(): boolean {
            return this.step.isOpen;
        },
        isPending(): boolean {
            const { currentOpen, stepNumber } = this.step;
            return currentOpen >= 0 && currentOpen < stepNumber;
        },
        isFinalStep(): boolean {
            return this.stepNumber === this.totalSteps;
        },
        showLink(): boolean {
            return !this.isOpen && !this.isPending;
        },
        stepNumber(): number {
            return this.step.stepNumber;
        },
        totalSteps(): number {
            return this.getStepCount();
        },
        cssClass(): string {
            if (this.isOpen) {
                return "wizard-step--open";
            }
            if (this.isPending) {
                return "wizard-step--pending";
            }
            return "wizard-step--done";
        },
    },
    mounted() {
        /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- technical debt */
        const key = getCurrentInstance()?.vnode?.key;

        if (!key) {
            throw new Error("FWizardStep requires key to be set");
        }

        this.step = this.register(key, this.$el);
    },
    beforeUnmount() {
        /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- technical debt */
        const key = getCurrentInstance()?.vnode?.key;

        if (key) {
            this.unregister(key);
        }
    },
    methods: {
        open(): void {
            this.openStep(this.step);
        },
        onSubmit(): void {
            if (this.ignoreClick) {
                return;
            }
            this.openNext(this.step);
        },
        onCancel(): void {
            /* injected from FWizard */
            this.cancel(this.isFinalStep);
        },
        /**
         * Scroll down before animation starts.
         */
        async beforeAnimation(open: boolean): Promise<void> {
            await this.$nextTick();
            this.ignoreClick = true;
            if (!open) {
                const headerElement = getHTMLElementFromVueRef(this.$refs.header);
                if (!DomUtils.isVisibleInViewport(headerElement)) {
                    ongoingScrollPromise = DomUtils.scrollTo(headerElement, {
                        duration: SCROLL_DURATION,
                        offset: 10,
                    });
                    await ongoingScrollPromise;
                }
            } else if (ongoingScrollPromise) {
                // Don't start animation in opening step before the scroll (initiated by closing step) is finished.
                await ongoingScrollPromise;
            }
        },
        async afterAnimation(open: boolean): Promise<void> {
            if (!open) {
                return;
            }

            this.ignoreClick = false;
            // Skip focus once for first step when `disableInitialFocus` is set
            if (this.isOpenedFirstTime) {
                this.isOpenedFirstTime = false;

                if (this.inheritedProps.disableInitialFocus && this.stepNumber === 1) {
                    return;
                }
            }

            const headerElement = getHTMLElementFromVueRef(this.$refs.header);
            await this.$nextTick();
            if (!DomUtils.isVisibleInViewport(headerElement)) {
                await DomUtils.scrollTo(headerElement, { duration: SCROLL_DURATION, offset: 10 });
            }
            DomUtils.focus(headerElement);
        },
        beforeNextWrapper(): FValidationFormResult {
            return this.beforeNext({
                key: this.step.key,
                stepNumber: this.stepNumber,
                totalSteps: this.totalSteps,
            });
        },
        beforeValidationWrapper(): FValidationFormResult {
            return this.beforeValidation({
                key: this.step.key,
                stepNumber: this.stepNumber,
                totalSteps: this.totalSteps,
            });
        },
    },
});
</script>

<template>
    <div class="wizard-step" :class="cssClass" :aria-current="isOpen ? 'step' : undefined">
        <div class="wizard-step__line-up"></div>
        <template v-if="isOpen">
            <!--
                @slot Use this slot to customize the content displayed for the "step of" information.
                @binding {string} headerClass Class to be applied to the step-of information.
                @binding {number} stepNumber Current step number.
                @binding {number} totalSteps The total number of steps in this wizard.
            -->
            <slot name="step-of" v-bind="{ headerClass: 'wizard-step__step-of', stepNumber, totalSteps }">
                <span aria-hidden="true" class="wizard-step__step-of">{{ defaultCurrentStepInformation }}</span>
            </slot>
        </template>
        <div class="wizard-step__icon-container">
            <div class="wizard-step__icon-container__circle">
                <f-icon class="wizard-step__icon-container__success" name="success" />
                <div class="wizard-step__icon-container__number" data-test="step-number">{{ stepNumber }}</div>
            </div>
            <div class="wizard-step__icon-container__line-down"></div>
        </div>
        <div ref="header" role="group" class="wizard-step__header" tabindex="-1">
            <component :is="inheritedProps.headerTag" class="wizard-step__header__title">
                <a
                    v-if="showLink"
                    aria-expanded="false"
                    role="button"
                    href="#"
                    class="anchor"
                    @click.prevent="open"
                    @keypress.space.prevent="open"
                >
                    <span class="sr-only">{{ defaultCurrentStepInformation }}&nbsp;</span>
                    {{ title }}
                    <span class="sr-only"> &nbsp;{{ $t("fkui.wizard-step.finished-step", "Avklarat steg") }} </span>
                </a>
                <template v-else>
                    <span class="sr-only">{{ defaultCurrentStepInformation }}&nbsp;</span>
                    {{ title }}
                    <span v-if="isPending" class="sr-only">
                        &nbsp;{{ $t("fkui.wizard-step.pending", "Inaktivt") }}
                    </span>
                </template>
            </component>
        </div>
        <div class="wizard-step__line-down"></div>
        <i-animate-expand
            :key="animationId"
            :opacity="false"
            :expanded="isOpen"
            :before-animation
            :after-animation
            class="wizard-step__content"
        >
            <f-validation-form
                :id="formId"
                :before-submit="beforeNextWrapper"
                :before-validation="beforeValidationWrapper"
                :use-error-list
                class="wizard-step-body"
                @submit="onSubmit"
            >
                <template #error-message>
                    <!-- @slot Use this slot to customize the error message displayed when validation fails. -->
                    <slot name="error-message">
                        {{ $t("fkui.wizard-step.errorlist.title", "Oj, du har glömt att fylla i något. Gå till:") }}
                    </slot>
                </template>

                <template #default>
                    <slot name="default"></slot>

                    <div class="button-group wizard-step__buttons">
                        <button
                            data-test="submit-button"
                            :data-disabled="ignoreClick ? 'true' : 'false'"
                            type="submit"
                            class="button button--primary button-group__item button--large"
                        >
                            <!--
                                    @slot Use this slot to customize the text of the "Next" button.
                                    @binding {number} stepNumber Current step number (starts at 1).
                                    @binding {number} totalSteps The total number of steps in this wizard.
                                -->
                            <slot name="next-button-text" v-bind="{ stepNumber, totalSteps }">
                                <template v-if="isFinalStep">
                                    {{ $t("fkui.wizard-step.button.next.text-final", "Gå vidare och granska") }}
                                </template>
                                <template v-else>
                                    {{ $t("fkui.wizard-step.button.next.text", "Fortsätt") }}
                                    <span class="sr-only">
                                        &nbsp;{{ $t("fkui.wizard-step.button.next.sr-text", "till nästa steg") }}
                                    </span>
                                </template>
                            </slot>
                        </button>
                        <button
                            data-test="cancel-button"
                            type="button"
                            class="button button--secondary button-group__item button--large"
                            @click="onCancel"
                        >
                            <!--
                                    @slot Use this slot to customize the text of the "Cancel" button.
                                    @binding {number} stepNumber Current step number (starts at 1).
                                    @binding {number} totalSteps The total number of steps in this wizard.
                                -->
                            <slot name="cancel-button-text" v-bind="{ stepNumber, totalSteps }">
                                {{ $t("fkui.wizard-step.button.cancel.text", "Avbryt") }}
                            </slot>
                        </button>
                    </div>
                </template>
            </f-validation-form>
        </i-animate-expand>
    </div>
</template>
