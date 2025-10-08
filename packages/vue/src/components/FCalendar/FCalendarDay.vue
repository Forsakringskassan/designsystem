<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { type FDate } from "@fkui/date";
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
            /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
            default: true,
        },
        /**
         * Set to `true` if day is selected.
         */
        selected: {
            type: Boolean,
            required: false,
        },
        /**
         * Set to `true` if day should be highlighted.
         */
        highlight: {
            type: Boolean,
            required: false,
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
