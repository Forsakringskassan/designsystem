<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { addFocusListener, findTabbableElements, removeFocusListener, restoreFocus, saveFocus } from "@fkui/logic";
import { TranslationMixin } from "../../plugins";
import { config } from "../../config";
import { focus } from "../../utils";

export default defineComponent({
    name: "FLoader",
    mixins: [TranslationMixin],
    inheritAttrs: false,
    props: {
        /* Aria-live must always be visible, hence v-if on component level is not possible, therefore we use show-prop */
        /**
         * Determine if the loader is visible or not
         */
        show: {
            type: Boolean,
            required: true,
            default: false,
        },
        /**
         * If loader should be displayed as a fullscreen overlay.
         */
        overlay: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Delay the loader icon and text by 1 second
         */
        delay: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Language used for determining fallback value for the loading text. Useful if loader is displayed before
         * text keys have been downloaded
         */
        language: {
            type: String,
            required: false,
            default: "sv",
        },
        /**
         * Set teleport target (when overlay is enabled).
         *
         * - When set to a string it is used as a selector.
         * - When set to a element it is used directly.
         * - Default uses {@link config#teleportTarget}.
         */
        teleport: {
            type: [String, HTMLElement] as PropType<string | HTMLElement | undefined>,
            required: false,
            default: undefined,
        },
    },
    data() {
        return {
            oldFocus: undefined as unknown as HTMLElement,
        };
    },
    computed: {
        defaultLoadingText(): string {
            return this.language === "en" ? "Please wait" : "Vänligen vänta";
        },
        classes(): Record<string, boolean> {
            return {
                "loader--overlay": this.overlay,
                "loader--delay": this.delay,
            };
        },
        teleportTarget() {
            if (this.teleport) {
                return this.teleport;
            } else {
                return config.teleportTarget;
            }
        },
        teleportDisabled() {
            return !this.overlay;
        },
    },
    watch: {
        show(show) {
            if (show) {
                this.openLoader();
            } else {
                this.closeLoader();
            }
        },
    },
    mounted() {
        if (this.show) {
            this.openLoader();
        }
    },
    methods: {
        async listener(): Promise<void> {
            await this.$nextTick();
            focus(this.$refs["loader-text"]);
        },
        async openLoader() {
            if (this.overlay) {
                saveFocus(document);
                this.listener();
                addFocusListener(findTabbableElements(document), this.listener);
            }
        },
        closeLoader() {
            if (this.overlay) {
                removeFocusListener(findTabbableElements(document), this.listener);
                restoreFocus();
            }
        },
    },
});
</script>

<template>
    <teleport :to="teleportTarget" :disabled="teleportDisabled">
        <div v-show="show" v-bind="$attrs" class="loader" :class="classes">
            <div class="loader__backdrop">
                <div class="loader__wrapper">
                    <div class="loader__spinner-1 loader__spinner">
                        <div class="loader__spinner-1-circle1 loader__circle loader__circle--1"></div>
                        <div class="loader__spinner-1-circle2 loader__circle loader__circle--2"></div>
                        <div class="loader__spinner-1-circle3 loader__circle loader__circle--3"></div>
                        <div class="loader__spinner-1-circle4 loader__circle loader__circle--4"></div>
                    </div>
                    <div class="loader__spinner-2 loader__spinner">
                        <div class="loader__spinner-2-circle1 loader__circle loader__circle--1"></div>
                        <div class="loader__spinner-2-circle2 loader__circle loader__circle--2"></div>
                        <div class="loader__spinner-2-circle3 loader__circle loader__circle--3"></div>
                        <div class="loader__spinner-2-circle4 loader__circle loader__circle--4"></div>
                    </div>
                    <div class="loader__spinner-3 loader__spinner">
                        <div class="loader__spinner-3-circle1 loader__circle loader__circle--1"></div>
                        <div class="loader__spinner-3-circle2 loader__circle loader__circle--2"></div>
                        <div class="loader__spinner-3-circle3 loader__circle loader__circle--3"></div>
                        <div class="loader__spinner-3-circle4 loader__circle loader__circle--4"></div>
                    </div>
                </div>
                <div ref="loader-text" class="loader__wait-text" :class="{ 'loader--delay': delay }" tabindex="-1">
                    <span role="alert">
                        <!-- @slot Slot for define a custom loading text -->
                        <slot>{{ $t("fkui.loader.wait.text", defaultLoadingText) }}</slot>
                    </span>
                </div>
            </div>
        </div>
    </teleport>
</template>
