<template>
    <!-- [html-validate-disable-next wcag/h32: FForm does not have a default button and leaves the responsiblity to the application using FForm.] -->
    <form :id="id" class="form" novalidate v-bind="attrs" @component-validity="onComponentValidity">
        <f-message-box v-if="displayError && isSubmitted && hasError" tabindex="-1" type="error">
            <!--
@slot Slot for displaying error description.

After this slot a list of invalid elements is listed.
When an item is clicked it will scroll to that invalid element.

Slot content is available through `v-slot="{ <propertyName> }"`, e.g.
`v-slot="{ slotClass }"`.

The following properties are available:

* `slotClass: string[];` CSS classes to use for the error message heading element. Use with `:class="slotClass"`.
      -->
            <slot name="error-message" v-bind="{ slotClass: errorMessageSlotClass }"></slot>
            <nav>
                <f-error-list :items="componentsWithErrors"></f-error-list>
            </nav>
        </f-message-box>
        <!-- @slot Slot for displaying content, e.g. input elements and form steps. -->
        <slot name="default"></slot>
    </form>
</template>

<script lang="ts">
import { ElementIdService, focus, Reference, ValidationService } from "@fkui/logic";
import { defineComponent, type PropType } from "vue";
import { ComponentValidityEvent, FormErrorList, FormStep } from "../../types";
import { FMessageBox } from "../FMessageBox";
import { FErrorList } from "../FErrorList";
import { type FFormProvider, createFFormProvideOptions } from "./FFormProvide";
import { cleanUpElements, isFormStepReference, sortComponentsWithErrorsOnDOMOrder } from "./FormUtils";

interface FFormData {
    errorMessageSlotClass: string[];
    components: Record<string, Reference<FormErrorList | FormStep>>;
}

/**
 * @deprecated `<f-form>` is deprecated.
 * See migration guide: https://forsakringskassan.github.io/latest/components/fform.html
 */
export default defineComponent({
    name: "FForm",
    components: { FMessageBox, FErrorList },
    provide(): FFormProvider {
        return createFFormProvideOptions(this);
    },
    inheritAttrs: false,
    props: {
        /**
         * The id for the form id attribute.
         * If the prop is not set a random value will be generated.
         */
        id: {
            type: String,
            required: false,
            default: () => ElementIdService.generateElementId(),
        },
        /**
         * If the error-message slot and the invalid elements list
         * should be displayed.
         */
        displayError: {
            type: Boolean,
            default: true,
        },
        /**
         * If invalid fields at submit this tells how the scroll to the error
         * field should occur. The default, "center", centres the error information
         * vertically. Allowed value is also "top" which scrolls such that the error
         * informations top is at the top of the viewport.
         */
        errorScroll: {
            type: String as PropType<"center" | "top">,
            default: "center",
            validator(value: string) {
                return ["center", "top"].includes(value);
            },
        },
    },
    data(): FFormData {
        return {
            errorMessageSlotClass: ["message-box__heading"],
            components: {},
        };
    },
    computed: {
        attrs(): Record<string, unknown> {
            type SubmitHandler = (e: SubmitEvent) => void;
            let onSubmit: SubmitHandler | SubmitHandler[];
            // ? Merge submit listeners
            if (this.$attrs.onSubmit) {
                const originalSubmit = this.$attrs.onSubmit as SubmitHandler | SubmitHandler[];

                onSubmit = async (event: SubmitEvent) => {
                    const isValid = await this.onSubmit(event);
                    if (isValid) {
                        if (Array.isArray(originalSubmit)) {
                            originalSubmit.forEach((submitFunction) => submitFunction(event));
                        } else {
                            originalSubmit(event);
                        }
                    }
                };
            } else {
                onSubmit = this.onSubmit;
            }
            const attrs: Record<string, unknown> = { ...this.$attrs, id: this.id, onSubmit };
            return attrs;
        },
        numberOfTimesSubmitted(): number {
            const components: Array<Reference<FormErrorList | FormStep>> = Object.values(this.components);
            return Math.max(0, ...components.map((it) => it.ref.numberOfTimesSubmitted));
        },
        isSubmitted(): boolean {
            return this.numberOfTimesSubmitted > 0;
        },
        hasError(): boolean {
            if (Object.values(this.components).length === 0) {
                return false;
            } else {
                const components: Array<Reference<FormErrorList | FormStep>> = Object.values(this.components);
                return components.some((component) => component.ref.isValid === false);
            }
        },
        componentsWithErrors(): Array<FormErrorList | FormStep> {
            const sortedComponents = sortComponentsWithErrorsOnDOMOrder(this.components) as Array<
                Reference<FormErrorList | FormStep>
            >;

            return sortedComponents.map((c) => c.ref);
        },
        needsErrorScroll(): boolean {
            return this.errorScroll !== "center";
        },
    },
    methods: {
        async focusDomElement(): Promise<void> {
            await this.$nextTick();
            const messageBoxError = this.$el.querySelector(".message-box--error");
            if (messageBoxError) {
                focus(messageBoxError, { scrollToTop: this.needsErrorScroll });
            }
        },
        async focusFallbackElement(): Promise<void> {
            await this.$nextTick();
            const element = this.$el.querySelector(".form-step__header");
            const invalidElement = this.$el.querySelector(":invalid");
            if (element) {
                focus(element, { scrollToTop: this.needsErrorScroll });
            } else if (invalidElement) {
                focus(invalidElement, { force: true, scrollToTop: this.needsErrorScroll });
            }
        },
        async onSubmit(event: Event): Promise<boolean> {
            event.preventDefault();

            const components: Array<Reference<FormErrorList | FormStep>> = Object.values(this.components);
            components.forEach((component) => {
                component.ref.numberOfTimesSubmitted++;

                if (!isFormStepReference(component)) {
                    ValidationService.setTouched(component.ref.id);
                    ValidationService.setSubmitted(component.ref.id);
                }
            });

            await cleanUpElements(this);
            await ValidationService.validateAllElements(this.id);

            if (this.displayError) {
                this.focusDomElement();
            } else {
                // ! TODO: Focus on first invalid FormStep error list.
                this.focusFallbackElement();
            }

            return this.hasError === false;
        },
        async onComponentValidity(event: CustomEvent<ComponentValidityEvent>): Promise<void> {
            const reference = new Reference<FormErrorList | FormStep>({
                id: event.detail.elementId,
                focusElementId: event.detail.focusElementId,
                title: event.detail.errorMessage,
                isValid: event.detail.isValid,
                numberOfTimesSubmitted: this.numberOfTimesSubmitted,
            });

            this.components[event.detail.elementId] = reference;

            // required for components not within formsteps
            await cleanUpElements(this);
        },
    },
});
</script>
