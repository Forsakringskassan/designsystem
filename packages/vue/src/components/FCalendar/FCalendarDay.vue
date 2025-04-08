<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { FDate } from "@fkui/date";
import { TranslationMixin } from "../../plugins";
import { getCalendarDaySrText } from "./get-calendar-day-sr-text";

export default defineComponent({
    name: "FCalendarDay",
    mixins: [TranslationMixin],
    props: {
        /**
         * Day to render.
         */
        day: {
            type: Object as PropType<FDate>,
            required: true,
        },
        /**
         * Set to `true` if day is enabled.
         */
        enabled: {
            type: Boolean,
            required: false,
            default: true,
        },
        /**
         * Set to `true` if day is focused.
         */
        focused: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Set to `true` if day is selected.
         */
        selected: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Set to `true` if day should be highlighted.
         */
        highlight: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: {
        srText(): string {
            return getCalendarDaySrText(this.day, this.enabled, this.selected, this.$t);
        },
        dayClasses(): string[] {
            const component = "calendar-day";
            const classes = [component];

            if (this.highlight) {
                classes.push(`${component}--highlight`);
            }
            if (this.enabled) {
                if (this.selected) {
                    classes.push(`${component}--selected`);
                }
            } else {
                classes.push(`${component}--disabled`);
            }

            return classes;
        },
    },
});
</script>

<template>
    <span :class="dayClasses">
        <span aria-hidden="true">{{ day.day }}</span>
        <span class="sr-only">{{ srText }}</span>
    </span>
</template>
