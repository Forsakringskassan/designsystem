<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { documentOrderComparator } from "@fkui/logic";
import { type ComponentUnmountEvent, type ComponentValidityEvent, type GroupValidityEvent } from "../../types";
import { cleanUpElements } from "./FormUtils";

export default defineComponent({
    name: "FValidationGroup",
    props: {
        /**
         * A `GroupValidityEvent` object containing:
         *
         *   `isValid`: the aggregated validity of underlying components
         *
         *   `componentsWithError`: a list of components with errors sorted in DOM order
         *
         *   `componentCount`: number of registered components
         * @model
         */
        modelValue: {
            type: Object as PropType<GroupValidityEvent>,
            required: false,
            default: (): GroupValidityEvent => {
                return { isValid: false, componentsWithError: [], componentCount: 0 };
            },
        },
        /**
         * Controls whether component-validity event should be propagated or not from underlying components.
         */
        stopPropagation: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: ["group-validity", "update:modelValue"],
    data() {
        return {
            components: {} as unknown as Record<string, ComponentValidityEvent>,
        };
    },
    methods: {
        onComponentUnmount(event: CustomEvent<ComponentUnmountEvent>): void {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- Technical debt, a map would have been better.
            delete this.components[event.detail.elementId];
            this.triggerGroupValidityEvent();
        },
        async onComponentValidity(event: CustomEvent<ComponentValidityEvent>): Promise<void> {
            if (this.stopPropagation) {
                event.stopPropagation();
            }

            await cleanUpElements(this);
            this.components[event.detail.elementId] = event.detail;
            this.triggerGroupValidityEvent();
        },
        triggerGroupValidityEvent(): void {
            const components: ComponentValidityEvent[] = Object.values(this.components);
            const isValid = components.every((component) => component.isValid);
            const componentsWithError = components.filter((component) => component.validityMode === "ERROR");

            componentsWithError.sort((a, b) => documentOrderComparator(a.target, b.target));

            /**
             * V-model event.
             * @event group-validity
             * @type {GroupValidityEvent}
             */
            this.$emit("update:modelValue", { isValid, componentsWithError, componentCount: components.length });

            /**
             * Emitted when validation group has been updated.
             *
             * @event group-validity
             * @type {GroupValidityEvent}
             */
            this.$emit("group-validity", { isValid, componentsWithError, componentCount: components.length });
        },
    },
});
</script>

<template>
    <div @component-validity="onComponentValidity" @component-unmount="onComponentUnmount">
        <slot></slot>
    </div>
</template>
