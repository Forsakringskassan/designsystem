<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { ValidationService, focus, ElementIdService } from "@fkui/logic";
import { BeforeNavigate, FErrorList } from "../FErrorList";
import { FValidationGroup } from "../FValidationGroup";
import { GroupValidityEvent, ComponentValidityEvent, ErrorItem } from "../../types";
import { FValidationFormAction, type FValidationFormCallback } from "./types";

export default defineComponent({
    name: "FValidationForm",
    components: { FValidationGroup, FErrorList },
    inheritAttrs: false,
    props: {
        /**
         * If given, this function is called before the `submit` event is emitted.
         *
         * Optionally this callback may return `FValidationFormAction`. If
         * `FValidationFormAction.CANCEL` is returned the submission is
         * cancelled and no event will be emitted. The consumer should make it
         * clear why the action was cancelled.
         *
         * If a promise is returned it will be awaited.
         *
         * The consumer does not need to validate form data, it is handled
         * internally by the component.
         */
        beforeSubmit: {
            type: Function as PropType<FValidationFormCallback>,
            required: false,
            default() {
                return () => undefined;
            },
        },
        /**
         * If given, this function is called before the form data is validated and the `submit` event is emitted.
         */
        beforeValidation: {
            type: Function as PropType<FValidationFormCallback>,
            required: false,
            default() {
                return () => undefined;
            },
        },
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
         * Include the error list component.
         */
        useErrorList: {
            type: Boolean,
            required: false,
            default: true,
        },
        /**
         * Display bullets in the error list component.
         */
        errorListBullets: {
            type: Boolean,
            required: false,
            default: true,
        },
        /**
         *Optional callback function to the error list component for performing actions before navigation.
         */
        errorListBeforeNavigate: {
            type: Function as PropType<BeforeNavigate>,
            required: false,
            default(): BeforeNavigate {
                return () => {
                    /* do nothing */
                };
            },
        },
    },
    emits: ["submit"],
    data() {
        return {
            validity: { isValid: true, componentsWithError: [], componentCount: 0 } as GroupValidityEvent,
            submitted: false,
        };
    },
    computed: {
        groupKey(): string {
            return `${this.id}-group`;
        },
        errors(): ErrorItem[] {
            return this.validity.componentsWithError.map((c: ComponentValidityEvent) => ({
                id: c.elementId,
                focusElementId: c.focusElementId,
                title: c.errorMessage,
            }));
        },
        displayErrors(): boolean {
            return this.useErrorList && this.submitted && this.errors.length > 0;
        },
    },
    methods: {
        async hasFormErrors(): Promise<boolean> {
            ValidationService.setSubmitted(this.id);
            await ValidationService.validateAllElements(this.id);
            await this.$nextTick();
            await new Promise((resolve) => window.setTimeout(resolve, 0));

            if (this.validity.isValid) {
                return false;
            }
            if (this.useErrorList) {
                focus(this.$refs.errors as HTMLElement);
            } else {
                const firstError = this.validity.componentsWithError[0];
                const element = document.getElementById(firstError.focusElementId) as HTMLElement;
                focus(element);
            }

            return true;
        },
        async onSubmit(event: Event): Promise<void> {
            this.submitted = true;

            const beforeValidation = this.beforeValidation ? await this.beforeValidation() : undefined;
            if (beforeValidation === FValidationFormAction.CANCEL) {
                return;
            }

            if (await this.hasFormErrors()) {
                return;
            }

            const beforeAction = this.beforeSubmit ? await this.beforeSubmit() : undefined;
            if (beforeAction === FValidationFormAction.CANCEL) {
                return;
            }

            if (await this.hasFormErrors()) {
                return;
            }

            /** V-model event.
             *
             * @event submit
             *
             */
            this.$emit("submit", event);
        },
    },
});
</script>

<template>
    <f-validation-group :key="groupKey" v-model="validity" :stop-propagation="true">
        <!-- [html-validate-disable-next wcag/h32 -- submit button is slotted] -->
        <form :id="id" v-bind="$attrs" novalidate autocomplete="off" @submit.prevent="onSubmit">
            <nav v-if="displayErrors" ref="errors" tabindex="-1" role="group">
                <f-error-list :items="errors" :bullets="errorListBullets" :before-navigate="errorListBeforeNavigate">
                    <template #title>
                        <!--
                            @slot **optional** Slot for displaying error description.

                            After this slot a list of invalid elements is listed.
                            When an item is clicked it will scroll to and focus that invalid element.
                        -->
                        <slot name="error-message"></slot>
                    </template>
                </f-error-list>
            </nav>
            <!-- @slot Slot for content, i.e. input elements. -->
            <slot name="default"></slot>
        </form>
    </f-validation-group>
</template>
