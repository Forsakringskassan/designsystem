<script setup lang="ts">
import { defineComponent } from "vue";
import { renderSlotText } from "../../utils";

const props = defineProps({
    /**
     * Size of the logo: `"small"`, `"large"`, or `"responsive"`.
     * Requires matching CSS variable to be set (`--f-logo-image-{small/large}`), or both if "responsive".
     */
    size: {
        type: String,
        default: "responsive",
        required: false,
        validator(value: string): boolean {
            return ["small", "large", "responsive"].includes(value);
        },
    },
});
</script>

<script lang="ts">
/* technical debt: `cy.mount()` doesn't work with slots defined with composition API */
export default defineComponent({
    computed: {
        ariaLabel() {
            const content = renderSlotText(this.$slots.default);
            if (!content) {
                throw new Error("`f-logo` requires text content.");
            }

            return content;
        },
    },
});
</script>

<template>
    <span :class="`logo logo--${props.size}`" :aria-label="ariaLabel" role="img" />
</template>
