<template>
    <div class="output-field">
        <f-label>
            <template #default>
                <!-- @slot Slot for label content. -->
                <slot name="label"></slot>
            </template>
            <template v-if="$slots.tooltip" #tooltip>
                <!-- @slot Slot primarily for tooltip. -->
                <slot name="tooltip"></slot>
            </template>

            <template #description="{ descriptionClass, discreteDescriptionClass }">
                <!--
                    @slot Optional slot for description. See [FLabel](#/Components/FLabel) for details.
                    @binding {string[]} descriptionClass CSS classes for primary description content.
                    @binding {string[]} discreteDescriptionClass CSS classes for format description.
                -->
                <slot name="description" v-bind="{ descriptionClass, discreteDescriptionClass }"></slot>
            </template>
        </f-label>
        <p class="output-field__output">
            <!-- @slot Slot for text content. -->
            <slot name="default"></slot>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FLabel } from "../FLabel";

export default defineComponent({
    name: "FStaticField",
    components: {
        FLabel,
    },
});
</script>
