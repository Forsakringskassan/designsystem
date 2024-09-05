<template>
    <f-search-text-field v-model="value" class="x-search-bar" :maxlength="maxLength">
        <template #default>
            <!-- @slot Slot for input label -->
            <slot></slot>
        </template>
        <template #tooltip>
            <!-- @slot Slot for tooltip -->
            <slot name="tooltip"></slot>
        </template>
        <template #input-right>
            <button class="button button--primary search-bar-button" type="submit" data-test="search-bar-submit">
                <f-icon name="search" library="f"></f-icon>
                <span>
                    <!-- @slot Slot for text in button -->
                    <slot name="button-text"> Sök </slot>
                </span>
            </button>
        </template>
    </f-search-text-field>
</template>
<script lang="ts">
import { FIcon, FSearchTextField } from "@fkui/vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "XSearchBar",
    components: {
        FIcon,
        FSearchTextField,
    },
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        maxLength: {
            type: Number,
            default: 20,
        },
    },
    emits: ["update:modelValue", "changedValue"],
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value: string) {
                if (this.value !== value) {
                    /**
                     * Event that is dispatched when the value is changed and differs from the previous value.
                     *
                     * @event changedValue
                     */
                    this.$emit("changedValue", [this.value, value]);
                }
                /**
                 * V-model event.
                 *
                 * @event update:modelValue
                 * @type {string}
                 */
                this.$emit("update:modelValue", value);
            },
        },
    },
});
</script>
<style lang="scss">
@import "./XSearchBar.scss";
</style>
