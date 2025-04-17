<script lang="ts">
import { defineComponent, type PropType, provide, useTemplateRef } from "vue";
import { hasSlot } from "../../utils";
import { FIcon } from "../FIcon";
import { tooltipAttachTo } from "../FTooltip";

export default defineComponent({
    name: "FLabel",
    components: {
        FIcon,
    },
    props: {
        /**
         * The id for the form element the label is bound to.
         */
        for: {
            type: String as PropType<string | undefined>,
            required: false,
            default: undefined,
        },
    },
    setup() {
        provide(tooltipAttachTo, useTemplateRef("tooltipAttachTo"));
    },
    data() {
        return {
            descriptionClass: ["label__description"],
            formatDescriptionClass: ["label__description", "label__description--format"],
        };
    },
    computed: {
        forProperty(): string | undefined {
            return this.for;
        },
        hasDefaultSlot(): boolean {
            return hasSlot(this, "default");
        },
        hasErrorMessageSlot(): boolean {
            return hasSlot(this, "error-message");
        },
        hasDescriptionSlot(): boolean {
            return hasSlot(this, "description");
        },
    },
});
</script>

<template>
    <div v-if="$slots.tooltip">
        <div v-if="hasDefaultSlot" ref="tooltipAttachTo">
            <label class="label" :for="forProperty">
                <slot name="default"></slot>
            </label>
        </div>

        <!-- @slot Slot for tooltip. -->
        <slot name="tooltip"></slot>

        <label v-if="hasDescriptionSlot || hasErrorMessageSlot" class="label sr-separator" :for="forProperty">
            <!--
                @slot Optional slot for description.
                @binding {string[]} description-class CSS classes for primary description content.
                @binding {string[]} format-description-class CSS classes for format description.
            -->
            <slot name="description" :description-class :format-description-class></slot>
            <span v-if="hasErrorMessageSlot" class="label__message label__message--error">
                <f-icon class="label__icon--left" name="error"></f-icon>
                <slot name="error-message"></slot>
            </span>
        </label>
    </div>

    <label v-else class="label" :for="forProperty">
        <!-- @slot Slot for label content. -->
        <slot name="default"></slot>
        <!--
            @slot Optional slot for description.
            @binding {string[]} description-class CSS classes for primary description content.
            @binding {string[]} format-description-class CSS classes for format description.
          -->
        <slot name="description" :description-class :format-description-class></slot>
        <span v-if="hasErrorMessageSlot" class="label__message label__message--error">
            <f-icon class="label__icon--left" name="error"></f-icon>
            <!-- @slot Slot for displaying single or several error messages. -->
            <slot name="error-message"></slot>
        </span>
    </label>
</template>
