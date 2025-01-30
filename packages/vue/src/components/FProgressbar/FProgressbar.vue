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

<script setup lang="ts">
const props = defineProps({
    /**
     * Sets the progress. Higher value indicates further progress. Value must be in range 0-100.
     */
    value: {
        type: Number,
        required: true,
        validator(value: number) {
            return value >= MIN_VALUE && value <= MAX_VALUE;
        },
    },
    /**
     * Text that the screenreader will read, the actual value will be replaced with %VALUE%  e.g  You have uploaded %VALUE% percent
     */
    valueText: {
        type: String,
        required: false,
        default: "Du har slutfört %VALUE% %.",
    },
    /* eslint-disable-next-line vue/prop-name-casing -- vue does not allow ariaLabel as a prop as it collides with internal types */
    "aria-label": {
        type: String,
        required: true,
    },
});
/* @ts-expect-error The prop name is actually normalized to ariaLabel but the type system does not realize */
const ariaLabel = props.ariaLabel;
</script>

<script lang="ts">
import { defineComponent } from "vue";

const MIN_VALUE = 0;
const MAX_VALUE = 100;

function clamp(val: number): number {
    return Math.round(Math.min(Math.max(val || 0, MIN_VALUE), MAX_VALUE));
}

export default defineComponent({
    name: "FProgressbar",
    computed: {
        progressValueNow(): number {
            return clamp(this.value);
        },

        isFinished(): boolean {
            return this.progressValueNow === MAX_VALUE;
        },

        isInProgress(): boolean {
            return this.progressValueNow > MIN_VALUE && this.progressValueNow < MAX_VALUE;
        },

        isPending(): boolean {
            return this.progressValueNow === MIN_VALUE;
        },

        cssWidth(): string {
            return `width: ${this.progressValueNow}%`;
        },

        progressBarClass(): string {
            return `${this.isInProgress ? "progress__meter--inprogress" : ""} ${
                this.isPending ? "progress__meter--pending" : ""
            } ${this.isFinished ? "progress__meter--finished" : ""}`;
        },

        progressText(): string {
            return `${this.valueText.replace("%VALUE%", this.progressValueNow.toString())}`;
        },
    },
});
</script>
