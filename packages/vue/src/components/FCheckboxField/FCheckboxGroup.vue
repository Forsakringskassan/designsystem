<template>
    <f-fieldset :id="id" :name="name" v-bind="$attrs">
        <template #label>
            <!-- @slot Slot for label content. This slot is required. -->
            <slot name="label"></slot>
        </template>

        <template v-if="$slots.tooltip" #tooltip>
            <!-- @slot Slot for tooltip. -->
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

        <template #error-message>
            <!-- @slot Slot for displaying single or several error messages. -->
            <slot name="error-message"></slot>
        </template>

        <!-- @slot Slot for main content, usually checkboxes. -->
        <slot name="default"></slot>
    </f-fieldset>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElementIdService } from "@fkui/logic";
import { FFieldset } from "../FFieldset";
import { TranslationMixin } from "../../plugins";

/**
 * @deprecated `<f-checkbox-group>` is deprecated.
 * See migration guide: https://forsakringskassan.github.io/latest/guide/migration/migrating-to-fieldset.html
 */
export default defineComponent({
    name: "FCheckboxGroup",
    components: { FFieldset },
    mixins: [TranslationMixin],
    inheritAttrs: false,
    props: {
        /**
         * The id for the fieldset id attribute.
         * If the prop is not set the id will be generated.
         */
        id: {
            type: String,
            required: false,
            default: () => ElementIdService.generateElementId(),
        },
        /**
         * The name of the checkbox group.
         */
        name: {
            type: String,
            required: true,
        },
    },
});
</script>
