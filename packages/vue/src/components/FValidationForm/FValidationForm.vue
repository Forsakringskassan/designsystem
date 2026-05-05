<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { type PropType, defineComponent, toRef } from "vue";
import { ElementIdService, ValidationService, focus } from "@fkui/logic";
import { type ComponentValidityEvent, type ErrorItem, type GroupValidityEvent } from "../../types";
import { type BeforeNavigate, FErrorList } from "../FErrorList";
import { FValidationGroup } from "../FValidationGroup";
import { type FValidationFormCallback, FValidationFormAction } from "./types";
import { formPendingKey } from "./use-validation-form";

function noop(): void {
    /* do nothing */
}

/**
 * Invoke one or more event handler(s) and await the result.
 * Vue may provide either a single function or an array of functions when multiple
 * listeners are attached to the same event.
 * If `handler` is neither a function nor an array (e.g. `undefined`), this is a no-op.
 */
async function invokeHandlers(handler: unknown, event: Event): Promise<void> {
    if (typeof handler === "function") {
        await (handler as (e: Event) => unknown)(event);
    } else if (Array.isArray(handler)) {
        await Promise.all((handler as Array<(e: Event) => unknown>).map((fn) => fn(event)));
    }
}

export default defineComponent({
    name: "FValidationForm",
    components: { FValidationGroup, FErrorList },
    provide() {
        return {
            [formPendingKey as symbol]: toRef(this, "pending"),
        };
    },
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
                return noop;
            },
        },
        /**
         * If given, this function is called before the form data is validated and the `submit` event is emitted.
         */
        beforeValidation: {
            type: Function as PropType<FValidationFormCallback>,
            required: false,
            default() {
                return noop;
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
            /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
            default: true,
        },
        /**
         *Optional callback function to the error list component for performing actions before navigation.
         */
        errorListBeforeNavigate: {
            type: Function as PropType<BeforeNavigate>,
            required: false,
            default(): BeforeNavigate {
                return noop;
            },
        },
    },
    data(): { validity: GroupValidityEvent; submitted: boolean; pending: boolean } {
        return {
            validity: { isValid: true, componentsWithError: [], componentCount: 0 },
            submitted: false,
            pending: false,
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
        /**
         * Attrs bound to the native `<form>` element.
         * The `onSubmit` listener is excluded since it is handled by the `onSubmit`
         * method below via `$attrs` to support awaiting async submit handlers.
         */
        formAttrs(): Record<string, unknown> {
            const { onSubmit: _onSubmit, ...rest } = this.$attrs as Record<string, unknown>;
            return rest;
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
                /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
                const element = document.querySelector(`#${firstError.focusElementId}`)!;
                focus(element);
            }

            return true;
        },
        async onSubmit(event: Event): Promise<void> {
            this.submitted = true;
            this.pending = true;

            try {
                /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- technical debt */
                const beforeValidation = this.beforeValidation ? await this.beforeValidation() : undefined;
                if (beforeValidation === FValidationFormAction.CANCEL) {
                    return;
                }

                if (await this.hasFormErrors()) {
                    return;
                }

                /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- technical debt */
                const beforeAction = this.beforeSubmit ? await this.beforeSubmit() : undefined;
                if (beforeAction === FValidationFormAction.CANCEL) {
                    return;
                }

                if (await this.hasFormErrors()) {
                    return;
                }

                /* Call the @submit handler from $attrs and await it.
                 * Using $attrs (instead of $emit) allows the handler's returned Promise
                 * to be awaited, so FButton can show a spinner for the full duration of
                 * async submit handlers via the injected formPendingKey.
                 * Any error thrown by the handler propagates out of this method; the
                 * finally block below ensures `pending` is always reset. */
                await invokeHandlers((this.$attrs as Record<string, unknown>).onSubmit, event);
            } finally {
                this.pending = false;
            }
        },
    },
});
</script>

<template>
    <f-validation-group :key="groupKey" v-model="validity" :stop-propagation="true">
        <!-- [html-validate-disable-next wcag/h32 -- submit button is slotted] -->
        <form :id v-bind="formAttrs" novalidate autocomplete="off" @submit.prevent="onSubmit">
            <nav v-if="displayErrors" ref="errors" tabindex="-1" role="group">
                <f-error-list :items="errors" :before-navigate="errorListBeforeNavigate">
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
