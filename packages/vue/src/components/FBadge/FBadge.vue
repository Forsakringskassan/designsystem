<template>
    <div class="badge" :class="badgeClass">
        <!-- @slot Slot for text to display in the badge. -->
        <slot name="default"></slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { statuses } from "./statuses";

const props = defineProps({
    /**
     * The status of the badge, can be either 'default', 'warning', 'error', 'success' or 'info'.
     *
     */
    status: {
        type: String,
        default: "default",
        validator: function (value: string) {
            return statuses.includes(value);
        },
    },
    /**
     * If badge should be inverted.
     *
     */
    inverted: {
        type: Boolean,
        default: false,
    },
});

const badgeClass = computed<string>(() =>
    props.inverted ? `badge--${props.status}-inverted` : `badge--${props.status}`,
);
</script>
