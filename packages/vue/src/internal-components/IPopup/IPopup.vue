<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref, useTemplateRef, watch } from "vue";
import { type StackHandle, debounce, handleTab, popFocus, pushFocus } from "@fkui/logic";
import { config } from "../../config";
import { type Point, getAbsolutePosition, getHTMLElementFromVueRef } from "../../utils";
import { MIN_DESKTOP_WIDTH, POPUP_SPACING } from "./constants";
import { getContainer } from "./get-container";
import { getFocusableElement } from "./get-focusable-element";
import { CandidateOrder, Placement, fitInsideArea, getElement, getScrollToPopup } from "./i-popup-utils";
import { isTeleportDisabled } from "./is-teleport-disabled";

const {
    isOpen,
    anchor: anchorProp = undefined,
    inline = "auto",
    anchorOverlap = "allow",
    container = undefined,
    viewport: viewportProp = document.documentElement,
    keyboardTrap,
    focus = false,
} = defineProps<{
    /**
     * Toggle open/closed popup.
     */
    isOpen: boolean;

    /**
     * DOM element or element id to position popup at.
     */
    anchor?: HTMLElement | string | null | undefined;

    /**
     * Type of inline behaviour.
     * - `"auto"` changes between overlay or inline depending on window size.
     * - `"always"` forces the popup to always be inline.
     * - `"never"` forces the popup to never be inline.
     */
    inline?: "always" | "never" | "auto";

    /**
     * Controls whether the popup may overlap its anchor.
     * - `"allow"` allows placements that overlap the anchor.
     * - `"never"` excludes placement candidates that overlap the anchor.
     */
    anchorOverlap?: "allow" | "never";

    /**
     * Which element to use as container.
     */
    container?: HTMLElement | null | undefined;

    /**
     * Which element to use as viewport.
     */
    viewport?: HTMLElement;

    /**
     * Prevents tabbing outside of component.
     */
    keyboardTrap?: boolean;

    /**
     * Automatically move focus when popup is opened.
     *
     * - When set to `true` it focuses on the first tabbable element.
     * - When omitted or set to `false` focus management is disabled.
     * - When set to a function it focuses on the returned element; `null` leaves focus unchanged.
     *
     * When an element is focused, the previous focus is restored when the popup closes.
     */
    focus?: (() => HTMLElement | null) | boolean;
}>();

const emit = defineEmits<{
    /**
     * Emitted when popup is visible and placement is fully calculated.
     */
    open: [];
    /**
     * Emitted when clicked outside of popup.
     *
     * Includes the reason for closing as event argument. One of:
     *
     * - `"click-outside"` - when clicking outside the popup with the mouse
     * - `"escape"` - when closing the popup with the escape key.
     */
    close: [reason: "click-outside" | "escape"];
}>();

defineOptions({
    inheritAttrs: false,
});

const teleportDisabled = ref(false);
const placement = ref(Placement.NotCalculated);
const focusHandle = ref<StackHandle | null>(null);
const anchorOffset = ref<Point | null>(null);
const popupRef = useTemplateRef("popup");
const wrapperRef = useTemplateRef("wrapper");

const onWindowResizeDebounced = debounce(onWindowResize, 100).bind(this);
const onScrollDebounced = debounce(onScroll, 100).bind(this);

const popupClasses = computed(() => {
    const popupState = isInline.value ? ["popup--inline"] : ["popup--overlay"];
    return ["popup", ...popupState];
});

const isInline = computed(() => {
    let isInline = teleportDisabled.value || placement.value === Placement.Fallback;

    /* eslint-disable unicorn/no-duplicate-if-branches -- technical debt */
    if (forceInline.value) {
        isInline = true;
    } else if (forceOverlay.value) {
        isInline = false;
    } else if (placement.value === Placement.NotCalculated && !isMobileSize()) {
        // Overlay is required to get accurate results from placement calculation.
        isInline = false;
    }
    /* eslint-enable unicorn/no-duplicate-if-branches */

    return isInline;
});

const forceInline = computed(() => {
    return inline === "always";
});

const forceOverlay = computed(() => {
    return inline === "never";
});

const teleportTarget = computed(() => {
    return config.teleportTarget;
});

watch(
    () => isOpen,
    (value) => {
        /* warning: floating promise */
        void toggleIsOpen(value);

        if (value) {
            teleportDisabled.value = isTeleportDisabled({
                window,
                placement: placement.value,
                forceInline: forceInline.value,
                forceOverlay: forceOverlay.value,
            });

            // wait one tick so we dont get the click
            // that launches the popup (await nextTick doesnt work here)
            // eslint-disable-next-line unicorn/prefer-queue-microtask -- technical debt: microtask closes the popup on same click
            setTimeout(() => {
                // verify that it's still open
                if (!isOpen) {
                    return;
                }

                document.addEventListener("click", onDocumentClickHandler);
                window.addEventListener("resize", onWindowResizeDebounced);
                window.addEventListener("scroll", onScrollEvent, { capture: true });
            }, 0);
        } else {
            document.removeEventListener("click", onDocumentClickHandler);
            window.removeEventListener("resize", onWindowResizeDebounced);
            window.removeEventListener("scroll", onScrollEvent, { capture: true });
        }
    },
    { immediate: true },
);

watch(
    () => anchorOverlap,
    () => {
        if (isOpen && placement.value !== Placement.NotCalculated) {
            void recalculatePlacement();
        }
    },
);

/* ON UNMOUNTED */

onUnmounted(() => {
    // Clean up if unmounted but still opened
    document.removeEventListener("click", onDocumentClickHandler);
    window.removeEventListener("resize", onWindowResizeDebounced);
    window.removeEventListener("scroll", onScrollEvent, { capture: true });
});

/* METHODS */

async function toggleIsOpen(isOpen: boolean): Promise<void> {
    /* popup is closing */
    if (!isOpen) {
        placement.value = Placement.NotCalculated;
        anchorOffset.value = null;

        /* restore focus */
        if (focusHandle.value) {
            popFocus(focusHandle.value);
            focusHandle.value = null;
        }

        return;
    }

    /* popup is opening */
    // Wait for popup to show up
    await nextTick();
    await calculatePlacement();
    applyFocus();
    emit("open");
}

async function calculatePlacement(options?: { horizontalOnly: boolean }): Promise<void> {
    const popup = getHTMLElementFromVueRef(popupRef.value);
    const wrapper = getHTMLElementFromVueRef(wrapperRef.value);
    const anchor = getElement(anchorProp);

    if (!anchor) {
        throw new Error("No anchor element found");
    }

    // Check candidates for overlay placement.
    const shouldCheckCandidates = forceOverlay.value || !(isMobileSize() || forceInline.value);
    if (shouldCheckCandidates) {
        const area = getContainer(popup, container);
        const viewport = viewportProp;
        const result = fitInsideArea({
            area,
            anchor,
            target: wrapper,
            viewport,
            spacing: POPUP_SPACING,
            candidateOrder: CandidateOrder.Default,
            allowAnchorOverlap: anchorOverlap === "allow",
        });

        placement.value = result.placement;
        const useOverlay = forceOverlay.value || result.placement !== Placement.Fallback;
        if (useOverlay) {
            wrapper.style.left = `${String(result.x)}px`;
            if (options?.horizontalOnly) {
                return;
            }

            wrapper.style.top = `${String(result.y)}px`;
            if (anchorOverlap === "never") {
                saveAnchorOffset(wrapper, anchor);
            }
            return;
        }
    }

    // Force disable teleport since it won't be updated due to fallback placement.
    teleportDisabled.value = true;
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
}

function applyFocus(): void {
    if (!focus) {
        return;
    }
    const wrapper = wrapperRef.value;
    if (!wrapper) {
        return;
    }
    const focusableElement = getFocusableElement(wrapper, focus);
    if (focusableElement) {
        focusHandle.value = pushFocus(focusableElement);
    }
}

function isMobileSize(): boolean {
    return window.innerWidth < MIN_DESKTOP_WIDTH;
}

function onDocumentClickHandler(): void {
    emit("close", "click-outside");
}

async function onScrollEvent(event: Event): Promise<void> {
    if (anchorOverlap === "never") {
        await onScroll(event);
    } else {
        onScrollDebounced(event);
    }
}

async function onWindowResize(): Promise<void> {
    await recalculatePlacement();
}

async function onScroll(event: Event): Promise<void> {
    if (!isOpen || isInline.value) {
        return;
    }
    const isPopupTarget = event.target instanceof HTMLElement && Boolean(event.target.closest(".popup"));
    if (isPopupTarget) {
        return;
    }
    if (anchorOverlap === "never") {
        followAnchor();
        return;
    }

    await recalculatePlacement({ horizontalOnly: true });
}

function saveAnchorOffset(wrapper: HTMLElement, anchor: HTMLElement): void {
    const wrapperPosition = getAbsolutePosition(wrapper);
    const anchorPosition = getAbsolutePosition(anchor);
    anchorOffset.value = {
        x: wrapperPosition.x - anchorPosition.x,
        y: wrapperPosition.y - anchorPosition.y,
    };
}

function followAnchor(): void {
    if (!anchorOffset.value) {
        return;
    }
    const wrapper = getHTMLElementFromVueRef(wrapperRef.value);
    const anchor = getElement(anchorProp);
    if (!anchor) {
        throw new Error("No anchor element found");
    }

    const anchorPosition = getAbsolutePosition(anchor);
    const offsetParent = wrapper.offsetParent?.getBoundingClientRect();
    const offsetLeft = offsetParent ? offsetParent.left + window.pageXOffset : 0;
    const offsetTop = offsetParent ? offsetParent.top + window.pageYOffset : 0;
    wrapper.style.left = `${String(anchorPosition.x + anchorOffset.value.x - offsetLeft)}px`;
    wrapper.style.top = `${String(anchorPosition.y + anchorOffset.value.y - offsetTop)}px`;
}

async function recalculatePlacement(options?: { horizontalOnly: boolean }): Promise<void> {
    // Abort if popup was closed during debounce.
    if (!isOpen) {
        return;
    }
    // Don't need to recalculate on resize if forced inline.
    if (forceInline.value) {
        return;
    }
    // Don't need to recalculate if popup is still supposed to be inline.
    if (isInline.value && isMobileSize()) {
        return;
    }

    // Reset placement/teleport to get overlay state for accurate calculation.
    if (isInline.value) {
        placement.value = Placement.NotCalculated;
        teleportDisabled.value = false;
        await nextTick();
    }

    await calculatePlacement(options);
    teleportDisabled.value = isTeleportDisabled({
        window,
        placement: placement.value,
        forceInline: forceInline.value,
        forceOverlay: forceOverlay.value,
    });
}

function onPopupClickHandler(event: Event): void {
    // prevent propagation so we don't catch this
    // event in onDocumentClickHandler and close ourself.
    event.stopPropagation();
}

function onKeyEsc(): void {
    emit("close", "escape");
}

function onKeyTab(event: KeyboardEvent): void {
    if (!keyboardTrap) {
        return;
    }

    const wrapper = getHTMLElementFromVueRef(wrapperRef.value);
    handleTab(event, wrapper);
}
</script>

<script lang="ts">
export default {};
</script>

<template>
    <teleport v-if="isOpen" :to="teleportTarget" :disabled="teleportDisabled">
        <div ref="popup" v-bind="$attrs" :class="popupClasses">
            <div
                ref="wrapper"
                role="none"
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
