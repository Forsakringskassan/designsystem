<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { debounce, handleTab, pushFocus, popFocus } from "@fkui/logic";
import { config } from "../../config";
import { getHTMLElementFromVueRef } from "../../utils";
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
    emits: [
        /**
         * Emitted when popup is visible and placement is fully calculated.
         */
        "open",
        /**
         * Emitted when clicked outside of popup.
         */
        "close",
    ],
    data(): IPopupData {
        return {
            teleportDisabled: false,
            placement: Placement.NotCalculated,
            focus: null,
        };
    },
    computed: {
        popupClasses(): string[] {
            const popupState = this.isInline ? ["popup--inline"] : ["popup--overlay"];
            return ["popup", ...popupState];
        },
        isInline(): boolean {
            let isInline = this.teleportDisabled || this.placement === Placement.Fallback;

            if (this.forceInline) {
                isInline = true;
            } else if (this.forceOverlay) {
                isInline = false;
            } else if (this.placement === Placement.NotCalculated && !this.isMobileSize()) {
                // Overlay is required to get accurate results from placement calculation.
                isInline = false;
            }

            return isInline;
        },
        forceInline(): boolean {
            return this.inline === "always";
        },
        forceOverlay(): boolean {
            return this.inline === "never";
        },
        teleportTarget() {
            return config.teleportTarget;
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
                            window.addEventListener("resize", this.onWindowResizeDebounced);
                        }
                    }, 0);
                } else {
                    document.removeEventListener("click", this.onDocumentClickHandler);
                    window.removeEventListener("resize", this.onWindowResizeDebounced);
                }
            },
        },
    },
    created() {
        this.onWindowResizeDebounced = debounce(this.onWindowResize, 100).bind(this);
    },
    unmounted() {
        // Clean up if unmounted but still opened
        document.removeEventListener("click", this.onDocumentClickHandler);
        window.removeEventListener("resize", this.onWindowResizeDebounced);
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
            await this.calculatePlacement();
            this.applyFocus();
            this.$emit("open");
        },
        async calculatePlacement(): Promise<void> {
            const popup = getHTMLElementFromVueRef(this.$refs.popup);
            const wrapper = getHTMLElementFromVueRef(this.$refs.wrapper);
            const anchor = getElement(this.anchor);

            if (!anchor) {
                throw new Error("No anchor element found");
            }

            // Check candidates for overlay placement.
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
                    return;
                }
            }

            // Force disable teleport since it won't be updated due to fallback placement.
            this.teleportDisabled = true;
            wrapper.style.removeProperty("left");
            wrapper.style.removeProperty("top");

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

            if (hasScrollTarget) {
                scrollTarget.scrollTo(scrollOptions);
            } else {
                window.scrollTo(scrollOptions);
            }
        },
        applyFocus(): void {
            if (!this.setFocus) {
                return;
            }
            const wrapper = this.$refs.wrapper;
            if (!wrapper) {
                return;
            }
            const focusableElement = getFocusableElement(wrapper, this.focusElement);
            this.focus = pushFocus(focusableElement);
        },
        isMobileSize(): boolean {
            return window.innerWidth < MIN_DESKTOP_WIDTH;
        },
        onDocumentClickHandler(): void {
            this.$emit("close");
        },
        onWindowResizeDebounced(): void {
            // Overwritten in created so that the debounced `onWindowResize`
            // method can be removed by removeEventListener.
        },
        async onWindowResize(): Promise<void> {
            // Abort if popup was closed during debounce.
            if (!this.isOpen) {
                return;
            }
            // Don't need to recalculate on resize if forced inline.
            if (this.forceInline) {
                return;
            }
            // Don't need to recalculate if popup is still supposed to be inline.
            if (this.isInline && this.isMobileSize()) {
                return;
            }

            // Reset placement/teleport to get overlay state for accurate calculation.
            if (this.isInline) {
                this.placement = Placement.NotCalculated;
                this.teleportDisabled = false;
                await this.$nextTick();
            }

            await this.calculatePlacement();
            const { placement, forceInline, forceOverlay } = this;
            this.teleportDisabled = isTeleportDisabled({ window, placement, forceInline, forceOverlay });
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
                const wrapper = getHTMLElementFromVueRef(this.$refs.wrapper);
                handleTab(event, wrapper);
            }
        },
    },
});
</script>

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
