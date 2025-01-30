<script setup lang="ts">
import { computed } from "vue";

const MIN_VALUE = 0;
const MAX_VALUE = 100;

const props = defineProps({
    /**
     * Sets the progress. Higher value indicates further progress.
     *
     * Value must be in range 0-100.
     */
    value: {
        type: Number,
        required: true,
        validator(value: number) {
            return value >= 0 && value <= 100;
        },
    },
    /**
     * Text that the screenreader will read.
     *
     * `%VALUE%` can be used as a placeholder for the actual value e.g
     * `"You have uploaded %VALUE% percent"`.
     */
    valueText: {
        type: String,
        required: false,
        default: "Du har slutfört %VALUE% %.",
    },
    /**
     * Accessible name for this progressbar. Should describe the purpose of this
     * progressbar.
     */
    /* eslint-disable-next-line vue/prop-name-casing -- vue does not allow ariaLabel as a prop as it collides with internal types */
    "aria-label": {
        type: String,
        required: true,
    },
});

/* @ts-expect-error The prop name is actually normalized to ariaLabel but the type system does not realize */
const ariaLabel = props.ariaLabel;

function clamp(val: number): number {
    return Math.round(Math.min(Math.max(val || 0, MIN_VALUE), MAX_VALUE));
}

const progressValueNow = computed(() => clamp(props.value));
const cssWidth = computed(() => `width: ${progressValueNow.value}%`);
const progressBarClass = computed(() => {
    if (progressValueNow.value === MIN_VALUE) {
        return "progress__meter--pending";
    } else if (progressValueNow.value === MAX_VALUE) {
        return "progress__meter--finished";
    } else {
        return "progress__meter--inprogress";
    }
});
const progressText = computed(() => {
    return `${props.valueText.replace("%VALUE%", progressValueNow.value.toString())}`;
});
</script>

<template>
    <div class="progress">
        <!-- [html-validate-disable-next no-inline-style] -->
        <span
            class="progress__meter"
            :class="progressBarClass"
            role="progressbar"
            :aria-label="ariaLabel"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-valuenow="progressValueNow"
            :aria-valuetext="progressText"
            :style="cssWidth"
        >
            <span class="sr-only">{{ progressText }}</span>
        </span>
    </div>
</template>
