<script lang="ts">
import { defineComponent } from "vue";
import { ElementIdService } from "@fkui/logic";
import { FLabel } from "../FLabel";

export default defineComponent({
    name: "FOutputField",
    components: {
        FLabel,
    },
    inheritAttrs: false,
    props: {
        /**
         * Associate the output field with one or more id's of the elements
         * contributing or affecting the result of this field. Multiple id's can
         * be set with a space-separated string or an array of strings.
         */
        for: {
            type: [String, Array],
            required: true,
        },
        /**
         * The id for the output id attribute.
         * The id for the label for attribute.
         * If the prop is not set a random value will be generated.
         */
        id: {
            type: String,
            required: false,
            default: () => ElementIdService.generateElementId(),
        },
    },
    computed: {
        htmlFor(): string {
            return Array.isArray(this.for) ? this.for.join(" ") : this.for;
        },
    },
});
</script>

<template>
    <div class="output-field">
        <f-label :for="id">
            <template #default>
                <!-- @slot Slot for label content. -->
                <slot name="label"></slot>
            </template>
            <!-- @slot Slot for tooltip. -->
            <template v-if="$slots.tooltip" #tooltip>
                <!-- @slot Slot primarily for tooltip. -->
                <slot name="tooltip"></slot>
            </template>
        </f-label>
        <output :id="id" :for="htmlFor" class="output-field__output" v-bind="$attrs">
            <!-- @slot Slot for output field content. -->
            <slot name="default"></slot>
        </output>
    </div>
</template>
