<template>
    <div class="badge" :class="badgeClass">
        <!-- @slot Slot for text to display in the badge. -->
        <slot name="default"></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { statuses } from "./statuses";

export default defineComponent({
    name: "FBadge",
    props: {
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
    },
    computed: {
        badgeClass(): string {
            return this.inverted ? `badge--${this.status}-inverted` : `badge--${this.status}`;
        },
    },
});
</script>
