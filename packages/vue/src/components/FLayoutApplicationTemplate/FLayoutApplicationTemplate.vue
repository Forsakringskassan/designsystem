<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { isSet } from "@fkui/logic";
import { TranslationMixin } from "../../plugins";

export default defineComponent({
    name: "FLayoutApplicationTemplate",
    mixins: [TranslationMixin],
    props: {
        /**
         * Unique accessible name for navigation landmark.
         */
        navLabel: {
            type: String,
            required: false,
            default: "",
        },
    },
    computed: {
        showHeader(): boolean {
            return this.hasSlot("header");
        },
        showTopNavigation(): boolean {
            return this.hasSlot("top-navigation");
        },
        showFooter(): boolean {
            return this.hasSlot("footer");
        },
        ariaLabel(): string {
            return this.navLabel || this.$t("fkui.layout-application-template.nav.label", "Navigeringsmeny");
        },
    },
    mounted() {
        document.body.classList.add("layout-application-template__body");
    },
    beforeUnmount() {
        document.body.classList.remove("layout-application-template__body");
    },
    methods: {
        hasSlot(name: string): boolean {
            return isSet(this.$slots[name]);
        },
    },
});
</script>

<template>
    <div class="layout-application-template">
        <header v-if="showHeader || showTopNavigation" ref="header" class="layout-application-template__header">
            <!--
@slot Slot for displaying the header.
        -->
            <slot v-if="showHeader" name="header"></slot>
            <nav v-if="showTopNavigation" :aria-label>
                <!--
@slot Slot for displaying top navigation.
            -->
                <slot name="top-navigation"></slot>
            </nav>
        </header>
        <main ref="primary-content" class="layout-application-template__main">
            <!--
@slot Slot for displaying the primary content.
            -->
            <slot name="default"></slot>
            <footer v-if="showFooter" class="layout-application-template__footer">
                <!--
@slot Slot for displaying the footer.
        -->
                <slot name="footer"></slot>
            </footer>
        </main>
    </div>
</template>
