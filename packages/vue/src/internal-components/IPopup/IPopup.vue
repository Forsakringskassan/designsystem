<template>
    <teleport v-if="isOpen" :to="teleportTarget" :disabled="teleportDisabled">
        <div ref="popup" v-bind="$attrs" :class="popupClasses">
            <div
                ref="wrapper"
                role="presentation"
                class="popup__wrapper"
                @click="onPopupClickHandler"
                @keyup.esc.stop="onKeyEsc"
                @keydown.tab="onKeyTab"
            >
                <slot v-bind="{ toggleIsOpen, placement }"></slot>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { handleTab, pushFocus, popFocus } from "@fkui/logic";
import { config } from "../../config";
import { getElement, fitInsideArea, getScrollToPopup, Placement, CandidateOrder } from "./IPopupUtils";
import { getContainer } from "./get-container";
import { getFocusableElement } from "./get-focusable-element";
import { isTeleportDisabled } from "./is-teleport-disabled";
import { MIN_DESKTOP_WIDTH, POPUP_SPACING } from "./constants";
import { type IPopupData } from "./ipopup-data";

export default defineComponent({
    name: "IPopup",
    inheritAttrs: false,
    props: {
        /**
         * Toggle open/closed popup.
         */
        isOpen: {
            type: Boolean,
            required: true,
        },
        /**
         * DOM element to position popup at.
         */
        anchor: {
            type: HTMLElement as PropType<HTMLElement | null | undefined>,
            required: false,
            default: undefined,
        },
        /**
         * Type of inline behaviour.
         * - `"auto"` changes between overlay or inline depending on window size.
         * - `"always"` forces the popup to always be inline.
         * - `"never"` forces the popup to never be inline.
         */
        inline: {
            type: String as PropType<"always" | "never" | "auto">,
            required: false,
            validator(value: string) {
                // The value must match one of these strings
                return ["always", "never", "auto"].includes(value);
            },
            default: "auto",
        },
        /**
         * Force popup to always display inline.
         * @deprecated Use `inline="always"` instead.
         */
        alwaysInline: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Which element to use as container.
         */
        container: {
            type: HTMLElement as PropType<HTMLElement | null | undefined>,
            required: false,
            default: undefined,
        },
        /**
         * Which element to use as viewport.
         */
        viewport: {
            type: HTMLElement as PropType<HTMLElement>,
            required: false,
            default(): HTMLElement {
                return document.documentElement;
            },
        },
        /**
         * Prevents tabbing outside of component.
         */
        keyboardTrap: {
            type: Boolean,
            required: false,
            default: true,
        },
        /**
         * Function that returns the element that will receive focus
         */
        focusElement: {
            type: Function as PropType<() => HTMLElement | null>,
            required: false,
            default: null,
        },
        /**
         * Set focus on first tabbable element (or element in the `focusElement` prop if provided) when opened.
         */
        setFocus: {
            type: Boolean,
            required: false,
            default: true,
        },
    },
    emits: ["open", "close"],
    data(): IPopupData {
        return {
            teleportDisabled: false,
            placement: Placement.NotCalculated,
            focus: null,
            noCloseOnResize: false,
        };
    },
    computed: {
        popupClasses(): string[] {
            let isInline = this.teleportDisabled || this.placement === Placement.Fallback;

            if (this.forceInline) {
                isInline = true;
            } else if (this.forceOverlay) {
                isInline = false;
            }

            const popupState = isInline ? ["popup--inline"] : ["popup--overlay"];
            return ["popup", ...popupState];
        },
        forceInline(): boolean {
            return this.alwaysInline || this.inline === "always";
        },
        forceOverlay(): boolean {
            return this.inline === "never";
        },
        teleportTarget() {
            return config.popupTarget ?? config.teleportTarget;
        },
    },
    watch: {
        isOpen: {
            immediate: true,
            handler(value: boolean): void {
                this.toggleIsOpen(value);
                if (value) {
                    const { placement, forceInline, forceOverlay } = this;
                    this.teleportDisabled = isTeleportDisabled({ window, placement, forceInline, forceOverlay });

                    // wait one tick so we dont get the click
                    // that launches the popup (await nextTick doesnt work here)
                    setTimeout(() => {
                        // verify that it's still open
                        if (this.isOpen) {
                            document.addEventListener("click", this.onDocumentClickHandler);
                            window.addEventListener("resize", this.onWindowResizeHandler);
                        }
                    }, 0);
                } else {
                    document.removeEventListener("click", this.onDocumentClickHandler);
                    window.removeEventListener("resize", this.onWindowResizeHandler);
                }
            },
        },
    },
    unmounted() {
        // Clean up if unmounted but still opened
        document.removeEventListener("click", this.onDocumentClickHandler);
        window.removeEventListener("resize", this.onWindowResizeHandler);
    },
    methods: {
        async toggleIsOpen(isOpen: boolean): Promise<void> {
            /* popup is closing */
            if (!isOpen) {
                this.placement = Placement.NotCalculated;

                /* restore focus */
                if (this.focus) {
                    popFocus(this.focus);
                    this.focus = null;
                }
                return;
            }

            /* popup is opening */
            // Wait for popup to show up
            await this.$nextTick();
            const popup = this.$refs["popup"] as HTMLElement;
            const wrapper = this.$refs["wrapper"] as HTMLElement;
            const anchor = getElement(this.anchor);

            if (!anchor) {
                throw new Error("No anchor element found");
            }

            // Check candidates for overlay position.
            const shouldCheckCandidates = this.forceOverlay || !(this.isMobileSize() || this.forceInline);
            if (shouldCheckCandidates) {
                const area = getContainer(popup, this.container);
                const viewport = this.viewport;
                const result = fitInsideArea({
                    area,
                    anchor,
                    target: wrapper,
                    viewport,
                    spacing: POPUP_SPACING,
                    candidateOrder: CandidateOrder.Default,
                });

                this.placement = result.placement;
                const useOverlay = this.forceOverlay || result.placement !== Placement.Fallback;
                if (useOverlay) {
                    wrapper.style.left = `${result.x}px`;
                    wrapper.style.top = `${result.y}px`;
                    this.applyFocus();

                    /**
                     * Emitted when popup is visible and placement is fully calculated.
                     * @event open
                     */
                    this.$emit("open");
                    return;
                }
            }

            // Block resize close event while virtual keyboard
            // is closing so it doesn't instantly close popup.
            this.noCloseOnResize = true;

            // Force disable teleport since it won't be updated due to fallback placement.
            this.teleportDisabled = true;

            // Wait for virtual keyboard to be closed before calculating scroll.
            await new Promise((resolve) => setTimeout(resolve, 200));

            const scrollTarget = popup.closest(".scroll-target");
            const hasScrollTarget = scrollTarget !== null;
            const top = getScrollToPopup({
                popup: wrapper,
                windowInnerHeight: window.innerHeight,
                scrollTop: hasScrollTarget ? scrollTarget.scrollTop : window.scrollY,
                spacing: POPUP_SPACING,
            });
            const scrollOptions = { top, behavior: "smooth" } as const;

            wrapper.style.removeProperty("left");
            wrapper.style.removeProperty("top");

            if (hasScrollTarget) {
                scrollTarget.scrollTo(scrollOptions);
            } else {
                window.scrollTo(scrollOptions);
            }

            this.noCloseOnResize = false;
            this.applyFocus();
            this.$emit("open");
        },
        applyFocus(): void {
            if (this.setFocus) {
                const wrapper = this.$refs["wrapper"];
                const focusableElement = getFocusableElement(wrapper, this.focusElement);
                this.focus = pushFocus(focusableElement);
            }
        },
        isMobileSize(): boolean {
            return window.innerWidth < MIN_DESKTOP_WIDTH;
        },
        onDocumentClickHandler(): void {
            this.$emit("close");
        },
        onWindowResizeHandler(): void {
            if (this.noCloseOnResize) {
                return;
            }

            this.$emit("close");
        },
        onPopupClickHandler(event: Event): void {
            // prevent propagation so we don't catch this
            // event in onDocumentClickHandler and close ourself.
            event.stopPropagation();
        },
        onKeyEsc(): void {
            this.$emit("close");
        },
        onKeyTab(event: KeyboardEvent): void {
            if (this.keyboardTrap) {
                handleTab(event, this.$refs.wrapper as HTMLElement);
            }
        },
    },
});
</script>
