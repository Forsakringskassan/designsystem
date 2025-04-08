<script>
import { defineComponent } from "vue";
import { FLoader } from "@fkui/vue";

const defaultTimer = 10;

export default defineComponent({
    name: "FLoaderExample",
    components: {
        FLoader,
    },
    data() {
        return {
            show: true,
            overlay: false,
            delay: true,
            customText: false,
            time: defaultTimer,
        };
    },
    methods: {
        toggleLoader() {
            if (this.overlay) {
                if (this.show) {
                    clearInterval(this.interval);
                } else {
                    this.interval = setInterval(this.countdown, 1000);
                }
            }
            this.show = !this.show;
        },
        toggleOverlay() {
            this.overlay = !this.overlay;
        },
        toggleDelay() {
            this.delay = this.delay ? false : true;
        },

        toggleCloseText() {
            this.customText = !this.customText;
        },
        countdown() {
            this.time = parseInt(this.time, 10) - 1;
            if (this.time === 0) {
                this.toggleLoader();
                this.time = defaultTimer;
            }
        },
    },
});
</script>

<template>
    <div>
        <div>
            <f-loader :show="show" :overlay="overlay" :delay="delay">
                <template v-if="customText"> Loading (App specific)... </template>
            </f-loader>
        </div>
        <!-- [html-validate-disable-next no-inline-style] -->
        <div style="position: relative; z-index: 1000000">
            <button
                v-test="'loader-toggle'"
                type="button"
                class="button button--discrete"
                @click="toggleLoader()"
            >
                Toggla loader
            </button>
            <button
                v-test="'loader-toggle-overlay'"
                type="button"
                class="button button--discrete"
                :disabled="Boolean(show)"
                @click="toggleOverlay()"
            >
                Toggla overlay
            </button>
            <button
                v-test="'loader-toggle-delay'"
                type="button"
                class="button button--discrete"
                @click="toggleDelay()"
            >
                Toggla delay
            </button>
            <button
                v-test="'loader-toggle-text'"
                type="button"
                class="button button--discrete"
                @click="toggleCloseText()"
            >
                Toggla text
            </button>
            <div v-if="delay">
                <label> Delay är påslagen </label>
            </div>
        </div>
        <div v-if="overlay">
            <label>
                Forcera avstängning efter antal sekunder:
                <input
                    id="loader-timer"
                    v-model="time"
                    v-test="'loader-timer'"
                    v-validation.maxLength="{ maxLength: { length: 10 } }"
                    type="text"
                    :disabled="Boolean(show)"
            /></label>
        </div>
    </div>
</template>
