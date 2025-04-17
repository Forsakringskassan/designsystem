<script lang="ts">
import { defineComponent } from "vue";
import { alertScreenReader, ElementIdService, TranslationService } from "@fkui/logic";
import { FIcon } from "../../../FIcon";
import { FTextField } from "../..";

export default defineComponent({
    name: "FSearchTextField",
    components: { FTextField, FIcon },
    props: {
        id: {
            type: String,
            required: false,
            default: () => ElementIdService.generateElementId(),
        },
        modelValue: {
            type: [String, null],
            required: false,
            default: "",
        },
        clearableScreenReaderText: {
            type: String,
            required: false,
            default: TranslationService.provider.translate(
                "fkui.search-text-field.search-screen-reader",
                "Töm inmatningsfält",
            ),
        },
        maxLength: {
            type: Number,
            default: 80,
        },
    },
    emits: ["blur", "change", "update", "update:modelValue"],
    data() {
        return {
            defaultText: this.$t("fkui.search-text-field.label", "Sök"),
        };
    },
    computed: {
        canClear(): boolean {
            const isEmpty = this.modelValue === undefined || this.modelValue === null || this.modelValue === "";

            return !isEmpty;
        },
    },
    methods: {
        clear(): void {
            alertScreenReader(this.$t("fkui.search-text-field.aria-live.clear", "Inmatningsfältet har tömts"), {
                assertive: true,
            });
            this.$emit("update:modelValue", "");
            this.$el.querySelector("input").focus();
        },
        onInput(event: Event): void {
            this.$emit("update:modelValue", (event.target as HTMLInputElement).value);
        },
        onChange(event: Event): void {
            /**
             * @event change
             * @type {string | number}
             */
            this.$emit("change", event);
        },
        onBlur(event: Event): void {
            /**
             * @event blur
             * @type {string | number}
             */
            this.$emit("blur", event);
        },
        onUpdate(event: Event): void {
            /**
             * V-model event.
             *
             * @event update:modelValue
             * @type {string}
             */
            this.$emit("update:modelValue", event);
        },
    },
});
</script>

<template>
    <div>
        <f-text-field
            :id="id"
            :maxlength="maxLength"
            :model-value="modelValue"
            v-bind="$attrs"
            type="search"
            class="text-field--search"
            @change="onChange"
            @input="onInput"
            @blur="onBlur"
            @update="onUpdate"
        >
            <slot name="default">{{ defaultText }}</slot>
            <template v-if="$slots.tooltip" #tooltip>
                <slot name="tooltip"></slot>
            </template>
            <template #input-right>
                <slot name="input-right"></slot>
            </template>
            <template #input-left>
                <slot name="input-left"></slot>
            </template>
            <template #error-message="{ hasError, validationMessage }">
                <slot name="error-message" v-bind="{ hasError, validationMessage }"></slot>
            </template>
            <template #description="{ descriptionClass, formatDescriptionClass }">
                <!--
                     @slot Optional slot for description. See {@link FLabel} for details.
                     @binding {string[]} description-class CSS classes for primary description content.
                     @binding {string[]} format-description-class CSS classes for format description.
                -->
                <slot name="description" :description-class :format-description-class></slot>
            </template>
            <template v-if="canClear" #append-inner>
                <button class="text-field__icon clear-button" type="button" @click.self="clear">
                    <f-icon name="cross" class="clear-button__icon"></f-icon>
                    <span class="sr-only">{{ clearableScreenReaderText }}</span>
                </button>
            </template>
        </f-text-field>
    </div>
</template>
