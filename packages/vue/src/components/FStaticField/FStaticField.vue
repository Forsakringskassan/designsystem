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

            <template #description="{ descriptionClass, formatDescriptionClass }">
                <!--
                    @slot Optional slot for description. See {@link FLabel} for details.
                    @binding {string[]} description-class CSS classes for primary description content.
                    @binding {string[]} format-description-class CSS classes for format description.
                -->
                <slot name="description" :description-class :format-description-class></slot>
            </template>
        </f-label>
        <p class="output-field__output">
            <!-- @slot Slot for text content. -->
            <slot name="default"></slot>
        </p>
    </div>
</template>
