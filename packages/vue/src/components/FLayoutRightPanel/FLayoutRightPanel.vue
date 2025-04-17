<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { focus } from "@fkui/logic";
import { getElementFromVueRef } from "../../utils";
import { FIcon } from "../FIcon";
import { useLayoutPanel } from "../FLayoutLeftPanel";
import { FLayoutRightPanelService } from "./services";

export default defineComponent({
    name: "FLayoutRightPanel",
    components: {
        FIcon,
    },
    props: {
        /**
         * The default width for the panel in pixels
         */
        initialWidth: {
            type: String,
            default: "320",
        },
        /**
         * The default maximun width for the panel in percentage where 1 is 100% and 0 is 0%
         */
        maxWidth: {
            type: Number,
            default: 0.5,
            validator(value: unknown): boolean {
                return typeof value === "number" && value > 0 && value <= 1;
            },
        },
        /**
         * The default minium width for the panel in pixels
         */
        minWidth: {
            type: String,
            default: "150",
        },
    },
    setup(props) {
        const { initialWidth, minWidth, maxWidth } = toRefs(props);
        return useLayoutPanel({
            initialWidth,
            minWidth,
            maxWidth,
            grow: "left",
        });
    },
    data() {
        return {
            isAbsolutePositioned: false,
            isOpen: false,
            offsetTop: 0,
        };
    },
    computed: {
        secondaryStyle(): Record<string, string> {
            if (this.isOpen) {
                return { width: `${this.panelWidth}px`, top: `${this.offsetTop}px` };
            }
            return { top: `${this.offsetTop}px` };
        },
        primaryStyle(): Record<string, string> {
            if (this.isOpen && !this.isAbsolutePositioned) {
                return { "margin-right": `${this.panelWidth}px` };
            }
            return {};
        },
        // This is to make word-wrap work in IE11
        contentStyle(): Record<string, string> {
            return { "max-width": `${this.panelWidth - 35}px` };
        },
    },
    mounted(): void {
        const headers = document.getElementsByClassName("layout-application-template__header");
        const header = headers.item(0) as HTMLElement;
        if (header) {
            this.offsetTop = header.offsetHeight;
        }
        FLayoutRightPanelService.on("open", this.onOpenSecondary);
        FLayoutRightPanelService.on("close", this.onCloseSecondary);
        window.addEventListener("resize", this.onResize);
        this.onResize();
    },
    unmounted(): void {
        FLayoutRightPanelService.off("open", this.onOpenSecondary);
        FLayoutRightPanelService.off("close", this.onCloseSecondary);
    },
    methods: {
        async onOpenSecondary(): Promise<void> {
            this.isOpen = true;
            await this.$nextTick();
            const element = getElementFromVueRef(this.$refs["title"]);
            const heading = element.querySelector("h1, h2, h3, h4, h5, h6");
            focus(heading, { force: true });
        },
        onCloseSecondary(): void {
            this.isOpen = false;
        },
        openSecondary(): void {
            FLayoutRightPanelService.open();
        },
        onClickCloseSecondary(): void {
            FLayoutRightPanelService.close();
        },
        onResize(): void {
            this.isAbsolutePositioned = window.innerWidth < 1280;
        },
    },
});
</script>

<template>
    <div class="layout-secondary">
        <!-- [html-validate-disable-next no-inline-style] -->
        <div
            id="layout-secondary__primary"
            class="layout-secondary__primary"
            :class="rightPrimaryClasses"
            :style="primaryStyle"
        >
            <!--
@slot Slot for displaying the primary content.
            -->
            <slot name="default"></slot>
        </div>
        <!-- [html-validate-disable-next no-inline-style] -->
        <aside v-if="isOpen" :style="secondaryStyle" class="layout-secondary__secondary">
            <div class="layout-secondary__secondary__border" @mousedown="onBorderMouseDown">
                <div class="layout-secondary__secondary__border__dot"></div>
                <div class="layout-secondary__secondary__border__dot"></div>
                <div class="layout-secondary__secondary__border__dot"></div>
            </div>
            <div class="layout-secondary__secondary__inner">
                <!-- [html-validate-disable-next no-inline-style] -->
                <div ref="title" class="layout-secondary__secondary__inner__title" :style="contentStyle">
                    <!-- @slot Slot for heading -->
                    <slot name="heading"></slot>
                </div>
                <div>
                    <hr aria-hidden="true" />
                </div>
                <!-- [html-validate-disable-next no-inline-style] -->
                <div
                    class="layout-secondary__secondary__inner__content scroll-target"
                    :class="gridClasses"
                    :style="contentStyle"
                >
                    <!--
@slot Slot for displaying content in the secondary-panel
                    -->
                    <slot name="content"></slot>
                    <button
                        class="button button--tertiary button--small button--tertiary--black layout-secondary__secondary__inner__close"
                        type="button"
                        @click="onClickCloseSecondary"
                    >
                        <span class="sr-only">Stäng sekundärpanelen</span>
                        <f-icon class="button__icon" name="close" />
                    </button>
                </div>
            </div>
        </aside>
    </div>
</template>
