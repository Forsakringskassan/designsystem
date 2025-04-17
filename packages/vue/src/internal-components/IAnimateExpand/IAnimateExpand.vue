<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { AnimationCallback } from "./AnimationCallback";

const ANIMATION_DURATION = 500;
const NO_CSS_CLASSES = "";
const CLOSED_CSS_CLASS_OPACITY = "animate-expand animate-expand--opacity";
const CLOSED_CSS_CLASS = "animate-expand";
const ANIMATION_CSS_CLASSES = "animate-expand animate-expand--expanded";

export default defineComponent({
    name: "IAnimateExpand",
    props: {
        /**
         * Perform animation or not
         */
        animate: {
            type: Boolean,
            default: true,
        },
        /**
         * Use v-show instead of v-if when hiding content.
         */
        useVShow: {
            type: Boolean,
            default: false,
        },

        /**
         * Toggle expanded/collapsed state
         */
        expanded: {
            type: [String, Number, Boolean],
            default: true,
        },
        /* Toggle opacity in animation */
        opacity: {
            type: Boolean,
            default: true,
        },
        /**
         * Optional callback for performing actions before animation.
         * Callback will await Promise.
         */
        beforeAnimation: {
            type: Function as PropType<AnimationCallback>,
            required: false,
            default(): AnimationCallback {
                return () => {
                    /* do nothing */
                };
            },
        },
        /**
         * Optional callback for performing actions after animation.
         * Callback will await Promise.
         */
        afterAnimation: {
            type: Function as PropType<AnimationCallback>,
            required: false,
            default(): AnimationCallback {
                return () => {
                    /* do nothing */
                };
            },
        },
    },
    data() {
        return {
            internalExpanded: Boolean(this.expanded),
            height: 0 as number | string,
            isAnimating: false,
            cssClasses: "",
            /**
             * When the open animation is triggered it creates a timer for `ANIMATION_DURATION`.
             * If the collapse animation is triggered before this timer has started
             * it must be canceled or the previous opening will reset the state before collapse is finished thus corrupting the state of the element.
             * Vice verse when collapse animation is triggered it also creates timers which the open animation must cancel.
             *
             * ```
             * Actor            IAnimationExpand
             * |                      |
             * +----[ open ] -------> |
             * |                      +----+ Timer 1
             * |                      |    |
             * +----[ close ] ------> |    |
             * |                      +----)----+ Timer 2
             * |                      |    |    |
             * |            *KABOOM*  |<---+    |
             * |                      |         |
             * |                      |         |
             * |            *KABOOM*  |<--------+
             * |                      |
             * ```
             */
            timerList: [] as Array<ReturnType<typeof setTimeout>>,
        };
    },
    computed: {
        animationClasses(): string {
            if (!this.animate) {
                return "";
            }
            return this.cssClasses;
        },
        heightStyle(): string {
            return this.height === "" ? "" : `height: ${this.height}px`;
        },
        shouldVIf(): boolean {
            if (this.useVShow) {
                return true;
            } else {
                return this.internalExpanded;
            }
        },
        shouldVShow(): boolean {
            if (this.useVShow) {
                return this.internalExpanded;
            } else {
                return true;
            }
        },
    },
    watch: {
        expanded: {
            immediate: false,
            handler(): void {
                if (this.expanded && this.animate) {
                    this.openAnimation();
                } else if (this.expanded) {
                    this.openNoAnimation();
                } else if (this.animate) {
                    this.closeAnimation();
                } else {
                    this.closeNoAnimation();
                }
            },
        },
    },
    beforeMount(): void {
        // We don't want an initial animation (solved by immediate: false in watch),
        // but we need to setup css classes here for coming animations.
        if (this.expanded) {
            this.height = "";
        } else if (this.animate) {
            this.cssClasses = this.opacity ? CLOSED_CSS_CLASS_OPACITY : CLOSED_CSS_CLASS;
        }
    },
    methods: {
        getContentHeight(): number {
            const content = this.$refs.content as HTMLElement;
            return content ? content.getBoundingClientRect().height : 0;
        },
        async openNoAnimation(): Promise<void> {
            await this.beforeAnimation(true);
            this.internalExpanded = true;
            await this.$nextTick();
            this.cssClasses = NO_CSS_CLASSES;
            this.height = this.getContentHeight();
            await this.afterAnimation(true);
        },
        async closeNoAnimation(): Promise<void> {
            await this.beforeAnimation(false);
            this.internalExpanded = false;
            this.cssClasses = NO_CSS_CLASSES;
            this.height = "0";
            await this.$nextTick();
            await this.afterAnimation(false);
        },
        async openAnimation(): Promise<void> {
            await this.beforeAnimation(true);
            this.internalExpanded = true;
            await this.$nextTick();
            this.cssClasses = ANIMATION_CSS_CLASSES;
            this.height = this.getContentHeight();

            for (const timer of this.timerList) {
                clearTimeout(timer);
            }

            const t = setTimeout(async () => {
                this.timerList = [];
                this.cssClasses = NO_CSS_CLASSES;
                this.height = "";
                await this.afterAnimation(true);
            }, ANIMATION_DURATION);
            this.timerList = [t];
        },
        async closeAnimation(): Promise<void> {
            await this.beforeAnimation(false);

            this.height = this.getContentHeight();
            this.cssClasses = ANIMATION_CSS_CLASSES;

            for (const timer of this.timerList) {
                clearTimeout(timer);
            }

            const t1 = setTimeout(() => {
                this.timerList = this.timerList.filter((it) => it !== t1);
                this.cssClasses = this.opacity ? CLOSED_CSS_CLASS_OPACITY : CLOSED_CSS_CLASS;
                this.height = "0";
            }, 0);

            const t2 = setTimeout(async () => {
                this.timerList = this.timerList.filter((it) => it !== t2);
                this.internalExpanded = false;
                await this.afterAnimation(false);
            }, ANIMATION_DURATION);

            this.timerList = [t1, t2];
        },
    },
});
</script>

<template>
    <!-- [html-validate-disable-next no-inline-style] -->
    <div :class="animationClasses" :style="heightStyle">
        <div v-if="shouldVIf" v-show="shouldVShow" ref="content" data-test="animation-content">
            <!-- @slot Slot used for content shown when component is expanded -->
            <slot></slot>
        </div>
    </div>
</template>
