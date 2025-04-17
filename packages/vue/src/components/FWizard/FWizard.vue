<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { FWizardApi, FWizardKey, FWizardStepDefinition, StepNumber, addStep, removeStep } from "./FWizardApi";

export default defineComponent({
    name: "FWizard",
    provide(): FWizardApi {
        const wizard = this; // eslint-disable-line @typescript-eslint/no-this-alias -- needed for provide to work
        const inheritedProps = {
            get headerTag(): string {
                return wizard.headerTag;
            },
            get disableInitialFocus(): boolean {
                return wizard.disableInitialFocus;
            },
        };
        return {
            register: this.register,
            unregister: this.unregister,
            getStepCount: this.getStepCount,
            openStep: this.openStep,
            openNext: this.openNext,
            cancel: this.cancel,
            inheritedProps,
        };
    },
    inheritAttrs: true,
    props: {
        modelValue: {
            type: String,
            default: null,
        },

        /**
         * Element to render for the header element inside the wizard steps.
         */
        headerTag: {
            type: String as PropType<string>,
            required: true,
            validator(value: string): boolean {
                return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
            },
        },
        /**
         * When the first wizard step is registered, it is opened and focused by default.
         * Set this property to disable that behaviour.
         */
        disableInitialFocus: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: ["cancel", "completed", "update:modelValue"],
    data() {
        return {
            steps: [] as FWizardStepDefinition[],
        };
    },
    computed: {
        anyOpen(): boolean {
            return Boolean(this.getCurrentOpen());
        },
    },
    watch: {
        modelValue: {
            handler() {
                if (!this.modelValue) {
                    return;
                }
                const step = this.steps.find((it) => it.key === this.modelValue);
                if (!step) {
                    throw new Error(`Failed to open step "${this.modelValue}"`);
                }
                if (!step.isOpen) {
                    this.openStep(step);
                }
            },
        },
    },
    methods: {
        register(key: FWizardKey, element: Element): FWizardStepDefinition {
            const step = addStep(this.steps, key, element);

            if (this.modelValue !== null) {
                if (step.key === this.modelValue) {
                    this.doOpen(step.stepNumber);
                }
            } else {
                /* open this step if this is the first step being added */
                if (this.steps.length === 1) {
                    this.doOpen(step.stepNumber);
                }
            }
            const current = this.getCurrentOpen();
            step.currentOpen = current ? current.stepNumber : -1;
            return step;
        },
        unregister(key: FWizardKey) {
            removeStep(this.steps, key);
        },
        getStepCount(): number {
            return this.steps.length;
        },
        getCurrentOpen(): FWizardStepDefinition | null {
            return this.steps.find((it) => it.isOpen) ?? null;
        },
        openStep(step: FWizardStepDefinition): void {
            this.doOpen(step.stepNumber);
        },
        async openNext(step: FWizardStepDefinition): Promise<void> {
            const current = step.stepNumber;
            const next = current + 1;

            if (next > this.steps.length) {
                await this.doOpen(-1);
                /**
                 * Emitted when wizard is finished, i.e.
                 * user pressing 'Fortsätt' button in last step.
                 */
                this.$emit("completed");
            } else {
                await this.doOpen(next);
            }
        },
        async doOpen(open: StepNumber | -1): Promise<void> {
            const stepToClose = this.steps.find((it) => it.isOpen);

            if (stepToClose) {
                stepToClose.isOpen = false;
            }
            /**
             * Ensure opened step is closed first with animation
             * before opening next step
             */
            await this.$nextTick();

            for (const step of this.steps) {
                step.isOpen = step.stepNumber === open;
                step.currentOpen = open;
            }

            if (open >= 0) {
                const step = this.steps[open - 1];
                /**
                 * V-model event.
                 * @event update:modelValue
                 * @type {FWizardKey}
                 */
                this.$emit("update:modelValue", step.key);
            } else {
                this.$emit("update:modelValue", null);
            }
        },
        cancel(isFinalStep: boolean): void {
            /**
             * Emitted when wizard is canceled, i.e.
             * user pressing 'Avbryt' button.
             *
             * Passes a boolean indicating if it was cancelled on the final step.
             */
            this.$emit("cancel", isFinalStep);
        },
    },
});
</script>

<template>
    <div class="wizard">
        <!-- @slot One or more <f-wizard-step> elements -->
        <slot></slot>
    </div>
</template>
