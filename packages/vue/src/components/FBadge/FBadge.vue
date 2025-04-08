<script setup lang="ts">
import { type PropType, computed } from "vue";
import { statuses } from "./statuses";

const props = defineProps({
    /**
     * The status of the badge, can be either 'default', 'warning', 'error', 'success' or 'info'.
     */
    status: {
        type: String as PropType<"default" | "warning" | "error" | "success" | "info">,
        default: "default",
        validator(value: string) {
            return statuses.includes(value);
        },
    },
    /**
     * If badge should be inverted.
     */
    inverted: {
        type: Boolean,
        default: false,
    },
});

const badgeClass = computed(() => {
    return props.inverted ? `badge--${props.status}-inverted` : `badge--${props.status}`;
});
</script>

<template>
    <div class="badge" :class="badgeClass">
        <!-- @slot Slot for text to display in the badge. -->
        <slot name="default"></slot>
    </div>
</template>
