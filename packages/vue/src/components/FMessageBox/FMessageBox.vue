<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { TranslationService } from "@fkui/logic";
import FIcon from "../FIcon/FIcon.vue";
import { IFlex, IFlexItem } from "../../internal-components/IFlex";

const iconClasses = {
    success: {
        symbol: "circle",
        sign: "success",
        screenReaderContextKey: "fkui.message-box.sr-context.success",
        screenReaderContextDefault: "Meddelande",
    },
    warning: {
        symbol: "circle",
        sign: "alert",
        screenReaderContextKey: "fkui.message-box.sr-context.warning",
        screenReaderContextDefault: "Varningsmeddelande",
    },
    error: {
        symbol: "triangle",
        sign: "alert",
        screenReaderContextKey: "fkui.message-box.sr-context.error",
        screenReaderContextDefault: "Felmeddelande",
    },
    info: {
        symbol: "circle",
        sign: "i",
        screenReaderContextKey: "fkui.message-box.sr-context.info",
        screenReaderContextDefault: "Informationsmeddelande",
    },
} as Record<string, Record<string, string>>;

export default defineComponent({
    name: "FMessageBox",
    components: {
        FIcon,
        IFlex,
        IFlexItem,
    },
    props: {
        /**
         * Type of message-box. 'success', 'error', 'warning' and 'info' is valid.
         * */
        type: {
            type: String,
            required: true,
            validator(value: string) {
                // The value must match one of these strings
                return ["success", "warning", "error", "info"].includes(value);
            },
        },
        /**
         * If message-box should be a banner.
         * If prop is not used message-box will have default styling.
         */
        banner: {
            type: Boolean,
            required: false,
        },
        /**
         * It is important to provide a context for a screenreader, similar to a modal that initially outputs it is a dialog.
         * Type-specific screenreader context is output by default in this component.
         * By setting this property to false no context will be output.
         * Note that by doing this, it is the applications responsiblity to provide a clear context.
         */
        provideScreenReaderContext: {
            type: Boolean,
            required: false,
            default: true,
        },
        /**
         * Select standard or short layout.
         *
         * - 'normal' - Use normal layout when need for heading and/or longer text/multiple sentences
         * - 'short' - Use short layout when only need for shorter text
         */
        layout: {
            type: String as PropType<"standard" | "short">,
            required: false,
            default: "standard",
            validator(value: string) {
                return ["standard", "short"].includes(value);
            },
        },
    },
    data() {
        return {
            headingClass: ["message-box__heading"],
        };
    },
    computed: {
        messageBoxType(): string {
            if (this.layout === "short") {
                return `message-box--${this.type}-short`;
            } else {
                return `message-box--${this.type}`;
            }
        },
        bannerType(): string {
            return this.banner ? `message-box--banner` : "";
        },
        classType(): string {
            return `icon__${this.type}`;
        },
        classIcon(): string {
            return iconClasses[this.type].symbol === "circle" && iconClasses[this.type].sign === "alert"
                ? `icon__exclamation`
                : "";
        },
        stackTypeClass(): string {
            return `icon-stack--${this.type}`;
        },
        symbol(): string {
            return iconClasses[this.type].symbol;
        },
        sign(): string {
            return iconClasses[this.type].sign;
        },
    },
    methods: {
        screenReaderContext() {
            return TranslationService.provider.translate(
                iconClasses[this.type].screenReaderContextKey,
                iconClasses[this.type].screenReaderContextDefault,
            );
        },
    },
});
</script>

<template>
    <div class="message-box" :class="[messageBoxType, bannerType]">
        <span v-if="provideScreenReaderContext" class="sr-only">{{ screenReaderContext() }}</span>

        <i-flex gap="2x">
            <i-flex-item v-if="layout === 'short'" class="message-box__icon" shrink align="center">
                <span class="icon-stack" :class="stackTypeClass">
                    <f-icon :class="classType" :name="symbol"></f-icon>
                    <f-icon :class="classIcon" :name="sign"></f-icon>
                </span>
            </i-flex-item>
            <i-flex-item class="message-box__content" grow align="center">
                <!--
                @slot Slot for displaying content. Slot styling is available through `v-slot="{ <propertyName> }"`, e.g. `v-slot="{ headingSlotClass }"`.
                @binding {string[]} headingSlotClass CSS class to use for the heading element. Only set for normal layout (avoid heading otherwise). Use with `:class="headingSlotClass"`.
                -->
                <slot v-bind="layout === 'short' ? {} : { headingSlotClass: headingClass }"></slot>
            </i-flex-item>
        </i-flex>
    </div>
</template>
