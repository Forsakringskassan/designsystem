<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { ISkipLink } from "../../internal-components/ISkipLink";

export default defineComponent({
    name: "FPageHeader",
    components: { ISkipLink },
    inheritAttrs: true,
    props: {
        /**
         * Render skiplink.
         *
         * When set to a non-empty string the skiplink feature is enabled.
         * The string is the id of the element to move focus to.
         *
         * When set to empty string (default) the skiplink feature is disabled.
         */
        skipLink: {
            type: String as PropType<string>,
            required: false,
            default: "",
        },
        /**
         * HTML element type for header.
         */
        headerTag: {
            default: "span",
            required: false,
            validator(value: string): boolean {
                return ["span", "h1"].includes(value);
            },
        },
    },
    computed: {
        skipLinkAnchor(): string | null {
            const { skipLink } = this;
            if (skipLink === "") {
                return null;
            } else {
                return `#${skipLink}`;
            }
        },
        hasLogo(): boolean {
            return Boolean(this.$slots.logo);
        },
    },
});
</script>

<template>
    <div class="page-header__root">
        <nav v-if="skipLinkAnchor">
            <i-skip-link :href="skipLinkAnchor">
                <!-- @slot Slot for skip link text. -->
                <slot name="skip-link-text"></slot>
            </i-skip-link>
        </nav>
        <div ref="header" class="page-header">
            <div v-if="hasLogo" class="page-header__logo">
                <!-- @slot Slot for custom logo. -->
                <slot name="logo"></slot>
            </div>

            <component :is="headerTag" class="page-header__app-name">
                <!-- @slot Slot for application title. -->
                <slot></slot>
            </component>

            <div class="page-header__right">
                <div class="page-header__right-slot">
                    <!-- @slot Slot for user/custom information display. -->
                    <slot name="right"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
