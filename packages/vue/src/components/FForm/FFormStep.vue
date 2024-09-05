<template>
    <f-validation-group
        :id="id"
        v-bind="attrs"
        :key="validationGroupKey"
        v-model="groupValidity"
        class="form-step"
        :stop-propagation="true"
    >
        <div class="form-step__header" tabindex="-1" role="group">
            <!-- @slot
Slot for header content, e.g. title.

Slot content is available through `v-slot="{ <propertyName> }"`, e.g.
`v-slot="{ slotClass }"`.

The following properties are available:

* `slotClass: string[];` CSS classes to use for the heading element. Use with `:class="slotClass"`.
* `+` all properties that are available in the default slot.
      -->
            <slot name="header" v-bind="{ slotClass: headerSlotClass, ...self.ref, toggleIsOpen }"></slot>
            <f-icon v-if="self.ref.isValid" class="form-step__check" name="success"></f-icon>
        </div>
        <div v-if="displayErrorList" :id="stepErrorId" class="form-step__error" tabindex="-1" role="group">
            <nav>
                <f-error-list :bullets="true" :items="componentsWithError" :before-navigate="beforeNavigateToError">
                    <template #title>
                        <!--
                             @slot Slot for displaying error description.

                             After this slot a list of invalid elements is listed.
                             When an item is clicked it will scroll to and focus that invalid element.
                        -->
                        <slot name="error-message">
                            {{ defaultErrorMessage }}
                        </slot>
                    </template>
                </f-error-list>
            </nav>
        </div>

        <div @component-validity="onComponentValidity">
            <!-- @slot
Slot for displaying content, e.g. descriptions and input elements.

Slot content is available through `v-slot="{ <propertyName> }"`, e.g.
`v-slot="{ isOpen, isSubmitted }"`.

The following properties are available:

* `isOpen: boolean;`
* `isSubmitted: boolean;`
* `isAnyFieldTouched: boolean;`
* `isValid: boolean;`
* `id: string;`
* `title: string;`
* `toggleIsOpen: () => void;`
    -->
            <slot name="default" v-bind="{ ...self.ref, isSubmitted, toggleIsOpen }"></slot>
            <span v-if="hasArrow" class="form-step__arrow"></span>
        </div>
    </f-validation-group>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { ElementIdService, ValidationService, focus, Reference } from "@fkui/logic";
import { FormStep, ErrorItem, GroupValidityEvent, ComponentValidityEvent } from "../../types";
import { FIcon } from "../FIcon";
import { FErrorList } from "../FErrorList";
import { FValidationGroup } from "../FValidationGroup";
import { TranslationMixin } from "../../plugins";
import { setRef, getRef, setIsOpen } from "./FFormProvide";

/**
 * @deprecated `<f-form-step>` is deprecated.
 * See migration guide: https://forsakringskassan.github.io/latest/components/fform.html
 */
export default defineComponent({
    name: "FFormStep",
    components: { FIcon, FValidationGroup, FErrorList },
    mixins: [TranslationMixin],
    inheritAttrs: false,
    props: {
        /**
         * The id for the root div id attribute.
         * If the prop is not set a random value will be generated.
         */
        id: {
            type: String,
            required: true,
            default: () => ElementIdService.generateElementId(),
        },
        /**
         * If the form step should have a bottom arrow.
         * It is recommended to remove the arrow for the last step with `:has-arrow="false"`.
         */
        hasArrow: {
            type: Boolean,
            default: true,
        },
        /**
         * If the form step is the last step.
         * If set to true the form step will have a bigger bottom margin.
         */
        isLastStep: {
            type: Boolean,
            default: false,
        },
        /**
         * If error links should be disabled, `:disable-error-links="true"`..
         * If `true`, errors will be displayed as text instead.
         */
        disableErrorLinks: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        return {
            setRef: inject(setRef) as (id: string, data: FormStep | FormStep) => void,
            getRef: inject(getRef) as (id: string) => Reference<FormStep | FormStep>,
            setIsOpen: inject(setIsOpen) as (id: string, isOpen: boolean) => void,
        };
    },
    data() {
        return {
            self: new Reference<FormStep>({
                isOpen: false,
                numberOfTimesSubmitted: 0,
                isAnyFieldTouched: false,
                isValid: true,
                id: this.id,
                focusElementId: `${this.id}-error`,
                title: "",
            }),
            hasBeenValid: false,
            isOpenedClosed: false,
            headerSlotClass: ["form-step__title"],
            stepErrorId: `${this.id}-error`,
            groupValidity: {
                isValid: false,
                componentsWithError: [],
                componentCount: 0,
            } as GroupValidityEvent,
        };
    },
    computed: {
        attrs(): Record<string, string | Record<string, unknown>> {
            return {
                ...this.$attrs,
                class: {
                    "form-step--complete": this.self.ref.isValid,
                    "form-step--last-step": this.isLastStep,
                },
            };
        },
        defaultErrorMessage(): string {
            return this.$t("fkui.form-step.errorlist.title", "Oj, du har glömt att fylla i något. Gå till:");
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, not sure what is going on here
        injected(): any {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, not sure what is going on here
            return this as any;
        },
        isSubmitted(): boolean {
            return this.self.ref.numberOfTimesSubmitted > 0;
        },
        componentsWithError(): ErrorItem[] {
            return this.groupValidity.componentsWithError.map((c: ComponentValidityEvent) => ({
                id: this.disableErrorLinks ? undefined : c.elementId,
                focusElementId: c.focusElementId,
                title: c.errorMessage,
            }));
        },
        hasError(): boolean {
            return this.groupValidity.componentsWithError.length > 0;
        },
        displayErrorList(): boolean {
            return (this.isOpenedClosed || this.hasBeenValid || this.isSubmitted) && this.hasError;
        },
        validationGroupKey(): string {
            return `${this.id}-group`;
        },
    },
    watch: {
        "self.ref.numberOfTimesSubmitted": {
            handler(): void {
                ValidationService.setSubmitted(this.$el);
                ValidationService.validateAllElements(this.id);
            },
        },
        groupValidity: {
            immediate: true,
            handler(): void {
                this.self.ref.isValid = this.groupValidity.isValid;

                if (this.hasBeenValid === false) {
                    this.hasBeenValid = this.groupValidity.isValid;
                }
            },
        },
    },
    async mounted(): Promise<void> {
        await this.$nextTick();
        this.loadSelf();
        this.injected.setRef(this.id, this.self.ref);
        this.loadSelf();
        this.updateSelfRefTitle();
    },
    beforeUpdate() {
        this.updateSelfRefTitle();
    },
    methods: {
        updateSelfRefTitle(): void {
            const [firstSlotClass] = this.headerSlotClass;
            const headerElement = this.$el.querySelector(`.${firstSlotClass}`);
            if (headerElement && headerElement.textContent) {
                this.self.ref.title = headerElement.textContent;
            }
        },
        loadSelf(): void {
            const ref = this.injected.getRef(this.id);
            Object.assign(this.self, ref);
        },
        async focusDomElement(): Promise<void> {
            await this.$nextTick();

            if (this.hasError && this.self.ref.isAnyFieldTouched) {
                const formStepError = this.$el.querySelector(".form-step__error");
                focus(formStepError);
            } else {
                const formStepHeader = this.$el.querySelector(".form-step__header");
                focus(formStepHeader);
            }
        },
        async beforeNavigateToError(): Promise<void> {
            this.injected.setIsOpen(this.id, true);
            await this.$nextTick();
        },
        /**
         * Toggle if open or closed.
         * If another form step is open then it will be closed.
         * @public
         */
        toggleIsOpen(): void {
            this.injected.setIsOpen(this.id, !this.self.ref.isOpen);
            // ? If any field is touched and form step was opened and closed.
            if (this.self.ref.isAnyFieldTouched && this.self.ref.isOpen === false) {
                if (this.isOpenedClosed === false) {
                    this.isOpenedClosed = true;
                }

                ValidationService.setTouched(this.$el);
                ValidationService.validateAllElements(this.id);
            }

            this.focusDomElement();
        },
        onComponentValidity(event: CustomEvent<ComponentValidityEvent>): void {
            const hasReceivedValidOrErrorEvent =
                event.detail.validityMode === "VALID" || event.detail.validityMode === "ERROR";

            if (hasReceivedValidOrErrorEvent && this.self.ref.isOpen) {
                this.self.ref.isAnyFieldTouched = true;
            }
        },
    },
});
</script>
