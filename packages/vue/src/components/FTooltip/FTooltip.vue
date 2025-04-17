<script lang="ts">
import { computed, defineComponent, inject, ref, toRef, useTemplateRef, watchEffect, useSlots } from "vue";
import { TranslationService } from "@fkui/logic";
import { FExpand } from "../FExpand";
import { IFlex, IFlexItem } from "../../internal-components";
import { FIcon } from "../FIcon";
import { focus, hasSlot } from "../../utils";
import { tooltipAttachTo } from "./tooltip-attach-to";
import { useAnimation } from "./use-animation";
import { useHorizontalOffset } from "./use-horizontal-offset";

export default defineComponent({
    name: "FTooltip",
    components: { FExpand, FIcon, IFlex, IFlexItem },
    inheritAttrs: false,
    props: {
        /**
         * Element to attach tooltip toggle button.
         *
         * Only needed when using with arbitrary elements, e.g. when using with
         * `FLabel` you do not need to set this prop.
         */
        attachTo: {
            type: HTMLElement,
            required: false,
            default: null,
        },
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
         * - `h1`
         * - `h2`
         * - `h3`
         * - `h4`
         * - `h5`
         * - `h6`
         */
        headerTag: {
            type: String,
            default: undefined,
            required: false,
            validator(value: string | undefined): boolean {
                return [undefined, "h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
            },
        },
    },
    emits: ["update:modelValue", "toggle"],
    setup(props) {
        const provided = inject(tooltipAttachTo, null);
        const attachTo = toRef(props, "attachTo");
        const ready = ref(false);
        const iconTarget = computed(() => {
            if (provided?.value) {
                return provided.value;
            }
            if (attachTo.value) {
                return attachTo.value;
            }
            return null;
        });
        const wrapper = useTemplateRef<HTMLElement>("wrapper");
        const button = useTemplateRef<HTMLElement>("button");
        const { animate } = useAnimation({
            duration: 250,
            easing: "ease-in",
            element: wrapper,
        });
        const offset = useHorizontalOffset({
            element: button,
            parent: computed(() => iconTarget.value?.parentElement ?? null),
        });
        watchEffect(() => {
            iconTarget.value?.classList.add("tooltip__container");
        });
        watchEffect(() => {
            if (!wrapper.value) {
                return;
            }
            wrapper.value.style.setProperty("--f-tooltip-offset", `${offset.value}px`);
            ready.value = true;
        });
        return { animate, iconTarget, ready };
    },
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
                this.animate(value ? "expand" : "collapse");
            },
        },
    },
    created() {
        const slots = useSlots();
        if (slots.header && !this.headerTag) {
            throw new Error("Tooltip with header must define headerTag");
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
                focus(this.$refs.button);
            }

            this.animate(value ? "expand" : "collapse");
        },
    },
});
</script>

<template>
    <!-- [html-validate-disable-next element-case -- false positive, is proper case for Vue] -->
    <Teleport :disabled="iconTarget === null" :to="iconTarget">
        <button ref="button" class="tooltip__button" type="button" :aria-expanded="isOpen" @click="onClickToggle">
            <span class="icon-stack icon-stack--tooltip">
                <f-icon name="circle"></f-icon>
                <f-icon name="i"></f-icon>
                <span class="sr-only">{{ screenReaderText }}</span>
            </span>
        </button>
    </Teleport>

    <div ref="wrapper" class="tooltip" v-bind="$attrs">
        <div v-if="ready" class="tooltip__bubble" tabindex="-1">
            <component :is="headerTag" v-if="hasHeader" class="tooltip__header">
                <!-- @slot Tooltip header content -->
                <slot name="header"></slot>
            </component>

            <div class="tooltip__body">
                <!-- @slot Tooltip body content-->
                <slot name="body"></slot>
            </div>

            <div class="tooltip__footer">
                <button class="close-button" type="button" @click="onClickToggle">
                    <span>{{ closeButtonText }}</span>
                    <f-icon class="button__icon" name="close"></f-icon>
                </button>
            </div>
        </div>
    </div>
</template>
