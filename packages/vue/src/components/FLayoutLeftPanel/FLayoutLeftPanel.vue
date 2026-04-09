<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { focus } from "@fkui/logic";
import { getElementFromVueRef } from "../../utils";
import { FButton } from "../FButton";
import { useLayoutPanel } from "./f-layout-left-panel-mixin";

export default defineComponent({
    name: "FLayoutLeftPanel",
    components: {
        FButton,
    },
    props: {
        /**
         * The default width for the panel in pixels
         */
        initialWidth: {
            type: String,
            default: "320",
            validator(value: string): boolean {
                const parsed = Number.parseInt(value, 10);
                return !Number.isNaN(parsed);
            },
        },
    },
    setup(props) {
        const { initialWidth } = toRefs(props);
        return useLayoutPanel({
            initialWidth,
            minWidth: "150" /* px */,
            maxWidth: 0.5 /* ratio [1..0] */,
            grow: "right",
        });
    },
    data() {
        return {
            isOpen: true,
            offsetTop: 0,
        };
    },
    computed: {
        navigationStyle(): Record<string, string> {
            if (this.isOpen) {
                return { width: `${String(this.panelWidth)}px`, top: `${String(this.offsetTop)}px` };
            } else {
                return { top: `${String(this.offsetTop)}px` };
            }
        },
        primaryStyle(): Record<string, string> {
            if (this.isOpen) {
                return { "margin-left": `${String(this.panelWidth)}px` };
            } else {
                return { "margin-left": `3.5rem` };
            }
        },
        // This is to make word-wrap work in IE11
        contentStyle(): Record<string, string> {
            return { "max-width": `${String(this.panelWidth - 35)}px` };
        },
    },
    mounted(): void {
        const headers = document.querySelectorAll(".layout-application-template__header");
        const header = headers.item(0) as HTMLElement;
        /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- technical debt */
        if (header) {
            this.offsetTop = header.offsetHeight;
        }
    },
    methods: {
        toggleSideNavigation(): void {
            this.isOpen = !this.isOpen;
            window.setTimeout(() => {
                this.updatePrimaryGrid();

                const ref = this.isOpen ? "close-button" : "open-button";
                const element = getElementFromVueRef(this.$refs[ref]);
                focus(element);
            }, 0);
        },
    },
});
</script>

<template>
    <div class="layout-navigation">
        <!-- [html-validate-disable-next no-inline-style] -->
        <nav
            id="layout-navigation__navigation"
            class="layout-navigation__navigation"
            :style="navigationStyle"
            :aria-expanded="isOpen"
        >
            <div class="layout-navigation__navigation__inner">
                <template v-if="isOpen">
                    <!-- [html-validate-disable-next no-inline-style] -->
                    <div class="layout-navigation__navigation__inner__title" :style="contentStyle">
                        <!-- @slot Slot for heading -->
                        <slot name="heading"></slot>
                        <f-button
                            ref="close-button"
                            icon-right="chevrons-left"
                            size="small"
                            tertiary-style="black"
                            variant="tertiary"
                            @click="toggleSideNavigation"
                        >
                            <span class="sr-only">Stäng navigationspanelen</span>
                        </f-button>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <!-- [html-validate-disable-next no-inline-style] -->
                    <div
                        class="layout-navigation__navigation__inner__content scroll-target"
                        :class="gridClasses"
                        :style="contentStyle"
                    >
                        <!--
@slot Slot for displaying content in the navigation-panel
                        -->
                        <slot name="content"></slot>
                    </div>
                </template>
                <div v-if="!isOpen" class="layout-navigation__navigation__inner--minimized">
                    <f-button
                        ref="open-button"
                        icon-right="bars"
                        tertiary-style="black"
                        variant="tertiary"
                        @click="toggleSideNavigation"
                    >
                        <span class="sr-only">Öppna navigationspanelen</span>
                    </f-button>
                </div>
            </div>
            <div v-if="isOpen" class="layout-navigation__navigation__border" @mousedown="onBorderMouseDown">
                <div class="layout-navigation__navigation__border__dot"></div>
                <div class="layout-navigation__navigation__border__dot"></div>
                <div class="layout-navigation__navigation__border__dot"></div>
            </div>
        </nav>
        <!-- [html-validate-disable-next no-inline-style] -->
        <div
            id="layout-navigation__primary"
            class="layout-navigation__primary"
            :class="leftPrimaryClasses"
            :style="primaryStyle"
        >
            <!--
@slot Slot for displaying the primary content.
            -->
            <slot name="default"></slot>
        </div>
    </div>
</template>
