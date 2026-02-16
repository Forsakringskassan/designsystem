<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref, useAttrs, useTemplateRef, watch } from "vue";
import { type StackHandle, debounce, handleTab, popFocus, pushFocus } from "@fkui/logic";
import { config } from "../../config";
import { getHTMLElementFromVueRef } from "../../utils";
import { CandidateOrder, Placement, fitInsideArea, getElement, getScrollToPopup } from "./IPopupUtils";
import { MIN_DESKTOP_WIDTH, POPUP_SPACING } from "./constants";
import { getContainer } from "./get-container";
import { getFocusableElement } from "./get-focusable-element";
import { isTeleportDisabled } from "./is-teleport-disabled";

const {
    isOpen,
    anchor = undefined,
    inline = "auto",
    container = undefined,
    viewport = document.documentElement,
    // eslint-disable-next-line vue/no-boolean-default -- technical debt
    keyboardTrap = true,
    focusElement = null,
    // eslint-disable-next-line vue/no-boolean-default -- technical debt
    setFocus = true,
} = defineProps<{
    /**
     * Toggle open/closed popup.
     */
    isOpen: boolean;
    /**
     * DOM element to position popup at.
     */
    anchor?: HTMLElement | null;
    /**
     * Type of inline behaviour.
     * - `"auto"` changes between overlay or inline depending on window size.
     * - `"always"` forces the popup to always be inline.
     * - `"never"` forces the popup to never be inline.
     */
    inline?: "always" | "never" | "auto";
    /**
     * Which element to use as container.
     */
    container?: HTMLElement | null;
    /**
     * Which element to use as viewport.
     */
    viewport?: HTMLElement;
    /**
     * Prevents tabbing outside of component.
     */
    keyboardTrap?: boolean;
    /**
     * Function that returns the element that will receive focus
     */
    focusElement?: (() => HTMLElement | null) | null;
    /**
     * Set focus on first tabbable element (or element in the `focusElement` prop if provided) when opened.
     */
    setFocus?: boolean;
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
    close: ["click-outside" | "escape"];
}>();

defineSlots<{
    default(bindings: { toggleIsOpen: (isOpenValue: boolean) => Promise<void>; placement: Placement }): void;
}>();

defineOptions({
    inheritAttrs: false,
});

const attrs = useAttrs();
const popup = useTemplateRef<HTMLElement | null>("popup");
const wrapper = useTemplateRef<HTMLElement | null>("wrapper");
const teleportDisabled = ref(false);
const placement = ref<Placement>(Placement.NotCalculated);
const focus = ref<StackHandle | null>(null);
const onWindowResizeDebounced = debounce(onWindowResize, 100);

const popupClasses = computed(() => {
    const popupState = isInline.value ? ["popup--inline"] : ["popup--overlay"];
    return ["popup", ...popupState];
});

const isInline = computed(() => {
    let inline = teleportDisabled.value || placement.value === Placement.Fallback;

    if (forceInline.value) {
        inline = true;
    } else if (forceOverlay.value) {
        inline = false;
    } else if (placement.value === Placement.NotCalculated && !isMobileSize()) {
        // Overlay is required to get accurate results from placement calculation.
        inline = false;
    }

    return inline;
});

const forceInline = computed(() => inline === "always");
const forceOverlay = computed(() => inline === "never");
const teleportTarget = computed(() => config.teleportTarget);

watch(
    () => isOpen,
    async (value: boolean) => {
        await toggleIsOpen(value);
        if (value) {
            teleportDisabled.value = isTeleportDisabled({
                window,
                placement: placement.value,
                forceInline: forceInline.value,
                forceOverlay: forceOverlay.value,
            });

            // wait one tick so we dont get the click
            // that launches the popup (await nextTick doesnt work here)
            setTimeout(() => {
                // verify that it's still open
                if (isOpen) {
                    document.addEventListener("click", onDocumentClickHandler);
                    window.addEventListener("resize", onWindowResizeDebounced);
                }
            }, 0);
        } else {
            document.removeEventListener("click", onDocumentClickHandler);
            window.removeEventListener("resize", onWindowResizeDebounced);
        }
    },
    { immediate: true },
);

onUnmounted(() => {
    // Clean up if unmounted but still opened
    document.removeEventListener("click", onDocumentClickHandler);
    window.removeEventListener("resize", onWindowResizeDebounced);
});

async function toggleIsOpen(isOpenValue: boolean): Promise<void> {
    /* popup is closing */
    if (!isOpenValue) {
        placement.value = Placement.NotCalculated;

        /* restore focus */
        if (focus.value) {
            popFocus(focus.value);
            focus.value = null;
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

async function calculatePlacement(): Promise<void> {
    const popupEl = getHTMLElementFromVueRef(popup.value);
    const wrapperEl = getHTMLElementFromVueRef(wrapper.value);
    const anchorEl = getElement(anchor);

    if (!anchorEl) {
        throw new Error("No anchor element found");
    }

    // Check candidates for overlay placement.
    const shouldCheckCandidates = forceOverlay.value || !(isMobileSize() || forceInline.value);
    if (shouldCheckCandidates) {
        const area = getContainer(popupEl, container);
        const result = fitInsideArea({
            area,
            anchor: anchorEl,
            target: wrapperEl,
            viewport,
            spacing: POPUP_SPACING,
            candidateOrder: CandidateOrder.Default,
        });

        placement.value = result.placement;
        const useOverlay = forceOverlay.value || result.placement !== Placement.Fallback;
        if (useOverlay) {
            wrapperEl.style.left = `${String(result.x)}px`;
            wrapperEl.style.top = `${String(result.y)}px`;
            return;
        }
    }

    // Force disable teleport since it won't be updated due to fallback placement.
    teleportDisabled.value = true;
    wrapperEl.style.removeProperty("left");
    wrapperEl.style.removeProperty("top");

    // Wait for virtual keyboard to be closed before calculating scroll.
    await new Promise((resolve) => setTimeout(resolve, 200));

    const scrollTarget = popupEl.closest(".scroll-target");
    const hasScrollTarget = scrollTarget !== null;
    const top = getScrollToPopup({
        popup: wrapperEl,
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
    if (!setFocus) {
        return;
    }
    if (!wrapper.value) {
        return;
    }
    const focusableElement = getFocusableElement(wrapper.value, focusElement);
    focus.value = pushFocus(focusableElement);
}

function isMobileSize(): boolean {
    return window.innerWidth < MIN_DESKTOP_WIDTH;
}

function onDocumentClickHandler(): void {
    emit("close", "click-outside");
}

async function onWindowResize(): Promise<void> {
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

    await calculatePlacement();
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
    if (keyboardTrap) {
        const wrapperEl = getHTMLElementFromVueRef(wrapper.value);
        handleTab(event, wrapperEl);
    }
}
</script>

<template>
    <teleport v-if="isOpen" :to="teleportTarget" :disabled="teleportDisabled">
        <div ref="popup" v-bind="attrs" :class="popupClasses">
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
