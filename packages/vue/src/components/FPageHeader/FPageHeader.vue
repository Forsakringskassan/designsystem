<template>
    <div class="page-header__root">
        <nav v-if="skipLink">
            <i-skip-link :href="skipLinkHref">
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
import { defineComponent } from "vue";
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
         */
        skipLink: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Target for skiplink.
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
        altLogoText(): string {
            return getAltLogoText(this.hasRouterLink, this.routerLinkLabel, this.$t);
        },
    },
});
</script>
