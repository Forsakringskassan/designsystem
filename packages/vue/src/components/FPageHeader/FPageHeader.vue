<template>
    <div class="page-header__root">
        <nav v-if="skipLinkAnchor">
            <i-skip-link :href="skipLinkAnchor">
                <!-- @slot Slot for skip link text. -->
                <slot name="skip-link-text"></slot>
            </i-skip-link>
        </nav>
        <div ref="header" class="page-header">
            <div class="page-header__logo">
                <!-- @slot Slot for custom logo. -->
                <slot name="logo">
                    <router-link v-if="routerLinkTo" :to="routerLinkTo">
                        <span :class="logoClass" :aria-label="altLogoText" role="img" />
                    </router-link>
                    <span v-else :class="logoClass" :aria-label="altLogoText" role="img" />
                </slot>
            </div>

            <component :is="headerTag" class="page-header__app-name">
                <!--@slot Slot for application title.-->
                <slot></slot>
            </component>
            <div class="page-header__right">
                <div class="page-header__right-slot">
                    <!--@slot Slot for user/custom information display.-->
                    <slot name="right"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { type RouteLocationPathRaw, type RouteLocationNamedRaw } from "vue-router";
import { TranslationMixin } from "../../plugins/translation";
import { ISkipLink } from "../../internal-components/ISkipLink";
import { getAltLogoText } from "./get-alt-text";

export default defineComponent({
    name: "FPageHeader",
    components: { ISkipLink },
    mixins: [TranslationMixin],
    inheritAttrs: true,
    props: {
        /** Setting the logo sizes small, large or responsive. */
        logoSize: {
            type: String,
            default: "responsive",
            required: false,
            validator(value: string): boolean {
                return ["small", "large", "responsive"].includes(value);
            },
        },
        /**
         * Render skiplink.
         *
         * When set to a non-empty string thethe skiplink feature is enabled.
         * The string is the id of the element to move focus to.
         *
         * When set to `true` the deprecated `skipLinkHref` prop is used to
         * set the element id to move focus to.
         *
         * When set to `false` or empty string the skiplink feature is disabled.
         *
         * Using a boolean is deprecated. Leave unset or a non-empty string.
         */
        skipLink: {
            type: [String, Boolean] as PropType<string | boolean>,
            required: false,
            default: "",
        },
        /**
         * Target for skiplink.
         *
         * @deprecated Use `skipLink` prop with a non-empty string instead.
         */
        skipLinkHref: {
            type: String,
            required: false,
            default: "#applicationlayout-main-content",
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
        /**
         *  Target for router-link via path.
         *  (Behaviour from using both name and path in combination is undefined.)
         */
        routerLinkPath: {
            type: String,
            required: false,
            default: "",
        },
        /**
         *  Target for router-link via name.
         *  (Behaviour from using both name and path in combination is undefined.)
         */
        routerLinkName: {
            type: String,
            required: false,
            default: "",
        },
        /**
         *  Label to override the router-link label when router-link is present.
         */
        routerLinkLabel: {
            type: String,
            required: false,
            default: "",
        },
    },
    computed: {
        logoClass(): string {
            return `page-header__logo--${this.logoSize}`;
        },
        hasRouterLink(): boolean {
            return Boolean(this.routerLinkName || this.routerLinkPath);
        },
        routerLinkTo(): RouteLocationPathRaw | RouteLocationNamedRaw | null {
            const { routerLinkName, routerLinkPath } = this;
            if (routerLinkName) {
                return { name: routerLinkName };
            }
            if (routerLinkPath) {
                return { path: routerLinkPath };
            }
            return null;
        },
        skipLinkAnchor(): string | null {
            const { skipLink, skipLinkHref } = this;
            if (skipLink === false || skipLink === "") {
                return null;
            } else if (skipLink === true) {
                return skipLinkHref;
            } else {
                return `#${skipLink}`;
            }
        },
        altLogoText(): string {
            return getAltLogoText(this.hasRouterLink, this.routerLinkLabel, this.$t);
        },
    },
});
</script>
