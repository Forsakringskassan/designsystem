<template>
    <div class="card card--default">
        <div v-if="hasHeaderSlot" class="card__header">
            <!--@slot Slot for the title. -->
            <slot name="header" v-bind="{ headingSlotClass: headingClass }"></slot>
        </div>
        <div class="card__content">
            <!--@slot Slot for the main content, e.g. paragraphs, input fields, etc. -->
            <slot name="default"></slot>
        </div>
        <div v-if="hasFooterSlot" class="card__footer">
            <!--@slot Slot the footer content, i.e. buttons. -->
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { hasSlot } from "../../utils";

/**
 * Level: Beta
 */
export default defineComponent({
    name: "FCard",
    data() {
        return {
            headingClass: ["card__header-label"],
        };
    },
    computed: {
        hasHeaderSlot(): boolean {
            return hasSlot(this, "header");
        },
        hasFooterSlot(): boolean {
            return hasSlot(this, "footer");
        },
    },
});
</script>
