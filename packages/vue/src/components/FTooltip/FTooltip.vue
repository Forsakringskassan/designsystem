<template>
    <div class="tooltip">
        <div class="tooltip__container">
            <button
                class="tooltip__button"
                type="button"
                :aria-expanded="isOpen ? 'true' : 'false'"
                @click="onClickToggle"
            >
                <span class="icon-stack icon-stack--tooltip">
                    <f-icon name="circle"></f-icon>
                    <f-icon name="i"></f-icon>
                    <span class="sr-only">{{ screenReaderText }}</span>
                </span>
            </button>
            <f-expand>
                <div v-if="isOpen">
                    <div class="tooltip__content-wrapper" tabindex="-1" :aria-hidden="isOpen ? undefined : 'true'">
                        <span v-show="isOpen" class="tooltip__arrow"></span>
                        <div class="tooltip__content">
                            <component :is="headerTag" v-if="hasHeader" class="tooltip__header">
                                <!-- @slot Tooltip header content -->
                                <slot name="header"></slot>
                            </component>

                            <div class="tooltip__body">
                                <!-- @slot Tooltip body content-->
                                <slot name="body"></slot>
                            </div>
                        </div>
                        <i-flex float="right">
                            <i-flex-item shrink>
                                <button class="close-button" type="button" @click="onClickToggle">
                                    <span>{{ closeButtonText }}</span>
                                    <f-icon class="button__icon" name="close"></f-icon>
                                </button>
                            </i-flex-item>
                        </i-flex>
                    </div>
                </div>
            </f-expand>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { focus, TranslationService } from "@fkui/logic";
import { FExpand } from "../FExpand";
import { IFlex, IFlexItem } from "../../internal-components";
import { FIcon } from "../FIcon";
import { hasSlot } from "../../utils";

export default defineComponent({
    name: "FTooltip",
    components: { FExpand, FIcon, IFlex, IFlexItem },
    props: {
        /**
         * State (expanded or collapsed) of the tooltip. The value is `true` if the tooltip is expanded.
         *
         * @model
         */
        modelValue: {
            type: Boolean,
            required: false,
        },
        /**
         * Screen reader text for toggle button
         */
        screenReaderText: {
            type: String,
            required: true,
        },
        /**
         * Close button text
         */
        closeButtonText: {
            type: String,
            required: false,
            default: TranslationService.provider.translate("fkui.tooltip.close", "Stäng"),
        },
        /**
         * Element to render for the header element inside the tooltip.
         *
         * Must be set to one of:
         *
         * - `div` (default)
         * - `span`
         * - `h1`
         * - `h2`
         * - `h3`
         * - `h4`
         * - `h5`
         * - `h6`
         */
        headerTag: {
            default: "div",
            required: false,
            validator(value: string): boolean {
                return ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
            },
        },
    },
    emits: ["update:modelValue", "toggle"],
    data() {
        return {
            isOpen: false,
        };
    },
    computed: {
        hasHeader(): boolean {
            return hasSlot(this, "header");
        },
    },
    watch: {
        modelValue: {
            immediate: true,
            handler(value: boolean) {
                this.isOpen = value;
            },
        },
    },
    mounted() {
        window.addEventListener("resize", () => {
            if (this.isOpen) {
                this.positionArrow();
            }
        });

        if (this.isOpen) {
            this.positionArrow();
        }
    },
    methods: {
        /**
         * Gets called when the user interacts with the toggle button
         *
         * @internal
         */
        onClickToggle(): void {
            this.isOpen = !this.isOpen;

            const value = this.isOpen;
            const event = { isOpen: this.isOpen };

            /**
             * v-model event.
             *
             * @param {boolean} value - Model value
             */
            this.$emit("update:modelValue", value);

            /**
             * Emitted when the state of the tooltip (collapsed/expanded) changes.
             *
             * @param {{ isOpen: boolean }} event - New state of tooltip.
             */
            this.$emit("toggle", event);

            if (!this.isOpen) {
                const button = this.$el.querySelector(".tooltip__button");
                focus(button);
            }
            this.$nextTick(() => {
                this.positionArrow();
            });
        },
        positionArrow(): void {
            const button: HTMLElement | null = this.$el.querySelector(".tooltip__button");
            const arrow: HTMLElement | null = this.$el.querySelector(".tooltip__arrow");
            const content: HTMLElement | null = this.$el.querySelector(".tooltip__content-wrapper");
            const borderSize = 2;

            if (button && arrow && content) {
                const buttonOffsetLeft: number = button.offsetLeft - content.offsetLeft;
                const relativeOffset = buttonOffsetLeft - borderSize + button.getBoundingClientRect().width / 2;
                arrow.style.left = `${relativeOffset}px`;
            }
        },
    },
});
</script>
